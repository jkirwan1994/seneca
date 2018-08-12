var Express = require('express')
var Web = require('seneca-web')

var seneca = require('../../..')()

var Routes = {
  prefix: '/shop',
  pin: 'role:shop, cmd:*',
  map: {
    salestax: { GET: true }
  }
}

seneca.use('sales-tax-app-plugin', {country: 'IE', rate: 0.23})
seneca.use('sales-tax-app-plugin', {country: 'UK', rate: 0.20})

seneca.use(Web, {
  context: Express(),
  routes: Routes,
  adapter: require('seneca-web-adapter-express'),
  parseBody: false
})

seneca.ready(function () {
  var app = seneca.export('web/context')()
 
  app.listen(3000)
})


