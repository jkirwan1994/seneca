
function zed( options ) {
  console.log( this.fixedargs.plugin$.name, this.fixedargs.plugin$.tag, options )
}

var seneca = require('../../..')()
seneca.options('./dev.options.js')

seneca.use( zed )
