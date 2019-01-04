#!/bin/sh -e

# ======================================================================
# Main responsibilities:
# * schedules redeployment process
# * polls status endpoint for deployment status
# ======================================================================
# Arguments:
# -p|--deployer-port - port on which deployer process listens
# ======================================================================
# Returns:
# * 0 - script completed successfully, deployment is successful too
# * 1 - failure during scheduling deployment or deployment itself
# * 2 - response from server's endpoint hasn't got assumed structure
# ======================================================================

# Defaults
DEPLOYER_PORT=3016

# ========================================
# == command line arguments processing ===
# ========================================
while [[ $# -gt 0 ]]; do
    key="$1"

    case ${key} in
        -p|--deployer-port)
        DEPLOYER_PORT="$2"
        shift # past argument
        ;;
        *)
              # unknown option
        ;;
    esac
    shift # past argument or value
done
# =========================================


TOKEN="jLn81y8xjpQ6yO706Hdxc002z8Us8nGK"
#TARGET_SERVER Port for CS360 Deployment
TARGET_SERVER="http://10.40.42.66"
RESTART_ENDPOINT="${TARGET_SERVER}:${DEPLOYER_PORT}/restart/${TOKEN}"
STATUS_ENDPOINT="${TARGET_SERVER}:${DEPLOYER_PORT}/status"
POLLING_INTERVAL=30


# ========================================
# ==      invoke redeploy phase        ===
# ========================================
echo "> Trying to call REST /restart endpoint (${RESTART_ENDPOINT})"
RESPONSE=`curl -s -X GET ${RESTART_ENDPOINT}`
SUCCESS=$(echo ${RESPONSE} | grep -Po '"success":\s*"\K[^"]*|true|false' || exit 0)

if [ -n "$SUCCESS" ]; then
    echo "> Server response: $RESPONSE"

    if [ ${SUCCESS} = true ]; then
        echo "> Deployment scheduled successfully for CS360."
    else
        echo "> Failed to schedule redeployment fro CS360."
        exit 1
    fi
else
    echo "> Could not parse response from redeploy endpoint! Please, check it manually!"
    echo "> Raw response: ${RESPONSE}"
    exit 2
fi


# ========================================
# ==          polling phase            ===
# ========================================
until false; do
    RESPONSE=$(curl --silent ${STATUS_ENDPOINT})
    STATUS=$(echo ${RESPONSE} | grep -Po '"status":\s*"\K[^"]*|true|false' || exit 0)

    if [ -n "$STATUS" ]; then
        echo "> Status: ${STATUS}"

        if [ ${STATUS} = "failed" ]; then
            echo "> Deployment failure for CS360! Please, check it manually!"
            exit 1
        elif [ ${STATUS} = "idle" ]; then
            echo "> Deployment successful!"
            exit 0
        fi
    else
        echo "> Could not read deployment status for CS360! Please, check it manually!"
        echo "> Raw response: ${RESPONSE}"
        exit 2
    fi

    sleep ${POLLING_INTERVAL}
done
