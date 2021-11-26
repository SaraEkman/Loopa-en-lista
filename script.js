console.log("Hej");

const mcFavoriteBrands = ["Honda", "Yamaha", "Suzuki", "Kawasaki", "ducati", "BMW"];
let ul = document.createElement('ul');
document.body.append(ul);

for (let i = 0; i < mcFavoriteBrands.length; i++) {
    const bands = mcFavoriteBrands[i];
    console.log(bands);
    let li = document.createElement('li');
    li.innerText = bands;
    ul.append(li);
    li.style.fontSize = "2rem";

    if (i % 2) {
        console.log(bands[i]);
        li.style.backgroundColor = "hotpink";
    }
}


const input = document.createElement('input');
input.style.fontSize = '2rem';
input.style.marginRight = '10px';
input.id = 'text';

const button = document.createElement('button');
button.innerText = 'Save';
button.style.fontSize = '2rem';

document.body.append(input, button);

button.addEventListener('click', getInputValue);

function getInputValue() {
    let vade = document.getElementById('text').value;
    console.log(vade);
    let li = document.createElement('li');
    li.innerText = vade;
    ul.append(li);
    li.style.fontSize = "2rem";

    // kvar att lösa 
    // if (li % 2 == 0) {
    //     li.style.backgroundColor = "hotpink";
    // }
}



