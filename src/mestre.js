'use strict';

var Mestre = function(arena) {
    this.arena = arena;
    this.personagens = [];
}

Mestre.prototype.addPersonagem = function(personagem, coordenada) {
    this.personagens.push(personagem);
    this.movePersonagem(personagem, coordenada);
};

Mestre.prototype.movePersonagem = function(personagem, coordenada) {
    var coordenadaX = coordenada.x > this.arena.width  ? this.arena.width  : coordenada.x;
    var coordenadaY = coordenada.y > this.arena.height ? this.arena.height : coordenada.y;
    coordenadaX = coordenadaX < 0 ? 1 : coordenadaX;
    coordenadaY = coordenadaY < 0 ? 1 : coordenadaY;

    personagem.movePara(coordenadaX, coordenadaY);
};

module.exports = Mestre;
