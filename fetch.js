let stocks = [];
let stockls;

document.getElementById("searchBar").addEventListener("keyup", (e) => {
	let stock1 = stocks;
	let a = 0;
	for (const i in stock1) {
		if (stock1[i].symbol.toLowerCase() != e.target.value.toLowerCase()) {
			a += 1;
		}
	}

	async function fetchapi() {
		if (a == stock1.length) {
			await fetch(
				`https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/quote?symbols=${e.target.value}`,
				{
					method: "GET",
					headers: {
						"x-rapidapi-host":
							"stock-data-yahoo-finance-alternative.p.rapidapi.com",
						"x-rapidapi-key":
							"a5d0d6aeebmshb035568326931a4p160069jsn76fdafc068cd",
					},
				}
			)
				.then((response) => {
					return response.json();
				})
				.then((dataobj) => {
					if (dataobj.quoteResponse.result.length != 0) {
						stock1.push(dataobj.quoteResponse.result[0]);
					}
				})
				.catch((err) => {
					console.error(err);
				});
		}

		const filterStocks = stock1.filter((stock) => {
			if (stock.quoteType == "EQUITY") {
				return (
					stock.longName.toLowerCase().includes(e.target.value.toLowerCase()) ||
					stock.symbol.toLowerCase().includes(e.target.value.toLowerCase())
				);
			}
		});
		displayStocks(filterStocks);
	}

	fetchapi().catch((e) => {
		console.log(e);
	});
});

fetch(
	"https://stock-data-yahoo-finance-alternative.p.rapidapi.com/ws/screeners/v1/finance/screener/predefined/saved?scrIds=day_gainers&count=250",
	{
		method: "GET",
		headers: {
			"x-rapidapi-host": "stock-data-yahoo-finance-alternative.p.rapidapi.com",
			"x-rapidapi-key": "a5d0d6aeebmshb035568326931a4p160069jsn76fdafc068cd",
		},
	}
)
	.then((response) => {
		return response.json();
	})
	.then((dataobj) => {
		console.log(dataobj);
		stocks = dataobj.finance.result[0].quotes;
		displayStocks(stocks);
	})
	.catch((err) => {
		console.error(err);
	});

const displayStocks = (stocks) => {
	let x = -1;
	stockls = stocks;
	const htmlString = stocks
		.map((stocks) => {
			x += 1;
			return `
                <div class="stock">
        <div class="main">
        <div class="name">
            ${stocks.longName}
        </div>
        <div class="id ${
					stocks.twoHundredDayAverageChangePercent.toFixed(2) >= 0
						? "green"
						: "red"
				}" >
            
            ${stocks.symbol}
        </div>
        </div>
        <hr id="divs">
        <div class="details">
            <div class="detail">
                Price : <span>  ${stocks.regularMarketPrice} ${
				stocks.currency
			} </span> 
            </div>
            <hr id="div">
            <div class="detail">
                Range : <span id="range"> 0.05 - 0.08</span> USD
            </div>
            <hr id="div">
            <div class="detail">
                Regular Market Change : <span id="rmc">${stocks.regularMarketChange.toFixed(
									2
								)} (${stocks.regularMarketChangePercent.toFixed(2)}%) </span>
            </div>
            <hr id="div">
            <div class="detail">
                Average Change Percentage : <span id="acp">${stocks.twoHundredDayAverageChangePercent.toFixed(
									2
								)}%</span>
            </div>
        </div>
    
    </div>`;
		})
		.join("");
	document.getElementById("stockList").innerHTML = htmlString;
};

// <div class="stocks" id="a${x}" onclick="let str = JSON.stringify(stockls[${x}]);
// str = str.replace(/'/i, '');
// str = str.replace(/{/i, '');
// str = str.replace(/}/i, '');
// var arr = str.split(',');
// document.getElementById('details').innerHTML = arr.join('\\n');
// document.getElementById('details').style.color = 'white'; ">
//     <div class="box1">
// 	<h1 style="color:${
// 					stocks.twoHundredDayAverageChangePercent.toFixed(2) >= 0
// 						? "green"
// 						: "red"
// 				};" >${stocks.symbol}</h1></div>
//     <div class="box2">
// 	<h2>${stocks.longName}</h2><hr>
//     <h3>Price : ${stocks.regularMarketPrice} ${
// 	stocks.currency
// } | Range : ${stocks.regularMarketDayRange}</h3>
//     <h3>Regular Market Change : ${stocks.regularMarketChange.toFixed(
// 						2
// 					)} (${stocks.regularMarketChangePercent.toFixed(2)}%)</h3>
//     <h3>Average Change Percentage : ${stocks.twoHundredDayAverageChangePercent.toFixed(
// 						2
// 					)}%</h3></div>
// </div><br><br></br>
