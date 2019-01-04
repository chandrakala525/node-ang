module.exports = function(firstname, lastname){
    this.first = firstname;
    this.last = lastname;
    this.fullName = function(){
        return this.first + ' ' + this.last;
    }
}