## TypeScript
## code is hire and we are using Hight orden components with TypeScript and React


When we run our code, the way that our JavaScript runtime chooses what to do is by figuring out the type of the value - what sorts of behaviors and capabilities it has. That’s part of what that TypeError is alluding to - it’s saying that the string "Hello World!" cannot be called as a function.

For some values, such as the primitives string and number, we can identify their type at runtime using the typeof operator. But for other things like functions, there’s no corresponding runtime mechanism to identify their types. For example, consider this function:


The primitives:
string
,
number
, and
boolean
JavaScript has three very commonly used primitives: string, number, and boolean. Each has a corresponding type in TypeScript. As you might expect, these are the same names you’d see if you used the JavaScript typeof operator on a value of those types:

string represents string values like "Hello, world"
number is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent to int or float - everything is simply number
boolean is for the two values true and false


Arrays
To specify the type of an array like [1, 2, 3], you can use the syntax number[]; this syntax works for any type (e.g. string[] is an array of strings, and so on). You may also see this written as Array<number>, which means the same thing. We’ll learn more about the syntax T<U> when we cover generics.
