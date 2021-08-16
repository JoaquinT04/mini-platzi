export default class Student {
	constructor ({
		name,
		email,
		userName,
		twitter = undefined,
		instagram = undefined,
		facebook = undefined,
		approvedCourses = [],
		learningPaths = [],
	}) {
		this._name = name;
		this._email = email;
		this._userName = userName;
		this.socialMedia = {
			twitter, 
			instagram,
			facebook,	
		}
		this.approvedCourses = approvedCourses; 
		this.learningPaths = learningPaths; 
	}

	get name (){
		return this._name;
	}

	set name(name){
		this._name = name;
	}

	get email (){
		return this._email;
	}
	
	set email(email){
		this._email= email;
	}

	get username (){
		return this._username;
	}
	
	set userName(userName){
		this._userName = userName;
	}

}