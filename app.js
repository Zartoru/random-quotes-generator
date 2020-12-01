const quotes = {
    "Mettaton (from Undertale)": "A-arms? Who needs arms with legs like theses ?",
    "Papyrus (from Undertale)": "DON'T CRY IF I DON'T KISS YOU...'CAUSE I DON'T EVEN HAVE LIPS",
    "Clay (from Pokemon)": "If ya think ya can go, go wherever, and if ya think ya can do somethin', keep doin' it! Do things how ya want! Decide yer own limits.",
    "N (from pokemon)": "You said you have a dream... That dream... Make it come true! Make your wonderful dream a reality, and it will become your truth! If anyone can, it's you!",
    "The Handsome Jack (from Borderlands)": "Buttstallion says hi",
    "Claptrap (from Borderlands)":"NOOOOOOOOOOOOOOO! STAIIRS!",
};

function getRandomNb(){
    let nb = Math.floor((Math.random()*256));
    return nb;
}

function getRandomColor(){
    return `rgb(${getRandomNb()},${getRandomNb()},${getRandomNb()})`;
}


function changeColor(){
    console.log("gneee");
    let color = getRandomColor();
    console.log(color);
    bg.style.backgroundColor = color;
    quote.style.color = color;
    author.style.color = color;
    btn.style.backgroundColor = color;
}

function changeQuote() {
    const key = Object.keys(quotes);
    console.log(key);
    let number = Math.floor(Math.random() * ((key).length - 1));
    console.log(number);
    author.textContent = key[number];
    console.log(key[number])
    quote.textContent = quotes[key[number]];
    
}

const bg = document.getElementById("bg");
const quote = document.getElementById("quote");
const author = document.getElementById("author")
const btn = document.querySelector("#btn");

btn.addEventListener("click", changeColor);
btn.addEventListener("click", changeQuote);
console.log(btn)