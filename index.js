// 1.
// const car = {
//     name: "BMW",
//     color: "Silver",
//     start() {
//         console.log("car started")
//     }
// };

// console.log(car.name)
// console.log(car.color)
// car.start()

// 2.
// const student = {
//     name: "vaxo",
//     age: 19,
//     profession: "HTML/CSS/JS Front-End Dev",
//     bio: "Loves to Code, Creative Designer, Needs Coffee to work 100%, likes to code visuals more",
//     info() {
//         console.log(this.name, this.age, this.profession, this.bio);
//     }
// };

// student.info()

// 🔹 every
// let arr = [2,4,6,8,12];
// let res = arr.every(n => n % 2 === 0);

// console.log(arr)
// console.log(res)

// 🔹 some
// let arr = [40,20,150,50];
// let res = arr.some(n => n > 100);

// console.log(arr)
// console.log(res)

// 🔹 find
// let arr = ["mango","apple","pizza","avocado"];
// let res = arr.find(n => n.startsWith("a"));

// console.log(arr)
// console.log(res)

// 🔹 filter
// let arr = [20,5,9,25,1,30];
// let res = arr.filter(n => n < 10);

// console.log(arr)
// console.log(res)

// 🔹 map
// let arr = [2,4,8,10];
// let res = arr.map(n => n + n);

// console.log(arr)
// console.log(res)

// 🔹 reduce
// let arr = [2,4,8,10];
// let res = arr.reduce((a, b) => a + b);

// console.log(arr)
// console.log(res)

// 🔹 setTimeout
// setTimeout(() => {
//     console.log("ვახო")
// }, 2000);

// 🔹 setInterval
// setInterval(() => {
//     console.log("hello")
// }, 1000);


// sort (1–20)

// 1.
// let arr = [2,1,5,7,4,3,6,8,10,9];
// let res = arr.sort((a, b) => a - b);

// console.log(res)

// 2.
// let arr = [2,1,5,7,4,3,6,8,10,9];
// let res = arr.sort((a, b) => b - a);

// console.log(res)

// 3.
// let arr = ["banana","apple","caramel","dragonfruit","egg"];
// let res = arr.sort()

// console.log(res)

// 4.
// let arr = ["banana","apple","caramel","dragonfruit","egg"];
// let res = arr.sort().reverse();

// console.log(res)

// 5.
// let arr = ["vaxo","ana","giorgi","vaxtangi","anano","gio","lasha"];
// let res = arr.sort((a, b) => a.length - b.length)

// console.log(res);

// 6.
// let arr = [-10, 5, -2, 8, 1, -1];
// let res = arr.sort((a, b) => Math.abs(a) - Math.abs(b));

// console.log(res);

// 7.
// let arr = [
//     {name: "vaxo", age: 15},
//     {name: "anano", age: 25},
//     {name: "lasha", age: 45},
//     {name: "gio", age: 13}
// ]

// let res = arr.sort((a,b) => a.age - b.age)

// console.log(res);

// 8.
// let arr = [
//     {product: "bananaicecream", price: 15},
//     {product: "applepie", price: 25},
//     {product: "dragonfruit", price: 45},
//     {product: "chocolate", price: 13}
// ];

// let res = arr.sort((a,b) => a.price - b.price)

// console.log(res);

// 9. 
// let arr = [
//     {name: "vaxo", age: 15},
//     {name: "anano", age: 25},
//     {name: "vaxtangi", age: 45},
//     {name: "gio", age: 13}
// ]

// let res = arr.sort((a,b) => a.name.length - b.name.length)

// console.log(res);

// 10.
// let arr = ["gama d","banana c","berry a","apple b"];

// let res = arr.sort((a, b) => {
//     return a[a.length - 1].localeCompare(b[b.length - 1]);
// });

// console.log(res);

// 11.
// let arr = [2,1,4,5,10,11,25,30,31];
// let res = arr.sort((a,b) => {
//     return (a % 2) - (b % 2);
// });

// console.log(res)

// 12.
// let arr = [2,1,4,5,10,11,25,30,31];
// let res = arr.sort((a,b) => {
//     return (b % 2) - (a % 2);
// });

// console.log(res)

// 13.
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let res = arr.sort((a,b) => {
//     return (a % 3) - (b % 3);
// });

// console.log(res)

// 14.
// let arr = ["gama","GAMA","vaxo","GIORGI","lasha","giorgi"];
// let res = arr.sort((a, b) => {
//     let x = a.toLowerCase();
//     let y = b.toLowerCase();

//     if (x > y) return 1;
//     if (x < y) return -1;
//     return 0;
// });

// console.log(res)

// 15.
// let arr = [
//     {name: "vaxo", age: 25},
//     {name: "vaxtangi", age: 35},
//     {name: "kaxa", age: 15},
//     {name: "ani", age: 35},
//     {name: "givi", age: 55},
//     {name: "nikusha", age: 18},
// ];

// let res = arr.sort((a, b) => {
//     if (a.age !== b.age) {
//         return a.age - b.age;
//     }
//     return a.name.localeCompare(b.name);
// });

// console.log(res);

// 16.
// let arr = [2,1,4,-5,-10,-11,-25,30,31];
// let res = arr.sort((a,b) => {
//     return (a > 0) - (b > 0);
// });

// console.log(res)

// 17. 
// let arr = ["apple", "banana", "sky", "orange", "grape"];
// let vowels = "aeiou";
// let res = arr.sort((a, b) => {
//     let countA = 0;
//     let countB = 0;

//     for (let char of a.toLowerCase()) {
//         if (vowels.includes(char)) countA++;
//     }

//     for (let char of b.toLowerCase()) {
//         if (vowels.includes(char)) countB++;
//     }

//     return countA - countB;
// });

// console.log(res);

// 18.
// let arr = ["apple","orange","hello","egg","berry","dragonfruit","fire"];
// let res = arr.sort().reverse();

// console.log(res)

// 19.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let res = arr.sort(() => Math.random() - 0.5);

// console.log(res)

// 20.
// let arr = [
//     {product:"obj1", price: 100},
//     {product:"obj2", price: 1050},
//     {product:"obj3", price: 1550},
//     {product:"obj4", price: 200},
//     {product:"obj5", price: 120},
// ];
// let res = arr.sort((a, b) => {
//     return (a.price > 1000) - (b.price > 1000);
// });

// console.log(res)

// 21.
// let arr = ["apple","brocoli","mango","cucumber"];
// let res = arr.filter(n => n.includes("a"));

// console.log(arr);
// console.log(res);

// 22.
// let arr = ["apple","brocoli","mango","cucumber"];
// let res = arr.filter(n => n.startsWith("m"));

// console.log(arr);
// console.log(res);

// 23.
// let arr = ["apple","brocoli can","mango","cucumber","maaaan"];
// let res = arr.filter(n => n.endsWith("n"));

// console.log(arr);
// console.log(res);

// 24.
// let arr = ["apple","cool","mango","spoon"];
// let res = arr.filter(n => n.includes("oo"));

// console.log(arr);
// console.log(res);

// 25.
// let arr = ["apple","cool","mango","underground","ice"];
// let res = arr.filter(n => "aeiou".includes(n[0]));

// console.log(arr);
// console.log(res);

// 26.
// let arr = ["apple","brocoli can","same","cucumber","maaaan"];
// let res = arr.filter(n => n.endsWith("e"));

// console.log(arr);
// console.log(res);

// 27.
// let arr = ["something","ragaca","JavaScript","wuhu"];
// let res = arr.some(n => n === "JavaScript");

// console.log(arr)
// console.log(res)

// 28.
// let arr = ["apple","cool2","ma33ngo","underground","ice"];
// let res = arr.filter(wordnum => /\d/.test(wordnum));

// console.log(arr);
// console.log(res);

// 29.
// let arr = ["Apple","Cool","mango","Underground","ice"];
// let res = arr.filter(n => n.startsWith(n.toLowerCase()));

// console.log(arr);
// console.log(res);

// 30.
// let arr = ["apple","CooL","mango","UNDERGROUNd","icE"];
// let res = arr.filter(n => n[n.length -1] === n[n.length -1].toUpperCase());

// console.log(arr);
// console.log(res);

// 31.
// let arr = ["Apple","Cool","@mango","Under@ground","ice"];
// let res = arr.filter(n => n.includes("@"));

// console.log(arr);
// console.log(res);

// 32.
// let arr = ["Apple","Co ol","@mango"," Under@ground","ice"];
// let res = arr.filter(n => n.includes(" "));

// console.log(arr);
// console.log(res);

// 33.
// let arr = ["predator","preperation","after preparation","apple","per second","predated"];
// let res = arr.filter(n => n.startsWith("pre"));

// console.log(arr);
// console.log(res);

// 34.
// let arr = ["dating","apple","timing","flying","orange"];
// let res = arr.filter(n => n.endsWith("ing"));

// console.log(arr);
// console.log(res);

// 35.
// let arr = ["apple","gfds","nice","ggfjf","jfgxc"];
// let res = arr.filter(n => /[aeiou]/.test(n));

// console.log(arr);
// console.log(res);

// 36.
// let arr = ["apple","nice","same","cold"];
// let res = arr.filter(n => !n.includes("a"))

// console.log(arr)
// console.log(res)

// 37.
// let arr = ["xacho","vaxo","zura","zaza","ixvi"];
// let res = arr.filter(n => "xz".includes(n[0]))

// console.log(arr)
// console.log(res)

// 38.
// let arr = ["car","apples","mangoes","soon","movies"];
// let res = arr.filter(n => n.endsWith("s"));

// console.log(arr)
// console.log(res)

// 39.
// let arr = ["vaXo","giorgi","Nikusha","anano"];
// let res = arr.filter(n => /[A-Z]/.test(n));

// console.log(arr)
// console.log(res)

// 40.
// let arr = ["GIORGI","nikusha","vaxO","Anano","lasha","zUKAKo"];
// let res = arr.filter(n => n === n.toLowerCase());

// console.log(arr)
// console.log(res)

// 41.
// let arr = [1,2,2,1,4,7,8,4,10,12,3,4,5,7,8,9,6];
// let res = [...new Set(arr)];

// console.log(arr)
// console.log(res)

// 42.
// let arr = ["apple","avocado","apple","sun","avocado","ice","ketchup"];
// let res = [...new Set(arr)];

// console.log(arr)
// console.log(res)

// 43.
// let arr = [2,2,4,5,4,10,12,5];
// let res = [...new Set(arr)];
// let count = res.length;

// console.log(arr);
// console.log(res);
// console.log(count);

// 44.
// let arr = [2,2,5,10,10,4];
// let res = [...new Set(arr)];

// console.log(arr)
// console.log(res)

// 45.
// let arr = [2,2,10,4];
// let res = [...new Set(arr)];
// if(arr.length === res.length){
//     console.log("there is no duplicate")
// }else{
//     console.log("there is duplicate")
// }

// console.log(arr)
// console.log(res)

// 46.
// let arr = [2,4,2,5,2,10];
// let res = [...new Set(arr)];

// console.log(arr)
// console.log(res)

// 47.
// let arr1 = [2,4,7,1,10];
// let arr2 = [3,4,8,1,7,11];
// let finalres = [];

// if(arr1.length > arr2.length){
//     for(let i = 0; i < arr1.length; i++){
//         if(arr2.includes(arr1[i])){
//             finalres.push(arr1[i])
//         }
//     }
// }else{
//     for(let i = 0; i < arr2.length; i++){
//         if(arr1.includes(arr2[i])){
//             finalres.push(arr2[i])
//         }
//     }
// }

// console.log(arr1)
// console.log(arr2)
// console.log(finalres)

// 48.
// let arr1 = [2,4,7,1,10];
// let arr2 = [3,4,8,1,7,11];
// let finalres = [];

// for(let i = 0; i < arr1.length; i++){
//     if(!arr2.includes(arr1[i])){
//         finalres.push(arr1[i])
//     }
// }
// for(let i = 0; i < arr2.length; i++){
//     if(!arr1.includes(arr2[i])){
//         finalres.push(arr2[i])
//     }
// }

// let finalresult = [...new Set(finalres)];

// console.log(arr1)
// console.log(arr2)
// console.log(finalres)

// 49.
// let arr1 = [1,4,21,4,2,3];
// let arr2 = [3,2,1,11,4,7,8];
// let arr3 = [...arr1, ...arr2];
// let res = [...new Set(arr3)];

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(res)

// 50.
// let arr = [3,5,1,2,7,4,1,5];
// let set = new Set();

// for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//         console.log(arr[i]);
//         break;
//     }
//     set.add(arr[i]);
// }

// 51.
// let arr = [2,4,1,2,7,4,1];
// let seen = new Set();
// let duplicates = new Set();

// for (let i = 0; i < arr.length; i++) {
//     if (seen.has(arr[i])) {
//         duplicates.add(arr[i]);
//     } else {
//         seen.add(arr[i]);
//     }
// }

// console.log([...duplicates]);

// 52.
// let newset = new Set();
// newset.add(3)
// newset.add(4)
// newset.add(5)

// console.log(newset)

// 53.
// let arr = [2,3,4,4,2];
// let set = new Set(arr);
// let newset = [...set];

// console.log(arr)
// console.log(set)
// console.log(newset)

// 54.
// let arr = [2,3,4,2,4,8,4];
// let set = new Set(arr);
// set.has(8) ? console.log("it does") : console.log("it does not");

// console.log(set)

// 55.
// let arr = [2,3,4,2,4,8,4];
// let set = new Set(arr);
// set.delete(8)

// console.log(arr)
// console.log(set)

// 56.
// let hello = "howareyou";
// localStorage.setItem("message", hello)

// 57.
// let hello = "lets goo";
// localStorage.setItem("message", hello)

// console.log(localStorage.getItem("message"));

// 58.
// let hello = "lets goo";
// localStorage.removeItem("message")

// 59.
// let hello = "lets goo";
// let hello2 = "ok now bye";
// let hello3 = "see ya later";
// localStorage.setItem("message", hello)
// localStorage.setItem("message2", hello2)
// localStorage.setItem("message3", hello3)

// localStorage.clear()

// 60.
// let object = [
//     {item: "headphones", price: 100},
//     {item: "mouse", price: 50},
//     {item: "processor", price: 5900},
//     {item: "monitor", price: 200},
// ];

// localStorage.setItem("object", JSON.stringify(object));
// console.log(localStorage.getItem("object"))

// 61.
// let object = [
//     {item: "headphones", price: 100},
//     {item: "mouse", price: 50},
//     {item: "processor", price: 5900},
//     {item: "monitor", price: 200},
// ];

// localStorage.setItem("object", JSON.stringify(object));
// let readstorage = JSON.parse(localStorage.getItem("object"));

// console.log(readstorage);

// 62.
// let arr = [2,3,4,5,1,2,3];
// localStorage.setItem("savearray", JSON.stringify(arr));
// let seearray = JSON.parse(localStorage.getItem("savearray"));

// console.log(seearray);

// 63.
// let arr = [2,3,4];
// localStorage.setItem("savedarray", JSON.stringify(arr));
// arr.push(1,2);
// localStorage.setItem("savedarray", JSON.stringify(arr));
// let result = JSON.parse(localStorage.getItem("savedarray"));

// console.log(result);

// 64.
// let object = [
//     {name: "nikusha", age: 18},
//     {product: "headpones", price: 100},
//     {name: "lasha", age: 21},
//     {name: "gio", age: 17},
//     {name: "vaxo", age: 30}
// ];
// localStorage.setItem("object", JSON.stringify(object));
// let changearr = JSON.parse(localStorage.getItem("object"));
// delete changearr[1].product;
// delete changearr[1].price;
// console.log(changearr);

// localStorage.setItem("object", JSON.stringify(changearr));

// 65.
// localStorage.clear()
// let hello = "hello how are you";
// let greetings = "me good you?";
// let aswell = "aswell, how are things goin?";
// localStorage.setItem("dialogue", hello)
// localStorage.setItem("dialogue2", greetings)
// localStorage.setItem("dialogue3", aswell)
// console.log(localStorage.length)

// 66.
// localStorage.clear()
// let hello = "hello how are you";
// let greetings = "me good you?";
// let aswell = "aswell, how are things goin?";
// localStorage.setItem("dialogue", hello)
// localStorage.setItem("dialogue2", greetings)
// localStorage.setItem("dialogue3", aswell)

// if(localStorage.getItem("dialogue")){
//     console.log("exists")
// }else{
//     console.log("404 not found")
// }

// 67.
// let text = document.getElementById("text");
// let btn = document.getElementById("button");
// let clearbtn = document.getElementById("clear");
// let usertext = prompt("შეიყვანე ტექსტი");
// text.innerText = usertext;

// text.innerText = localStorage.getItem("savetext")

// btn.addEventListener("click", ()=>{
//     localStorage.setItem("savetext", text.innerText);
// });

// clearbtn.addEventListener("click", ()=>{
//     localStorage.clear()
//     let text = document.getElementById("text");
//     let btn = document.getElementById("button");
//     let clearbtn = document.getElementById("clear");
//     let usertext = prompt("შეიყვანე ტექსტი");
//     text.innerText = usertext;
// });

// 68.
// let darkbtn = document.getElementById("btndark");
// let lightbtn = document.getElementById("btnlight");
// let theme = 1;
// theme = JSON.parse(localStorage.getItem("theme"));
// if(theme === 2){
//     document.body.style.backgroundColor = "black"
//     document.body.style.color = "white"
// }else{
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
// }


// darkbtn.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = "black"
//     document.body.style.color = "white"
//     theme = 2;
//     localStorage.setItem("theme",theme)
// });

// lightbtn.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
//     theme = 1;
//     localStorage.setItem("theme",theme)
// });

// 69.
// let inp = document.getElementById("inp");
// let btn = document.getElementById("print");
// let totextname = document.getElementById("name");
// let username = "";

// inp.addEventListener("input", () => {
//     localStorage.setItem("namesaved", inp.value);
// });

// btn.addEventListener("click", () => {
//     username = localStorage.getItem("namesaved");
//     totextname.innerText = username;
// });

// 70.
let createbtn = document.getElementById("btncreate");
let notesdiv = document.querySelector(".notesdiv");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

notes.forEach(text => {
  createNote(text);
});


function createNote(content = "") {
  let div = document.createElement("div");
  let text = document.createElement("textarea");
  let imgdiv = document.createElement("div");

  div.classList.add("testnote");
  text.classList.add("textcontent");
  imgdiv.classList.add("trashcan");

  text.value = content || "Write New Text";

  div.appendChild(text);
  div.appendChild(imgdiv);
  notesdiv.appendChild(div);


  text.addEventListener("input", saveNotes);


  imgdiv.addEventListener("click", () => {
    div.remove();
    saveNotes();
  });
}


function saveNotes() {
  let notes = [];

  document.querySelectorAll(".testnote textarea").forEach(text => {
    notes.push(text.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}

createbtn.addEventListener("click", () => {
  createNote("");
  saveNotes();
});