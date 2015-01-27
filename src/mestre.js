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
    var coordenada_x = coordenada.x > this.arena.width  ? this.arena.width  : coordenada.x;
    var coordenada_y = coordenada.y > this.arena.height ? this.arena.height : coordenada.y;
        coordenada_x = coordenada_x < 0 ? 1 : coordenada_x;
        coordenada_y = coordenada_y < 0 ? 1 : coordenada_y;

    personagem.movePara(coordenada_x, coordenada_y);
};

module.exports = Mestre;
