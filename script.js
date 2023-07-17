//complete this code
class Person {
	name;
	age;
	constructor(name = 'John', age){
		this.name = name;
		this.age = age;
	}

	get name(){
		return this._name;
	}
	set age(val){
		this.age = val;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
