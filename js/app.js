// main javascript file for the app

$(function(){

	// setting up global variables used by the app
	var pageIsReady = true;
	var screenSize;

	// global functions

	// function for checking responsive screen size
	var checkWindowSize = function()	{
		// getting the viewport size
		var windowWidth =	$(window).width();

		// setting the screenSize variable to use in other JS functions
		if (windowWidth <= 459) {
			screenSize = 'iphone-portrait';
		}
		else if (windowWidth > 459 && windowWidth <= 760) {
			screenSize = 'iphone-landscape';
		}
		else if (windowWidth > 760 && windowWidth <= 955) {
			screenSize = 'ipad-portrait';
		}
		else {
			screenSize = 'full-size';
		}
	};

	// functions to run when the document finishes loading
	checkWindowSize();

	// functions to run on window resize
	$(window).on('resize',function(){
		checkWindowSize();
	});

});