class Dice {
    constructor(value) {
        this.value = value;
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        document.getElementById('dice-container').appendChild(this.div);
        document.getElementById('generateBtn').addEventListener('click', () => {
            document.createElement('div');
            let numGen = Math.floor((Math.random() * 6) + 1);
            this.div.innerHTML = numGen;
        })
    }
    roll() {
        let numGen = Math.floor((Math.random() * 6) + 1);
        this.div.innerHTML = numGen;
    }
}

document.getElementById('generateBtn').addEventListener('click', () => {
    new Dice();
    let numGen = Math.floor((Math.random() * 6) + 1);
    this.div.innerHTML = numGen;
})