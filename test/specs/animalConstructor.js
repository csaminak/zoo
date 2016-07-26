(function(){
    'use strict';

    var assert = window.chai.assert;

    suite('tests for animal constructor', function() {

        test('animal constructor has name', function() {
            var turtle = new window.zoo.Animal('Lily');
            assert.strictEqual(turtle.name, 'Lily', 'species has a name!');
        });

        test('Animal must have a name argument', function() {
            assert.throws(function(){
                var bob = new window.zoo.Animal();
            }, Error);
        });

        test('animal constructor has a dob', function() {
            var squirtle = new window.zoo.Animal('Jade');
            var date = new Date();
            assert.strictEqual(squirtle.dob.getMonth(), date.getMonth(), 'birth month matches');
            assert.strictEqual(squirtle.dob.getFullYear(), date.getFullYear(), 'birth year matches');
            assert.strictEqual(squirtle.dob.getDate(), date.getDate(), 'birth date matches');
        });

        test('age for animals can be calculated', function() {
            var chicken = new window.zoo.Animal('bob');
            assert.strictEqual(chicken.getAge(), 0, 'animal\'s age in years');
        });

        test('all species can use the toString method', function() {
            var flamingo = new window.zoo.Bird('Pinky');
            var mutt = new window.zoo.Dog('Rascal');
            assert.strictEqual(flamingo.toString(), 'I am an animal named, Pinky!');
            assert.strictEqual(mutt.toString(), 'I am an animal named, Rascal!');
        });

    });


})();
