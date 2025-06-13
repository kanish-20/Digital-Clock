function updateclock(){
    clock.style.opacity = 0;
    setTimeout(()=>{ 
    const now=new Date();

    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let session= hours>=12? "PM":"AM";
    
    

    hours=hours<10? "0" + hours:hours;
    minutes=minutes<10 ? "0" + minutes:minutes;
    seconds=seconds<10? "0" + seconds:seconds;

    const timeString=hours + ":" + minutes+ ":"+ seconds + ":" + session;
    document.getElementById("clock").textContent=timeString;

    

    let date=now.getDate();
    let day=now.toLocaleDateString('default',{weekday: 'long'});
    let month=now.toLocaleDateString('default' , {month: 'short'});
    let year=now.getFullYear();

    const DateString=`${date} ${month} ${year} , ${day}`;
    document.getElementById("date").textContent=DateString;
   

    clock.style.opacity = 2;
    },200)


    
}
function speak(){
    const now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let session=hours>=12?"P M":"A M";
    hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

    const voice=` Welcome guys! the time is ${hours} hours ${minutes} minutes ${session}`;
    const utterance=new SpeechSynthesisUtterance(voice);
    utterance.lang='ta-IN';
    window.speechSynthesis.speak(utterance);

}
setInterval(updateclock,1000);

updateclock();

