function calculateTotal() {
    let peSellPrice = parseFloat(document.getElementById("pe-sell-price").value);
    let peBuyPrice = parseFloat(document.getElementById("pe-buy-price").value);
    let ceSellPrice = parseFloat(document.getElementById("ce-sell-price").value);
    let ceBuyPrice = parseFloat(document.getElementById("ce-buy-price").value);
    let capital = parseFloat(document.getElementById("Capital").value);
    let lot = parseFloat(document.getElementById("lot").value)
    let lotQty = parseFloat(document.getElementById("lotQty").value)
    let TotalQty = lot * lotQty

    let pointMaxProfit = (ceSellPrice + peSellPrice) - (peBuyPrice + ceBuyPrice);
    let totalMaxProfit = pointMaxProfit * TotalQty;
    let stoploss = (peSellPrice + ceSellPrice) + (ceBuyPrice + peBuyPrice);


    let percentageProfit = (totalMaxProfit / capital) * 100;
    document.getElementById("result").innerHTML = `<div class="stoploss">
        <h1 id="stoploss-value">stoploss point: ${stoploss}</h1>
    </div>
    <div class="pointMaxProfit">
        <h1 id="pointMaxProfit-value">Max Point Profit: ${pointMaxProfit}</h1>
    </div>
    <div class="totalMaxProfit">
        <h1 id="totalMaxProfit-value">Max Profit: ${totalMaxProfit} rs.</h1>
    </div>
    <div class="totalMaxProfit">
        <h1 id="totalMaxProfit-value">ROI: ${Math.floor(percentageProfit * 10) / 10}%</h1>
    </div>`;

}

