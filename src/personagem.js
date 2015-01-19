'use strict';

var Personagem = function(nome, arma, hp, x, y) {
  this.nome = nome;
  this.arma = arma;
  this.hp   = hp;
  this.x    = x;
  this.y    = y;
}

module.exports = Personagem;
