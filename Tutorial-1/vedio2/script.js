let text = document.querySelector("#text1");

let sel = document.querySelector("select");

sel.addEventListener("change", function(dets){
    // console.log(dets.target.value);
    text.textContent = `${dets.target.value} is Selected`;
});