fetch("https://rel.ink/api/links/", {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        url: "https://www.youtube.com/watch?v=cuEtnrL9-H0"
    })
}).then(res => res.json()).then(data => console.log(data))

const input = document.querySelector(".shorten__input");
const button = document.querySelector(".shorten__button");
let link_card = document.querySelectorAll(".link_card");
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
            button_presses++;
            if(button_presses > 2){
                button_presses = 0;
            }
            link_card[button_presses].style.display = "grid"
            link_card_input[button_presses].innerHTML = input.value
        }
        // else this
        else{
            console.log("Invalid Link");
        }
    }
    valid();

}
