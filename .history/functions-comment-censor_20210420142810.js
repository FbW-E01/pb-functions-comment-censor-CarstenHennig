// # Print out censored comments

// You are writing a comment censoring feature for a young childrens website.

// Below there are three arrays of comments. Go through each comment in each array of those comments,
// printing out each comment - but replace the banned words with good words.
// Important: replace both uppercase and lowercase versions,
// so `HECK` should be replaced with `H**k` and `heck` should be replaced with `H**k`.

// ## Word replacements

// - Heck => H**k

let restrictedWords = ["Heck", "Feck", "Darn", "Assassin", "Dude"];
let replaceWords = ["H**k", "F*ck", "Heckn'", "WooohooWoohooin", "Friendo"];

for (var i = 0; i < restrictedWords.length; i++) {
  let loopedWords = restrictedWords[i].replace(
    restrictedWords[i],
    replaceWords[i]
  );
  console.log(loopedWords);
}

let oldEE = "Heck";

for (i = 0; i < 1; i++) {
  oldEE = oldEE.toLowerCase();
  function replaceOne() {
    let newEE = oldEE.replace(/e/, "*");
    let finalEE = newEE.replace(/c/i, "*");
    console.log(finalEE);
  }

  replaceOne();

  for (j = 0; j < 1; j++) {
    oldEE = oldEE.toUpperCase();
    function replaceOne() {
      let newEE = oldEE.replace(/e/, "*");
      let finalEE = newEE.replace(/c/i, "*");
      console.log(finalEE);
    }

    replaceOne();
  }
}

// - Feck => F*ck

let myEE = "Feck";

function replaceTwo() {
  let noEE = myEE.replace(/e/, "*");
  console.log(noEE);
}

replaceTwo();

// - Darn => Heckn'

let myDarn = "Darn";

function replaceThree() {
  let noDarn = myDarn.replace("Darn", "Heckn'");
  console.log(noDarn);
}

replaceThree();

// - Assassin => WooohooWoohooin

let oldString = "Assassin";
function replaceFour() {
  let newString = oldString.replace("Assassin", "WooohooWoohooin");
  console.log(newString);
}

replaceFour();

// - Dude => Friendo

let oldDude = "Dude";
function replaceFive() {
  let newDude = oldDude.replace("Dude", "Friendo");
  console.log(newDude);
}

replaceFive();

// ## Test data

let Array1 = [
  "Dude, I finally did it - I managed to find a dagger of the Assassin",
  "This darn coffee tastes like hot garbage",
  "Suriname enable Plastic",
  "The Football Is Good For Training And Recreational Purposes",
  "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
  "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients It's awesome as FECK",
  "The Apollotech Assassin B340 is an affordable wireless Guylthyulg with reliable connectivity, 12 months battery life and modern design",
  "The Greater hell magic mushroom were-quylthulg jumps over the lazy dog",
];

// let restrictedWords = ["Heck", "Feck", "Darn", "Assassin", "Dude"];
// let replaceWords = ["H**k", "F*ck", "Heckn'", "WooohooWoohooin", "Friendo"];

for (var i = 0; i < Array1.length; i++) {
  let result = Array1[i].split(" ");
  let foundBadWords = result.filter((eol) => restrictedWords.includes(eol));
  let res = result.join(" ").replace(foundBadWords, "Woohoo");
  let test = Array1.indexOf("Assassin");
  console.log(test);

  console.log(res);
}

// // function replaceStrings() {
//   if (result.includes("Assassin")) {
//     [result.splice("Assassin", "WooohooWoohooin")];
//   } else if (result.includes("Darn")) {
//     [Array1.splice("Darn", "Heck\n")];
//   } else if (Array1.includes("Dude")) {
//     [Array1.splice("Dude", "Friendo")];
//   } else if (Array1.includes("Heck")) {
//     [Array1.splice("Heck", "H**k")];
//   } else if (Array1.includes("Feck")) {
//     [Array1.splice("Feck", "F*ck")];
//   }
//   replaceStrings();
// }

// console.log(Array1);

// Array2:
// [
//   "DARN IT ALL TO HECK"
//   ,"In contrast, there is little theoretical analysis or experimental study of memes."
//   ,"However, this is not the whole story, and individual differences in susceptibility to particular memes may reflect differences in genotype and development."
//   ,"Unfortunately, computer music memes are not replicating and spreading themselves much further than narrow technically specialised audiences."
//   ,"Isn't it simpler to posit that selection is taking place not at the level of groups of individuals, but at the level of memes themselves?"
//   ,"We agree with most of this, although we prefer not to use language that implies that memes are independent living entities."
//   ,"In this way, memes introduce new selectional forces and new kinds of variation into the cultural evolutionary process."
//   ,"The minds are habitats of the memes, and they are certainly limited in their capacity."
// ]

// Array3:
// [
//   "Do you know that game; the Creed of the Assassin - well yeah it's lame has heck"
//   ,"'Loan Marino input', By Armani"
//   ,"'Sports', By Armani"
//   ,"'quantifying morph quantify', By Armani"
//   ,"'Grove Wooden', By Armani"
//   ,"'XSS', By Armani"
//   ,"'Dynamic streamline XML', By Armani"
//   ,"'Leu Generic', By Armani"
//   ,"Java? Script? JAVASCRIPT? more like JAVA FECK"
// ]
