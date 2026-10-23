// ==========================================
// 1: CLASE PADRE Y CÍRCULO
// ==========================================
class Figura {
  #nombre;

  constructor(nombre) {
    this.#nombre = nombre;
  }

  getNombre() {
    return this.#nombre;
  }

  calcularArea() {
    return 0;
  }

  calcularPerimetro() {
    return 0;
  }
}

class Circulo extends Figura {
  #radio
  constructor(nombre, radioInicial) {
    super(nombre);
    this.radio=radioInicial;
  }

get radio(){
  return this.#radio;
}

set radio(nuevoRad){
  this.#radio=nuevoRad;
}


  calcularArea() {
    var area;
    area= Math.PI*Math.pow(this.#radio,2);
    console.log(`Area de circulo: ${area}`);
  }

  calcularPerimetro() {
    var peri;
    peri= 2*(Math.PI*this.#radio);
    console.log(`Perimetro de circulo: ${peri}`);
  }
}

// ==========================================
// 2: RECTÁNGULO
// ==========================================
class Rectangulo extends Figura {
  #ancho
  #largo  

  constructor(nombre, anchoInicial, largoInicial) {
    super(nombre);
    this.ancho=anchoInicial;
    this.largo=largoInicial;
  }

  get ancho(){
    return this.#ancho
  }
  get largo(){
    return this.#largo
  }
  set ancho(nuevoAncho){
    this.#ancho=nuevoAncho;
  }
  set largo(nuevoLarg){
    this.#largo=nuevoLarg;
  }

  calcularArea() {
    var area;
    area= this.#ancho*this.#largo;
    console.log(`El area del rectangulo es: ${area}`);
  }

  calcularPerimetro() {
    var peri;
    peri=2*(this.#ancho+this.#largo);
    console.log(`Perimetro de rectangulo: ${peri}`);
  }
}

// ==========================================
// 3: TRIÁNGULO RECTÁNGULO
// ==========================================
class TrianguloRectangulo extends Figura {
  #base
  #altura

  constructor(nombre, baseInicial, alturaInicial) {
  super(nombre);
  this.base=baseInicial;
  this.altura=alturaInicial;
  }

  get base(){
    return this.#base;
  }
  get altura(){
    return this.#altura;
  }
  set base(nuevaBase){
    this.#base=nuevaBase;
  }
  set altura(nuevaAltura){
    this.#altura=nuevaAltura;
  }
  calcularArea() {
    var area;
    area= (this.#base*this.#altura)/2
    console.log(`El area del triangulo es: ${area}`);
  }

  calcularPerimetro() {
    var peri;
    var hip;
    hip = Math.sqrt( Math.pow(this.#base, 2) + Math.pow(this.#altura, 2));
    peri= hip+this.#base+this.#altura;
    console.log(`Perimetro de triabgulo: ${peri}`);
  }
}

const miTriang = new TrianguloRectangulo('triangulo', 10, 5);
miTriang.calcularArea();
miTriang.calcularPerimetro();

const miCirc = new Circulo('Circulo', 6);
miCirc.calcularArea();
miCirc.calcularPerimetro();
