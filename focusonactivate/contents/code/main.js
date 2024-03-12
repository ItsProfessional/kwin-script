function setup(window) {
    window.demandsAttentionChanged.connect(() => {
	if(window.demandsAttention)
	    workspace.activeWindow = window;
    })
}

workspace.windowAdded.connect(setup);
workspace.windowList().forEach(setup);

