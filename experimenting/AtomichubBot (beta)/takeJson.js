$.getJSON('https://wax.api.atomicassets.io/atomicmarket/v1/sales?state=1&symbol=WAX&max_price=1550&collection_name=darkcountryh&match=Rancho%20Pack&collection_whitelist=darkcountryh&page=1&limit=1&order=desc&sort=created', function(data) {
    openTab(data)
});
function openTab(data){
    console.log(data.data[0].sale_id)
    window.open(`https://wax.atomichub.io/market/sale/${data.data[0].sale_id}`)
}


await fetch("https://wax.greymass.com/v1/chain/get_table_rows", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0",
        "Accept": "*/*",
        "Accept-Language": "ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3",
        "Content-Type": "text/plain;charset=UTF-8",
        "Origin": "https://wax.bloks.io/account/atomicdropsx?loadContract=true&tab=Tables&table=drops"
    },
    "referrer": "https://wax.bloks.io/",
    "body": "{\"json\":true,\"code\":\"atomicdropsx\",\"scope\":\"atomicdropsx\",\"table\":\"drops\",\"table_key\":\"\",\"lower_bound\":\"\",\"upper_bound\":\"\",\"index_position\":1,\"key_type\":\"\",\"limit\":100,\"reverse\":false,\"show_payer\":false}",
    "method": "POST",
    "mode": "cors"
});
