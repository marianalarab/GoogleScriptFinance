function PriceAlertMoeda() {
  // Pulls data from the spreadsheet
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    "AlertaMoeda"
  );
  let source = sheet.getRange("A:D");
  let data = source.getValues();

  //Prepares the email alert content
  let message = "Moeda: <br><br>";

  let send_message = false;
 
  //Loops through the cells in the spreadsheet to find cells where the stock fell below purchase price
  let n = 0;
  for (let i in data) {
    //Skips the first row
    if (n++ == 0) continue;

    //Loads the current row
    let row = data[i];
    let targetPrice = row[2];
    let currentPrice = row[1];
    let alertOn = row[3];

    //Once at the end of the list, exits the loop
    if (row[0] == "") break;

    //If value is below purchase price, adds stock ticker and difference to list of tax loss opportunities
    if (currentPrice <= targetPrice   && alertOn == true ) {
      console.log("email for sent");
      message +=
        row[0] +
        ": atingiu o preço alvo de " +
        (parseFloat(row[2].toString()) ).toFixed(2).toString() +
        "<br>";
      send_message = true;
    }
  }
  if (!send_message) return;

  MailApp.sendEmail({
    to: SpreadsheetApp.getActiveSpreadsheet().getOwner().getEmail(),
    subject: "Moeda com Preço Alvo Atingido ",
    htmlBody: message,

  });
  
}
