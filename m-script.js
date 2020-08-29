const Create=document.querySelector(".btn");
function makemusic(){
const kick = new Tone.Player("./Drums/kick-classic.wav").toDestination(); //or toMaster
const snare = new Tone.Player("./Drums/snare-lofi02.wav").toDestination();  //or toMaster
const hihat = new Tone.Player("./Drums/hihat-dist01.wav").toDestination();  //or toMaster
let counter=0;

Tone.Transport.scheduleRepeat(repeatfunc, "8n");
Tone.Transport.bpm.value=120;
Tone.Transport.start();
Tone.start();


function repeatfunc(){
    let currbox=counter%8;
    kickinput=document.querySelector(`.kick input:nth-child(${currbox+1})`);
    snareinput=document.querySelector(`.snare input:nth-child(${currbox+1})`);
    hihatinput=document.querySelector(`.hihat input:nth-child(${currbox+1})`);
    
    if(kickinput.checked){
        kick.start();
    }
    if(snareinput.checked){
        snare.start();
    }
    if(hihatinput.checked){
        hihat.start();
    }
    counter++;
}
}
Create.addEventListener("click", makemusic, {once: true});
