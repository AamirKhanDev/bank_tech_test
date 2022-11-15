class Withdrawal {
  constructor(amount) {
    this.transactionType = "WITHDRAWAL"
    this.date = new Date().toLocaleString().split(',')[0]
    this.amount = amount
    this.resultingAmount
  }
}

module.exports = Withdrawal;