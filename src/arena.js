'use strict';

var util = require('./util');

var Arena = function(width, height) {
  this.width       = width;
  this.height      = height;
  this.arena       = util.createArray(20, 20);
  this.personagens = [];
};

Arena.prototype.emCombate = function(p1, p2) {
    var distancia       = this.distancia(p1, p2);
    var maior_distancia = Math.max(p1.arma.distancia, p2.arma.distancia);

    return (distancia < maior_distancia);
};

Arena.prototype.distancia = function(p1, p2) {
    var a = Math.pow((p1.x - p2.x), 2);
    var b = Math.pow((p1.y - p2.y), 2);
    
    return Math.sqrt(a + b);
};

Arena.prototype.addPersonagem = function(personagem) {
    this.personagens.push(personagem);
    personagem.x = x;
    personagem.y = y;
};

Arena.prototype.mover = function(personagem, x, y) {
    personagem   = personagem;
    personagem.x = x;
    personagem.y = y;
};

module.exports = Arena;
