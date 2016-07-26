(function(ns){
    'use strict';
    window.zoo = ns = (ns || {});


    ns.Bird = function Bird(name) {
        window.zoo.Animal.call(this, name);
    };
    ns.Bird.prototype = Object.create(window.zoo.Animal.prototype);
    ns.Bird.prototype.constructor = ns.Bird;

    /**
     * Calcualtes a random number of eggs a bird can lay from 1 to 10
     * and gives an array of eggs that are new Birds.
     * @return {Array}  each index in the array is a Bird object
     */
    ns.Bird.prototype.layEggs = function layEggs(){
        var nest = [];
        var eggs = Math.ceil(Math.random()*10);
        var i;
        for(i = 1; i <= eggs; i++) {
            nest.push(new ns.Bird());
        }
        return nest;
    };

    /**
     * Gives the distance a bird flies given a duration and converts it into
     * hours given the average speed is 60 mph for a bird.
     * @param  {Number}     duration     Must be in minutes
     * @return {Number}                  The total distance in miles
     */
    ns.Bird.prototype.flight = function flight(duration){
        var hours = duration/60;
        var speed = 60;
        var miles = speed * hours;
        return miles;
    };


})(window.zoo);
