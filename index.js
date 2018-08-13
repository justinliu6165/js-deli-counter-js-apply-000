var count = 0;

function takeANumber(katzDeliLine){
  count++;
  katzDeliLine.push(count);
  return "Welcome, You are number " + count;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var servingCustomer = katzDeliLine.shift();
    return "Currently serving " + servingCustomer +".";
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length > 0){
    var list = "The line is currently: ";
    for(var i = 0; i < katzDeliLine.length; i++){
      if (i === katzDeliLine.length-1){
        list += katzDeliLine[i];
      } else {
        list += katzDeliLine[i] + ", ";  
      }
    }
    return list;
  } else {
    return "The line is currently empty.";
  }
}





