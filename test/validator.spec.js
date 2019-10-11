// importamos el objeto `validator`, que contiene la función `isValid`
import isValid from "../src/validator.js";

// describe('validator', () => {

  // it('debería ser un objeto', () => {
  //   expect(typeof isValid).toBe('object');
  // });

  describe('isValid', () => {

    it('debería ser una función', () => {
      expect(typeof isValid).toBe('function');
    });

    it('debería retornar true para "4137894711755904"', () => {
      // escribe aquí tu test
      expect(isValid("4137894711755904")).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      // escribe aquí tu test
      expect(isValid("1234567890")).toBe(false);
    });

  });

