const should = require('should');
const target = require('./index.js');


describe('#generate', () => {
  it('dnum = 1, length = 10', () => {
    target.generate('test', 1, 10).should.equal('sotjawnrk9');
  });
  it('dnum = 1, length = 27', () => {
    target.generate('test', 1, 27).should.equal('0.ewmoh9cujkrwgi9sotjawnrk9');
  });
  it('too long length', () => {
    (() => target.generate('test', 1, 28)).should.throw();
  });
  it('dnum = 2, length = 10', () => {
    target.generate('test', 2, 10).should.equal('ijypzdj9k9');
  });
  it('dnum = 2, length = 27', () => {
    target.generate('test', 2, 27).should.equal('0.o4gohik0k6vz4n0ijypzdj9k9');
  });
  it('dnum = 2, length = 10 : another', () => {
    target.generate('another', 2, 10).should.equal('wtm8syk3xr');
  });
  it('dnum = 2, length = 27 : another', () => {
    target.generate('another', 2, 27).should.equal('0.nadx3lozlvuybvlwtm8syk3xr');
  });
});
