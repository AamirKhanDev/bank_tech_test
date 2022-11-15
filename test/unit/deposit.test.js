const Deposit = require('../../src/deposit')

describe("deposit", () => {
  let date = new Date().toLocaleString().split(',')[0]

  it("returns date of deposit", () => {
    const deposit = new Deposit(1000.00)
    expect(deposit.date).toEqual(`${date}`)
  });

  it("returns amount of deposit", () => {
    const deposit = new Deposit(1000.00)
    expect(deposit.amount).toEqual(1000.00)
  });
})