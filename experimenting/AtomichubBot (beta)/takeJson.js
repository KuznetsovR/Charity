$.getJSON('https://wax.api.atomicassets.io/atomicmarket/v1/sales?state=1&symbol=WAX&max_price=1550&collection_name=darkcountryh&match=Rancho%20Pack&collection_whitelist=darkcountryh&page=1&limit=1&order=desc&sort=created', function(data) {
    openTab(data)
});
function openTab(data){
    console.log(data.data[0].sale_id)
    window.open(`https://wax.atomichub.io/market/sale/${data.data[0].sale_id}`)
}