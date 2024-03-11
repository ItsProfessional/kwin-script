function setup(window) {
    window.demandsAttentionChanged.connect(function(){
	workspace.activeWindow = window;
    })
}

workspace.windowAdded.connect(setup);
workspace.windowList().forEach(setup);

