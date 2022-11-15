const Account = require('./account')
const Deposit = require('./deposit')

describe("account", () => {
  it("add funds to account and return the amount", () => {
    const deposit = new Deposit("15/11/2022", 1000)
    const account = new Account()
    account.addToAccount(deposit)
    expect(account.account).toEqual([deposit])
  });
});