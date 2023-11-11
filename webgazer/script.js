window.saveDataAcrossSessions = true
const w1 = window.innerWidth / 20
const w2 = window.innerWidth - window.innerWidth / 20
const h1 = window.innerHeight / 20
const h2 = window.innerHeight - window.innerHeight / 20
const look_delay = 1000 // 1 second
var timer = 0

webgazer
.setGazeListener((data, timestamp) => { 
    if(data == null) return
    if((data.x>w2 || data.x<w1) || (data.y>h2 || data.y<h1)){
     {
            timer +=1 
            if(timer > 50){
                console.log("Get back to work")
              }
            
            
        }
      }
    else{
      timer = 0
    }
})
.begin()



