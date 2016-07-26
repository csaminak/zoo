(function(){
    'use strict';

    var assert = window.chai.assert;

    suite('tests for Bird constructors', function() {

        test('Bird constructors inherits name trait from Animal', function() {
            var parrot = new window.zoo.Bird('Polly');
            assert.isTrue(parrot instanceof window.zoo.Bird, 'parrot is a Bird object');
            assert.strictEqual(parrot.name, 'Polly', 'the parrot has a name');
        });

        test('birds can lay eggs', function() {
            var crow = new window.zoo.Bird('Momma');
            assert.isFunction(crow.layEggs, 'crow has a birth function');
            assert.isNumber(crow.layEggs(), 'crow returns a number of eggs');
        });



    });


})();