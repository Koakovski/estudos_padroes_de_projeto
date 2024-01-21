/* 
[ - ] private
[ + ] public
[ # ] protected

*/

class UmaClasse {
  constructor(
    private nome: string,
    public sobrenome: string,
    protected idade: number
  ) {}

  public getNome(): string {
    return this.nome;
  }

  public getIdade(): number {
    return this.idade;
  }

  public setNome(nome: string) {
    this.nome = nome;
  }
  public setIdade(idade: number) {
    this.idade = idade;
  }
}
