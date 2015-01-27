var Personagem = require('../../src/personagem')
  , Arma       = require('../../src/arma');

describe('Personagem', function() {
  var leonidas
    , hulk
    , chuck;

  beforeEach(function() {
    var espada = new Arma('Espada', 1, 20);

    leonidas = new Personagem('Leonidas', espada, 200);
    hulk     = new Personagem('Hulk', null, 800);
    chuck    = new Personagem('Chuck Noris', null, 1);
  });

  it('Deveria estar vivo', function() {
    expect(hulk.estaVivo).toBeTruthy();
  });

  it('deveria atacar outro personagem', function() {
    leonidas.ataca(hulk);

    expect(hulk.hp).toEqual(780);
  });

  it('deveria estar armado', function() {
    expect(leonidas.estaArmado()).toBeTruthy();
  });

  it('deveria não estar armado', function() {
    expect(hulk.estaArmado()).toBeFalsy();
  });

  it('deveria estar atingível', function() {
    leonidas.movePara(1, 2);
    chuck.movePara(1,1);

    expect(leonidas.estaAtingivel(chuck)).toBeTruthy();
  });

  it('deveria estar não atingível', function() {
    leonidas.movePara(4, 4);

    expect(leonidas.estaAtingivel(chuck)).toBeFalsy();
  });

  it('deveria se mover de um ponto a outro', function() {
    leonidas.movePara(1, 1);
    leonidas.movePara(4, 5);

    expect(leonidas.x).toEqual(4);
    expect(leonidas.y).toEqual(5);
  });

});
