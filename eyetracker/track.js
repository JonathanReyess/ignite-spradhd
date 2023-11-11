window.saveDataAcrossSessions = true;
const w1 = window.innerWidth / 20;
const w2 = window.innerWidth - window.innerWidth / 20;
const h1 = window.innerHeight / 20;
const h2 = window.innerHeight - window.innerHeight / 20;
const look_delay = 1000; // 1 second
var timer = 0;
var counter = 10;
var currentlySpraying = false;

webgazer
    .setGazeListener((data, timestamp) => {
        if (data == null && currentlySpraying) return null;
        if (
            data == null ||
            data.x > w2 ||
            data.x < w1 ||
            data.y > h2 ||
            data.y < h1
        ) {
            {
                timer += 1;
                if (timer > 100 && !currentlySpraying) {
                    console.log("SPRAY!!!!!!!!!!!!!!");
                    fetch("http://10.146.83.192/27/on", { method: "GET" }).then(
                        (response) => {
                            currentlySpraying = false;
                            timer = 0;
                        }
                    );

                    currentlySpraying = true;
                }
            }
        } else {
            timer = Math.max(0, timer - 15);
            counter += 1;
        }
    })
    .begin();
