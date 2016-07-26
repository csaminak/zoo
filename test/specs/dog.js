(function(){
    'use strict';

    var assert = window.chai.assert;

    suite('tests for Dog constructors', function() {

        test('Dog constructors inherits name trait from Animal', function() {
            var poodle = new window.zoo.Dog('Chelsea');
            assert.instanceOf(poodle, window.zoo.Dog, 'poodle is a Dog object');
            assert.instanceOf(poodle, window.zoo.Animal, 'poodle is an Animal object');
            assert.strictEqual(poodle.name, 'Chelsea', 'the poodle has a name');
        });

        test('dogs can give birth because they are mammals', function() {
            var beagle = new window.zoo.Dog('Momma');
            assert.isFunction(beagle.birth, 'beagle has a birth function');
            assert.isObject(beagle.birth('Puppy'), 'beagle returns an object');
            assert.instanceOf(beagle.birth('Puppy'), window.zoo.Dog,
                                    'beagle can give birth to another Dog object');
        });

        test('birth function must have an argument', function() {
            var pomerian = new window.zoo.Dog('Sparky');
            assert.throws(function(){
                pomerian.birth();
            }, Error);
        });


    });


})();
