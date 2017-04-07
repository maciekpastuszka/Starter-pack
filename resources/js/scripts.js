function Person(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    };
}

var person1 = new Person("Maciek");


function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person, // person1.constructor === Person
    sayName: function () {
        console.log(this.name);
    }
};

var person1 = new Person("Maciek");



var aya = aya || {};
aya.framework = function () {
    // private property
    var version = '0.0.2';
    // private method
    var getVersion = function () {
        return version;
    };

    // all returned is a public
    return {
        // initialization
        init: function () {
            console.log('init successful...');
        },
        printModuleVersion: function () {
            console.log('Version: ' + getVersion());
        }
    };
}();

aya.framework.init();
aya.framework.printModuleVersion();


var Module = (function() {
    function Module(name) {
        this.name = name;
        console.log(this.name);
    }


    Module.prototype.foo = function () {
       console.log("Hello, " + this.name);
    };

    return Module;
}());

var module = new Module("Maciek");
module.foo();