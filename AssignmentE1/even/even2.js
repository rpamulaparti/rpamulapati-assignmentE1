
document.getElementById("compute").onclick = funCompute;

function funCompute(){
    let nBegin = document.getElementById("compute").ariaValueMax;
    let sum =0;
    for(let i= nBegin;i<=1000;i++){
        if(i%2 !=0){
            sum += i;
        }
    }
    document.getElementById("sum").innerHTML = sum;
}