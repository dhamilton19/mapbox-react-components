import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';


function assert(value) {
    if(!(this instanceof assert)) {
        return new assert(value);
    }
    this.value = value;
}

assert.prototype.isNotEmpty = function(message){
    if(!isArray(this.value) || isEmpty(this.value)){
        throw new Error(message);
    }
};

export default assert;