/*
	So what have we could we have done better with our FizzBuzz player? Well, for starters, whenever
	we wanted to say FizzBuzz, we wrote it on different lines. Another key point is what if we wanted to
	add another word? Let's say we wanted every multiple of seven to be "Zap". How could we add that to our
	system?

	Let's start with making a list of changes we want to make to our program.

	To-do:
	  - Write words on the same line
	  - Make it easy to add more words

	Most of this code will look pretty familiar, so I won't go through explaining it all. Just the new stuff.
*/

/*
	Let's start off by making sure we can see our program actually say "FizzBuzzZap" when we run it. To do this,
	our "play_until" variable should be greater than or equal to the greatest common denominator of all our numbers.
	Now that was a lot of math jargon, so I've made things a little easier. Because 3, 5, and 7 (our numbers for
	"Fizz", "Buzz", and "Zap" respectively) are prime, we can just multiply them all together to find their greatest
	common denominator:

		3 * 5 * 7 = 105
	
	So let's make our "play_until" variable at least 105.
*/
var play_until = 110;

/*
	Next, let's add a new variable called "output". This will be what the program says at the end of each
	loop. We'll start off by making it an empty string.
*/

var output = ""; // These double quotes let the computer know "output" will be a string.

for (var i = 1; i <= play_until; i++) {
	/*
		One thing to keep in mind in JavaScript (as well as some other programming languages) is that when you only
		have one line in a statement (if, for, while, function, etc.), we can omit the curly brackets ({}) entirely.

		These first two "if" statements should look pretty familiar...
	*/
	if (i % 3 == 0)
		output += "Fizz"; // With this, we can quickly and cleanly add "Fizz" to the end of the string.

	if (i % 5 == 0)
		output += "Buzz";

	/*
		Adding "Zap" for the number seven is as easy as copying on of the "if" statements above and tweaking it a
		little. That gives us:
	*/
	if (i % 7 == 0)
		output += "Zap";
	
	/*
		If we haven't printed any words yet, we should instead print the number we're on, right? But how do we know
		if we've printed any words? One way is to find out how many characters (letter, numbers, or symbols) are in
		our "output" string. To do this, we can check the string's ".length" property like this:
	*/
	if (output.length == 0)
		output += i; // Adding a number to the end of a string is just as easy as adding another string.

	/*
		Finally, we should print our output and empty out our string by setting it to and empty string. ("")
	*/
	console.log(output);
	output = "";
}

// Now we just have to run our program with Node.js (node fizzbuzzzap.js)
