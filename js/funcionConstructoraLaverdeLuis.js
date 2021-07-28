const nombre = 'luis';
const apellido = 'laverde';
const mascotas = ['tico', 'sparkie', 'bobby', 'charlie', 'zeus', 'twinkie']
const libros = [{'nostromo': 'josephConrad'}, {'padreRicoPadrePobre': 'robertKiyosaki'}, {'laOdisea': 'homero'}, {'otelo': 'williamShakespeare'}, {'divinaComedia': 'danteAlihieri'}, {'elCuervo': 'edgarAlanPoe'}];

const libro = {book: 'ViajeAlCentroDeLaTierra', autor: 'JulioVerne'}

const usuario = new Usuario('luke','skywalker',['acero', 'dorothy', 'beto', 'monti'], [{'elAlquimista': 'pauloCohelo'}, {'elCapital': 'karlMarx'}, {'elCodigoDaVinci': 'danBrown'}, {'caballoDeTroya': 'juanJoseBenitezLopez'}]);

function Usuario(nombre, apellido, mascotas, libros){
  this.nombre = nombre;
  this.apellido = apellido;
  this.mascotas = mascotas;
  this.libros = libros;
}

Usuario.prototype.getFullName = function(){
  return `${this.nombre} ${this.apellido}`
}

Usuario.prototype.addMascota = function(mascota){
  mascotas.push(mascota);
}

Usuario.prototype.getMascotas = function(){
  return mascotas.length
}

Usuario.prototype.addBook = function({book, autor}){
    libros.push({book, autor})
 }

Usuario.prototype.getBooks = function(){
  return this.libros.map((value) => value.book)
}


console.log(usuario.getFullName());
console.log(usuario.addMascota('rockie'));
console.log(usuario.getMascotas());
console.log(usuario.addBook('Sherezade', 'AbdaLajab'));
console.log(usuario.getBooks());