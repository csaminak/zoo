(function(){
    'use strict';

    var assert = window.chai.assert;

    suite('tests for species constructors', function() {

        test('species constructors inherits name trait from Animal', function() {
            var poodle = new window.zoo.Dog('Chelsea');
            var parrot = new window.zoo.Bird('Polly');
            assert.isObject(poodle, 'poodle is a Dog object');
            assert.strictEqual(poodle.name, 'Chelsea', 'the poodle has a name');
            assert.isObject(parrot, 'parrot is a Bird object');
            assert.strictEqual(parrot.name, 'Polly', 'the parrot has a name');
        });

        // test('mammal constructor can give birth', function() {
        //     var dog = new window.zoo.Mammal('Martha');
        //     assert.strictEqual(dog.birth, true, 'a dog can give birth');
        // });



    });


})();
