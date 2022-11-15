# Bank tech test

## The Application

This app logs deposits and withdrawals from a bank account and is to be used from within the JavaScript console.
The Account object acts as the interface for the app.  
All transactions i.e. Deposit and Withdrawals, are stored within the Account's list of transactions, with their transactions details stored as properties.  
Within the account object, you can add transaction to account and be able to view your current balance and statement.
### To run

- Clone this repository git clone https://github.com/AamirKhanDev/bank_tech_test.
- Open node in the terminal (ensure you have node installed).
- Install dependancies `npm install`.
- Run tests via `jest`
- Create an account let account = new Account;.
- Create a Deposit and/or Withdrawal object:  
  `let deposit = new Deposit("15/11/2022", 1000)`  
  `let withdrawal = new Withdrawal("16/11/2022", 500)`.
- Get your current account balance printed to the console using account.getBalance().
- Get your current account statement printed to the console using account.getStatement().
## Specification
### Requirements

- You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).
### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** he/she prints their bank statement  
**Then** he/she would see
```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```
## Demo

<img
  src="./bank-tech-test-demo.png"
  alt="Alt Demo"
  title="Demo"
  style="display: inline-block; margin: 0 auto; max-width: 300px">


### Diagram of the class systems
                            ┌──────────────────┐
                            │ class Account    │
                            │                  │
                            │ initialize:      │
                            │listoftransactions|
                            │balance           │
                            │                  │
                            │ addToAccount     │
                       ┌───►| getBalance       │◄──┐
                       │    │ getStatement     │   │
                       │    │                  │   │
                       │    │                  │   │
                       │    └──────────────────┘   │
                       │                           │
          ┌────────────┴────┐                 ┌────┴────────────┐
          │ class Deposit   │                 │class Withdrawal │
          │                 │                 │                 │
          │ initialize:     │                 │ initialize:     │
          │                 │                 │                 │
          │ transaction type│                 │ transaction type│
          │ date            │                 │ date            │
          │ amount          │                 │ amount          │
          │ resulting amount│                 │ resulting amount│
          │                 │                 │                 │
          │                 │                 │                 │
          └─────────────────┘                 └─────────────────┘
          
## Design of their interfaces
```
class Deposit {
   //date is a string, amount is an integer
  constructor(amount) {
    this.transactionType = "DEPOSIT"
    this.date = new Date().toLocaleString().split(',')[0]
    this.amount = amount
    this.resultingAmount
  }
}
class Withdrawal {
   //date is a string, amount is an integer
  constructor(amount) {
    this.transactionType = "WITHDRAWAL"
    this.date = new Date().toLocaleString().split(',')[0]
    this.amount = amount
    this.resultingAmount
  }
  
}
class Account {
  constructor() {
    this.listofTransactions = []
  }
  const addToAccount = () => {
  }
  const balance = () => {
  }
  const statement = () => {
  }
}
```

## Examples of Integration tests

#### adds deposit to account

```
const deposit = new Deposit(1000)
const account = new account()
account.addToAccount(deposit)
account.account # => [deposit]
```

#### adds withdrawal to account

```
const withdrawal = new Withdrawal(1000)
const account = new account()
account.addToAccount(withdrawal)
account.account # => [withdrawal]
```

#### adds a deposit to the account and returns balance
```
const deposit = new Deposit(1000)
const account = new account()
account.addToAccount(deposit)
account.balance # => 1000.00
```
#### returns the balance after adding a deposit to the account, and withdrawal from the account

```
const deposit = new Deposit(1000)
const withdrawal = new Withdrawal(500)
const account1 = new account()
account.addToAccount(deposit)
account.addToAccount(withdrawal)
account.balance # => 500

```
#### returns the statement after adding a deposit to the account, and withdrawal from the account
```
const deposit = new Deposit(1000)
const withdrawal = new Withdrawal(1000)
const account1 = new account()
account.addToAccount(deposit)
account.addToAccount(withdrawal)
account.statment # =>
date || credit || debit || balance
20/09/2022 || || 1000.00 || 0
20/09/2022 || 1000.00 || || 1000.00
```
## Examples of Unit tests
#### returns date of deposit
```
const deposit = new Deposit(1000)
let date = new Date().toLocaleString().split(',')[0]
deposit.date # => `${date}`
```
#### returns amount of deposit
```
const deposit = new Deposit(1000)
deposit.amount # => 1000.00
```
#### returns date of withdrawal
```
const withdrawal = new Withdrawal(1000)
let date = new Date().toLocaleString().split(',')[0]
withdrawal.date # =>  `${date}`
```
#### returns amount of withdrawal
```
const withdrawal = new Withdrawal(1000)
withdrawal.amount # => 1000.00
```

## Edge cases
```
- If customer tries to add a transaction i.e. Deposit and Withdrawal, where the amount is not a number
- If customer tries to withdraw money that’s more than what's in their current account
```
