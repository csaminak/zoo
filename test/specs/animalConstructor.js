(function(){
    'use strict';

    var assert = window.chai.assert;

    suite('tests for animal constructor', function() {

        test('animal constructor has name and dob', function() {
            var turtle = new window.zoo.Animal('Lily');
            var date = new Date();
            assert.strictEqual(turtle.name, 'Lily', 'species has a name!');
            assert.strictEqual(turtle.dob.getMonth(), date.getMonth(), 'birth month matches');
            assert.strictEqual(turtle.dob.getFullYear(), date.getFullYear(), 'birth year matches');
            assert.strictEqual(turtle.dob.getDate(), date.getDate(), 'birth date matches');
        });

        test('age for animals can be calculated', function() {
            var chicken = new window.zoo.Animal('bob');
            assert.strictEqual(chicken.age(), 0, 'animal\'s age in years');
        });

    });


})();
