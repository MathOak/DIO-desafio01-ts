import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount('Nath', 10)
console.log(peopleAccount.getName())
peopleAccount.deposit(100)
peopleAccount.getBalance()
peopleAccount.withdraw(200)
peopleAccount.withdraw(100)
peopleAccount.getBalance()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 40)
console.log(companyAccount.getName())
companyAccount.deposit(1000)
companyAccount.getBalance()
companyAccount.withdraw(200)
companyAccount.getBalance()
companyAccount.getLoan(3000)
companyAccount.getBalance()
