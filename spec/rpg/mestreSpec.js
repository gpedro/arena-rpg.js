var Personagem = require('../../src/personagem')
  , Coordenada = require('../../src/coordenada')
  , Arena      = require('../../src/arena')
  , Mestre     = require('../../src/mestre')
  , Arma       = require('../../src/arma');

describe('ArenaPersonagemMestre', function() {
  var arena
    , leonidas
    , mestre;

  beforeEach(function() {
    var espada   = new Arma('espada', 1, 20)

    leonidas = new Personagem('Leonidas', espada, 200);
    arena    = new Arena(20, 20);
    mestre   = new Mestre(arena);
  });

  it('deveria adicionar um personagem na arena', function() {
    mestre.addPersonagem(leonidas, new Coordenada(5, 5));

    expect(leonidas.x).toBeGreaterThan(1);
    expect(leonidas.x).toBeLessThan(arena.width);

    expect(leonidas.y).toBeGreaterThan(1);
    expect(leonidas.y).toBeLessThan(arena.height);

    expect(mestre.personagens).toContain(leonidas);
  });

  it('deveria mover o personagem ao longo da arena', function() {
    mestre.movePersonagem(leonidas, new Coordenada(4, 5));

    expect(leonidas.x).toEqual(4);
    expect(leonidas.y).toEqual(5);
  });

  it('deveria mover o personagem até o limite do largura da arena quando movimento o levaria para fora', function() {
    mestre.movePersonagem(leonidas, new Coordenada(24, 10));

    expect(leonidas.x).toEqual(20);
    expect(leonidas.y).toEqual(10);
  });

  it('deveria mover o personagem até o limite do altura da arena quando movimento o levaria para fora', function() {
    mestre.movePersonagem(leonidas, new Coordenada(15, 30));

    expect(leonidas.x).toEqual(15);
    expect(leonidas.y).toEqual(20);
  });

  it('deveria mover o personagem até o limite da arena quando movimento o levaria para fora', function() {
    mestre.movePersonagem(leonidas, new Coordenada(-10, 30));

    expect(leonidas.x).toEqual(1);
    expect(leonidas.y).toEqual(20);
  });
});
