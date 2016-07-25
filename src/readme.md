Learning Objectives

Let's get some practice with writing constructor functions and prototypes. By the end of this assignment you should be able to create a new type of object along with child objects that have shared functionality through their prototypes.

Your Mission

We're going to create a Zoo. Our zoo has lots of different animals, many of which share various properties and actions. We will have a base Animal with some shared functionality, then a few species of animals with specific functionality. Some examples are below, but you can use any species you wish, so long as you implement shared and specific functionality at the Animal and species levels respectively.

Create an Animal constructor
Animals have a name and date of birth
Animals should have a method for determining their age in years
Create a few species (2 minimum) which inherit from Animal
If you create a mammal, it must be able to give birth (what would giving birth return?)
If you create a reptile or bird it must be able to lay one or more eggs
For each species create at least one other method (in addition to the things directly above)
For example, parrots can speak, lions can roar, otters can swim, etc...
Your species-specific method(s) should take at least one argument. For example, a swim method might take the argument: duration and return how far the animal swam in that time (speed * time).
ALL species must re-implement the toString() method, which is first defined on the Object prototype.
It may be good to run the default toString() method on one of your animals to see how it works.
Write tests for your Zoo!
This is how we know our code is working, and how we can create our various Animals without having a web application yet.
Make sure you can create each type of animal species
Make sure the animals you create have the correct data on them
EPIC Mode

Test ALL methods and data of all of your objects. (what we call "100% code coverage")
Don't allow creation of an Animal directly, we must have a species!
