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
		this.userName = userName;
		this.fecha = fecha;
		this.likes = likes;
		this.content = content;
	}
}