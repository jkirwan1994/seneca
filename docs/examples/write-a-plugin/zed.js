
function zed( options ) {
  console.log( this.fixedargs.plugin$.name, this.fixedargs.plugin$.tagg, options )
}

var seneca = require('../../..')()

seneca.use( zed )
