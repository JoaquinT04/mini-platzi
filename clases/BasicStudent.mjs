import Student from "./Student.mjs";

class BasicStudent extends Student{
	constructor (props){
		super(props);
	}

	approveCourse(newCourse){
		if(newCourse.lang !== "English"){
			this.approveCourse.push(newCourse);
		}
		else{
			console.warn("Lo sentimos, " + this._name + ", no puedes tomar cursos en inglés");
		}
	}
}