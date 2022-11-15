const Account = require('./account')
const Deposit = require('./deposit')
const Withdrawal = require('./withdrawal')

describe("account", () => {
  it("add funds to account and return the amount", () => {
    const deposit = new Deposit("15/11/2022", 1000)
    const account = new Account()
    account.addToAccount(deposit)
    expect(account.account).toEqual([deposit])
  });

  it("withdraws from current balance and displays new balance", () => {
    const withdrawal = new Withdrawal("16/11/2022", 500)
    const account = new Account()
    account.addToAccount(withdrawal)
   expect(account.account).toEqual([withdrawal])
  });

  it("shows balance after adding deposit", () => {
    const deposit = new Deposit("15/11/2022", 1000)
    const account = new Account()
    account.addToAccount(deposit)
    expect(account.balance()).toEqual(1000)
  })

});