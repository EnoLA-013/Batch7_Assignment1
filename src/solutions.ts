function filterEvenNumbers(numbers: number[]): number[] {
  const evens = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      evens.push(number);
    }
  }
  return evens;
}

function reverseString(sentence: string): string {
  let reverse = " ";
  for (const letter of sentence) {
    reverse = letter + reverse;
  }
  return reverse;
}

type StringOrNumber = string | number;

function checkType(input: StringOrNumber) {
  if (typeof input === "string") {
    return "String";
  } else if (typeof input === "number") {
    return "Number";
  }
}

const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(studentDetails: Student) {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

function getIntersection(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]!);
        break;
      }
    }
  }

  return result;
}
