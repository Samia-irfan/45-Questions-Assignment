// Answer no 1 Environmental setup completed
// Answer no 2 to introduce a person and greetting them by leaving a message
let personName: string = "Samia Irfan";
console.log("Assalamualaikum " + personName + " would you like to learn some typescript today?");
// Answer no 3 
let friEnd: string = "Daniyal";
console.log(friEnd.toLowerCase());
console.log(friEnd.toUpperCase());
function titleCase(string: string){
    return string.toLowerCase().split(' ').map(function(word){
        return word.replace(word[0], word [0].toUpperCase());}).join(' ');
}
console.log(titleCase(friEnd));
//Answer no 4
let famousQuote: string = "You always pass failure on your way to success";
console.log("Mickey Rooney once said, " + famousQuote + ".");
// Answer no 5
let famous_person: string = "Mickey Rooney";
let message: string = "You always pass failure on your way to success.";
console.log(famous_person + " once said," + message );
//Answer no 6 
let person=`\n\t SAMIA IRFAN\t\n`;
console.log(person);
let stripped: string = person.trim();
console.log(stripped);
//Answer no 7
console.log(5+3, 10-2, 2*4, 16/2);
//Answer no 8
console.log(5+3);
console.log(10-2);
console.log(2*4);
console.log(16/2);
//Answer no 9
let favNumber: string = "75";
console.log("My fav number is " + favNumber + ".");
//Answer no 10 to write comments
//Answer no 11
let myFriends: string[] = ["Daniyal","Zahra","Ayaan","Amna"];
for (let i =0; i<myFriends.length; i++){
    console.log(myFriends[i]);
}
//Answer no 12 
let zA: string = "zahra";
let dA: string = "Daniyal";
let aA: string = "Ayaan";
let aMa: string = "Amna"; 
console.log("heyy!! how are you doing " + zA + "?" );
console.log("heyy!! how are you doing " + dA + "?");
console.log("heyy!! how are you doing " + aA + "?");
console.log("heyy!! how are you doing " + aMa + "?");
//Answer no 13
let vehicles: string[] = ['BMW Car', 'Heavy bike', 'Alpi helicopter',];
let favtransport: string = "I would like to own a ";
for (let i=0; i<vehicles.length; i++){
    console.log(favtransport + vehicles [i]);
}
// Answer No 14
let guests: string[] = ["Albert", "Doraemon", "Dinosaur"];
guests.forEach(guest => {
    console.log("Dear "
   +  guest + ", would you like to join me for dinner?");
});
// Answer no 15
//guest who is unable to attend
let unabletoattend = "Albert";
console.log( "my friend " + unabletoattend + ' cant make it to dinner, Nobita will be joining us for dinner instead.') ;
//guest who is the replacement of the previous guest 
let replacement = "Nobita";
guests[guests.indexOf(unabletoattend)] = replacement;
// new invitation to replacement of "Dinosaur"
guests.forEach(guests => {
    console.log('Dear ' + guests + " , would you like to join me for dinner?");
});
// Answer no 16 
 let guestss: string[] = ["Albert", "Doraemon", "Dinosaur"];
 console.log("I have a good news!! I found a new bigger place for dinner");
 guestss.unshift("Cat noir");
 guestss.splice(guests.length / 2, 0, "superman");
 guestss.push("muskan");
 guestss.forEach( guests => {
    console.log("Dear " + guests + " would you like to join me for dinner?")
 });
 console.log("Sorry for the inconvenience but i can't arrange a bigger table in that short time so I may invite only two guests for dinner.");
 // Answer no 17 
 console.log("sorry, Looks like i can not arrange a bigger place on time so i may invite only two people for dinner.");
while (guests.length > 2) { let removedGuest = guests.pop();
    console.log("Dear " + removedGuest + " Sorry for the inconvenience, I can not invite you for dinner.");
}
guests.forEach (guests => {
    console.log( "Dear " + guests + " you are still invited for dinner.");
});
//Answer no 18
let favPlaces: string[] = ["Swat", "Newzealand", "Dream world", "Pakistan", "Palestine"];
console.log("Original order: \n" + favPlaces);

let AlphabeticalOrder = [...favPlaces].sort();
console.log("The list is in Alphabetical order without the original list being modified \n" + AlphabeticalOrder);

console.log(favPlaces);

let ReverseAlphabeticalOrder = [...favPlaces].sort().reverse();
console.log("The list is now in reversed alphabetical order without being modified originally \n" + ReverseAlphabeticalOrder);

console.log(favPlaces);

let reverseOrder = [...favPlaces].reverse();
console.log("The list is now reversed as wordings without being modifiedin original array \n" + reverseOrder);

console.log(favPlaces);

favPlaces.sort();
console.log(" The list of original places will be modified alphabetically \n" +favPlaces)

favPlaces.sort().reverse();
console.log("The places now will be modified originally as reversed alphabetical order \n" + favPlaces);

favPlaces.reverse();
console.log("The places will now be modified originally in reversed oder \n" + favPlaces);

//Answer no 19 
console.log("I'm inviting 6 pepole to my dinner Party, " + guestss + " are invited.");

//Answer no 20 
let favthings: string[] = ["K2", "River indus", "pakistan", "karachi", "english"];
favthings.forEach(favthings => {
    console.log("I love " + favthings + ".");
});
// Answer no 21 
let Cat: {
    CName: string;
    Color: string;
    Age: number;
    owner: string;
}={
    CName: "Tiger",
    Color: "brown",
    Age: 3,
    owner: "Samia Irfan"
};
console.log( "I have a cat its name is " + Cat.CName + " its color is " + Cat.Color + " he is " + Cat.Age + " months old and its owner is " + Cat.owner );
// Answer no 22
let cars: string[] = ["mercedes", "porsche", "honda", "ferrari", "suzuki"];
console.log(cars[8]);
console.log(cars[3]);
//Answer no 23
let Pet = "Tiger";
console.log("Is Pet == 'Tiger?' I predict True.");
console.log( Pet == 'Tiger' );
let city= "karachi";
console.log("Is city == 'karachi?' I predict true.");
console.log(city == 'karachi');
let country= 'pakistan';
console.log("Is country == 'Thailand?' I predict it to be False.");
console.log(country === 'Thailand');
let sun= 'Yellow';
console.log("Is sun == 'Blue?' I predict it to be False.");
console.log(sun == 'Blue');
let menu= 'spheghetti';
console.log("Is menu == 'pizza?' I predict it to be false.");
console.log(menu == 'pizza');
let yourName= "Samia";
console.log("Is yourName 'Samia?' I predict it to be true.");
console.log(yourName == "Samia");
let Drink= "tea";
console.log("Is Drink 'tea?' I predict it to be true.");
console.log(Drink == "tea");
let Love= "kitten";
console.log("Is love 'puppy?' I predict it to be False");
console.log(Love == "puppy");
let Primeminister= "Imrankhan";
console.log("Is primeminister 'Imrankhan?' I predict it to be true.");
console.log(Primeminister == "Imrankhan");
let weather= "cold";
console.log("Is weather 'hot?' I predict it to be False.")
console.log(weather == "hot");
//Answer no 24
let series= ["miraculous", "Doraemon", "Masha", "Squidgame", "lovenextdoor"];
console.log("Is 'miraculous' included in series? I predict it to be true.")
console.log(series.includes("miraculous"));
console.log("Is 'Doraemon' included in series? I predict it to be true.");
console.log(series.includes("Doraemon"));
console.log("Is 'carebears' included in series? i predict it to be false.");
console.log(series.includes('carebears'));
console.log("Is 'uber' included in series? I preict it to be false");
console.log(series.includes('uber'));

// testing with less than and greater than 
console.log( 35 < 2 , "is predicted true.");
console.log(100 >  40 , 'Is predicted true.');
console.log(favtransport[4]== "lamborghini");
console.log(series.length[4]);
console.log(10-4 == 50);
console.log(
    "To convert into lower case: \n",
    "Apple".toLowerCase() == "apple", " predicted to be true." 
);
console.log(
    "testing toggle case: \n",
    titleCase("samia") == "Samia", 'predicted true'
);
console.log(
  "Testing with 'and' and 'or': \n",
  true && false,
  "\n",
  true,
  false
);

//Answer no 25
let Alien_color= "red";
if (Alien_color == "red"){
    console.log("congratulations!! you won");
}
 if (Alien_color == "black"){
    //no output
}
// Answer no 26
let aliencolor= "pink";
if (aliencolor == "pink"){
    console.log("you got 10 points")

} else{
    console.log("you got 0 points")
} 
if (aliencolor == "red"){
    console.log('you got 10 points.');
} else {
    console.log("you got 0 points.");
}
//Answer no 27 
let aliencolour= "green";
let kills= "10";
if (aliencolour == "green" && kills == "10"){
    console.log("you killed '10' aliens and you are 'green' ");
} else if (aliencolour== "red" && kills == "10"){
    console.log("you killed '10' aliiens and you are 'red'");
} else if (aliencolour== "black"){
    console.log("you killed '10' aliens and you are 'black'");
}
//Answer no 28
let agee: number = 16;
if (agee < 1){
    console.log("this user is a baby");
} else if (agee < 5){
    console.log("this user is a child.");
} else if (agee< 18){
    console.log("This user is a teen ager");
} else if (agee>20 ){
    console.log("This user is an adult.");
} else if (agee > 40){
    console.log("This user is a midle aged person.");
} else if (agee> 60){
    console.log("This user is a grandmother.");
}
//Answer no 29
let myfavfruits= ["strawberry", "watermelon", "orange", "kiwi"];
if (myfavfruits.includes("strawberry")){
    console.log("This user loves 'strawberry'");
}else (myfavfruits.includes("orange"));{
    console.log("This user loves'orange'");
}    if (myfavfruits.includes("mango")){
    console.log("This user loves'mango'");
} else {
    console.log("This user hates 'mango'");
}
if (myfavfruits.includes("kiwi")){
    console.log("This user loves 'kiwi'");
} else {
    console.log("Ths user hates kiwi");
}
if (myfavfruits.includes("melon")){
    console.log("This user loves 'melon'");
} else {
    console.log("This user hates 'melon'");
}
if (myfavfruits.includes("watermelon")){
    console.log("This user loves watermelon");
} else {
    console.log("This user hates watermelon");
}
//Answer no 30
let usernamess= ["user101", "user102", "Creator", "user103", "user104"];
usernamess.forEach((usernamess)=> {
    if (usernamess == "Creator"){
        console.log("Welcome to your dashboard " + usernamess+  " tap on right to see insights.");
    } else {
        console.log(" hey dear " + usernamess + " Log in to your account to continue.");
    }
});
// Answer no 31 
let usernamee = [];
if (usernamee.length == 0){
 console.log("we need to find new users.");
} else {
    console.log(`welcome ${usernamee} tap on your right to log in.`);
}
// Answer no 32 
let current_users = ["user890", "user234", "user654", "user101", "user988"];
let new_userNames = ["user677", "user234", "user999", "user222", "user569"];
new_userNames.forEach((new_userNames) => {
 if (
    current_users.some(
    (current_users) => current_users.toLowerCase() == new_userNames.toLowerCase()
 )
) {
    console.log("This username is Not valid try another one." );
} else {
    console.log("This username is available.");
}
});
// Answer no 33 
let positions= [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
positions.forEach((position)=>{ let suffix = "th";
if (position == 1){
    suffix = "st"
} else if (position == 2){
     suffix = "nd"
} else if (position == 3 )
{suffix = "rd"
} console.log (position + suffix );
});
//Answer no 34
let flavours = ["strawberry", " chocolate", " pista", " mango", " bubblegum"];
console.log(`My uncle has opened up a new shop down the street he has \n ${flavours} flavoured ice creams in his shop`);
console.log("I love his hardwork and his ice creams!!");
//Answer no 35 
let Animals = ["kitten", "cow", " camel", "sheep"];
Animals.forEach((animal) =>{ 
    console.log(`the group which have four legs includes ${animal}`);
});
//Answer no 36
function makeShirt(color: string, message: string,) {
    console.log(
      `A ${color} coloured shirt with "${message}" written on it is to be customized.`
    );
  }
  
  makeShirt("blue","Doraemon");
  makeShirt("black", "i am an emo girl!!");


  //Answer no 37;
function largeShirt(size:string="extra large", message:string="Barbie!!"){
    console.log(`A ${size} size shirt with ${message} printed on it is the desired product.`);
    }
    
    largeShirt();
    largeShirt("Medium");
    largeShirt("Small","Dinosaur");
    
    //Question no.38;
    function location(city:string,country:string="Pakistan"){
      console.log(`You belong to ${city} city in ${country}.`);
    }
    
    location("karachi");
    location("Paris","France");
    location("lahore");
    
    //Question no.39;
    function cityCountry(city:string,country:string){
      console.log(`${city}, ${country}.`);
    }
    
    cityCountry("Delhi", "India");
    cityCountry("Islamabad", "pakistan");
    cityCountry("Peru", "Papua New Gunia");
    
    //Question no.40;
    function Albums(   Artist:string, Title:string, tracks?:number){
    let albums:any = {Artist, Title};
    if(tracks) {
      albums["tracks"]=tracks;
    } return albums;
    }         
    console.log(Albums("shakira", "This time for africa", 17));
    console.log(Albums("Meghan trainer", "Me too",5));
    
    //Question no.41;
    let magicians:string[]=['Madhatter','Doraemi','zee','Whitch'];
    function magic(magicians:string[]){
      magicians.forEach(element => {
      console.log(element)
      });
    }
    
    magic(magicians);
    
    //Question no. 42;
    function greatMagic(magicians:string[]){
      for(let i=0; i< magicians.length; i++){
        magicians[i]=magicians[i] + " The great."
      }
    };
    
    greatMagic(magicians);
    magic(magicians);
    
    //Question no.43;
    let magician:string[]=['Alice','Hook','Witch','Jack'];
    function greatMagician(magician:string[]):string[]{
      let great_magician:any=[];
     magician.forEach(Magician => {
      great_magician.push(Magician + " the great.");
     })
     return great_magician;
    }
    
    let great_magician = greatMagician(magician.slice());
    console.log("The list of great magicians:");
    magic(great_magician)
    console.log("The original list:");
    magic(magician)
    
    //Question no.44;
    function sandwiches(...items:string[]){
      console.log("Making a sandwich with " +items.join(" ,")+ ".");
    }
    sandwiches("chicken", "tomato", "lettuce","bread","cheese");
    sandwiches('ketchup','bread','chicken');
    
    //Question no.45;
    function  Car(manufacturer:string,model:string,...options:[string,any][]):Record<string,any>{
    let madecar:any= {manufacturer,model};
    options.forEach(([key,value])=> madecar[key]=value);
    return madecar;}
    console.log(Car("Audi","A8",["Owner","Mr.chinchaw"],["USED",true]));
    console.log(Car("changan","*7",["color", "black"],["Price",89000000]));
    export {};
    
  