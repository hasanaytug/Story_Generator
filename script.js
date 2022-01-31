//Story Generator
/* 

1- Generate a random hero
2- Generate a weather condition
3- Generate a random bartender
4- Generate a drink

*/
const heroes = [
  {
    name: "Ragnar",
    title: "King",
    weapon: {
      putItOnCounter: "droped",
      weapon: "Axe",
    },
    phsycalLook: "by this big, muscled guy wearing warpaints on his face",
    specialLines: [],
    enterence: {
      howOpen: "like it kicked from outside",
      reaction: "scared",
      walking: "with his earth shattering stomps",
    },
    proNoun: ["He", "His", "Him"],
  },
  {
    name: "Roland",
    title: "Gunslinger",
    weapon: {
      putItOnCounter: "took out and did some tricks before he put",
      weapon: "Revolver",
    },
    phsycalLook:
      "by this mysterious man wearing boots with sharp, star shaped metals on their heels and his hidden face behind his cowboy hat",
    specialLines: [],
    enterence: {
      howOpen: "and a man in black came inside",
      reaction: "curious",
      walking: "like he has a purpose",
    },
    proNoun: ["He", "His", "Him"],
  },
  {
    name: "Morgan",
    title: "Detective",
    weapon: {
      putItOnCounter: "took out and put",
      weapon: "9mm Glock",
    },
    phsycalLook:
      "She wasn't the most beautiful women. She was wearing a a white shirt and black suit but she was the only female in the room",
    specialLines: [],
    enterence: {
      howOpen: "and the door chaims ringed",
      reaction: "a bug around a lamp.",
      walking: "with heal sounds echoing in this quitest bar",
    },
    proNoun: ["She", "Her", "Her"],
  },
  {
    name: "Mr. Adams",
    title: "Acountant",
    weapon: {
      putItOnCounter: "put",
      weapon: "pen",
    },
    phsycalLook:
      "this small man, wearing glasses holding a briefcase and a pen in his other hand",
    specialLines: [],
    enterence: {
      howOpen: "quitly",
      reaction:
        "the same as a moment before he entered the room. Not a single soul noticed",
      walking: "with hesitation",
    },
    proNoun: ["He", "His", "Him"],
  },
];

const weather = ["sunshine", "the sound of the rain", "freezing air"];

const bartender = [
  "red face, thin lips barely visible behind a thick moustache and a huge belly",
  "blue eyes behind his circle glasses, pointy head on top of his long neck",
  "huge hands, really, reallly gigantic hands",
];

const bartenderAccessories = [
  "red bowtie",
  "purple tie",
  "circle earrings",
  "skull shape ring",
];

const drinks = [
  "Club soda",
  "Something colorful",
  "Scotch on the rocks",
  "Appletini",
];

const randomHero = Math.floor(Math.random() * 4);
const randomWeather = Math.floor(Math.random() * 3);
const randomBartender = Math.floor(Math.random() * 3);
const randomBartenderAccessories = Math.floor(Math.random() * 4);
const randomDrink = Math.floor(Math.random() * 4);

const BarStory = `The bar door opened ${
  heroes[randomHero].enterence.howOpen
}.The room filled with ${weather[randomWeather]}. 
Everyone in the bar looked like ${heroes[randomHero].enterence.reaction} ${
  heroes[randomHero].phsycalLook
}.
${heroes[randomHero].proNoun[0]} walked to the bar counter ${
  heroes[randomHero].enterence.walking
}, then ${heroes[randomHero].weapon.putItOnCounter} ${heroes[
  randomHero
].proNoun[1].toLowerCase()} ${heroes[
  randomHero
].weapon.weapon.toLowerCase()} on the counter. 
The bartender who had ${bartender[randomBartender]}, and wearing a  ${
  bartenderAccessories[randomBartenderAccessories]
} asked;
"What can I get you?"
${heroes[randomHero].proNoun[0]} said;
"${drinks[randomDrink]}".
Bartender looked a little surprised by the order and he said;
"Sure... If that's what you want. You are new here. What is your name?".
${heroes[randomHero].proNoun[0]} replied;
"${heroes[randomHero].name}... ${heroes[randomHero].title} ${
  heroes[randomHero].name
}"
then ${heroes[randomHero].title} ${
  heroes[randomHero].name
} take a sip from ${heroes[
  randomHero
].proNoun[1].toLowerCase()} freshly served drink with the hope of wiping all of the tiredness of the day.`;

console.log(BarStory);
