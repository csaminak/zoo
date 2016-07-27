(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});

    /**
     * A constructor function that allows any Bird in the current context and
     * and replace it in the Animal constructor.
     * @param   {String}   name    The name of the Bird
     * @return  {Object}   Bird    Has same properties as animal constructor
     */
    ns.Bird = function Bird(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(window.zoo.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    /**
     * Calculates a random number of eggs a bird can lay from 1 to 10
     * and gives an array of eggs that are new Birds.
     * @return {Array}  each index in the array is a Bird object
     */
    ns.Bird.prototype.layEggs = function layEggs(){
        var nest = [];
        var eggs = Math.ceil(Math.random()*10);
        var i;
        for(i = 1; i <= eggs; i++) {
            nest.push(new ns.Bird('egg ' + i));
        }
        return nest;
    };

    /**
     * Gives the distance a bird flies given a duration and converts it into
     * hours given the average speed is 60 mph for a bird.
     * @param  {Number}     duration     Must be in minutes
     * @return {Number}     miles          The total distance in miles
     */
    ns.Bird.prototype.flight = function flight(duration){
        if(!duration) {
            throw new Error('must input the number of minutes bird was flying');
        }
        if(typeof(duration) !== 'number') {
            throw new TypeError('Must input a number');
        }
        var hours = duration/60;
        var speed = 60;
        var miles = speed * hours;
        return miles;
    };


})(window.zoo);
