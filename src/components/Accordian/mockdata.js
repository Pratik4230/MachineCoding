const codingQuestions = [
    {
      id: 1001,
      question: "What does 'CSS' stand for?",
      answer: "CSS stands for Cascading Style Sheets. It is used to describe the presentation of a document written in HTML or XML. CSS controls the layout, colors, and fonts of a webpage. It helps to separate content from design."
    },
    {
      id: 1002,
      question: "What is a closure in JavaScript?",
      answer: "A closure is a function that retains access to its outer scope variables even after the outer function has returned. It allows for data encapsulation and private variables. Closures are often used in event handlers and callbacks. They are created at function creation time."
    },
    {
      id: 1003,
      question: "What is the purpose of a 'Promise' in JavaScript?",
      answer: "A Promise represents the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more cleanly than callbacks. Promises can be in one of three states: pending, fulfilled, or rejected. They help to avoid callback hell and make code more readable."
    },
    {
      id: 1004,
      question: "What is the difference between 'let' and 'var' in JavaScript?",
      answer: "'let' has block scope, meaning it is only accessible within the block it is defined. 'var' has function scope, meaning it is accessible within the entire function it is defined. 'let' does not allow redeclaration in the same scope. 'var' can be redeclared within the same scope."
    },
    {
      id: 1005,
      question: "What is 'React'?",
      answer: "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes. React uses a virtual DOM to improve performance. It is maintained by Facebook and a community of developers."
    },
    {
      id: 1006,
      question: "What is the command to initialize a new git repository?",
      answer: "The command to initialize a new git repository is 'git init'. This command creates a new .git subdirectory in the current directory. It also creates a new Git repository, with its own history and tracking of files. This is the first step in starting a new Git project."
    },
    {
      id: 1007,
      question: "What is the time complexity of binary search?",
      answer: "The time complexity of binary search is O(log n). This means that the time it takes to search through the list grows logarithmically with the size of the list. Binary search works by repeatedly dividing the search interval in half. It is efficient for large, sorted datasets."
    },
    {
      id: 1008,
      question: "What is the difference between '==' and '===' in JavaScript?",
      answer: "'==' checks for equality with type coercion, meaning it converts the operands to the same type before comparing. '===' checks for strict equality without type coercion, meaning the operands must be of the same type. '===' is generally preferred for accuracy. '==' can lead to unexpected results."
    },
    {
      id: 1009,
      question: "What is the use of 'flexbox' in CSS?",
      answer: "Flexbox is a layout model in CSS that allows for flexible and efficient arrangements of items within a container. It enables responsive design, making it easier to design layouts that work on different screen sizes. Flexbox simplifies the process of aligning items. It provides powerful alignment and distribution capabilities."
    },
    {
      id: 1010,
      question: "What does 'SQL' stand for?",
      answer: "SQL stands for Structured Query Language. It is used to manage and manipulate relational databases. SQL allows for querying, updating, inserting, and deleting data. It is an essential tool for database management."
    }
  ];
  

  export default codingQuestions;