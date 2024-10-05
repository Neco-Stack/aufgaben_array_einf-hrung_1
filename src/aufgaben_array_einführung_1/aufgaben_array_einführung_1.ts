const bucketList: string[] = ["Kopenhagen", "Göbekli-Tepe", "Antarktis"];
const luckyNumbers: number[]
= [33, 21, 3];
const favoritePeople: string[] = ["Ken", "John", "Murphy"];
// we declared three arrays 
// we console log them
console.log("bucketList");
console.log("luckyNumbers");
console.log("favoritePeople");
// now we log values out of arrays
console.log("1.Ort:", bucketList[0]);
console.log("2.Ort:", bucketList[1]);
console.log("3.Ort:", bucketList[2]);
console.log("1.Zahl:", luckyNumbers[0]);
console.log("2.Zahl:", luckyNumbers[1]);
console.log("3.Zahl:", luckyNumbers[2]);
console.log("1. Mensch", favoritePeople[0]);
console.log("2. Mensch", favoritePeople[1]);
console.log("3. Mensch", favoritePeople[2]);
// now we use .length to get the number of elements in each array
console.log("Anzahl Orte", bucketList.length);
console.log("An Anzahl der Zahlen", bucketList.length);
console.log("Anzahl der Favorite Persons:", bucketList.length);
// now we use the push() method to add arrays to arrays at the end of the array 
let sports: string[] = ["Boxing", "MMA", "Jiu-Jitsu"];
sports.push("Karate", "Teak-Won-Do");
console.log(sports);
// now we use the pop() method
// with pop method you can extract the last value of the array 
console.log("Neue Länge nach Push:", sports.length);
// above you see the new lenght after the push and now we use pop
let sportsGame = sports.pop();
console.log(sportsGame);
console.log(sports);
let lastLucky = luckyNumbers.pop();
console.log("Popped Number:", lastLucky);
console.log(luckyNumbers);
let poppedFavorite = favoritePeople.pop();
console.log("Neue Gruppe:", favoritePeople);
console.log("Entfernte Person", poppedFavorite);
let neueBucket = bucketList.pop();
console.log(neueBucket);
console.log(bucketList);
// with shift() you remove the first value of the array
let shiftedPerson = favoritePeople.shift();
console.log(favoritePeople);
console.log(shiftedPerson);
// now we use the array method unshift ()
// unshift adds in the beginning of the relevant array
let citiesSeen: string[] = ["Istanbul", "TelAviv", "Beirut"];
citiesSeen.unshift("Toki", "Shanghai");
console.log(citiesSeen);
// with slice() you cut out values out of a array 
// slice needs starindex, endindex optional
// remember slice makes a copy of the referenced array and dnt change the original array 
let lieblingsReiseziele : string[] = ["Antalya", "Rom"];
console.log(lieblingsReiseziele);
let slicedReiseziele : string[] = lieblingsReiseziele.slice(0,2);
console.log(slicedReiseziele);
console.log(lieblingsReiseziele);
// now we see the difference between push-pop, shift-unshift
let numbersArray: number[] = [23, 54, 75];
console.log("wir beginnen mit folgenden Arrays", numbersArray);
numbersArray.push(1,2,3,4,5);
console.log("NachPush:", numbersArray);
// we see push adds the new vales at the end
numbersArray.unshift(10,20,30,40,50);
console.log(numbersArray);
// we see unshift adds the values in the beginning
let poppedArray = numbersArray.pop();
console.log(numbersArray);
console.log(poppedArray);
let poppedArrayzwei = numbersArray.pop();
console.log(numbersArray);
console.log(poppedArrayzwei);
// we see pop deletes from the end
let gelöschteArray = numbersArray.shift();
let gelöschteArrayzwei = numbersArray.shift();
console.log(numbersArray);
console.log(gelöschteArray, gelöschteArrayzwei);
// we see shift deletes from the start 
// now we learn to copy arrays 
let oldHollywoodActors : string[] = ["Marlon Brando", "Audrey Hepburn", "Elisabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"];
console.log(oldHollywoodActors);
let actorsReference: string[] = oldHollywoodActors;
actorsReference.push("Marilymn Monroe");
console.log(oldHollywoodActors, actorsReference);
let hollyConcat : string[] = oldHollywoodActors.concat();
console.log("Concetted:", hollyConcat);
// above weve made a copy cia concat now we make one with slice 
let hollySlice: string[] = oldHollywoodActors.slice();
console.log("Mit Slice: ", hollySlice);
// now we make a copy with spread-operator
let newHollywoodactors: string[] = ["johnson", "tyler", "conor"];
console.log(newHollywoodactors);
let spreadedActors: string[] = [...newHollywoodactors]
console.log(spreadedActors);
console.log(spreadedActors);
console.log("hi");
console.log("test");
console.log("test");
