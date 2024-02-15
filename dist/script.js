document.getElementById('range-field').value = document.getElementById("range").value;
document.getElementById("range").addEventListener('change', function(e) {
    const valueOfRange = e.target.value;
    //document.getElementById("range-field").value = valueOfRange;
    document.getElementById("range-field").value = valueOfRange;
})
document.getElementById("range-field").addEventListener('keyup', function(e) {
    const valueOfRange = e.target.value;
    document.getElementById("range").value = valueOfRange;
})

document.getElementById("generate").addEventListener('click', function(){
        document.getElementById("result").innerText = generatePassword();
    document.getElementById('copied').classList.add("hidden");
    }
)

document.getElementById('copy').addEventListener('click',function(){
    copyText();
    document.getElementById('copied').classList.remove("hidden");

})

function generatePassword() {
    let password = "";
    const passLen = document.getElementById("range").value;
    const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const symbols = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?".split("");
    const numbers = "0123456789".split("");

    const selectedSets = [];

    if (document.getElementById("lowercase").checked) {
        document.getElementById('error').classList.add('hidden')
        selectedSets.push(lowerCase);
    }
    if (document.getElementById("uppercase").checked) {
        document.getElementById('error').classList.add('hidden')
        selectedSets.push(upperCase);
    }
    if (document.getElementById("symbols").checked) {
        document.getElementById('error').classList.add('hidden')
        selectedSets.push(symbols);
    }
    if (document.getElementById("numbers").checked) {
        document.getElementById('error').classList.add('hidden')
        selectedSets.push(numbers);
    }

    if (selectedSets.length === 0) {
        document.getElementById('error').classList.remove('hidden')
    }

    for(let i = 0; i < passLen; i++){
        const selectSetRandom = Math.floor(Math.random()* selectedSets.length);
        const randomSetIndex = selectedSets[selectSetRandom];
        const getRandomFromSelectSet = Math.floor(Math.random() * randomSetIndex.length);
        password += randomSetIndex[getRandomFromSelectSet];
    }

    return password;
}
function copyText() {
let copyText = document.getElementById("result");
copyText.select();
copyText.setSelectionRange(0, 99999); 
navigator.clipboard.writeText(copyText.value);
}
