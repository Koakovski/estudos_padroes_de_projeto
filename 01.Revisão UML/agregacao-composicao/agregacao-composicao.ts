/* 
  A associação entre dois objetos ocorre quando eles são completamente 
  independentes entre si mas eventualmente estão relacionados.
  É uma relação de muitos para muitos.
*/

class Endereco {
  // Código omitido
}

class Cliente {
  private _enderecos: Endereco[];

  adicionarEndereco(endereco: Endereco) {
    this._enderecos.push(endereco); // Este contato independe deste cliente
  }
}

/* 
  A agregação não deixa de ser uma associação mas existe uma exclusividade 
  e determinados objetos só podem se relacionar a um objeto específico.
  É uma relação de um para muitos.
*/

class NotaFiscal {
  // Código omitido
}

class Empresa {
  private _notasFiscais: NotaFiscal[];

  emitirNotaFiscal(notaFiscal: NotaFiscal) {
    this._notasFiscais.push(notaFiscal); // A nota existe sempre mesmo que o cliente não exista mais
  }
}

/* 
  A composição é uma agregação que possui dependência entre os objetos, ou seja, 
  se o objeto principal for destruído, os objetos que o compõe não podem existir mais.
  É uma relação de um para um .
*/

class Produto {
  // Código omitido
}

class Item {
  private _produto: Produto;
  private _quantidade: number;

  constructor(produto: Produto, quantidade: number) {
    this._produto = produto;
    this._quantidade = quantidade;
  }
}

class Carrinho {
  private _itens: Item[];

  adicionarItem(produto: Produto, quantidade: number) {
    this._itens.push(new Item(produto, quantidade)); // Este item só existe neste carrinho
  }
}
