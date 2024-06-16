var cur; 
let ftime;
let interval;
let isPaused = false;
let pausedTime = 0

const dif = function(){
    ftime = Date.now();

    document.getElementById('curTime').innerHTML = (( ftime - cur) + pausedTime)/1000;
}

document.getElementById('start').addEventListener('click', function(){
    cur = Date.now();
    interval = setInterval(dif, 1000);
    
});

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(interval);
});
document.getElementById('reset').addEventListener('click', function(){
    clearInterval(interval);
    document.getElementById('curTime').innerHTML = 0;
    document.getElementById('display').innerHTML = "";
    pausedTime = 0;
    isPaused = false;

    
});
document.getElementById('lapse').addEventListener('click', function(){
    if (!isPaused){
    const element1 = document.createElement('div');
    element1.innerHTML = (Date.now() - cur) / 1000;
    document.getElementById('display').appendChild(element1);
    }

});
 
document.getElementById('pause').addEventListener('click', function(){
    if (!isPaused){
    clearInterval(interval);
    pausedTime = Date.now() - cur;
    isPaused = true;
    }
})
 
document.getElementById('continue').addEventListener('click', function(){
    if (isPaused){
        cur = Date.now() - pausedTime;
        interval = setInterval(dif,1000);
        isPaused = false;
        pausedTime = 0;
    }
})



