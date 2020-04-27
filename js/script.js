
// sends input link to api for shortening
    // fetch("https://rel.ink/api/links/", {
    // method: 'POST',
    // headers: {
    //     'Content-type': 'application/json'
    // },
    // body: JSON.stringify({
    //     url: input.value
    // })
    // }).then(res => res.json()).then(data => console.log(data))
// recieves the data and outputs a clickable shortened link

const input = document.querySelector(".shorten__input");
const button = document.querySelector(".shorten__button");
let link_card = document.querySelectorAll(".link_card");
// button that copies the link
const link_copy = document.querySelectorAll(".link_card__button")
// the link the person had put in goes here
let link_card_input = document.querySelectorAll(".link_card__input_link");
// the output link API gave goes here
let link_card_output = document.querySelectorAll(".link_card__output_link")
// counts 0/1/2 to select corresponding card and re-sets after thrid press
let button_presses = 2;

button.onclick = ()=>{
    // Checks if field is empty or not
    function empty(){
        if(input.value == false){
            input.setCustomValidity("error");
        }
        else{
            input.setCustomValidity("");
        }
    }
    empty();
    // validity check
    function valid(){
        // if valid do this
        if(input.checkValidity() === true){
            console.log(button_presses);
            // Send a link I want shrunk
            fetch("https://rel.ink/api/links/", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    url: input.value
                })
                }).then(res => res.json()).then(data =>{
                    // take the hashid(shortened link data) and add it to the shortener
                    new_link = "https://rel.ink/" + data.hashid;
                    link_card_output[button_presses].innerHTML = new_link;
                    link_card_output[button_presses].href = new_link;;
                });
            // when new links are shrunk it keeps looping trough the same 3 cards
            button_presses++;
            if(button_presses > 2){
                button_presses = 0;
            }
            // This displays new cards
            link_card[button_presses].style.display = "grid";
            link_card_input[button_presses].innerHTML = input.value;
        }
        // else this
        else{
            console.log("Invalid Link");
        }
    }
    valid();
}


// when copy button is pressed
for (let i = 0; i < link_copy.length; i++) {
    link_copy[i].addEventListener("click", function() {
        console.log(i);
        console.log(link_card_output[i].innerHTML);
        if(i === 0){
            link_copy[0].style.backgroundColor = "hsl(257, 27%, 26%)";
            link_copy[0].innerHTML = "Copied!";
            link_copy[1].style.backgroundColor = "hsl(180, 66%, 49%)";
            link_copy[1].innerHTML = "Copy";
            link_copy[2].style.backgroundColor = "hsl(180, 66%, 49%)";
            link_copy[2].innerHTML = "Copy";
        }
        if(i === 1){
            link_copy[0].style.backgroundColor = "hsl(180, 66%, 49%)";
            link_copy[0].innerHTML = "Copy";
            link_copy[1].style.backgroundColor = "hsl(257, 27%, 26%)";
            link_copy[1].innerHTML = "Copied!";
            link_copy[2].style.backgroundColor = "hsl(180, 66%, 49%)";
            link_copy[2].innerHTML = "Copy";
        }
        if(i === 2){
            link_copy[0].style.backgroundColor = "hsl(180, 66%, 49%)";
            link_copy[0].innerHTML = "Copy";
            link_copy[1].style.backgroundColor = "hsl(180, 66%, 49%)";
            link_copy[1].innerHTML = "Copy";
            link_copy[2].style.backgroundColor = "hsl(257, 27%, 26%)";
            link_copy[2].innerHTML = "Copied!";
        }
        // link_copy[i].innerHTML = "Copied!"
    });
}