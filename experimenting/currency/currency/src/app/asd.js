const obj = {
  func() {
    const rp = require("request-promise");
    const requestOptions = {
      method: "GET",
      uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      qs: {
        start: "1",
        limit: "5",
        convert: "USD",
      },
      headers: {
        "X-CMC_PRO_API_KEY": "25296a12-f3b9-4083-913b-0d8dd28bdfec",
      },
      json: true,
      gzip: true,
    };

    rp(requestOptions)
      .then((response) => {
        console.log("API call response:", response.data[0].quote.USD.price);
      })
      .catch((err) => {
        console.log("API call error:", err.message);
      });
  },
};

export { obj };
