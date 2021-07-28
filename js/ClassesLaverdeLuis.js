let usuario = new Usuario('darth','vader', ['dumbo', 'mufasa', 'bambi', 'simba'], [{'it': 'stephenKing'}, {'elPrincipito': 'antoineDeSaintExupery'}, {'seda': 'alessandroBaricco'}, {'laMetamorfosis': 'franzKafka'}]);
let nombre = 'luis';
let apellido = 'laverde';
const libro = {book: 'ViajeAlCentroDeLaTierra', autor: 'JulioVerne'}
let libros = [{'nostromo': 'josephConrad'}, {'padreRicoPadrePobre': 'robertKiyosaki'}, {'laOdisea': 'homero'}, {'otelo: williamShakespeare'}, {'divinaComedia': 'danteAlihieri'}, {'elCuervo': 'edgarAlanPoe'}];
let mascotas = ['tico', 'sparkie', 'bobby', 'charlie', 'zeus', 'twinkie'];

class Usuario {
  constructor(nombre, apellido, mascotas, libros){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascotas = mascotas;
    this.libros = libros;
  }

  getFullName(){
    return `${this.nombre} ${this.apellido}`
  }

  addMascota(mascota){
    mascotas.push(mascota)
  }

  getMascotas(){
    return mascotas.lenght
  }

  addBook(book, autor){
    this.libros.push({book, autor})
  }

  getBooks(){
    const libro = []
      for (const libro of this.libros) {
        libros.length(libro)
  }
}


console.log(usuario.getFullName());
console.log(usuario.addMascota('Negro'));
console.log(usuario.getMascotas());
console.log(usuario.addBook('prometeoEncadenado','esquilo'));
console.log(usuario.getBooks());