

function timeConversion(t) {
    
    var timeStr = t.split(':');
    var secondStatus = timeStr[2];
        second = secondStatus[0]+secondStatus[1];
    var status = secondStatus[2]+secondStatus[3];
    timeStr = `${timeStr[0]}:${timeStr[1]}:${status}`
    console.log(timeStr)
    
    
    
   var colon = timeStr.indexOf(':');
  var hours = timeStr.substr(0, colon),
      minutes = timeStr.substr(colon+1, 2),
      meridian = timeStr.substr(colon+4, 2).toUpperCase();
 
  
  var hoursInt = parseInt(hours, 10),
      offset = meridian == 'PM' ? 12 : 0;
  
  if (hoursInt === 12) {
    hoursInt = offset;
  } else {
    hoursInt += offset;
  }
  if(hoursInt<10){
    hoursInt = "0"+hoursInt;
  }
  
  console.log(hoursInt + ":" + minutes+":"+second);

}

timeConversion("06:40:03AM");