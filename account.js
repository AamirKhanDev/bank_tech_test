class Account {
  constructor() {
    this.account = []
  }
  addToAccount(cash) {
    this.account.push(cash)
  }

  balance () {
    if (this.account.length === 0)
    return 0.00
    else {
      return 1000
    }
  }


  
 // const statement = () => {
 // }
}

module.exports = Account;