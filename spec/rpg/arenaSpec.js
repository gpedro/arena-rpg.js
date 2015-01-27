var Arena = require('../../src/arena');

describe('Arena', function() {
  var arena;

  beforeEach(function() {
    arena = new Arena(20, 20);
  });

  it('Criar arena 20x20', function() {
    expect(arena.width).toEqual(20);
    expect(arena.height).toEqual(20);
  });

});
