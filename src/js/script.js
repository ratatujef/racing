document.addEventListener('DOMContentLoaded', function(){
    const score=document.querySelector('.score'),
            gameArea=document.querySelector('.gameArea'),
            start=document.querySelector('.start'),
            car=document.createElement('div'),
            keys={
                arrowLeft: false,
                arrowrRight: false,
                arrowUp: false,
                arrowDown: false,
            },
            setting={
                scope: 0,
                speed: 3,
                start: false,
            };
    start.addEventListener('click', startGame);
    document.addEventListener('keydown',startRun);
    document.addEventListener('keydown',stopRun);

    function startGame(){
        start.classList.toggle('hide');
        setting.start=true;
        requestAnimationFrame(playGame);
        gameArea.appendChild(car);
        car.classList.add ('car');
        setting.x=car.offsetLeft;
        

    }
    function playGame(){
        console.log('working!');
        if (setting.start){
            if(keys.arrowLeft){
                setting.x++;
            }
            if(keys.arrowRight){
                setting.x--;
            }

            car.style.left=setting.x+'px';
            requestAnimationFrame(playGame);
        }
    }
    function startRun(e){
        e.preventDefault();
        keys[e.key]=true;
    }
    function stopRun(e){
        e.preventDefault();
        
        keys[e.key]=false;
    }
});