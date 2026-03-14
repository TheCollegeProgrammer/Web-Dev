let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function(){

  // Remove old boxes if any
  document.querySelectorAll(".box").forEach(box => box.remove());

  let amount = parseInt(document.getElementById("amount").value) || 10;
  let theme = document.getElementById("colorTheme").value;
  let shape = document.getElementById("shape").value;
  let speed = parseInt(document.getElementById("speed").value) || 50;

  let boxes = [];

  for(let i = 0; i < amount; i++){

    let div = document.createElement("div");
    div.classList.add("box");

    let size = 100 - i * (80 / amount);
    div.style.height = size + "px";
    div.style.width = size + "px";

    // Shape
    if(shape === "circle"){
      div.style.borderRadius = "50%";
    } else {
      div.style.borderRadius = "0";
    }

    // Color theme
    if(theme === "rainbow"){
      div.style.backgroundColor = `hsl(${i * (360/amount)}, 100%, 50%)`;
    }
    else if(theme === "blue"){
      div.style.backgroundColor = `hsl(200, 100%, ${50 - i*2}%)`;
    }
    else if(theme === "red"){
      div.style.backgroundColor = `hsl(0, 100%, ${50 - i*2}%)`;
    }
    else{
      div.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    }

    document.body.appendChild(div);
    boxes.push(div);
  }

  window.addEventListener("mousemove", function(e){

    boxes.forEach((box, index) => {

      setTimeout(() => {

        let rect = box.getBoundingClientRect();
        box.style.left = (e.clientX - rect.width/2) + "px";
        box.style.top = (e.clientY - rect.height/2) + "px";

      }, index * speed);

    });

  });

});