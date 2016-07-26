(function(){
    'use strict';

    var assert = window.chai.assert;

    suite('tests for Bird constructors', function() {

        test('Bird constructors inherits name trait from Animal', function() {
            var parrot = new window.zoo.Bird('Polly');
            assert.isTrue(parrot instanceof window.zoo.Bird, 'parrot is a Bird object');
            assert.strictEqual(parrot.name, 'Polly', 'the parrot has a name');
        });

        // test('dogs can give birth because they are animals', function() {
        //     var beagle = new window.zoo.Dog('Momma');
        //     assert.isFunction(beagle.birth, 'beagle has a birth function');
        //     assert.isObject(beagle.birth('Puppy'), 'beagle returns an object');
        // });



    });


})();
