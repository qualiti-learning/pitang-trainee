/**
 * @author Keven Leone
 * @returns {String} aoaooaoa
 * @description tras as informacoes do usuario X...
 * @example function getData("Keven", 25, ["1","2","3"])
 * @param {String} name The user full name
 * @param {Number} age user full birthyear
 * @param {String[]} fields
 */
function getData(name, age, fields) {}

function RetanguloFn(altura, largura) {
  const x = 10;

  return {
    altura,
    largura,
    getX: function () {
      return x;
    },
  };
}

class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }
}

class Retangulo extends Box {
  #x;

  constructor(altura, largura) {
    super(100, 20);
    this.#x = 10;
    this.altura = altura;
    this.largura = largura;
  }

  getX() {
    const x = 1000;
    const retanguloX = this.#x;
    const boxX = super.x;

    return super.getX() + this.#x;
  }
}

const retangulo = new Retangulo(100, 200);

retangulo.getY();

console.log(retangulo.getX());
