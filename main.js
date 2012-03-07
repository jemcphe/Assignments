/*James E. McPherson III
 * Visual Frameworks
 * Project 2
 * 1203
 * 03/07/2012
 */

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() {
	
	//getElementById function
	function makeElement(x){
		var theElement = document.getElementById(x);
		return theElement;
	};
	
	//Create select field element and populate with options.
	function makeDropDown() {
		var 	formTag = document.getElementsByTagName("form"); //formTag is an array of all the form tags.
				selectLi = makeElement("select"),
				makeSelect = document.createElement("select");
				makeSelect.setAttribute("id", "groups");
		for(var i=0, j=positions.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = positions[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild();
	};
	
	
	//variable defaults
	var positions = ["--Select Position--", "QB", "RB", "WR", "TE", "K", "DEF"];
	makeDropDown();
	
	//Set Link & submit Click Events
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
});
