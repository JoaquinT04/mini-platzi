import Student from "./Student.mjs";

class ExpertStudent extends Student{
	constructor (props){
		super(props);
	}

	approveCourse(newCourse){
		this.approveCourse.push(newCourse);
	}
}