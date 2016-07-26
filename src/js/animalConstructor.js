(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});

    /**
     * Creating an Animal constructor function that takes in a name.
     * @param {String}      name        name of animal
     * @return {Object}     ns.Animal   Animal object
    */
    ns.Animal = function Animal(name){
        if (!name) {
            throw new Error('Animals must have a name');
        }
        this.name = name;
        this.dob = new Date();
        this.isDead = false;
    };

    /**
     * Converts the date the animal was born and the current date to give you
     * the age of the animal in years.
     * @return      {Number}    the age of the animal in years
     */
    ns.Animal.prototype.getAge = function getAge(){
        var birthYear = this.dob.getFullYear();
        var currentYear = (new Date()).getFullYear();
        return currentYear - birthYear;
    };

    /**
     * When called gives a sentence that says the name of the animal
     * @return      {String}    Sentence with the name of the animal
     */
    ns.Animal.prototype.toString = function toString() {
        return 'I am an animal named, ' + this.name + '!';
    };

    /**
     * Makes the animal die.
     * @return      Object      Animal      sets the isDead property to true.
     */
    ns.Animal.prototype.expire = function expire() {
        this.isDead = true;
    };




})(window.zoo);
