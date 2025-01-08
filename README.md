# GoogleScriptFinance
Scripts that can be used in Google Sheets to help the finance life

Aqui eu criei três scripts interessantes.

CotacaoUSD - Vai retornar a ultima cotação do Dolar em relação à moeda Real. 
  OBS: Previamente essa opção estava disponivel pelo prório google finance, mas essa conversão foi recentemente removida pelo Google.

PriceAlertStock - Esse script vai te enviar um e-mail quando o preço de um ativo chegar no valor desejado para venda.

PriceAlertMoeda - Esse script vai te enviar um e-mail quando o valor da moeda chegar no valor desejado para compra.

Ai vai um passo a passo para a Cotação:
Antes de mais nada é necessário criar um Google Sheets novo, no seu Google Drive. Então ir em extensões e Apps Script.

![image](https://github.com/user-attachments/assets/cdb026f6-30aa-437d-865e-ce284ac2a9a4)

Renomeie o projeto e substitua a função para CotaçãoUSD então cole o código que está em [CotacaoUSD.js](https://github.com/marianalarab/GoogleScriptFinance/blob/main/src/CotacaoUSD.js)

![image](https://github.com/user-attachments/assets/112ce761-4ef1-4be4-b717-310a4ec84394)

Esta função está chamando a cotação direto no banco central e retornando em tipo Float.

Para usar a função no seu google sheet:

![image](https://github.com/user-attachments/assets/fe0d81b6-0e05-45d1-9f3e-004e84562745)



Vamos agora ver um passo a passo para o alerta da Moeda:
Adiocione mais um arquivo

![image](https://github.com/user-attachments/assets/5fadac0f-51c9-4f27-8560-e497a93bd5d6)

Cole esse código: [PriceAlertMoeda.js](https://github.com/marianalarab/GoogleScriptFinance/blob/main/src/PriceAlertMoeda.js)

Preencha a planilha da seguinte forma:

![image](https://github.com/user-attachments/assets/fc4d690e-dacf-49a2-805e-8c4edd793e1e)

Adicionar acionadores que irá executar o código em background

![image](https://github.com/user-attachments/assets/a9d15642-20ec-4873-a9d2-f0ebb2bba849)


Exemplo de e-mail gerado

![image](https://github.com/user-attachments/assets/abc4396e-531d-4c7a-8a78-72afd79727d4)

O mesmo pode ser feito para PriceAlertStock
