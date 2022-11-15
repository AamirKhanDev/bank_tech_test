class Account {
  constructor() {
    this.listOfTransactions = []
    this.balance = 0.00
  }

  addToAccount(transaction) {
    if (this._isTransactionPropertiesInvalid(transaction)) {
      return "Unrecognised transaction type" 
    }
    if (this._isInsufficientFunds(transaction)) { 
      return "Withdraw amount exceeds funds"
    }
    this.listOfTransactions.push(transaction)
    this._updateBalance(transaction)
    transaction.resultingAmount = parseFloat(this.getBalance()).toFixed(2)
  }

  getBalance() {
    return this.balance
  }
  
  getStatement() {
    let statement  = "date || credit || debit || balance\n"
    this.listOfTransactions.map((transaction) => {
      const amount = parseFloat(transaction.amount).toFixed(2)
      const credit = transaction.transactionType === "DEPOSIT" ? amount + " " : "";
      const debit = transaction.transactionType === "WITHDRAWAL" ? amount + " " : "";
      statement += `${transaction.date} || ${credit}|| ${debit}|| ${transaction.resultingAmount}\n`
    })
    return statement
  }

  _isInsufficientFunds(transaction) {
    return transaction.transactionType === "WITHDRAWAL"
      && transaction.amount > this.balance
  }

  _updateBalance(transaction) {
    if (transaction.transactionType === "DEPOSIT") {
      this.balance += transaction.amount
    } else if (transaction.transactionType === "WITHDRAWAL") {
      this.balance -= transaction.amount
    }
  }
  
  _isTransactionPropertiesInvalid(transaction) {
    return !(typeof transaction.amount === "number")
  }
}

module.exports = Account