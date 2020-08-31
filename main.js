
const button = document.querySelector("#generate");
const copyBtn = document.querySelector(".copybtn")

button.addEventListener('click', generateQuote);

function generateQuote(){
    fetch('https://api.quotable.io/random')
    .then(Response => {
        return Response.json();
    }).then(data => {
        // console.log(`${data.content} - ${data.authors}`);
        let result = ''
        result += `
            <div class="container">
            <h1>${data.author} </h1> <span>once said</span>
            <p id="quotetext""> "${data.content}"</p> 
            </div>
        `
        document.querySelector("#result").innerHTML = result;
    })
    .catch(err => {
        console.log(err);
    })
}

function copyQuote() {
    var range = document.createRange();
    range.selectNode(document.getElementById("quotetext"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect

    let msgElem = document.createElement("span");
    msgElem.textContent = "quote copied to the clipoard";
    msgElem.style.textTransform = "capitalize";
    document.querySelector("#result").appendChild(msgElem);
    setTimeout(() => msgElem.remove(), 3000);
}

