var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(); 



function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){

console.log(event);

content = event.results[0][0].transcript; 
console.log(content);

document.getElementById("textbox").innerHTML = content;

if(content == "take my selfie"){
    speak();
}

}

function speak(){
    var texttospeech = window.speechSynthesis;
    var speech = "Clicking selfie in 5 4 3 2 1";
    var audiofile = new SpeechSynthesisUtterance(speech);

    texttospeech.speak(audiofile);

    var camera = document.getElementById("camera"); 
    Webcam.attach(camera);
    
    setTimeout(function(){
        clickpic();
        save();
    }, 5000);

} 

Webcam.set({
    width: 300,
    height: 500,
    image_format: 'png',
    png_quality: 120
});

function clickpic(){
    Webcam.snap(function(pica){
         document.getElementById("pic").innerHTML = '<img id = "picture" src = "' + pica +'">';
    });
}

function save(){
    var textarea = document.getElementById("anc");
    var picture = document.getElementById("picture").src;

    textarea.href = picture;

    textarea.click();


}