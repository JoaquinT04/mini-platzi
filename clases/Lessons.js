export default class Lessons {
	constructor({
		id,
		name,
		comments = [],
	}){
		this.id = id;
		this.name = name;
		this.comments = comments;
	}
}