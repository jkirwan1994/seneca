
function zed( options ) {
  console.log( this.fixedargs.plugin$.name, this.fixedargs.plugin$.tag, options )
}

var seneca = require('../../..')()

seneca.use( zed )
seneca.use( {init:zed, name:'zed', tag:'tag0'} )
