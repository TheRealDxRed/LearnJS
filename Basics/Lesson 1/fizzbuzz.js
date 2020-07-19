/*
	The rules of FizzBuzz are simple:
	 - Count up, starting from one, saying the numbers out loud
	 - When you reach a multiple of 3, say "Fizz" instead
	 - When you reach a multiple of 5, say "Buzz" instead
	 - If your number is a multiple of both 3 and 5, say "FizzBuzz"

	Here's an example:
	... 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz" ...

	Pretty easy, right? How about we turn our rules into code?
*/

/*
	While we could make this program play FizzBuzz forever,
	that would be a bit of a waste. So let's play until we reach...
*/

var play_until = 20; // ...20! This should give us plenty of "Fizz"es and "Buzz"es to work with for now.

/*
	This is a "for" loop. Basically, this will help us count up from 1 to 100.
	A "for" loop is composed of five parts:
	 - The word "for": this tells the interpreter that we want to run the "for" loop's body more than once.
	 - The starting point (var i = 1;): this sets us our iterator and gives it the right starting value.
	 - The condition (i <= play_until;): this is what our "for" loop checks when deciding whether to exit
										the loop or not.
	 - The step action (i++;): this is what will run at the end of the loop, regardless of how the
							   condition is evaulated (true or false).
	 - The body ({}): this is the code that will be run as long as the condition is true.
*/
for (var i = 1; i <= play_until; i++) {
	/*
		Note: In JavaScript, there are six conditional operators:
		 - Equals (==)
		 - Not equals (!=)
		 - Less than (<)
		 - Greater than (>)
		 - Less than or equal to (<=)
		 - Greater than or equal to (>=)
	*/

	/*
		Now we need to decide whether we want to say "Fizz", "Buzz", or just the number.
		For this, let's use an "if" statement. An "if" statement will let us check a condition (like the
		one we used in the "for" loop) to decide whether or not to do something.

		An "if" statement is composed of just three parts, along with a few optional parts we'll go over
		in lesson 2:
		 - The word "if": much like the "for" loop, this tells the interpreter that we want to use an "if"
						  statement.
		 - The condition: this works just like the condition in the "for" loop, deciding whether we should
		 				  run the code in the "if" statement's body or not.
		 - The body: once again, similarly to the "for" loop, this is the code we will run if the condition
		 			 is met.
	*/
	if (i % 3 == 0) { // The modulo (i % 3) operator will divide i by 3 and give you their remainder.
		// If our current number is divisible by 3, say "Fizz"
		console.log("Fizz");
	}

	// Now let's do the same thing for "Buzz"...
	if (i % 5 == 0) {
		console.log("Buzz");
	}

	/*
		Finally, if our number isn't divisible by 3 or 5, we just need to say the number. Here, I've used a
		few boolean operators. Boolean operators differ from conditional operators in that they don't compare
		two things. Instead, they look at 
	*/
	if (!(i % 3 == 0) && !(i % 5 == 0)) {
		console.log(i);
	}
}
