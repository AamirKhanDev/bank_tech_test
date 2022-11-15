const Withdrawal = require('../../withdrawal')


describe("withdrawal", () => {
  it("returns date of withdrawal", () => {
    const withdrawal = new Withdrawal("16/11/2022", 500)
    expect(withdrawal.date).toEqual("16/11/2022")
  });

  it("returns amount deposited", () => {
    const withdrawal = new Withdrawal("16/11/2022", 500)
    expect(withdrawal.amount).toEqual(500);
  });

});