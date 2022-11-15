const Deposit = require("./deposit")

class Account {
  constructor() {
    this.account = []
    this.balance = 0.00
  }
  addToAccount(transaction) {
    this.account.push(transaction)
  }

  calculate() {
    this.account.map((transaction) => {
      if (transaction instanceof Deposit) {
        this.balance += transaction.amount
      } else {
        this.balance += transaction.amount * (-1)
      }
      console.log(this.balance)
    })
  }


  getBalance () {
    return this.balance
  }


  getStatement() {
    let statement  = "date || credit || debit || balance\n"
    this.account.map((transaction) => {
      const date = transaction.date
      let credit = "";
      let debit = "";
        if (transaction instanceof Deposit) {
        credit = transaction.amount + " "
        this.balance += transaction.amount
      }
      else {
        debit = transaction.amount + " "
        this.balance += transaction.amount * (-1)
      }
      statement += `${date} || ${credit}|| ${debit}|| ${this.balance} ||\n`
    })
    return statement
  }
}

module.exports = Account;