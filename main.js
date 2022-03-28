//https://teachablemachine.withgoogle.com/models/KhvTg-94j/
var prediction1 = "";
var prediction2 = "";

var camera = document.getElementById("camera");
Webcam.attach(camera);
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 93
});

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
    speak()
}

console.log("ml5.version is", ml5.version);

var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KhvTg-94j/model.json",modelloaded);
function modelloaded(){
console.log("Model is loaded successfully");
}

function speak(){
var synth=window.speechSynthesis;
var speakdata1="The first prediction is"+prediction1;
var speakdata2="The second prediction is"+prediction2;
var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
synth.speak(utterThis);
}