// My Singleton
var mySingleton = (function () {
	// The instance stores a reference to the singleton
	var instance;
	// SIngleton init function
	function init(){
		//Singleton
		//Private methods and variables
		function privateMethod(){
			console.log("I am private");
		}

		var privateVariable = "Im also private";
	}

	return {

		//Public methods and variables
		publicMethod: function () {
			console.log("The public can see me!");
		},

		publicProperty: "I am also public";
	};

	return {
		//Get singleton instance if one exists
		//or create one if it doesn't
		getInstance: function () {

			if (!instance) {
				instance = init();
			}

			return instance;
		}
	};

})();
////////////// END OF mySingleton ////////////////////
///// USAGE //////////////////////
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA === singleB);