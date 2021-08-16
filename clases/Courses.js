export default class Courses {
	constructor({
		name,
		modules = [],
	}){
		this.name = name;
		this.modules = modules;
	}
}