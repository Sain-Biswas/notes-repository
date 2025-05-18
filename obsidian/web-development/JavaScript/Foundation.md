## **1. JavaScript Fundamentals**
### **1.1 Language Characteristics**
- Interpreted language (executed line-by-line)
- Dynamically typed (no static type checking)
- Single-threaded with event loop concurrency model
- Supports multiple paradigms (OOP, functional, procedural)
- Originally designed for browsers (now used server-side with Node.js)
- ECMAScript specification governs the language

### **1.2 Execution Features**
- Partial execution possible (errors don't block previous correct code)
- Hoisting (variable/function declarations moved to top of scope)
- Automatic semicolon insertion (ASI)
- Strict mode (`'use strict'`) for safer code

---

## **2. Variables & Scoping**
### **2.1 Declaration Types**
| Keyword | Scope    | Hoisting | Reassignable | Redeclarable | TDZ |
| ------- | -------- | -------- | ------------ | ------------ | --- |
| `var`   | Function | Yes      | Yes          | Yes          | No  |
| `let`   | Block    | No*      | Yes          | No           | Yes |
| `const` | Block    | No*      | No           | No           | Yes |

*\* Temporal Dead Zone exists until declaration*

### **2.2 Scope Types**
- **Global Scope**: Accessible everywhere
- **Function Scope**: `var` variables
- **Block Scope**: `let/const` (ES6+)
- **Lexical Scope**: Nested functions access parent scopes

### **2.3 Variable Lifecycle**
1. Declaration
2. Initialization
3. Assignment
4. Usage
5. Garbage Collection

---

## **3. Data Types**
### **3.1 Primitive Types**
1. **String**: `"text"`, `'text'`, `` `template` ``
2. **Number**: `42`, `3.14`, `NaN`, `Infinity`
3. **Boolean**: `true/false`
4. **Null**: Intentional absence (`typeof null → 'object'`)
5. **Undefined**: Uninitialized variable
6. **BigInt**: `123n` (arbitrary precision)
7. **Symbol**: `Symbol('unique')`

### **3.2 Reference Types**
- **Object**: `{}`, `new Object()`
- **Array**: `[]`, `new Array()`
- **Function**: `function() {}`, `() => {}`
- **Date**: `new Date()`
- **RegExp**: `/[A-Z]/g`

### **3.3 Type Conversion**
- **Explicit**: `String()`, `Number()`, `Boolean()`
- **Implicit**: `"5" + 2 → "52"` (coercion)
- **Truthy/Falsy** values
- `==` vs `===` comparison

---

## **4. Conditionals & Control Flow**
### **4.1 Conditional Statements**
```javascript
// Basic if-else
if (condition) {
  // ...
} else if (condition2) {
  // ...
} else {
  // ...
}

// Ternary
const result = condition ? trueValue : falseValue;
```

### **4.2 Switch Statement**
```javascript
switch(expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}
```

### **4.3 Error Handling**
```javascript
try {
  // Risky operation
} catch (err) {
  // Handle error
} finally {
  // Always executes
}
```

---

## **5. Loops & Iteration**
### **5.1 Loop Types**
| Loop Type       | Syntax                          | Best For              |
|-----------------|---------------------------------|-----------------------|
| `for`           | `for(init;cond;incr){}`         | Known iterations      |
| `while`         | `while(cond){}`                 | Unknown iterations    |
| `do...while`    | `do{}while(cond)`               | Run at least once     |
| `for...in`      | `for(key in obj){}`             | Object properties     |
| `for...of`      | `for(value of iterable){}`      | Arrays, Strings, etc. |

### **5.2 Loop Control**
- `break`: Exit loop entirely
- `continue`: Skip to next iteration
- Labels: `outerLoop: for(...)`

---

## **6. Functions**
### **6.1 Function Types**
```javascript
// Declaration
function foo() {}

// Expression
const bar = function() {};

// Arrow (ES6+)
const baz = () => {};

// Constructor
new Function('a','b','return a+b');
```

### **6.2 Parameters & Arguments**
- Default parameters: `(x=1) => x`
- Rest parameters: `(...args) =>`
- Arguments object (array-like)

### **6.3 Advanced Concepts**
- Closures
- IIFE (Immediately Invoked Function Expression)
- Higher-Order Functions
- Recursion

---

## **7. Objects & Prototypes**
### **7.1 Object Creation**
```javascript
// Literal
const obj = { key: value };

// Constructor
const inst = new Object();

// Class (ES6)
class MyClass {}
```

### **7.2 Prototypal Inheritance**
- `__proto__` vs `prototype`
- `Object.create()`
- Constructor functions

### **7.3 Object Features**
- Property descriptors
- Getters/setters
- `this` binding rules
- Object methods (`keys()`, `values()`, `entries()`)

---

## **8. Arrays**
### **8.1 Array Methods**
| Method      | Purpose                     | Returns          |
|-------------|-----------------------------|------------------|
| `map()`     | Transform elements          | New array        |
| `filter()`  | Select elements             | New array        |
| `reduce()`  | Accumulate values           | Single value     |
| `find()`    | Find first match            | Element/undefined|
| `some()`    | Test if any pass            | Boolean          |
| `every()`   | Test if all pass            | Boolean          |

### **8.2 Array Operations**
- Spread operator: `[...arr1, ...arr2]`
- Destructuring: `const [first] = arr`
- Typed Arrays (for binary data)

---

## **9. Asynchronous JavaScript**
### **9.1 Async Patterns**
1. **Callbacks**
   ```javascript
   fs.readFile('file.txt', (err, data) => {
     if (err) throw err;
     console.log(data);
   });
   ```

2. **Promises**
   ```javascript
   fetch(url)
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(err => console.error(err));
   ```

3. **Async/Await**
   ```javascript
   async function getData() {
     try {
       const res = await fetch(url);
       const data = await res.json();
     } catch (err) {
       console.error(err);
     }
   }
   ```

### **9.2 Event Loop**
- Call Stack
- Callback Queue
- Microtask Queue (Promises)
- Execution order rules

---

## **10. Modern JavaScript (ES6+)**
### **10.1 Key Features**
- **Destructuring**: `const { prop } = obj`
- **Template Literals**: `` `Value: ${value}` ``
- **Modules**: `import/export`
- **Optional Chaining**: `obj?.prop?.subprop`
- **Nullish Coalescing**: `value ?? defaultValue`

### **10.2 Advanced Features**
- Generators (`function*`)
- Proxies
- Reflect API
- WebAssembly support

---

## **11. Browser APIs**
### **11.1 DOM Manipulation**
- Selecting elements (`querySelector`)
- Event handling (`addEventListener`)
- Element creation (`createElement`)

### **11.2 Web APIs**
- Fetch API
- Web Storage (`localStorage`)
- Web Workers
- Geolocation API

---

This structured approach ensures all key JavaScript concepts are covered with clear subtopics and relationships between different language features. Each section can be expanded with more examples and detailed explanations as needed.