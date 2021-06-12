let week=['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
let months=['January','February','March','April','May','June','July','August','September','October','November','December'];
function updateTime()
{
    let now= new Date();
    let hh=now.getHours()*30;
    let mm=now.getMinutes()*6;
    let ss=now.getSeconds()*6;
    let dt=now.getDate();
    let dy=now.getDay();
    let mt=now.getMonth();
    
    let hr=document.querySelector('#hr');
    let mn=document.querySelector('#mn');
    let sc=document.querySelector('#sc');
    let date=document.querySelector('#date');
    let month=document.querySelector('#month');
    let day=document.querySelector('#day');

    date.innerHTML=dt;
    month.innerHTML=months[mt];
    day.innerHTML=week[dy]+',';
    
    sc.style.transform= 'rotate('+ss+'deg)';
    mn.style.transform= 'rotate('+(mm+ss/360)+'deg)';
    hr.style.transform= 'rotate('+(hh+mm/12)+'deg)';

}
setInterval(updateTime , 1000);

function changeMode()
{
    let mode=document.querySelector('#btn');
    let root=document.querySelector(':root');
    let number=document.querySelector('.clock');
    if(mode.innerHTML=='Light Mode')
    {
        mode.innerHTML='Dark Mode';
        root.style.setProperty('--pri-color','rgb(155, 161, 182)');
        root.style.setProperty('--sec-color','rgb(2, 23, 26)');
        number.style.background="url('clock1.png') no-repeat center center/cover";
    }
    else
    {
        mode.innerHTML='Light Mode';
        root.style.setProperty('--sec-color','rgb(155, 161, 182)');
        root.style.setProperty('--pri-color','rgb(2, 23, 26)');
        number.style.background="url('clock.png') no-repeat center center/cover";
    }
}
