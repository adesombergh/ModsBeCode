AnarHistory = function ( editor ) {
	var signals = editor.signals;
	var history = editor.history;
	var ul = document.getElementById("history");

	function addHistory(item, counter){
		var li = document.createElement('li');
		li.classList.add('menu-item');
		li.innerHTML = counter+'. '+item.name;
		ul.insertBefore(li, ul.firstChild);
	}
	function clearHistory(){
		while (ul.firstChild) {
		    ul.removeChild(ul.firstChild);
		}
	}

	var refreshUI = function () {
		clearHistory();

		var counter = 0;
		for ( var i = history.redos.length - 1; i >= 0; i -- ) {
			addHistory(history.redos[ i ], counter);
			counter++;
		}
		for ( var i = 0, l = history.undos.length; i < l; i ++ ) {
			addHistory(history.undos[ i ], counter);
			counter++;
		}
	};

	refreshUI();

	// events
	signals.editorCleared.add( refreshUI );
	signals.historyChanged.add( refreshUI );
	// signals.historyChanged.add( function ( cmd ) {
	// 	outliner.setValue( cmd !== undefined ? cmd.id : null );
	// } );

};
