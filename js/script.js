const Copyright = document.querySelector("#yearC")

function openHiruja(link) {
    window.open(link)
}

function launch(link){
    window.open(link)
}

function copyCode(text) {
//   // Get the text field
//   var copyText = document.getElementById("code");

//   // Select the text field
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); // For mobile devices

// Copy the text inside the text field
navigator.clipboard.writeText(text);

// Alert the copied text
//   alert("Copied the text: ");
}

const loadingText = document.querySelector("#hiruja-loading-text");
const loadingImage = document.querySelector("#loading-image")

// loadingImage.style.bottom = "600px"
// loadingImage.style.display = "none"
loadingImage.style.opacity = 0
loadingText.style.transform = "translateY(-30vh)"

setTimeout(() =>{
        loadingText.style.transform = "none"
    loadingText.style.animation = "transformAnimation 2s"
}, 4000)

setTimeout(() => {
    loadingImage.style.opacity = 1
    // loadingImage.style.display = "block"
}, 9000);

// if (URL = "http://127.0.0.1:5500/index.html?skipLoading=true"){
//     // loadingImage.style.animation = "none"
//     // loadingText.style.animation = "none"
//     // document.getElementById("primaryNav").style.animationDuration = "200ms"
//     console.error("")
// }
Copyright.innerHTML = new Date().getFullYear()