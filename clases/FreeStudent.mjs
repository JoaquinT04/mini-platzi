import Student from "./Student.mjs";

class FreeStudent extends Student{
	constructor (props){
		super(props);
	}


	approveCourse(newCourse){
		if(newCourse.isFree){
			this.approveCourse.push(newCourse);
		}
		else{
			console.warn("Lo sentimos, " + this._name + ", solo puedes tomar cursos abiertos");
		}
	}
}