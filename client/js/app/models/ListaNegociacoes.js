class ListaNegociacoes {

  constructor( armadilha) {
    this._negociacoes = [];
    this._armadilha = armadilha;
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  esvazia() {
    this._negociacoes = [];
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }
}