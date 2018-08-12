
function zed( options ) {
  console.log( this.context.name, this.context.tag, options )
}

var seneca = require('../../..')()
seneca.options('./dev.options.js')

seneca.use( zed )
