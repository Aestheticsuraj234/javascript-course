**Handwritten Notes on JavaScript Functions:**

---

**Functions in JavaScript:**

- A function in JavaScript is similar to a procedure, performing a task or calculating a value.
- It should take inputs and return outputs with a clear relationship between them.

**Defining Functions:**

- Function Declaration:
  - Uses the `function` keyword followed by the function name, parameters in parentheses, and function body in curly braces.
  - Example: `function square(number) { return number * number; }`

**Parameters and Arguments:**

- Parameters: Variables listed in a function declaration.
- Arguments: Actual values passed to the function when called.
- Parameters act as placeholders for arguments.

**Function Expressions:**

- Functions can also be defined using function expressions, either anonymous or named.
- Anonymous Function Expression:
  - Defined without a name and often used as inline functions or callback functions.
  - Example: `const square = function(number) { return number * number; };`
- Named Function Expression:
  - Provides a name allowing the function to refer to itself and aids in debugging.
  - Example: `const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };`

**Using Function Expressions:**

- Convenient for passing functions as arguments to other functions.
- Example: `map` function takes a function as the first argument and an array as the second argument.

**Closures and Nested Functions:**

- Closures: Inner functions have access to the variables and parameters of the outer functions even after the outer function has returned.
- Nested Functions: Functions can be nested within other functions, forming closures.

**Default Parameters and Rest Parameters:**

- Default Parameters: Allow setting default values for function parameters.
  - Example: `function multiply(a, b = 1) { return a * b; }`
- Rest Parameters: Represent an indefinite number of arguments as an array.
  - Example: `function multiply(multiplier, ...theArgs) { return theArgs.map(x => multiplier * x); }`

**Function Scope:**

- Variables defined inside a function are accessible only within that function's scope.
- Nested functions have access to variables in their parent functions.

**Recursion:** ( Not covered yet)

- A function can call itself, known as recursion.
- Requires a base case to avoid infinite loops.

**Function Hoisting:** (not covered Yet)

- Function declarations are hoisted to the top of the scope, allowing them to be called before they're declared.
- Function expressions are not hoisted in the same way.

**Arguments Object:**

- `arguments` object holds all arguments passed to a function.
- Allows handling of variable numbers of arguments.

---

