const form = document.querySelector("#memeform");
const topTextInput = document.querySelector('input[name="top-text"]');
const bottomTextInput = document.querySelector('input[name="bottom-text"]');
const topTextSizeInput = document.querySelector('input[name="top-text-size"]');
const bottomTextSizeInput = document.querySelector('input[name="bottom-text-size"]');
const results = document.querySelector("#results");

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    const newMeme = document.createElement("div");
    newMeme.classList.add("meme");
    
    let image = document.getElementById("url").value;
    let img = document.createElement("img");
    img.src = image;
    newMeme.appendChild(img);

    let topText = makeText(topTextInput.value, topTextSizeInput.value);
    topText.classList.add('topText');
    newMeme.appendChild(topText);

    let bottomText = makeText(bottomTextInput.value, bottomTextSizeInput.value);
    bottomText.classList.add('bottomText');
    newMeme.appendChild(bottomText);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = ' <button onclick="Delete(this);">DELETE</button>'
    deleteBtn.addEventListener("click", function(){
        newMeme.parentNode.removeChild(newMeme);
    });
    results.appendChild(deleteBtn);

    results.appendChild(newMeme);
    
    form.reset();
});

function makeText(text, size){
    const memeText = document.createElement("text");
    memeText.innerText = text;
    memeText.style.fontSize = size + "px";
    memeText.style.position = "absolute";
    memeText.style.fontStyle = "italic";
    return memeText;
}

function Delete(button) {
    var parent = button.parentNode;
    var grandParent = parent.parentNode;
    grandParent.removeChild(parent);
  }