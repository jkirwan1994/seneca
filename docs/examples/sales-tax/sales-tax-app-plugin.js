module.exports = function (options) {
  var seneca = this
  var plugin = 'shop'
  var country = options.country || 'IE'
  var rate = options.rate || 0.23
 
  var calc = function (net) {
    return net * (1 + rate)
  }

  seneca.add({ role: plugin, cmd: 'salestax' }, function (msg, callback) {
    var total = calc(parseFloat(msg.args.query.net, 10))
    seneca.log.debug('apply-tax', msg.args.query.net, total, rate, country)
    callback(null, { total: total })
  })
  
  return {
    name: plugin
  }
}
