class Student {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.tardies = 0;
    }

    studentDetails(){
        return `your firstname is ${this.firstname} and your lastname is ${this.lastname}. Tardies ${this.tardies}`;
    }

    markLate(){
        this.tardies =this.tardies+1;
        return `the student named
         ${this.firstname} ${this.lastname} has been late only ${this.tardies} times only.`;
    }

    static enroll(){
        return `enrolling students!`
    }
}

let firstStudent = new Student("colt", "steel");

console.log(firstStudent.markLate())
// console.log(firstStudent.enroll());this will show an error as an object cannot call a static method (important concept)
console.log(Student.enroll());//this will not cause any error as static methods can only be called by calling the classes directly.