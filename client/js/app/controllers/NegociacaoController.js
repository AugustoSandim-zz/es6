class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor')
    this._listaNegociacoes = new ListaNegociacoes();

    this._negociacoesView = new NegociacoesView($('#negociacoesView'));
    this._negociacoesView.update(this._listaNegociacoes);

  }

  adiciona(event) {
    event.preventDefault();
    
    this._listaNegociacoes.adiciona(this._criaNegociacao());

    console.log('teste');
    // this._negociacoesView.update(this._listaNegociacoes);
    this._limpaFormulario();
  }

  _criaNegociacao() {
    return new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value);
  }

  _limpaFormulario() {
    console.log('limpar');
    this._inputData.value = '';
    this._inputQuantidade = 1;
    this._inputValor = 0.0;

    this._inputData.focus();
  }
}