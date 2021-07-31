const usuario = new Usuario('luke','skywalker',['acero', 'dorothy', 'beto', 'monti'], [{titulo: 'elAlquimista', autor: 'pauloCohelo'}, {titulo: 'elCapital', autor: 'karlMarx'}, {titulo: 'elCodigoDaVinci', autor: 'danBrown'}, {titulo:'caballoDeTroya', autor: 'juanJoseBenitezLopez'}]);

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
  //const mascotas = ['tico', 'sparkie', 'bobby', 'charlie', 'zeus', 'twinkie']
  this.mascotas.push(mascota);
  this.addMascota('rockie')
}

Usuario.prototype.getMascotas = function(){
  return this.mascotas.length
}

Usuario.prototype.addBook = function(book, autor){
  //const libros = [{'nostromo': 'josephConrad'}, {'padreRicoPadrePobre': 'robertKiyosaki'}, {'laOdisea': 'homero'}, {'otelo': 'williamShakespeare'}, {'divinaComedia': 'danteAlihieri'}, {'elCuervo': 'edgarAlanPoe'}];
  this.libros.push(book, autor)
}

Usuario.prototype.getBooks = function(){
  //const libro = [{book: 'ViajeAlCentroDeLaTierra', autor: 'JulioVerne'}]
  return this.libros.map((value) => value.book)
}


console.log(usuario.getFullName());
//console.log(usuario.addMascota('rockie'));
console.log(usuario.getMascotas());
console.log(usuario.addBook('Sherezade','Anonimo'));
console.log(usuario.getBooks());


