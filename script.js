const messAGE=document.getElementById("msg");
const ran=Math.floor(Math.random()*100)+1;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition=new window.SpeechRecognition();
recognition.start();
recognition.addEventListener("result",(e)=>{
    const msg=e.results[0][0].transcript
    writeMessage(msg)
    checkNumber(msg)
})

recognition.addEventListener("end",()=>{
    recognition.start()
})

function writeMessage(e){
messAGE.innerHTML=`
<div>you said:</div>
<span class="box">${e}</span>

`
}

function checkNumber(msg){

    const num=+msg
console.log(ran)

    if(Number.isNaN(num)){
        messAGE.innerHTML+=`<div>that is not a valid number</div>`
        return
    }

    if(num>100||num<1){
        messAGE.innerHTML+=`<div>the number must bigger than 1 and smaller than 100</div>`
        return
    }

    if(num ===ran){
        messAGE.innerHTML+=`<div>you got the number!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>`
    }


    else if(num<ran){
        messAGE.innerHTML+=`<div>too small!</div>`
    }

    else{
        messAGE.innerHTML+=`<div>too high</div>`
    }

}