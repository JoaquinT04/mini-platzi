export default class Comments {
	constructor ({
		fotoDePerfil,
		userName,
		userPosition = "",
		fecha,
		likes,
		content,
	}){
		this.fotoDePerfil = fotoDePerfil;
		this._userName = userName;
		this.fecha = fecha;
		this.likes = likes;
		this.content = content;
	}

	get userName (){
		return this._userName;
	}
	
	set userName (userName){
		this._userName = userName;
	}
}