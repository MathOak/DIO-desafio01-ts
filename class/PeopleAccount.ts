import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    console.log('Deposito');
    this.setBalance(this.getBalance() + value + 10)
    console.log(`Voce depositou: R$${value.toFixed(2)}`)
  }
}