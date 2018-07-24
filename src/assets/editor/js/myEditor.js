window.URL = window.URL || window.webkitURL;
window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;

Number.prototype.format = function (){
  return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

var bigMommy = document.getElementById('myFrame');
var editor = new Editor();
var viewport = new Viewport( editor );
bigMommy.appendChild( viewport.dom );

var sidebar = new Sidebar( editor );

new AnarHistory( editor );
new AnarScene( editor );


editor.setTheme( editor.config.getKey( 'theme' ) );

editor.storage.init( function () {
  editor.storage.get( function ( state ) {
    if ( state !== undefined ) {
      editor.fromJSON( state );
    }
    var selected = editor.config.getKey( 'selected' );
    if ( selected !== undefined ) {
      editor.selectByUuid( selected );
    }
  } );
  var timeout;

  function saveState( scene ) {
    if ( editor.config.getKey( 'autosave' ) === false ) {
      return;
    }

    clearTimeout( timeout );

    timeout = setTimeout( function () {
      editor.signals.savingStarted.dispatch();
      timeout = setTimeout( function () {
        editor.storage.set( editor.toJSON() );
        editor.signals.savingFinished.dispatch();
      }, 100 );
    }, 1000 );
  };

  var signals = editor.signals;

  signals.geometryChanged.add( saveState );
  signals.objectAdded.add( saveState );
  signals.objectChanged.add( saveState );
  signals.objectRemoved.add( saveState );
  signals.materialChanged.add( saveState );
  signals.sceneBackgroundChanged.add( saveState );
  signals.sceneFogChanged.add( saveState );
  signals.sceneGraphChanged.add( saveState );
  signals.scriptChanged.add( saveState );
  signals.historyChanged.add( saveState );

  signals.showModal.add( function ( content ) {

    modal.show( content );

  } );

} );



function onWindowResize( event ) {
  editor.signals.windowResize.dispatch();
}

window.addEventListener( 'resize', onWindowResize, false );

setTimeout(function(){
  editor.signals.windowResize.dispatch();
},100);