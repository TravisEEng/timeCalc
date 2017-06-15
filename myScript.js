setInterval(function(){
    document.getElementById("time").innerHTML = (new Date().toLocaleTimeString({weekday: "short"}));
}, 1000);
