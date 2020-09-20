function startTimer(id, daysExist, deadlineTime) {
  let deadline = Date.parse(deadlineTime);
  
  if(isNaN(deadline) || deadline < 0) {
    deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    deadline.setHours(0,0,0,0);
  }
  
  let timerId = document.getElementById(id);
  let days, hours, minutes, seconds; 
  
  if(daysExist) { 
    days = timerId.querySelector('.days');
  }
  
  hours = timerId.querySelector('.hours');  
  minutes = timerId.querySelector('.minutes');  
  seconds = timerId.querySelector('.seconds');
  
  let dayStamp, hourStamp, minuteStamp, secondStamp;  
  
  function setTimer() {
    let deltaTimes = deadline - Date.now();
    
    if(deltaTimes <= 0) {
      clearTimeout(timerDue);
      if(daysExist) {days.textContent = `00`;}
      hours.textContent = `00`;
      minutes.textContent = `00`;
      seconds.textContent = `00`;
      return
    }
    
    dayStamp = Math.floor(deltaTimes / 1000 / 60 / 60 / 24);
    
    if(daysExist) { 
      hourStamp = Math.floor(deltaTimes / 1000 / 60 / 60 % 24);
    } else hourStamp = Math.floor(deltaTimes / 1000 / 60 / 60);
    
    minuteStamp = Math.floor(deltaTimes / 1000 / 60 % 60);
    secondStamp = Math.floor(deltaTimes / 1000 % 60);
    
    if(daysExist && dayStamp < 10) {
      days.textContent = `0${dayStamp}`;
    } else if(daysExist) {days.textContent = `${dayStamp}`};
    
    if(hourStamp < 10) {
      hours.textContent = `0${hourStamp}`;
    } else hours.textContent = `${hourStamp}`;
    
    if(minuteStamp < 10) {
      minutes.textContent = `0${minuteStamp}`;
    } else minutes.textContent = `${minuteStamp}`;
    
    if(secondStamp < 10) {
      seconds.textContent = `0${secondStamp}`;
    } else seconds.textContent = `${secondStamp}`;
  }
  let timerDue = setInterval(setTimer, 1000);
}
  
startTimer('timer');