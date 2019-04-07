import { types } from "util";

// OBJECT ORIENTED PROGRAMMING----------

//  4 PILLARS OF Object Oriented Programming:
    // Encapsulation:
        // Grouping related variables and functions that operate on them into objects.
    // Ex. 
    // Procedural Implementation - Variable on one side, Functions on another; Making them hard to couple
        let baseSalary  = 30_000;
        let overtime  = 10;
        let rate  = 20;

        function getWage(baseSalary, overtime, rate) {
        return baseSalary + (overtime * rate);
        }

    // // Object Oriented Implementation
        let employee = {
            baseSalary: 30_000,
            overtime: 10,
            rate: 20,
            getWage: function() {
                return this.baseSalary + (this.overtime * this.rate);
            }
        };
        employee.getWage();

//      "The Best Functions Are Those with No Parameters"
                                        // - Uncle Bob

    // Abstraction
        // Grouping complex logic in within an Object to make interation easy. The interface becomes simpler, it helps us reduce the impact of change to our methods or params.

    // Inheritance
        // A mecahnism that allows you to eliminate redundant code.

    // Polymorphism (Many Forms)
        // A technique that allows us to get rid of long if/else pr switch/case statements.
       
// OBJECTS ----------

    // Creating Objects:
// ES5 => var -- Stop using bc of scoping issues. 
// ES6 => let/const -- Best Practice; CONST defines a constant so it doesn't change; use LET to reassign a variable.
// {} => Object Literal Syntax => Holds our objects' collection(s) Key-Value pairs
    // Ex.
        const circle = {
            radius: 1,
            location: {
                x: 1,
                y: 1
            },
            draw: function() {             
                console.log('draw');         
            }                               
        }; 

        circle.draw();

    // Factories & Constructors:
// METHOD: A function within an object.
// If an object has one or more Method, we say that object has behavior.
// We use FACTORY & CONSTRUCTOR functions when object literal syntax has behavior.
// function createCircle(radius) {
        return {
            radius,       // <<---|   // radius: radius, => ES5 key:value pairing
            location: {         // ---   // radius, => ES6 says that when key:value pairs are the same, 
                x: 1,              // |---// we can remove the noise by removing the value.
                y: 1
            }                              
        }; 
// }
        // FACTORY FUNCTION
        function createCircle(radius) {
            return {
                radius,
                draw: function() {
                    console.log('draw');
                }
            }
        }

        const circle = createCircle(1);
        circle.draw();

        CONSTRUCTOR FUNCTION
        function Circle(radius) {
            this.radius = radius;       // This => a reference to the object used in this code
            this.draw = function() {
                console.log('draw');
            }
        }
        const another = new Circle(1);  // 1. New => creates an empty object {}, 
                                        // 2. then it sets "this" to point to the object
                                        // * By Default, "this" points to the global object
                                        // * Global Object in Browser => Window
                                        // * Global Object a Node Env => Global
                                        // 3. Returns  (automatically w/ "New" operator) the object from the function
        // Constructor Properties
        // new String(); String Literals => '', "", ``;
        // new Boolean(); Boolean Literals => true, false;
        // new Number(); Number Literals => 1, 2, 3, etc.;

        // Functions & Objects
        // VSCode: purple icon => methods, blue icons => arguments
        // Every object in JS has a constructor property that references the function used to create the object

    // VALUES AND REFERENCE TYPES ---------

        // JS Value Types [Primitives]:        JS Reference Types:
        // Number                              Objects
        // String                              Functions(also Objects)
        // Boolean                             Arrays
        // Symbol(ES6)
        // undefined
        // null
        // Ex.
        let x = 10;
        let y = x;
                    // x & y are independant of each other
        x = 20;

        let x = { value: 10 };
        let y = x;
                    // x & y ae independant of each other 
        x.value = 20;
                    // Objects aren't stored in variables, it's stored at an address in memory & the address of that memory is stored in the variable
                    // Both x & y are pointing to the same place in memory
                    // Primitives are copied by Value; Objects are copied by Reference
        // Ex.
        let number = 10;
        function increase(number) {
            number++;
        }
       
        increase(number);
        console.log(number);    //Gives us 10 instead of 11(increase) bc we lose iterator scrope within function
         // Ex.
        let obj = { varlue: 10 };

        function increase(obj) {
            obj.value++;
        }

        increase(obj);          // We call increase and pass the object to the function by its reference 
        console.log(obj);       // so the local parameter[obj] will point to the same object(let obj)

    // ADDING/REMOVING PROPERTIES ---------
        
        function Circle(radius) {       // Objects are Dynamic => you can always add/remove/edit properties
            this.radius = radius;
            this.draw = function() {
                console.log('draw');
            }
        }

        const circle = new Circle(10);

        circle.location = { x: 1 };     // Dot Notation (simpler)

        const propertyName = 'location';    // At the time or writing, we don't know this 'location' property name
        circle[propertyName] = { x: 1};     // To find the name of this property
        // circle['location'] = { x: 1 };   // Bracket Notation (uses strings to reference properties; useful when dynamically accessing properties)
                                            // Also for use with special character names ex. 'center-location
                                            // const propertyName = 'location';    
                                            // circle.center-location      // Doesn't Work
                                            // circle[propertyName] = { x: 1};
        // We can DELETE properties from objects
        // Why? USER objects [from DBs] have properties we don't want to pass to CLIENTS ie. passwords, CC info, etc
        // How? Delete Operator => Dynamically delete one or more properties before passing along the object
        delete circle.location;     //OR
        delete cicle['location'];

    // ENUMERATING PROPERTIES -----------

        // To Iterate (Enumerate) over the Properties in an Object(s) we use  a "for-in loop"
        // Ex.
        function Circles(radius) {
            this.radius = radius;
            this.draw = function() {
                console.log('draw');
            }
        }

        const circle = new Circle(10);

        for (let key in circle) {       // To iterate over Properties
                console.log(key);       // Returns 'radius' 'draw' --- Returns both Properties & Methods
        }
        // Ex.
        for (let key in circle) {
                console.log(key, circle[key]);   // We can use Bracket Notation to access a Member[Property value]
        }                                        // Returns 'radius 10' 'draw f () {console.log('draw);}' 
        // Ex.
        for (let key in circle) {
            if (typeof circle[key] !== 'function')   // 'typeof' => Used to find what type of Property it is
                console.log(key, circle[key]);       // Returns 'radius 10' --- Properties but not Methods => 'typeof circle[key]'
        }
        // Ex.
        for (let key in circle) {
            if (typeof circle[key] !== 'function')
                console.log(key, circle[key]);       
        }

        const keys = Object.keys(circle);       // Returns all the keys in the circle as an Array
            console.log(keys);                  // Returns an array with 2 Members => '(2) ["radius", "draw"]'
                                                // With this approach, we cannot separate Properties from Methods
        // Ex.
        if ('radius' in circle)                     // Use the 'in' operator to find if an Object has a given Property 
            console.log('Circle has a radius.');    // Returns 'Circle has a radius.'

    // ABSTRACTION -------- HIDE THE DETAILS (COMPLEXITY); SHOW THE ESSENTIALS

        function Circle(radius) {
            this.radius = radius;                       // Essential
            this.defaultLocation = { x: 0, y: 0 };      // Complexity (implementation details)
            this.computeOptimumLocation = function() {  // Complexity (implementation details)
                //
            };
        }

        this.draw = function() {                        // Essential
            this.computeOptimumLocation();

            console.log('draw');
        };

        const circle = new Circle(10);

    // PRIVATE PROPERTIES & METHODS
        
        


    // Primitives & Reference Types:
    // Working with Properties:
    // Private Properties:
    // Getters/Setters:
       
    