const { multiplicacao } = require("./multiplicacao");

test('multiplicacao de dois valores', () => {
    expect(multiplicacao(2, 4)).toBe(8);
});