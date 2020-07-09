const btn = document.querySelector(".btn")
const btnClose = document.querySelector(".btnClose");
const result = document.querySelector(".results")

navigator.webkitGetUserMedia({audio: true,}, function(stream) {stream.stop();}, function() {});


import Artyom from "artyom.js"
const artyom = new Artyom()

if(!artyom.speechSupported()) alert('Speech not supported')
if(!artyom.recognizingSupported()) alert('Recognition not supported')

var UserDictation = artyom.newDictation({
  continuous:true, // Enable continuous if HTTPS connection
  onResult:function(text){
      // Do something with the text
      console.log(text);
  },
  onStart:function(){
      console.log("Dictation started by the user");
  },
  onEnd:function(){
      alert("Dictation stopped by the user");
  }
});

UserDictation.start();

btn.addEventListener("click", function(){
  btn.classList.toggle("active");
  if(btn.value == 'off'){
      btn.value = 'on'
  }
  else if(btn.value == 'on'){
      btn.value = 'off'
  }

  btn.value == "on" ? start() : stop()
  console.log(btn.value)

})


btnClose.addEventListener("click", () => {
  window.close()
})
