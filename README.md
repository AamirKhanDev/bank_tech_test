# Bank tech test

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
**When** he/she prints her bank statement  
**Then** he/she would see
```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```
## Design
### Diagram of the class systems

                           ┌──────────────────┐
                           │ class Statement  │
                           │                  │
                           │ addToAccount     │
                           │                  │
                           │  balance         │
                           │                  │
                      ┌───►| statements       │◄──┐
                      │    │                  │   │
                      │    │                  │   │
                      │    │                  │   │
                      │    └──────────────────┘   │
                      │                           │
         ┌────────────┴────┐                 ┌────┴────────────┐
         │ class Deposit   │                 │class Withdrawal │
         │                 │                 │                 │
         │ initialize      │                 │ initialize      │
         │                 │                 │                 │
         │                 │                 │                 │
         └─────────────────┘                 └─────────────────┘

## Design of their interfaces
```
class Deposit {
  constructor(date, amount) {     //date is a string, amount is an integer
    this.date = date
    this.amount = amount
  }
}
class Withdrawal {
  constructor(date, amount) {     //date is a string, amount is an integer
    this.date = date
    this.amount = amount
  }
}
class Account {
  constructor() {
    this.account = []
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
#### adds a deposit to the account and returns balance
```
const deposit = new Deposit("20/09/2022",1000)
const account = new account()
account.addToAccount(deposit)
account.balance # => 1000.00
```
#### adds a deposit to the account and returns statement
```
const deposit = new Deposit("20/09/2022",1000)
const account = new account()
account.addToAccount(deposit)
account.statement # =>
date || credit || debit || balance
20/09/2022 || 1000.00 || || 1000.00
```
#### returns the balance after adding a deposit to the account, and withdrawel from the account

```
const deposit = new Deposit("20/09/2022",1000)
const withdrawal = new Withdrawal("20/09/2022",1000)
const account1 = new account()
account.addToAccount(deposit)
account.addToAccount(withdrawal)
	@@ -123,7 +123,7 @@ account.balance # => 0

```
const deposit = new Deposit("20/09/2022",1000)
const withdrawal = new Withdrawal("20/09/2022",1000)
const account1 = new account()
account.addToAccount(deposit)
account.addToAccount(withdrawal)
	@@ -162,3 +162,7 @@ withdrawal.date # => "20/09/2022"
const withdrawal = new Withdrawal("20/09/2022",1000)
withdrawal.amount # => 1000.00
```