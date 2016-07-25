(function(){
    'use strict';

    var assert = window.chai.assert;

    suite('tests for zoo', function() {

        test('animal constructor has name and dob', function() {
            var turtle = new window.zoo.Animal('Lily');
            var date = new Date();
            assert.strictEqual(turtle.name, 'Lily', 'species has a name!');
            assert.strictEqual(turtle.dob.getMonth(), date.getMonth(), 'birth month matches');
            assert.strictEqual(turtle.dob.getYear(), date.getYear(), 'birth year matches');
            assert.strictEqual(turtle.dob.getDate(), date.getDate(), 'birth date matches');
        });
    });


})();
