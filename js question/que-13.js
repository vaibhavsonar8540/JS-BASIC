// Create two variables, one using let to store a student's grade (which can change) and another using const to store their name (which shouldn't change). Modify the grade variable but attempt to modify the name variable. Observe the outcome.

let grade = 88;

const name = "Vaibhav";

console.log("Grade :"+grade);
console.log("Name :"+name);

grade = 90;
name = "Amit";
console.log("Grade :"+grade);
console.log("Name :"+name);
