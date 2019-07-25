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
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
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
        // add an "invalid" class to the field:
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