

module.exports = function( options ) {
  var tag = this.fixedargs.plugin$.tag

  this.add( {foo:'bar', zed:options.zed}, function( args, done ){
    done( null, {color: options.color, tag:tag} )
  })

}

