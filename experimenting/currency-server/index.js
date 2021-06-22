import express from "express";
import cors from 'cors';
const app = express();
import rp from "request-promise";

const port = 3000
// app.use('/',)
app.use(cors({origin: 'http://localhost:4200'}));

app.get('/', (req, res) => {
    const requestOptions = {
        method: "GET",
        uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        qs: {
            start: "1",
            limit: "20",
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
        console.log("API call response:", response);
        res.status(201).send(response.data)
    })
    .catch((err) => {
        console.log("API call error:", err.message);
    });
})


app.listen(port, () => {
    console.log(`Running at port ${port}`);
});
