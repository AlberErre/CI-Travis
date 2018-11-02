const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.send('<iframe src="https://giphy.com/embed/Efpfk11XWXwTSKqgV2" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>');
});

app.get('/fox', function (req, res) {
    res.send('<iframe width="560" height="315" src="https://www.youtube.com/embed/jofNR_WkoCE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
});

app.listen(PORT, function () {
    console.log('Server is running, port ' + PORT);
});