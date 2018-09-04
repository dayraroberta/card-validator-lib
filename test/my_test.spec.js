const chai = require('chai');
const mocha = require('mocha');
const verifyNumber = require('../index');
const expect = chai.expect;

describe('verifyNumber', () => {
  describe("#cardValidator", () => {

    describe('Quando o input está vazio ou não é um número', () => {
      it('Deve retornar um erro', () => {
        expect(() => verifyNumber.cardValidator('string')).to.throw('Insira um número.');
        expect(() => verifyNumber.cardValidator()).to.throw('Insira um número.');
        expect(() => verifyNumber.cardValidator('')).to.throw('Insira um número.');
      });
    });

    describe('Quando o input tem somente 1 dígito', () => {
      it('Deve retornar um erro', () => {
        expect(() => verifyNumber.cardValidator(1)).to.throw('O número do cartão deve ter mais de 1 dígito.');
      })
    });

    describe('Quando o número do cartão for inválido', () => {
      it('Deve retornar false', () => {
        expect(verifyNumber.cardValidator(778325476542354234)).to.be.equal(false);
      });
    });

    describe('Quando o número do cartão for válido', () => {
      it('Deve retornar true', () => {
        expect(verifyNumber.cardValidator(5463137899311855)).to.be.equal(true);
      });
    });
    
  });
});