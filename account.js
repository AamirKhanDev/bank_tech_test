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


 // const statement = () => {
 // }
}

module.exports = Account;