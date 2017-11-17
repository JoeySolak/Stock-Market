//imports your code to be tested
const Stock = require("./stock.js");
const Portfolio = require("./portfolio.js");

//Imports my code to run your examples against the economic forecast
//const Forecast = require("./forcast");

function main(){

    //create all of your stocks
    let s1 = new Stock("Amazon Inc","AMZN","NASDAQ",1123.86,41);
    let s2 = new Stock("Apple","APPL","NASDAQ",175.67,10);
    let s3 = new Stock("Activision Blizzard Inc","ATVI","NASDAQ",62.97,5);
    let s4 = new Stock("Sony","SNE","NYSE",45.33,5);

    //build your Portfolio
    let myport = new Portfolio();
    myport.add();
    myport.add();
    myport.add();
    myport.add();

    //generate a test forcast
    let economicStorm = new Forecast(myport);
    console.log(economicStorm);

    //build prediction
}

main();
