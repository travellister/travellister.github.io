/**
 * This section covers the implementation of the packing list as one 
 * that is customizable and works just like the to-do list.
 *
 */
// Create a "close" button and append it to each list item
var test = document.getElementById("myPackingUL");
var myNodelist = test.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('#myPackingUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newPackingElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInputPL").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myPackingUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


/**
 * This section covers the implementation of the questionnaire 
 * and the logic behind how the packing list is generated.
 *
 */
function makeEven(num, day) {
	if (day > 1) {
	  if (num % 2 != 0) {
	    return (num + 1);
	  } else {
	    return num;
	  }
	} else {
		return num;
	}
}

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 2)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else if (n == (x.length - 1)) {
    document.getElementById("regForm").style.display="none";
    document.getElementById("packingList").style.display="block";
    //Q1
    var destination = document.getElementById("myInput").value;
    var profile = document.getElementById("Q2").value;
    var size = document.getElementById("Q3").value;
    var length = document.getElementById("Q4").value;
    var accomodation = document.getElementById("Q5").value;
    var weather = document.getElementById("Q6").value;
    var outdoor = document.getElementById("Q7").value;
    var water = document.getElementById("Q8").value;


    //Q2
    if (profile === "female" || profile === "Female" || profile === "Couple" || profile === "couple" 
      || profile === "family" || profile === "Family") {
      var pNode1 = document.createElement("LI");
      var pNode2 = document.createElement("LI");
      var pNode3 = document.createElement("LI");
      var pNode4 = document.createElement("LI");
      var textpNode1 = document.createTextNode("(Toiletries) Feminine-hygiene Products");
      var textpNode2 = document.createTextNode("(Toiletries) Makeup");
      var textpNode3 = document.createTextNode("(Toiletries) Makeup Remover");
      var textpNode4 = document.createTextNode("(Clothing/Accessories) " + length + " Bra(s)");
      pNode1.appendChild(textpNode1);
      pNode2.appendChild(textpNode2);
      pNode3.appendChild(textpNode3);
      pNode4.appendChild(textpNode4);
      document.getElementById("myToilet").appendChild(pNode1);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        pNode1.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      document.getElementById("myToilet").appendChild(pNode2);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        pNode2.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      document.getElementById("myToilet").appendChild(pNode3);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        pNode3.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      document.getElementById("myCloth").appendChild(pNode4);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        pNode4.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
    }

    //Q4
    
    //length item1
    var lNode1 = document.createElement("LI");
    var textlNode1 = document.createTextNode("(Clothing/Accessories) " + (size*length) + " Underwear(s)");
    lNode1.appendChild(textlNode1);
    document.getElementById("myCloth").appendChild(lNode1);
    if (true) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      lNode1.appendChild(span);
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
      }
    }
    //length item2
    var lNode2 = document.createElement("LI");
    var textlNode2 = document.createTextNode("(Clothing/Accessories) " + (size*length) + " Sock(s)");
    lNode2.appendChild(textlNode2);
    document.getElementById("myCloth").appendChild(lNode2);
    if (true) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      lNode2.appendChild(span);
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
      }
    }
    //length item3
    var lNode3 = document.createElement("LI");
    var textlNode3 = document.createTextNode("(Clothing/Accessories) " + (size*length) + " Tshirt(s)/Blouse(s)");
    lNode3.appendChild(textlNode3);
    document.getElementById("myCloth").appendChild(lNode3);
    if (true) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      lNode3.appendChild(span);
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
      }
    }
    //length item4
    var lNode4 = document.createElement("LI");
    var textlNode4 = document.createTextNode("(Clothing/Accessories) " + makeEven(Math.ceil((size*length) / 3), length) + " Sleepwear(s)");
    lNode4.appendChild(textlNode4);
    document.getElementById("myCloth").appendChild(lNode4);
    if (true) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      lNode4.appendChild(span);
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
      }
    }
    //length item6
    var lNode6 = document.createElement("LI");
    var textlNode6 = document.createTextNode("(Clothing/Accessories) " + size + " Slipper(s)/Sandal(s)");
    lNode6.appendChild(textlNode6);
    document.getElementById("myCloth").appendChild(lNode6);
    if (true) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      lNode6.appendChild(span);
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
      }
    }
    //length item7
    var lNode7 = document.createElement("LI");
    var textlNode7 = document.createTextNode("(Clothing/Accessories) " + size + " Belt(s)");
    lNode7.appendChild(textlNode7);
    document.getElementById("myCloth").appendChild(lNode7);
    if (true) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      lNode7.appendChild(span);
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
      }
    }
    //length item8
    var lNode8 = document.createElement("LI");
    var textlNode8 = document.createTextNode("(Clothing/Accessories) " + size + " Leisure Shoe(s)");
    lNode8.appendChild(textlNode8);
    document.getElementById("myCloth").appendChild(lNode8);
    if (true) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      lNode8.appendChild(span);
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
      }
    }


    //Q5
    if (accomodation === "Hotel" || accomodation === "Hostel" || accomodation === "Guesthouse" 
      || accomodation === "hotel" || accomodation === "hostel" || accomodation === "guesthouse") {
      //hotel item1
      var aNode1 = document.createElement("LI");
      var textaNode1 = document.createTextNode("(Misc.) Hotel/Hostel/Guesthouse Checking in Documents");
      aNode1.appendChild(textaNode1);
      document.getElementById("myMisc").appendChild(aNode1);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        aNode1.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
    } else {
      //camp item1
      var aNode2 = document.createElement("LI");
      var textaNode2 = document.createTextNode("(Misc.) Camping Equipment");
      aNode2.appendChild(textaNode2);
      document.getElementById("myMisc").appendChild(aNode2);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        aNode2.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      //camp item2
      var aNode3 = document.createElement("LI");
      var textaNode3 = document.createTextNode("(Misc.) Insect Repellent");
      aNode3.appendChild(textaNode3);
      document.getElementById("myMisc").appendChild(aNode3);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        aNode3.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
    }

    //Q6
    if (weather == "Snowing" || weather == "snowing" || weather == "Freezing" 
      || weather == "freezing") {
      //freezing item1
      var wNode1 = document.createElement("LI");
      var textwNode1 = document.createTextNode(("(Clothing/Accessories) " + 2*size) + " Winter Coat");
      wNode1.appendChild(textwNode1);
      document.getElementById("myCloth").appendChild(wNode1);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wNode1.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      //freezing item2
      var wNode4 = document.createElement("LI");
      var textwNode4 = document.createTextNode("(Clothing/Accessories) " + size + " Glove(s) & Scarve(s)");
      wNode4.appendChild(textwNode4);
      document.getElementById("myCloth").appendChild(wNode4);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wNode4.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      //freezing item3
      var wNode5 = document.createElement("LI");
      var textwNode5 = document.createTextNode("(Clothing/Accessories) " + makeEven(Math.ceil(size * (length/2)), length) + " Thermal Wear");
      wNode5.appendChild(textwNode5);
      document.getElementById("myCloth").appendChild(wNode5);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wNode5.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      //freezing item4
      var wNode10 = document.createElement("LI");
      var textwNode10 = document.createTextNode("(Clothing/Accessories) " + makeEven(Math.ceil((size*length) / 3), length) + " Jean(s)/Pant(s)/Dress(es)");
      wNode10.appendChild(textwNode10);
      document.getElementById("myCloth").appendChild(wNode10);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wNode10.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      if (weather == "Swowing" || weather == "snowing") {
        //snowing item1
        var wNode2 = document.createElement("LI");
        var textwNode2 = document.createTextNode("(Clothing/Accessories) " + size + " Snow Boot(s)");
        wNode2.appendChild(textwNode2);
        document.getElementById("myCloth").appendChild(wNode2);
        if (true) {
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          wNode2.appendChild(span);
          for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
          }
        }
        //snowing item2
        var wNode3 = document.createElement("LI");
        var textwNode3 = document.createTextNode("(Misc.) " + size + " Umbrella(s)");
        wNode3.appendChild(textwNode3);
        document.getElementById("myMisc").appendChild(wNode3);
        if (true) {
          var span = document.createElement("SPAN");
          var txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          wNode3.appendChild(span);
          for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            }
          }
        }
      }                                            
    } else if (weather == "Rainy" || weather == "rainy") {
      //rainy item1
      var wNode6 = document.createElement("LI");
      var textwNode6 = document.createTextNode("(Clothing/Accessories) " + size + " Rainwear");
      wNode6.appendChild(textwNode6);
      document.getElementById("myCloth").appendChild(wNode6);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wNode6.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      //rainy item2
      var wNode7 = document.createElement("LI");
      var textwNode7 = document.createTextNode("(Clothing/Accessories) " + size + " Rainboot(s)");
      wNode7.appendChild(textwNode7);
      document.getElementById("myCloth").appendChild(wNode7);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wNode7.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      //rainy item3
      var wNode11 = document.createElement("LI");
      var textwNode11 = document.createTextNode("(Clothing/Accessories) " + makeEven(Math.ceil((size*length) / 4), length) + " Jean(s)/Pant(s)/Dress(es)");
      wNode11.appendChild(textwNode11);
      document.getElementById("myCloth").appendChild(wNode11);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wNode11.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      //rainy item4
      var wNode12 = document.createElement("LI");
      var textwNode12 = document.createTextNode("(Clothing/Accessories) " + makeEven(Math.ceil((size*length) / 4), length) + " Short(s)/Skirt(s)");
      wNode12.appendChild(textwNode12);
      document.getElementById("myCloth").appendChild(wNode12);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wNode12.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
    } else {
      //sunny item1
      var wNode8 = document.createElement("LI");
      var textwNode8 = document.createTextNode("(Misc.) " + size + " Sunglass(es)");
      wNode8.appendChild(textwNode8);
      document.getElementById("myMisc").appendChild(wNode8);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wNode8.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      //sunny item2
      var lNode5 = document.createElement("LI");
      var textlNode5 = document.createTextNode("(Clothing/Accessories) " + makeEven(Math.ceil((size*length) / 4), length) + " Jean(s)/Pant(s)/Dress(es)");
      lNode5.appendChild(textlNode5);
      document.getElementById("myCloth").appendChild(lNode5);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        lNode5.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      //sunny item3
      var wNode9 = document.createElement("LI");
      var textwNode9 = document.createTextNode("(Clothing/Accessories) " + makeEven(Math.ceil((size*length) / 4), length) + " Short(s)/Skirt(s)");
      wNode9.appendChild(textwNode9);
      document.getElementById("myCloth").appendChild(wNode9);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wNode9.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
    }

    //Q7
    if (outdoor == "Yes" || outdoor == "yes") {
      //outdoor item1
      var oNode1 = document.createElement("LI");
      var textoNode1 = document.createTextNode("(Clothing/Accessories) " + size + " Hiking/Athlethic Shoe(s)");
      oNode1.appendChild(textoNode1);
      document.getElementById("myCloth").appendChild(oNode1);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        oNode1.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
    }

    //Q8 water
    if (water == "Yes" || water == "yes") {
      //water item1
      var wtNode1 = document.createElement("LI");
      var textwtNode1 = document.createTextNode("(Clothing/Accessories) " + size + " Swimwear");
      wtNode1.appendChild(textwtNode1);
      document.getElementById("myCloth").appendChild(wtNode1);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wtNode1.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      //water item2
      var wtNode2 = document.createElement("LI");
      var textwtNode2 = document.createTextNode("(Misc.) " + size + " Goggle(s)");
      wtNode2.appendChild(textwtNode2);
      document.getElementById("myMisc").appendChild(wtNode2);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wtNode2.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
      //water item3
      var wtNode3 = document.createElement("LI");
      var textwtNode3 = document.createTextNode("(Toiletries) " + size + " Extra Towel(s)");
      wtNode3.appendChild(textwtNode3);
      document.getElementById("myToilet").appendChild(wtNode3);
      if (true) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        wtNode3.appendChild(span);
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
    }

  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}


function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
    if (currentTab == 1) {
      if ((y[i].value != "Male") && (y[i].value != "Female") && (y[i].value != "Couple") && (y[i].value != "Family")
        && (y[i].value != "male") && (y[i].value != "female") && (y[i].value != "couple") && (y[i].value != "family")) {
      // add an "invalid" class to the field:
        y[i].className += " invalid";
      // and set the current valid status to false
        valid = false;
      }
    }
    if ((currentTab == 2) || (currentTab == 3)) {
      //check if input is in numerical form
      if (isNaN(y[i].value)) {
        // add an "invalid" class to the field
        y[i].className += " invalid";
      // and set the current valid status to false
        valid = false;
      }
    }
    if (currentTab == 4) {
      if ((y[i].value != "Hotel") && (y[i].value != "Hostel") && (y[i].value != "Guesthouse") && (y[i].value != "Camping") 
        && (y[i].value != "hotel") && (y[i].value != "hostel") && (y[i].value != "guesthouse") && (y[i].value != "camping")) {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
      // and set the current valid status to false
        valid = false;
      }
    }
    if (currentTab == 5) {
      if ((y[i].value != "Sunny") && (y[i].value != "Rainy") && (y[i].value != "Snowing") && (y[i].value != "Freezing") 
        && (y[i].value != "sunny") && (y[i].value != "rainy") && (y[i].value != "snowing") && (y[i].value != "freezing")) {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
      // and set the current valid status to false
        valid = false;
      }
    }
    if ((currentTab == 6) || (currentTab == 7)) {
      if ((y[i].value != "Yes") && (y[i].value != "yes") && (y[i].value != "No") && (y[i].value != "no")) {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
      // and set the current valid status to false
        valid = false;
      }
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

/*function validateForm() {
  // This function deals with validation of the form fields
  var x, y, z, i, valid = true;
  var radio_valid = false;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  z = x[currentTab].getElementByTagName("input");
  // A loop that checks every input field in the current tab:
  alert("y");
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }

  for (i = 0; i < z.length; i++) {
    // If a field is empty...
    if (z[i].checked) {
      radio_valid = true;
      continue;
    }
  }

  // If the valid status is true, mark the step as finished and valid:
  if (y.length > 0) {
    if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";      
    }
    return valid;
  } else {
      if (radio_valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";        
    }
    return radio_valid;
  } // return the valid status
}*/

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}