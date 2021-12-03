// this => El objeto que está ejecutando una función

// 1. Si la función es de un objeto, se le llama método, y this hace referencia al objeto
// 2. Si es una función global, this hace referencia al objeto que la llama que es window en chrome, y global en node


// Opción 1
const video = {
  title: 'a',
  numbers: [1,2,3],
  play() {
    console.log(this); // this es el objeto.
  },
  showNumbers(){
    this.numbers.forEach(function(num){
      console.log(this.title); // Es undefined porque es una función regular llamada por el window.
      console.log(num);
    })
  }
};

function playVideo() {
  console.log(this);
}

video.play();
playVideo();

video.showNumbers();


// Constructor

function Test(title){
  this.title = title;
  console.log(this);
}

const t = new Test('test');

// Cuando creamos una nueva instancia con la palabra new, se crea un objeto vacío {} y la palabra this, referencia al objeto.

