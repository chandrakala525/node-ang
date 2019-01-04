#!/usr/bin/env bash
# ======================================================================
# Main responsibilities:
# * uploads build artifacts to S3 bucket
# ======================================================================
# Fail on errors
set -e

MY_BUCKET=""
<<<<<<< HEAD
mv dist script-test1.1/
=======
mv translate lang_18a/
>>>>>>> 8691608c9ba6b40e0af0be81ac5ff5ab67e9c7a6
if [ "$NODE_ENV" = "dev" ]
then
    MY_BUCKET="non-prod-digital-transformation-dev"
elif [ "$NODE_ENV" = "test" ]
then
    MY_BUCKET="dmz21-digital-transformation-test"
elif [ "$NODE_ENV" = "staging" ]
then
   MY_BUCKET="dmz21-digital-transformation-stage"
elif [ "$NODE_ENV" = "prod" ]
then
    MY_BUCKET="dmz21-digital-transformation-prod"
else
    echo "You need to specify the environment so that I can deploy to the specific environment.."
fi
echo $MY_BUCKET
<<<<<<< HEAD
node ./ci/directory-to-s3.js script-test1.1/ -b $MY_BUCKET
rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi
mv script-test1.1 dist
=======
node ./ci/directory-to-s3.js lang_18a/ -b $MY_BUCKET
#cd lang_18a && ls -l
# ls -l $MY_BUCKET && cd translate && ls -l && cd de_DE && ls -l

rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi
mv lang_18a translate
>>>>>>> 8691608c9ba6b40e0af0be81ac5ff5ab67e9c7a6
