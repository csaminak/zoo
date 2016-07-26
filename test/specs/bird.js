(function(){
    'use strict';

    var assert = window.chai.assert;

    suite('tests for Bird constructors', function() {

        test('Bird constructors inherits name trait from Animal', function() {
            var parrot = new window.zoo.Bird('Polly');
            assert.instanceOf(parrot, window.zoo.Bird, 'parrot is a Bird object');
            assert.instanceOf(parrot, window.zoo.Animal, 'parrot is an Animal object');
            assert.strictEqual(parrot.name, 'Polly', 'the parrot has a name');
        });

        test('birds can lay eggs', function() {
            var crow = new window.zoo.Bird('Momma');
            assert.isFunction(crow.layEggs, 'crow has a layEggs function');
            assert.isArray(crow.layEggs(), 'crow returns an array of Bird objects');
        });

        test('flight function must have an argument', function() {
            var dove = new window.zoo.Bird('Speedy');
            assert.throws(function() {
                dove.flight();
            }, Error);
        });

        test('if bird dies, animal cannot getAge', function() {
            var cardinal = new window.zoo.Bird('Ruby');
            assert.strictEqual(cardinal.isDead, false, 'Bird Object has is not dead');
            cardinal.expire();
            assert.isTrue(cardinal.isDead, 'cardinal has died');
            assert.throws(function() {
                cardinal.getAge();
            }, Error);
        });

    });


})();
