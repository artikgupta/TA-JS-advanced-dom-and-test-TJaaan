const { checkFive, getWinner } = require("./index");

test("4 is less than 5", () => {
  expect(checkFive(4)).toBe("4 is less than 5.");
});

test("5 is equal to 5", () => {
  expect(checkFive(5)).toBe("5 is equal to 5.");
});

test("7 is greater than 5 ", () => {
  expect(checkFive(7)).toBe("5 is equal to 5.");
});

test("if guess1 is rock and guesss2 is paper then player1 wins", () => {
  expect(getWinner(Paper, Rock)).toBe("Player 1 wins!");
});

test("if guess1 is Paper and guesss2 is Paper then player1 wins ", () => {
  expect(getWinner(Scissor, Paper)).toBe("Player 1 wins!");
});

test("if guess1 is Paper and guesss2 is Paper then player1 wins ", () => {
  expect(getWinner(Scissor, Paper)).toBe("Player 1 wins!");
});

test("if guess1 is Rock and guesss2 is Scissors then player1 wins ", () => {
  expect(getWinner(Rock, Scissors)).toBe("Player 1 wins!");
});
