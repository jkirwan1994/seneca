
function zed( options ) {
  console.log( this.options() )
}

var seneca = require('../../..')()

seneca.use( zed )
