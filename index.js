let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: 'INFO 1603',
      grades: [89, 34, 67]
    },
    {
      course: 'INFO 1601',
      grades: [89, 34, 67]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: 'INFO 1601',
      grades: [100, 89, 79]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: 'INFO 1600',
      grades: [89, 34, 67]
    }
  ]
};

function getAverageGrade(student, course) {
  let sum = 0;
  let avg = 0;
  let found = false;

  for (let t of student.transcript) {
    if (t.course === course) {
      for (let grade of t.grades) {
        sum += grade;
      }
      avg = sum / t.grades.length;
      found = true;
    }
  }

  return found ? avg : -1;
}

console.log("================================");
console.log("Bob's Average in INFO 1601: " + getAverageGrade(bob, 'INFO 1601').toFixed(2));
console.log("Sally's Average in INFO 1601: " + getAverageGrade(sally, 'INFO 1601').toFixed(2));
console.log("Paul's Average in INFO 1600: " + getAverageGrade(paul, 'INFO 1600').toFixed(2));
console.log("================================", '\n');

function getAssignmentMark(student, course, num) {
  let mark = -1;
  let found = false;

  for (let t of student.transcript) {
    if (t.course === course) {
      if (num >= 0 && num < t.grades.length) {
        mark = t.grades[num];
        found = true;
      }
    }
  }

  return found ? mark : -1;
}

console.log("================================");
console.log("Bob's Mark for Assignment 2 in INFO 1601: " + getAssignmentMark(bob, 'INFO 1601', 1));
console.log("Sally's Mark for Assignment 2 in INFO 1601: " + getAssignmentMark(sally, 'INFO 1601', 1));
console.log("Paul's Mark for Assignment 2 in INFO 1600: " + getAssignmentMark(paul, 'INFO 1600', 1));
console.log("================================", '\n');

function averageAssessment(students, courseName, assignment) {
  let sum = 0;
  let count = 0;

  for (let student of students) {
    let mark = getAssignmentMark(student, courseName, assignment);
    if (mark !== -1) {
      sum += mark;
      count++;
    }
  }

  return count > 0 ? sum / count : -1;
}

let students = [bob, sally, paul];

console.log("================================");
console.log("Average Mark for Assignment 2 in INFO 1603: " + averageAssessment(students, 'INFO 1603', 1).toFixed(2));
console.log("Average Mark for Assignment 2 in INFO 1601: " + averageAssessment(students, 'INFO 1601', 1).toFixed(2));
console.log("Average Mark for Assignment 2 in INFO 1600: " + averageAssessment(students, 'INFO 1600', 1).toFixed(2));
console.log("================================", '\n');