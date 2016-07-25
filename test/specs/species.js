(function(){
    'use strict';

    var assert = window.chai.assert;

    suite('tests for species constructor', function() {

        test('species constructor inherits name trait from Animal', function() {
            var poodle = new window.zoo.Dog('Chelsea');
            assert.isObject(poodle, 'poodle is an object')
            assert.strictEqual(poodle.name, 'Chelsea', 'poodle has a name');
        });
        // test('mammal constructor can give birth', function() {
        //     var dog = new window.zoo.Mammal('Martha');
        //     assert.strictEqual(dog.birth, true, 'a dog can give birth');
        // });



    });


})();
