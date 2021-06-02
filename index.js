var speechRecognition = window.webkitSpeechRecognition
var recognition = new speechRecognition()
var textbox = $("#text-box");
console.log(textbox);
var instruction = $("#instruction");
var content = "";
recognition.continuous = true;

recognition.onstart = function() {
    instruction.text('voice recongination started');

}
recognition.onspeechend = function() {
    instruction.text('no activity');
}
recognition.onerror = function() {
    instruction.text = ('try again');
}
recognition.onresult = function(event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    content += transcript;
    console.log(content);
    textbox.val(content);
}
$('#start').click(function(event) {
    if (content.length) {
        content += "" //if the previous content is there then it will clear all the contents in it
    }

    recognition.start()
})