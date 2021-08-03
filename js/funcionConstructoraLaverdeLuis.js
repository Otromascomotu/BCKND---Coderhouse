//Se crea un objeto llamado usuario2 a partir de la función constructora, con valores que permitan probar todos sus métodos
let usuario2 = new Usuario2('luke','skywalker',['acero', 'dorothy', 'beto', 'monti'], [{titulo: 'elAlquimista', autor: 'pauloCohelo'}, {titulo: 'elCapital', autor: 'karlMarx'}, {titulo: 'elCodigoDaVinci', autor: 'danBrown'}, {titulo:'caballoDeTroya', autor: 'juanJoseBenitezLopez'}]);


//Se declara una función constructora llamada Usuario que recibe como parámetros: nombre (string), apellido (string), libros (array de objetos) y mascotas (array de strings). 
function Usuario2(nombre, apellido, mascotas, libros){
  //Luego se implementan las propiedades instancia desde los valores recibidos como parámetro(argumento)
  this.nombre = nombre;
  this.apellido = apellido;
  this.mascotas = mascotas;
  this.libros = libros;
}

Usuario2.prototype.getFullName = function(){
  //Se retorna un string con el nombre y apellido del usuario. (utilizando el formato de template string).
  return `${this.nombre} ${this.apellido}`
}

Usuario2.prototype.addMascota = function(mascota){
  const mascotas = ['tico', 'sparkie', 'bobby', 'charlie', 'zeus', 'twinkie']
  //Se agrega una mascota (mascota) al arreglo de mascotas del usuario. No se retorna nada.
  this.mascotas.push(mascota);
}

Usuario2.prototype.getMascotas = function(){
  // Se retorna la cantidad de mascotas que tiene el usuario.
  return this.mascotas.length
}

Usuario2.prototype.addBook = function(book, autor){
  //Se recibe un string 'book' y un string 'autor' y debe agregar un objeto: { nombre: book, autor: autor} al arreglo de libros del usuario. No debe retornar nada.
  const libro = [{book: 'ViajeAlCentroDeLaTierra', autor: 'JulioVerne'}]
  this.libros.push(book, autor)
}

Usuario2.prototype.getBooks = function(){
  const libros = [{'nostromo': 'josephConrad'}, {'padreRicoPadrePobre': 'robertKiyosaki'}, {'laOdisea': 'homero'}, {'otelo': 'williamShakespeare'}, {'divinaComedia': 'danteAlihieri'}, {'elCuervo': 'edgarAlanPoe'}];
  //Se retorna un arreglo con sólo los nombres del arreglo de libros del usuario.  
  return this.libros.map((value) => value.titulo)
}

console.log(usuario2.getFullName());
console.log(usuario2.getMascotas());
console.log(usuario2.getBooks());

//Se hace el test completo del objeto instancaido en la línea 2, empleando la consola del navegador.
console.log(usuario2)


