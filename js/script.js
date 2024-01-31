let btn = document.getElementById("btn");


btn.onclick = function(){
    // list for Colors
    let colors = [ '#fff',"#40A2E3","#12372A","#D04848","#1D2B53","#FF9800","#B80000","#2D3250","#11009E","#40A2E3"];
    // Generater index 
    index = Math.floor(Math.random() * 10); 
    //change colors 
    document.body.style.background = colors[index];

}