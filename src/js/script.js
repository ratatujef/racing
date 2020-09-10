
    const score=document.querySelector('.score'),
            gameArea=document.querySelector('.gameArea'),
            start=document.querySelector('.start'),
            car=document.createElement('div'),
            keys={
                ArrowLeft: false,
                ArrowRight: false,
                ArrowUp: false,
                ArrowDown: false,
            },
            setting={
                score: 0,
                speed: 3,
                start: false,
            };
    start.addEventListener('click', startGame);
    document.addEventListener('keydown',startRun);
    document.addEventListener('keyup',stopRun);

    function startGame(){
        start.classList.toggle('hide');
        setting.start=true;
        gameArea.appendChild(car);
        car.classList.add ('car');
        setting.x=car.offsetLeft;
        requestAnimationFrame(playGame);
        console.log(setting.x);

    }
    function playGame(){
        if (setting.start){

            setting.score+=setting.speed;
            score.textContent=`Очки: ${setting.score} `;

            if(keys.ArrowLeft&&setting.x>0){
                console.log('Работает');
                setting.x-=setting.speed;
                
            }
            if(keys.ArrowRight&&setting.x<(gameArea.offsetWidth-car.offsetWidth)){
                setting.x+=setting.speed;
            }

            car.style.left=setting.x+'px';
            requestAnimationFrame(playGame);
        }
    }
    function startRun(e){
        e.preventDefault();
        keys[e.key]=true;
        console.log(keys[e.key]+" а в объекте "+keys.ArrowLeft);
        }
    function stopRun(e){
        e.preventDefault();
        keys[e.key]=false;
    }
