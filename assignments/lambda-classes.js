// CODE here for your Lambda Classes

class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location  = attrs.location;
  }
  speak = function() {
    return `Hello my name is ${this.name} I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }
  demo = function(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade = function(student, subject) {
    return `${student} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }
  listSubjects = function() {
    return this.favSubjects;
  }
  PRAssignment = function(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class TeamLead extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }
  standup = function(slackChannel) {
    return `${this.name} announces to ${slackChannel} @channel standby times!`;
  }
  debugsCode = function(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const joe = new Student({
  name: 'Joe',
  age: 20,
  previousBackground: 'Astronaut',
  location: 'Jersey',
  favSubjects: ['HTML', 'CSS', 'JavaScript']
})

const jerry = new TeamLead({
  name: 'Jerry',
  age: 45,
  gradClassName: 'CS1',
  favInstructor: 'Sean',
  location: 'NYC',
  specialty: 'Redux',
  favLanguage: 'JavaScript',
  catchPhrase: `Don't forget the homies`
})


console.log(joe.PRAssignment('math'));
console.log(jerry.standup('general'));
console.log(joe.listSubjects());
console.log(jerry.grade('Joseph', 'CSS'));
