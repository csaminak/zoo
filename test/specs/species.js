(function(){
    'use strict';

    var assert = window.chai.assert;

    suite('tests for species constructor', function(){

        test('species constructor inherits name trait from Animal', function(){
            var turtle = new window.zoo.Reptile('Chelsea');
            assert.strictEqual(turtle.name, 'Chelsea', 'turtle has a name');
        });



    });


})();
