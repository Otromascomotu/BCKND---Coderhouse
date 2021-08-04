//Se crea un objeto llamado usuario2 a partir de la función constructora, con valores que permitan probar todos sus métodos
let usuario = new Usuario('luke','skywalker',['acero', 'dorothy', 'beto', 'monti'], [{titulo: 'elAlquimista', autor: 'pauloCohelo'}, {titulo: 'elCapital', autor: 'karlMarx'}, {titulo: 'elCodigoDaVinci', autor: 'danBrown'}, {titulo:'caballoDeTroya', autor: 'juanJoseBenitezLopez'}]);


//Se declara una función constructora llamada Usuario que recibe como parámetros: nombre (string), apellido (string), libros (array de objetos) y mascotas (array de strings). 
function Usuario(nombre, apellido, mascotas, libros){
  //Luego se implementan las propiedades instancia desde los valores recibidos como parámetro(argumento)
  this.nombre = nombre;
  this.apellido = apellido;
  this.mascotas = mascotas;
  this.libros = libros;
}

Usuario.prototype.getFullName = function(){
  //Se retorna un string con el nombre y apellido del usuario. (utilizando el formato de template string).
  return `${this.nombre} ${this.apellido}`
}

Usuario.prototype.addMascota = function(mascota){
  //Se agrega una mascota (mascota) al arreglo de mascotas del usuario. No se retorna nada.
  this.mascotas.push(mascota);
}

Usuario.prototype.getMascotas = function(){
  // Se retorna la cantidad de mascotas que tiene el usuario.
  return this.mascotas.length
}

Usuario.prototype.addBook = function(book, autor){
  //Se recibe un string 'book' y un string 'autor' y debe agregar un objeto: { nombre: book, autor: autor} al arreglo de libros del usuario. No debe retornar nada.
  const libro = {titulo: book, autor: autor}
  this.libros.push({titulo:'Crepúsculo', autor:'Stephenie Meyer'})
}

Usuario.prototype.getBooks = function(){
  //Se retorna un arreglo con sólo los nombres del arreglo de libros del usuario.  
  return this.libros.map((value) => value.titulo)
}

console.log(usuario.getFullName());
console.log(usuario.mascotas);
console.log(usuario.addMascota());
console.log(usuario.getMascotas());
console.log(usuario.libros);
console.log(usuario.getBooks());

//Se hace el test completo del objeto instancaido en la línea 2, empleando la consola del navegador.
console.log(usuario)


