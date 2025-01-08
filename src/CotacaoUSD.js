function CotacaoUSD() {

  let url = 'https://www3.bcb.gov.br/bc_moeda/rest/cotacao/fechamento/ultima/1/220/2099-01-06';
  let xml = UrlFetchApp.fetch(url).getContentText();
  let document = XmlService.parse(xml);
  let root = document.getRootElement();

  let cotacoes = root.getChild('cotacoes');
  let taxaVenda = cotacoes.getChild('taxaVenda');

  return parseFloat(taxaVenda.getValue());

}
