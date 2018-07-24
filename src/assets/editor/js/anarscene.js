/**
 * @author mrdoob / http://mrdoob.com/
 */

AnarScene = function ( editor ) {
	var signals = editor.signals;
	var ul = document.getElementById("objects");

	function addObject( object ) {
		var li = document.createElement('li');
		li.classList.add('menu-item');
		li.innerHTML = object.name;
		ul.insertBefore(li, ul.firstChild);
	}

	function clearObjects(){
		while (ul.firstChild) {
		    ul.removeChild(ul.firstChild);
		}
	}


	function refreshUI() {
		var scene = editor.scene;
		clearObjects();

		for ( var i = 0, l = scene.children.length; i < l; i ++ ) {
			var object = scene.children[ i ];
			if ( object.name === "the_floor" ||
			 object.name === "the_point_light" ||
			 object.name === "the_ambient_light"
			 ) continue;
			addObject(object);
		}
	}
	refreshUI();

	// events

	signals.editorCleared.add( refreshUI );
	signals.sceneGraphChanged.add( refreshUI );
	// signals.objectSelected.add( function ( object ) {
	// 	if ( ignoreObjectSelectedSignal === true ) return;
	// 	outliner.setValue( object !== null ? object.id : null );
	// } );

};
