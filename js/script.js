var display = $(".display-input").val();
display = 0;

var resetDisplay = function() {
  display= 0;
  update();
  return display;
}

var update = function() {
  $(".display-input").val(display)
};

var displayInt = function() { 
  display = parseInt(display);
  return display;
};

var workingValue;
var workingFunction;
var memoryValue = 0;

var updateWorkingValue = function() {
  workingValue = display;
}

update();

//percentage
$(".percentage").click( function() {
  console.log("percentage");
  
  
});

//Memory Clear
$(".MC").click( function() {
  console.log("MC");
  memoryValue = 0;
  return memoryValue;
  
});

//Memory Recall
$(".MR").click( function() {
  console.log("MR");
  if (memoryValue === 0) {
    console.log("No current Memory value")
    display = 0;
    update();
  } else {
    display = memoryValue;
    update();
  }
  
});

//Memory +
$(".Mplus").click( function() {
  console.log("M+");
  
  memoryValue += parseFloat(display);
  return memoryValue;
  
});

//Memory -
$(".Mminus").click( function() {
  console.log("M-");
  memoryValue -= parseFloat(display);
  return memoryValue;
  
});

//Memory save
$(".MS").click( function() {
  console.log("MS");
  memoryValue = display;
  return memoryValue;
  
});

//plus
$(".plus").click( function() {
  console.log("plus");
  updateWorkingValue();
  workingFunction = "plus";
  resetDisplay();
  return workingFunction;  
  
});

//minus
$(".minus").click( function() {
  console.log("minus");
  updateWorkingValue();
  workingFunction = "minus";
  resetDisplay();
  return workingFunction;  
  
});

//divide
$(".divide").click( function() {
  console.log("minus");
  updateWorkingValue();
  workingFunction = "divide";
  resetDisplay();
  return workingFunction;  
  
});

//multiply
$(".multiply").click( function() {
  console.log("mulitply");
  updateWorkingValue();
  workingFunction = "multiply";
  resetDisplay();
  return workingFunction;  
  
});

//sqRoot
$(".sqRoot").click( function() {
  console.log("squared");
  display = parseFloat(display);
  display = Math.sqrt(display);
  update();
});

//squared
$(".squared").click( function() {
  console.log("squared");
  display = parseFloat(display);
  display = display * display;
  update();
});

//percentage
$(".percentage").click( function() {
  console.log("percentage");
  display = parseFloat(display);
  workingValue =  parseFloat(workingValue);
  if (workingFunction === "plus") {
    display = workingValue + (display * (workingValue / 100));
    update();    
  } else if (workingFunction === "minus") {
    display = workingValue - (display * (workingValue / 100));
  } else if (workingFunction === "divide") {
    display = workingValue / ((display /100) * workingValue);
  } else if (workingFunction === "multiply") {
    display = (display * (workingValue / 100));
  } 
  update(); 
});

//equals
$(".equals").click( function() {
  console.log("equals");
  display = parseFloat(display);
  workingValue =  parseFloat(workingValue);
  if (workingFunction === "plus") {
    display = workingValue + display;
//    update();    
  } else if (workingFunction === "minus") {
    display = workingValue - display;
//    update(); 
  } else if (workingFunction === "divide") {
    display = workingValue / display;
//    update(); 
  } else if (workingFunction === "multiply") {
    display = workingValue * display;
//    update(); 
  } 
  update(); 
  workingFunction = "";
  return workingFunction;
});

//C (Clear)
$(".C").click( function() {
  console.log("C");
  display = 0;
  update();
  workingValue = 0;
  return workingValue;
});


//CE (Clear Entry)
$(".CE").click( function() {
  console.log("CE");
  display =  0;
  update();
  
});

//Del
$(".del").click( function() {
  console.log("del");
  var value = $(".display-input").val();
  value =  value.slice(0,-1);
  display = value;
  update();
  
  if (display === "") {
    display = 0;
    update();
  }

});

//Dot
$(".dot").click( function() {
  console.log("dot");
  display =  display.toString();
  var dotTest = display.indexOf(".");
  
  if (dotTest > -1 ) {
    console.log("dot detected");
  } else { 
    console.log("dot not detected");
    display += ".";
    update();
  }
});

//plus minus
$(".plusMinus").click( function() {
  display = - display;
  update();
  
})




//0
$(".0").click( function() {
  console.log(0)
  if (display === 0) {
    display = 0;
    update()
    
  } else {
  display += "0";
  parseFloat(display);
  update();
  }
});

//1
$(".1").click( function() {
  console.log(1)
  if (display === 0) {
    display = 1;
    update()
    
  } else {
  display += "1";
  parseFloat(display);
  update();
  }
});

//2
$(".2").click( function() {
  console.log(2)
  if (display === 0) {
    display = 2;
    update()
    
  } else {
  display += "2";
  parseFloat(display);
  update();
  }
});

//3
$(".3").click( function() {
  console.log(3)
  if (display === 0) {
    display = 3;
    update()
    
  } else {
  display += "3";
  parseFloat(display);
  update();
  }
});

//4
$(".4").click( function() {
  console.log(4)
  if (display === 0) {
    display = 4;
    update()
    
  } else {
  display += "4";
  parseFloat(display);
  update();
  }
});

//5
$(".5").click( function() {
  console.log(5)
  if (display === 0) {
    display = 5;
    update()
    
  } else {
  display += "5";
  parseFloat(display);
  update();
  }
});

//6
$(".6").click( function() {
  console.log(6)
  if (display === 0) {
    display = 6;
    update()
    
  } else {
  display += "6";
  parseFloat(display);
  update();
  }
});

//7
$(".7").click( function() {
  console.log(7)
  if (display === 0) {
    display = 7;
    update()
    
  } else {
  display += "7";
  parseFloat(display);
  update();
  }
});

//8
$(".8").click( function() {
  console.log(8)
  if (display === 0) {
    display = 8;
    update()
    
  } else {
  display += "8";
  parseFloat(display);
  update();
  }
});

//9
$(".9").click( function() {
  console.log(9)
  if (display === 0) {
    display = 9;
    update()
    
  } else {
  display += "9";
  parseFloat(display);
  update();
  }
});