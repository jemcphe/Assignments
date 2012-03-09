/*James E. McPherson III
 * Visual Frameworks
 * Project 2
 * 1203
 * 03/07/2012
 */

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() {
	
	//getElementById function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	};
	
	//Create select field element and populate with options.
	function makeDropDown() {
		var 	formTag = document.getElementsByTagName("form"), //formTag is an array of all the form tags.
				selectLi = $("select"),
				//Create <select></select> element
				makeSelect = document.createElement("select");
				makeSelect.setAttribute("id", "position");
		//Loop through and populate option elements		
		for(var i=0, j=positions.length; i<j; i++){
			var makeOption = document.createElement("option");
			var optText = positions[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	};
	
	//Find value of selected radio button.
	function getCheckboxValue(){
		if($('starter').checked) {
			starterValue = $("starter").value;
		}else {
			starterValue = "No";
		}
	}
	//Toggle ON/OFF used for displaying data
	function toggleControls(n){
		switch(n){
			case"on":
				$('addPlayerForm').style.display = "none";
				$('clear').style.display = "inline";
				$('display').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('addPlayerForm').style.display = "block";
				$('clear').style.display = "inline";
				$('display').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
	// Create StoreData Function
	function storeData(){
		//Create Random Key
		var 	id									= Math.floor(Math.random()*1000001);
		getCheckboxValue();
		// gather up all our form field values and store in an object.
		// Object properties contain array with the form label and input value.
		var item = {};
				item.position				= ["Position:", $('position').value];
				item.pname				= ["Player Name:", $('pname').value];
				item.bye						= ["Bye Week:", $('byeweek').value];
				item.starter				= ["Starter:", starterValue];
				item.skill						= ["Skill Level:", $('skill').value];
				item.notes					= ["Notes:", $('notes').value];
		//Save Data into Local Storage: Use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Player Saved!");
	};
	 // function to get data from form Values & display in div
	function getData() {
		toggleControls("on");
		if(localStorage.length === 0) {
			alert("There are no players stored!")
		}
		//Create Div/ul/li tags to display data
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "players");
		document.body.appendChild(makeDiv);
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		$('players').style.display = "block";
		for(var i=0, j=localStorage.length; i<j; i++) {
			var makeLi = document.createElement('li');
			makeList.appendChild(makeLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeLi.appendChild(makeSubList);
			for(var n in obj) {
				var makeSubLi = document.createElement('li');
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0] +" "+ obj[n][1];
				makeSubLi.innerHTML = optSubText;
			}
		}
	}
	//function to clear data from localStorage
	function clearLocal() {
		if(localStorage.length === 0) {
			alert("There is no data to clear.");
		}else{
			localStorage.clear();
			alert("All Players have been deleted!");
			window.location.reload();
			return false;
		}
	}
	
	//variable defaults
	var 	positions = ["--Select Position--", "QB", "RB", "WR", "TE", "K", "DEF"],
			starterValue = "No";
	makeDropDown();
	
	//Set Link & submit Click Events
	var displayLink = $('display');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var saveLink = $("submit");
	saveLink.addEventListener("click", storeData);
});
