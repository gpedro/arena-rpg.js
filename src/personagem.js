'use strict';

var Personagem = function(nome, arma, hp) {
  this.nome = nome;
  this.arma = arma;
  this.hp   = hp;
  this.x    = 0;
  this.y    = 0;
}

Personagem.prototype.movePara = function(x, y) {
  this.x = x;
  this.y = y;
};

Personagem.prototype.estaVivo = function() {
  return hp > 0;
};

Personagem.prototype.estaArmado = function() {
  return this.arma;
};

Personagem.prototype.distanciaAte = function(outro_personagem) {
  var a = Math.pow((this.x - outro_personagem.x), 2);
  var b = Math.pow((this.y - outro_personagem.y), 2);

  return Math.sqrt(a + b);
};

Personagem.prototype.estaAtingivel = function(outro_personagem) {
  if(!this.estaArmado()) {
    throw "atacante necessita de uma arma";
  }

  return (this.distanciaAte(outro_personagem) <= this.arma.distancia);
};

Personagem.prototype.ataca = function(outro_personagem) {
  try {

    if(this.estaAtingivel(outro_personagem)) {
      outro_personagem.hp -= this.arma.dano;
    }

  } catch(err) {
    console.error(err);
  }
};

module.exports = Personagem;
