function videoPlay(id) {
	const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;

	console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
	const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;

	console.log("Se pauso la reproducción desde la url " + urlSecreta);
}
export default class Lessons {
	constructor({
		videoID,
		name,
		comments = [],
	}){
		this._videoID= videoID;
		this._name = name;
		this.comments = comments;
	}

	get videoID (){
		return this._videoID;
	}
	
	set videoID(videoID){
		this._videoID = videoID;
	}

	get name (){
		return this._name;
	}
	
	set name(name){
		this._name = name;
	}


	reproducir() {
		videoPlay(this.videoID);
	}

	pausar() {
		videoStop(this.videoID);
	}

}