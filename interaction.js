let container = document.querySelector('.gameArea')
let btn = document.querySelector('.startBtn')
let scoreContainer = document.querySelector('.score')
let timeContainer = document.querySelector('.time')

btn.onclick = function() {
    let score = 0;
    let time = 20; 
    container.innerHTML = "";

    let interval = setInterval(function showTarget() {
        // Getting actual width & height of the gameArea
        let containerWidth = container.offsetWidth;
        let containerHeight = container.offsetHeight;

        // Target creation
        let target = document.createElement('img');
        target.id = "target";
        target.src = "images.png";
        
        // Set the position of the target once it's loaded
        target.onload = function() {
            target.style.top = Math.random() * (containerHeight - target.offsetHeight) + 'px';
            target.style.left = Math.random() * (containerWidth - target.offsetWidth) + 'px';
            container.appendChild(target);
        }

        // Make target disappear
        setTimeout(function() {
            target.remove();
        }, 2000);

        // When the target is clicked on
        target.onclick = function() {
            score += 1;
            target.style.display = 'none';
        };

        time -= 1;

        // Display infos
        scoreContainer.innerHTML = `Score : ${score}`;
        timeContainer.innerHTML = `Temps : ${time}`;

        // End of the game
        if (time === 0) { 
            clearInterval(interval);
            container.innerHTML = "Le jeu est terminé";
            btn.innerHTML = 'Restart'
        }

    }, 1000);
}
