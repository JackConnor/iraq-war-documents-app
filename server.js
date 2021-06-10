function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    // if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    //     return res.redirect('https://' + req.get('host') + req.url);
    // }
    next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);

app.use(express.static('./dist/iraqWar'));
console.log('APP SET')
app.get('/*', function(req, res) {
  console.log('GOT ONE')
  console.log(req)
  res.sendFile('index.html', {root: './dist/iraqWar/'});
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Listening on 8080');
});
