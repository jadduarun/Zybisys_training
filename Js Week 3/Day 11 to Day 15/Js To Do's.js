//Program  for Sum and Average

var a = [100, 200, 30, 4, 500, 6, 7, 8, 9, 10];
var sum = 0;
for (var i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log("The Sum of the Array values is: " + sum);
console.log("The Average of the Array values is: " + sum / a.length);

//Program for Greatest length in array

var greater = a[0];
for (var i = 0; i < a.length; i++) {
  if (a[i] > greater) {
    greater = a[i];
  }
}
console.log(greater);

//Program for Reverse a string

var fname = "arun";
var lastname = "";
for (var i = fname.length - 1; i >= 0; i--) {
  lastname = lastname + fname[i];
}
console.log(lastname);

//Program for merge two strings

function mixed() {
  var a = "abdfasdadgxdbg";
  var b = "efgkfgjkkjv";
  mixedstring = "";
  for (var i = 0; i < a.length || i < b.length; i++) {
    if (i < a.length) {
      mixedstring += a[i];
    }
    if (i < b.length) {
      mixedstring += b[i];
    }
  }
  console.log(mixedstring);
}
mixed();

//Program for Decimal to Binary

var a = 10;
var b = [];
while (a > 0) {
  var c = a % 2;
  b.push(c);
  a = Math.floor(a / 2);
}
var string = "";
for (var j = b.length - 1; j >= 0; j--) {
  string += b[j];
}
console.log(string);

//Student Data with Temporary Database
let studentDb = [];

function studentDetails(name, email, age, number, regno) {
  var student = {
    name,
    email,
    age,
    number,
    regno,
  };
  studentDb.push(student);
}
studentDetails("arun", "arun@mail.com", 22, 9876546789, "REG001");
studentDetails("antony", "anto@mail.com", 20, 9876546789, "REG002");
studentDetails("raghul", "raghul@mail.com", 25, 9876546789, "REG003");
studentDetails("yuva", "yuva@mail.com", 19, 9876546789, "REG004");
studentDetails("joe", "joe@mail.com", 26, 9876546789, "REG005");
console.log(studentDb);

console.log("--------------------------------------------------------");

//Delete using mail address

function delStudent(email) {
  let students = studentDb.filter(function (obj) {
    return obj.email != email;
  });
  console.log(students);
}

delStudent("anto@mail.com");
console.log("--------------------------------------------------------");

//Find mail address

function findMail(email) {
  let mail = studentDb.some(function (obj) {
    return obj.email == email;
  });
  console.log(mail);
}
findMail("anto@mail.com");
console.log("--------------------------------------------------------");

//Find an age between

function findAge(Startage, Endage) {
  let age = studentDb.filter(function (obj) {
    return obj.age >= Startage && obj.age <= Endage;
  });
  console.log(age);
}
findAge(20, 23);
console.log("--------------------------------------------------------");

//Count the DB Count

var totallength = studentDb.reduce(function (accumulator) {
  return accumulator + 1;
}, 0);
console.log(totallength);
console.log("--------------------------------------------------------");

//Uppercase Letters
var upperCase = studentDb.map(function (name) {
  return name.name.toUpperCase();
});
console.log(upperCase);
console.log("--------------------------------------------------------");

//Update the Database
function updateStudent(name, email, age, number, regno) {
  var emailfind = studentDb.some(function (obj) {
    return obj.email == email;
  });
  var index = studentDb.findIndex(function (obj) {
    return obj.email == email;
  });
  if (emailfind == true) {
    studentDb[index].name = name;
    studentDb[index].email = email;
    studentDb[index].age = age;
    studentDb[index].number = number;
    studentDb[index].regno = regno;
  }
}
updateStudent("arun", "anto@mail.com", 42, 787554654, "REG019");
console.log(studentDb);
console.log("--------------------------------------------------------");

//Sorting name using function

let ascending = studentDb.sort(function (a, b) {
  return a.name.localeCompare(b.name);
});
console.log(ascending);
console.log("--------------------------------------------------------");

//Pagination in JS

function paginate(start, value) {
  let page = studentDb.slice(start, value);
  console.log(page);
}
paginate(1, 4);
