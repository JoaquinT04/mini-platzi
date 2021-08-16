export default class LearningPaths {
	constructor({
		name,
		description,
		courses = [],
	}){
		this.name = name;
		this.description = description;
		this.courses = courses;
	}
}