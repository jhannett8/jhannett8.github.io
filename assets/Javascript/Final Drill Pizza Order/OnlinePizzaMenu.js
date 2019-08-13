function getReceipt() {
	//Initialize Variables 
	var text1 = "<h3>You Ordered:</h3>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("Size");
    //iterate through the array to determine which item had been selected 
    for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Personal") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium") {
		sizeTotal = 10;
	} else if (selectedSize === "Large") {
		sizeTotal = 14;
	} else if (selectedSize === "ELarge") {
		sizeTotal = 16;
	}
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("Size text1: "+text1);
	console.log("Subtotal: $"+runningTotal+".00");
	getMeat(runningTotal,text1); // All three of these variables will be passed on to each function
};

//-----Meat Toppings--------// 
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("topping");
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
			console.log("selected meat item: ("+meatArray[j].value+")");
			text1 = text1+meatArray[j].value+"<br>";
		}
	}
	var meatCount = selectedMeat.length;
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	runningTotal = (runningTotal + meatTotal);
	console.log("total selected meat items: "+meatCount);
	console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	console.log("meat text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getVeggie(runningTotal,text1);
};		
	//-------Veggie Toppings------//
function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("vtopping");
	for (var k = 0; k < veggieArray.length; k++) {
		if (veggieArray[k].checked) {
			selectedVeggie.push(veggieArray[k].value);
			console.log("selected Veggie item: ("+veggieArray[k].value+")");
			text1 = text1+veggieArray[k].value+"<br>";
		}
	}
	var veggieCount = selectedVeggie.length;
	if (veggieCount > 1) {
		veggieTotal = (veggieCount - 1);
	} else {
		veggieTotal = 0;
	}
	runningTotal = (runningTotal + veggieTotal);
	console.log("total selected Veggie items: "+veggieCount);
	console.log(veggieCount+" Veggie - 1 free Veggie = "+"$"+veggieTotal+".00");
	console.log("Veggie text1: "+text1);
	console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCheese(runningTotal,text1);
};		

//----------Cheese---------//
function getCheese(runningTotal,text1){
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("Cheese");
	for (var m = 0; m < cheeseArray.length; m++) {
		if (cheeseArray[m].checked) {
			var selectedCheese = cheeseArray[m].value;
			text1 = text1+selectedCheese+"<br>";
		}
	}
	if (selectedCheese === "Extra Cheese") {
		cheeseTotal = 3;
	}
	else {
		cheeseTotal = 0;
	}
	runningTotal = (runningTotal + cheeseTotal);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getCrust(runningTotal,text1);

};

//-----------Crust---------//
function getCrust(runningTotal,text1){
	var crustTotal = 0;
	var selectedCrust = [];
	var crustArray = document.getElementsByClassName("Crust");
	for (var n = 0; n < crustArray.length; n++) {
		if (crustArray[n].checked) {
			var selectedCrust = crustArray[n].value;
			text1 = text1+selectedCrust+"<br>";
		}
	}
	if (selectedCrust === "Cheese") {
		crustTotal = 3;
	}
	else {
		crustTotal = 0;
	}
	runningTotal = (runningTotal + crustTotal);
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
	getSauce(text1)
};

//------------Sauce---------//
function getSauce(runningTotal, text1){		
		var sauceTotal = 0;
		var sauceType = [];
		var sauceArray = document.getElementsByClassName("Sauce");
		for (var p = 0; p < sauceArray.length; p++) {
			if (sauceArray[p].checked) {
				var sauceType = sauceArray[p].value;
				text1 = text1+sauceType+"<br>";
			}
		}
		if (sauceType = sauceArray[p].value){
			sauceTotal = 0;
		}
		runningTotal = (runningTotal + sauceTotal);
		document.getElementById("showText").innerHTML=text1;
		document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};