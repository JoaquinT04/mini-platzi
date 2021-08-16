export default class Lessons {
	constructor({
		id,
		name,
		comments = [],
	}){
		this._id = id;
		this._name = name;
		this.comments = comments;
	}

	get id (){
		return this._id;
	}
	
	set id(id){
		this._id = id;
	}

	get name (){
		return this._name;
	}
	
	set name(name){
		this._name = name;
	}

}