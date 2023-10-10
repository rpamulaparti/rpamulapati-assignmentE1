const  days = ['Sun', 'Mon', 'Tue', 'Thu']; 
document.getElementsByTagName("input")[0].onclick = showDays;

function showDays(){
    days[4] = "Fri";
    let elements = document.getElementsByTagName("div");

    for(let i=0;i<days.length;i++){
        elements[i].innerHTML = days[i];
    }
}