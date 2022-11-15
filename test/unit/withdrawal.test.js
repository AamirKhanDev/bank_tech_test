const Withdrawal = require('../../src/withdrawal')

describe("deposit", () => {
  let date = new Date().toLocaleString().split(',')[0]

  it("returns date of withdrawal", () => {
    const withdrawal = new Withdrawal(1000)
    expect(withdrawal.date).toEqual(`${date}`)
  });

  it("returns amount of withdrawal", () => {
    const withdrawal = new Withdrawal(1000)
    expect(withdrawal.amount).toEqual(1000.00)
  });
});