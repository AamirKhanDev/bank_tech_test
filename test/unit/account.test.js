const Account = require('../../account')
const Deposit = require('../../deposit')
const Withdrawal = require('../../withdrawal')

describe("account", () => {
  it("add deposit to account and return deposit", () => {
    const fakeDeposit = {
      date: "15/11/2022",
      amount: 1000
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    expect(account.account).toEqual([fakeDeposit])
  });

  it("add withdrawal to account and return withdrawal", () => {
    const fakeWithdrawal = {
      date: "16/11/2022",
      amount: 1000
    }
    const account = new Account()
    account.addToAccount(fakeWithdrawal)
    expect(account.account).toEqual([fakeWithdrawal])
  });

  it("shows balance is 0 / empty", () => {
    const account = new Account()
    expect(account.getBalance()).toEqual(0.00)
  });

  it("shows balance after adding deposit", () => {
    const fakeDeposit = {
      date: "15/11/2022",
      amount: 1000,
      transactionType: "DEPOSIT"
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    console.log(account.account)
    account.calculate()
    expect(account.getBalance()).toEqual(1000.00)
  });

  it("shows balance after deposit and withdrawal", () => {
    const fakeDeposit = {
      date: "15/11/2022",
      amount: 1000,
      transactionType: "DEPOSIT"
    }
    const fakeWithdrawal = {
      date: "16/11/2022",
      amount: 500,
      transactionType: "WITHDRAWAL"
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    account.addToAccount(fakeWithdrawal)
    account.calculate()
    expect(account.getBalance()).toEqual(500.00)
  });

  it("returns statement without any deposit or withdrawal", () => {
    const account = new Account()
    expect(account.getStatement()).toEqual("date || credit || debit || balance\n")
  });

  it("returns statement after adding a deposit to the account", () => {
    const fakeDeposit = {
      date: "15/11/2022",
      amount: 1000,
      transactionType: "DEPOSIT"
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    expect(account.getStatement()).toEqual("date || credit || debit || balance\n15/11/2022 || 1000 || || 1000 ||\n")
  });

  it("returns statement after adding deposit and withdrawal", () => {
    const fakeDeposit = {
      date: "15/11/2022",
      amount: 1000,
      transactionType: "DEPOSIT"
    }
    const fakeWithdrawal = {
      date: "16/11/2022",
      amount: 500,
      transactionType: "WITHDRAWAL"
    }
    const account = new Account()
    account.addToAccount(fakeDeposit)
    account.addToAccount(fakeWithdrawal)
    expect(account.getStatement()).toEqual("date || credit || debit || balance\n15/11/2022 || 1000 || || 1000 ||\n16/11/2022 || || 500 || 500 ||\n")
  })
})