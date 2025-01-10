import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    console.log('Emprestimo');
    if (!this.validateStatus()) return
    this.deposit(value)
    console.log(`Voce pegou um empréstimo de: R$${value.toFixed(2)}`)
  }
}
