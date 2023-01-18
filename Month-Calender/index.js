const monthIndex = new Date().getMonth();
const monthEl = document.querySelector(".date h1");
const fulldateEl = document.querySelector(".date p");
const lastDay = new Date(new Date().getFullYear(),monthIndex+1,0).getDate();
let firstDay = new Date(new Date().getFullYear(),monthIndex, 1).getDay()-1;
if(firstDay==-1){
    firstDay=6;
}
const daysEl = document.querySelector(".days");
console.log(firstDay);

const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthEl.innerText = months[monthIndex];
fulldateEl.innerText= new Date().toDateString();

let day =""
for(let i =firstDay ; i>0;i--){
    day+=`<div class="empty"></div>`;
}
for(let i = 1 ; i<=lastDay ; i++){
    if(i=== new Date().getDate()){
        day+=`<div class="today">${i}</div>`;
    }
    day+=`<div>${i}</div>`;
}

daysEl.innerHTML = day;