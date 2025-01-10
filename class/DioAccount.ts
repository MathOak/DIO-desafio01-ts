export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    console.log('Deposito');
    if (!this.validateStatus()) return
    this.balance = this.balance + value
    console.log(`Voce depositou: R$${value.toFixed(2)}`)
  }

  withdraw = (value: number): void => {
    console.log('Saque');
    if (!this.validateStatus()) return
    if (this.balance >= value) {
      this.balance = this.balance - value
      console.log(`Voce sacou: R$${value.toFixed(2)}`)
    } else {
      console.log('Voce não possui saldo suficiente para esta operação')
    }
  }

  protected setBalance = (value: number): void => {
    this.balance = value
  }

  getBalance = (): number => {
    console.log(`Saldo atual: R$${this.balance.toFixed(2)}`)
    return this.balance
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
