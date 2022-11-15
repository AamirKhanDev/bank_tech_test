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
    transaction.resultingAmount = this.getBalance()
  }

  getBalance() {
    return this.balance
  }
  
  getStatement() {
    let statement  = "date || credit || debit || balance\n"
    this.listOfTransactions.map((transaction) => {
      let credit = transaction.transactionType === "DEPOSIT" ? 
        transaction.amount + " " : "";
      let debit = transaction.transactionType === "WITHDRAWAL" ?
        transaction.amount + " " : "";
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
    return !(typeof transaction.date === "string" && typeof transaction.amount === "number")
  }
}

module.exports = Account