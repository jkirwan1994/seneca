var seneca = require('../../..')()

seneca.add({cmd: 'salestax'}, function (args, callback) {
  seneca.act({cmd: 'config', prop: 'rate'}, function (err, result) {
    if (err) return console.error(err)
    var rate = parseFloat(result.value)
    var total = args.net * (1 + rate)
    callback(null, {total: total})
  })
})

seneca.client({pin: {cmd: 'config'}, port: 9090})

seneca.ready(function () {
  seneca.act({cmd: 'salestax', net: 100}, function (err, result) {
    if (err) return console.error(err)
    console.log(result.total)
    seneca.close()
  })
})
