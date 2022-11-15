const Deposit = require('../../deposit')


describe("deposit", () => {
  it("returns date of deposit", () => {
    const deposit = new Deposit("15/11/2022", 1000)
    expect(deposit.date).toEqual("15/11/2022")
  });

  it("returns amount deposited", () => {
    const deposit = new Deposit("15/11/2022", 1000)
    expect(deposit.amount).toEqual(1000);
  });


});
