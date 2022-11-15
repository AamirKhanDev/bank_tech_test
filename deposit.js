class Deposit {
  constructor(amount) {
    this.transactionType = "DEPOSIT"
    this.date = new Date().toLocaleString().split(',')[0]
    this.amount = amount
    this.resultingAmount
  }
}

module.exports = Deposit;