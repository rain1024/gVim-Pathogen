/*
JavaScript does not support class-based inheritance therefore the abstract
classes as depicted in the diagram are not used in the JavaScript sample.
Abstract classes and interfaces enforce consistent interfaces in derived
classes. In JavaScript we must ensure this consistency ourselves by making sure
that each 'Concrete' object has the same interface definition (i.e. properties
and methods) as the others

In the example we have two Concrete Factories: EmployeeFactory and
VendorFactory. The first one creates Employee instances, the second one Vendor
instances. Both products are person types (with the same interface) which allows
the client to treat them the same. An array with two employees and two vendors
is created. Each person is then asked to say what and who they are.

The log function is a helper which collects and displays results.
*/


function Employee(name) {
    this.name = name;
    this.say = function () {
        log.add("I am employee " + name);
    };
}

function EmployeeFactory() {
    this.create = function(name) {
        return new Employee(name);
    };
}

function Vendor(name) {
    this.name = name;
    this.say = function () {
        log.add("I am vendor " + name);
    };
}

function VendorFactory() {
    this.create = function(name) {
        return new Vendor(name);
    };
}

// log helper
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();


function run() {

    var persons = [];

    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));

    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }

    log.show();
}
/* Output
I am employee Joan DiSilva
I am employee Tim O'Neill
I am vendor Gerald Watson
I am vendor Nicole McNight
*/
