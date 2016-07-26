(function(){
    'use strict';

    var assert = window.chai.assert;

    suite('tests for Dog constructors', function() {

        test('Dog constructors inherits name trait from Animal', function() {
            var poodle = new window.zoo.Dog('Chelsea');
            assert.instanceOf(poodle, window.zoo.Dog, 'poodle is a Dog object');
            assert.strictEqual(poodle.name, 'Chelsea', 'the poodle has a name');
        });

        test('dogs can give birth because they are mammals', function() {
            var beagle = new window.zoo.Dog('Momma');
            assert.isFunction(beagle.birth, 'beagle has a birth function');
            assert.isObject(beagle.birth('Puppy'), 'beagle returns an object');
        });



    });


})();
