//Se crea un objeto llamado usuario a partir de la función constructora, con valores que permitan probar todos sus métodos
let usuario = new Usuario('darth','vader', ['dumbo', 'mufasa', 'bambi', 'simba'], [{'it': 'stephenKing'}, {'elPrincipito': 'antoineDeSaintExupery'}, {'seda': 'alessandroBaricco'}, {'laMetamorfosis': 'franzKafka'}]);

//Se declara una función de clase llamada Usuario que recibe como parámetros: nombre (string), apellido (string), libros (array de objetos) y mascotas (array de strings).
class Usuario {
  constructor(nombre, apellido, mascotas, libros){
    //Luego se implementan las propiedades instancia desde los valores recibidos como parámetro(argumento)
    this.nombre = nombre;
    this.apellido = apellido;
    this.mascotas = mascotas;
    this.libros = libros;
  }
  
  getFullName(){
    //Se retorna un string con el nombre y apellido del usuario. (utilizando el formato de template string)
    return `${this.nombre} ${this.apellido}`
  }
  
  addMascota(mascota){
    let mascotas = ['tico', 'sparkie', 'bobby', 'charlie', 'zeus', 'twinkie'];
    //Se agrega una mascota (mascota) al arreglo de mascotas del usuario. No se retorna nada.
    this.mascotas.push(mascota)
  }
  
  getMascotas(){
    // Se retorna la cantidad de mascotas que tiene el usuario.
    return mascotas.lenght
  }
  
  addBook(book, autor){
    //Se recibe un string 'book' y un string 'autor' y debe agregar un objeto: { nombre: book, autor: autor} al arreglo de libros del usuario. No debe retornar nada.
    const libro = {book: 'ViajeAlCentroDeLaTierra', autor: 'JulioVerne'}
    this.libros.push(book, autor)
  }
  
  getBooks(){
    const libros = [{'nostromo': 'josephConrad'}, {'padreRicoPadrePobre': 'robertKiyosaki'}, {'laOdisea': 'homero'}, {'otelo': 'williamShakespeare'}, {'divinaComedia': 'danteAlihieri'}, {'elCuervo': 'edgarAlanPoe'}];
    //Se retorna un arreglo con sólo los nombres del arreglo de libros del usuario.
    return this.libros.map((value) => value.book)
  }
}

console.log(usuario.getFullName());
console.log(usuario.getMascotas());
console.log(usuario.getBooks());

//Se hace el test completo del objeto instancaido en la línea 2, empleando la consola del navegador.
console.log(usuario)