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
      if (transaction.transactionType === "DEPOSIT") {
        this.balance += transaction.amount
      } else if (transaction.transactionType === "WITHDRAWAL"){
        this.balance -= transaction.amount 
      }
      else {
        return "Unrecognised transaction type"
      }
    })
  }


  getBalance () {
    return this.balance
  }


  getStatement() {
    let statement  = "date || credit || debit || balance\n"
    this.account.map((transaction) => {
      let date = transaction.date
      let credit = "";
      let debit = "";
      if (transaction.transactionType === "DEPOSIT") {
        credit = transaction.amount + " "
        this.balance += transaction.amount
    } else if (transaction.transactionType === "WITHDRAWAL") {
        debit = transaction.amount + " "
        this.balance -= transaction.amount
  }
  
      statement += `${date} || ${credit}|| ${debit}|| ${this.balance} ||\n`
    })
    return statement
  }
}

module.exports = Account;