const Account = require('../../account')
const Deposit = require('../../deposit')
const Withdrawal = require('../../withdrawal')

describe("account", () => {
  it("add deposit to account and return deposit", () => {
    const fakeDeposit = {
      date:() => "15/11/2022",
      amount:() => 1000
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    expect(account.account).toEqual([fakeDeposit])
  });

  it("add withdrawal to account and return withdrawal", () => {
    const fakeWithdrawal = {
      date:() => "16/11/2022",
      amount:() => 1000
    }
    const account = new Account()
    account.addToAccount(fakeWithdrawal)
    expect(account.account).toEqual([fakeWithdrawal])
  });
})