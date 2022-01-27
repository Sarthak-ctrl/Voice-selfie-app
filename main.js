var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("text_box")


function take_photo(){
    Textbox.innerHTML="";
    recognition.start();
}

recognition.onresult= function(event){
    console.log(event);
    var Content =event.results[0][0].transcript;
    Textbox.innerHTML=Content;
    console.log(Content);
    
    if (Content=="take my selfie"){
        console.log("Taking selfie");
        speak();
    }
};

function speak(){
    var synth =window.speechSynthesis;
    var speak_data="taking your selfie in 5 seconds";
    var speak_this=new SpeechSynthesisUtterance(speak_data);
    synth.speak(speak_this);
    Webcam.attach(camera);
    setTimeout(function(){
      take_selfie();
      save();  
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
camera=document.getElementById("camera");

function take_selfie() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_image' src=" + data_uri + "/></img>";

    });
}

function save(){
    link = document.getElementById("photo_downloader");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}