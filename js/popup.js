// const btn = document.querySelector(".btn")

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
// const recognition = new SpeechRecognition()
// recognition.continuous = true

// btn.addEventListener("click", function(){

//     if(btn.id == "off"){
//         btn.id = "on"
//         recognition.start();
//     }

//     else{
//         btn.id = "off"
//         recognition.stop();
//     }
    
// })

recognition.onresult = event => {
    let finalStr = event.results[0][0].transcript
    console.log(finalStr)
}
window.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const result = document.getElementById("result");
    const main = document.getElementsByTagName("main")[0];
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (typeof SpeechRecognition === "undefined") {
      button.remove();
      const message = document.getElementById("message");
      message.removeAttribute("hidden");
      message.setAttribute("aria-hidden", "false");
    } else {
        let listening = false;
        const recognition = new SpeechRecognition();
        const start = () => {};
        const stop = () => {};
        const onResult = event => {};    }
  });
  const start = () => {
    recognition.start();
    button.textContent = "Stop listening";
    main.classList.add("speaking");
  };
  const stop = () => {
    recognition.stop();
    button.textContent = "Start listening";
    main.classList.remove("speaking");
  };
  const onResult = event => {
    result.innerHTML = "";
    for (const res of event.results) {
      const text = document.createTextNode(res[0].transcript);
      const p = document.createElement("p");
      if (res.isFinal) {
        p.classList.add("final");
      }
      p.appendChild(text);
      result.appendChild(p);
    }
  }
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.addEventListener("result", onResult);
  console.log("test")

  button.addEventListener("click", () => {
    listening ? stop() : start();
    listening = !listening;
  });


