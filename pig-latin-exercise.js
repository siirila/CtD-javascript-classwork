// Given a word, return the pig latin version of that word

function getVowels() {
    return ['a', 'e', 'i', 'o', 'u'];
}

function isConsonant(letter) {
    var vowels = getVowels();

    if (vowels.includes(letter)) {
        return false;
    }
    
    return true;
}

function doesWordBeginWithConsonantSound(word) {
    return isConsonant(word[0]);
}

function translateWordThatBeginsWithConsonantSound(word) {
    // all letters before the initial vowel are placed at the end of the word sequence.
    var translatedWord = "";

    var firstVowelIndex = 0;
    // loop through letters in word
        // until we reach the first vowel
    while (isConsonant(word[firstVowelIndex])) {
        firstVowelIndex++;
    }

    // Move everything before the first vowel to the end
    // push the consonants before the first vowel to the end of the word
    // get the first half of the word
    // get the second half of the word
    var firstPart = word.slice(0, firstVowelIndex);
    var secondPart = word.slice(firstVowelIndex);

    translatedWord = secondPart + firstPart;

    // Then, "ay" is added
    translatedWord = translatedWord + "ay";

    return translatedWord;
}

function getPigLatin(inputWord) {
    // If the word begins with a consonant sound
    if (doesWordBeginWithConsonantSound(inputWord)) {
        return translateWordThatBeginsWithConsonantSound(inputWord);
    }

    return "Unable to translate " + inputWord + " to pig latin"
}

console.log(`pig should return igpay, actually returned ${getPigLatin('pig')}`);
console.log(`latin should return atinlay, actually returned ${getPigLatin('latin')}`);
console.log(`smile should return ilesmay, actually returned ${getPigLatin('smile')}`);
console.log(`eat should return eatway, eatyay, or eatay, actually returned ${getPigLatin('eat')}`);
console.log(`omelet should return omeletway, omeletyay, or omeletay, actually returned ${getPigLatin('omelet')}`);
console.log(`honest should return honestyay, honestway, or honestay, actually returned ${getPigLatin('honest')}`);
console.log("This last one, honest, is beyond what I would expect you to solve right now");
console.log("To be honest, I don't know how to solve that one off the top of my head.");

/*
For words that begin with consonant sounds,
all letters before the initial vowel are placed at the end of the word sequence.
Then, "ay" is added, as in the following examples:

"pig" = "igpay"
"latin" = "atinlay"
"banana" = "ananabay"
"happy" = "appyhay"
"duck" = "uckday"
"me" = "emay"
"too" = "ootay"
When words begin with consonant clusters (multiple consonants that form one sound),
the whole sound is added to the end when speaking or writing.

"smile" = "ilesmay"
"string" = "ingstray"
"stupid" = "upidstay"
"glove" = "oveglay"
"trash" = "ashtray"
"floor"= "oorflay"
"store"= "orestay"


For words that begin with vowel sounds,
one just adds "way" or "yay" to the end (or just "ay").
Examples are:

"eat" = "eatway" or "eatay"
"omelet" = "omeletway" or "omeletay"
"are" = "areway" or "areay"
"egg" = "eggway" or "eggay"
"explain" = "explainway"
"always" = "alwaysway" or "alwaysay"
"ends" = "endsway" or "endsay"
"honest" = "honestway"
"I"= "Iway"
*/

/*
As a bonus, implement the rule for words that begin with a vowel sound,
and vary the suffix between "way", "yay", and "ay" randomly
*/