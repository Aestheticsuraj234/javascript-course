
### Console Methods

#### console.log()
- **Description:** Outputs a message to the console.
- **Example:** `console.log('Hello, world!');`

#### console.error()
- **Description:** Outputs an error message to the console.
- **Example:** `console.error('An error occurred!');`

#### console.warn()
- **Description:** Outputs a warning message to the console.
- **Example:** `console.warn('This is a warning!');`

#### console.info()
- **Description:** Outputs an informational message to the console.
- **Example:** `console.info('This is an information message.');`

#### console.table()
- **Description:** Displays tabular data as a table.
- **Example:**
  ```javascript
  let tableData = {
      name: 'John',
      age: 30,
      city: 'New York'
  };
  console.table(tableData);
  ```

### Control Flow (if, else if, else)

#### if, else if, else
- **Description:** Executes different code blocks depending on different conditions.
- **Example:**
  ```javascript
  let age = 19;
  if (age < 18) {
      console.log('You are eligible for voting');
  } else if (age === 19) {
      console.log('You are 19 years old');
  } else {
      console.log('You are not eligible for voting');
  }
  ```

### Switch Statement

#### switch
- **Description:** Evaluates an expression and executes code blocks based on matching cases.
- **Example:**
  ```javascript
  let number = 29;
  switch (number) {
      case 19:
          console.log('this is 19');
          break;
      case 29:
          console.log('this is 29');
          break;
      case 9:
          console.log('this is 9');
          break;
      default:
          console.log('this is default');
          break;
  }
  ```
