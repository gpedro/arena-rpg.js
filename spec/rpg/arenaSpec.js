var Arena = require('../../src/arena')
  , Arma = require('../../src/arma')
  , Personagem = require('../../src/personagem');

describe("Combate arena:", function() {

  var arena
    , arma_espada
    , arma_lanca
    , arma_flecha;

  beforeEach(function() {
    arena = new Arena(20, 20);

    arma_espada = new Arma('Espada', 1, 20);
    arma_lanca  = new Arma('Lança' , 3, 15);
    arma_flecha = new Arma('Flecha', 5, 10);
  });

  it("Criar a arena 20x20", function() {
    expect(arena.width).toEqual(20);
    expect(arena.height).toEqual(20);
  });

  it("Criar arma tipo espada", function() {
    expect(arma_espada.distancia).toEqual(1);
    expect(arma_espada.dano).toEqual(20);
  });

  it("Criar arma tipo lança", function() {
    expect(arma_lanca.distancia).toEqual(3);
    expect(arma_lanca.dano).toEqual(15);
  });

  it("Criar arma tipo flecha", function() {
    expect(arma_flecha.distancia).toEqual(5);
    expect(arma_flecha.dano).toEqual(10);
  });

  it("Criar personagens", function() {
    var player = new Personagem('Leonidas', arma_espada, 200, 3, 2);

    expect(player.nome).toEqual('Leonidas');
    expect(player.arma).toEqual(arma_espada);
    expect(player.hp).toEqual(200);
    expect(player.x).toEqual(3);
    expect(player.y).toEqual(2);
  });

  it("Se estao em combate", function() {
    var personagem1   = new Personagem('Leonidas', arma_espada, 200, 4, 6);
    var personagem2   = new Personagem('Hulk', arma_lanca, 800, 5, 7);
    var arena_combate = arena.emCombate(personagem1, personagem2);

    expect(arena_combate).toBe(true);
  });

  it("Se nao estao em combate", function() {

  });

  it("Se estão fora da arena", function() {

  });

  it("Se pode atacar", function() {

  });

  it("Deve mover personagem", function() {

  });

});
