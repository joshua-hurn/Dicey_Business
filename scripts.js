let genBtn = document.getElementById('generateBtn');

class Die {
    constructor(value) {
        this.value = value;
        this.div = document.createElement('div')
    }
    roll() {
        let numGen = Math.floor((Math.random() * 6) + 1);
        this.div.innerHTML = numGen;
    }
}

genBtn.addEventListener('click', () => {
    document.createElement('div');
    roll();
    document.getElementById('dice-container').appendChild(this.div);
})