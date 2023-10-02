let story = [];
const arrays = {
    nouns1: ["dog", "cat", "man"], // Add more nouns as needed
    verbs: ["runs", "jumps", "swims"], // Add more verbs
    adjectives: ["happy", "blue", "tall"], // Add more adjectives
    nouns2: ["ball", "tree", "book"], // Add more nouns
    places: ["beach", "school", "library"] // Add more places
}

function pickRandom(arrayName) {
    const randomIndex = Math.floor(Math.random() * arrays[arrayName].length);
    story.push(arrays[arrayName][randomIndex]);
    document.getElementById('result').innerText = story.join(' ');
}

function generateStory() {
    story = [];
    for (let key in arrays) {
        pickRandom(key);
    }
}

function resetStory() {
    story = [];
    document.getElementById('result').innerText = '';
}

// Adding student id/name dynamically
document.getElementById('studentDetails').innerText = "RAHI PATEL/ID: [200520003]";
