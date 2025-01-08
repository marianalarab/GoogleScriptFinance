function PriceAlert() {
  // Pulls data from the spreadsheet
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    "Mariana"
  );
  let source = sheet.getRange("A:R");
  let data = source.getValues();

  //Prepares the email alert content
  let message = "Stocks: <br><br>";
  let send_message = false;

  //Loops through the cells in the spreadsheet to find cells where the stock fell below purchase price
  let n = 0;
  for (let i in data) {
    //Skips the first row
    if (n++ == 0) continue;

    //Loads the current row
    let row = data[i];

    console.log(row);
    let targetPrice = row[16];
    let currentPrice = row[5];
    let alertOn = row[17];

    //Once at the end of the list, exits the loop
    if (row[0] == "") break;

    //If value is below purchase price, adds stock ticker and difference to list of tax loss opportunities
    if (targetPrice <= currentPrice && alertOn == true ) {
      console.log("email for sent");
      message +=
        row[0] +
        ": Reached Target Price " +
        (parseFloat(row[16].toString()) ).toFixed(2).toString() +
        "<br>";
      send_message = true;
    }
  }
  if (!send_message) return;

  MailApp.sendEmail({
    to: SpreadsheetApp.getActiveSpreadsheet().getOwner().getEmail(),
    subject: "Target Price Reached ",
    htmlBody: message,

  });
}
