class ListaNegociacoes {

  constructor( armadilha) {
    this._negociacoes = [];
    this._armadilha = armadilha;
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    this._armadilha(this);
    // Reflect.apply(this._armadilha, this._contexto, [this]);
  }

  esvazia() {
    this._negociacoes = [];
    this._armadilha(this);
    // Reflect.apply(this._armadilha, this._contexto, [this]);
  }

  get negociacoes() {
    return [].concat(this._negociacoes);
  }
}