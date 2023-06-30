const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    axios
        .get('https://api.thingspeak.com/channels/2208191/feeds.json?api_key=0XMI4JQ8B87I1Q3Z&results=2')
        .then((response) => {
            const data = response.data.feeds;
            const voltage2 = data[1].field1;   
            const current2 = data[1].field2;
            const power2 = data[1].field3;
            console.log(voltage2, current2, power2);
            res.render('main', { voltage2, current2, power2 });
        })
});

app.get('/input', (req, res) => {
    res.render('input');
});

app.post('/input', (req, res) => {
    const voltage = req.body.voltage;
    const current = req.body.current;
    const power = req.body.power;
    console.log(voltage, current, power);
    axios.get(`https://api.thingspeak.com/update?api_key=UOZ5AGXNJW3ES06Q&field1=${voltage}&field2=${current}&field3=${power}`)
    .then((response) => {
        res.redirect('/');
    })
    .catch((err) => {
        res.redirect('/input');
    });
  });
  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});