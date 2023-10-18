
/*

let img=document.getElementsByClassName("oldimg");
console.log(img);












//select by tag name






let para=document.getElementsByTagName("p")[1].innerText="abcdess";
console.log(para);










//query selector



console.log(document.querySelector('p'));
console.dir(document.querySelector("#mainimg"));




console.dir(document.querySelector(".oldimg"));





console.dir(document.querySelectorAll("p"));







let pra=document.getElementsByTagName('p');
console.dir(pra.innerText);



















//manipulating attributes






let img=document.querySelector("img");
console.dir(img.getAttribute('id'));
console.log(img.setAttribute('id','spidermain'));
img.setAttribute('src',"photo.jpg");












//manipulating style








let img=document.querySelector("img");
console.log(img.style);





let heading=document.querySelector('h1');
console.log(heading.style);
//heading.style.color="purple";
heading.style.backgroundColor = "green";










let para=document.querySelectorAll("p");
for(para of para){
    para.style.color="yellow";
}






let img=document.querySelector("img");
console.log(img.classList);



//adding new class


let heading=document.querySelector('h1');
console.log(heading.classList.add("efg"));
console.log(heading.classList);


console.log(heading.classList.toggle("gree"));












//navigation




let heading=document.querySelector('h1');
console.log(heading.parentElement);


let box=document.querySelector('.box');
console.log(box.children);


//adding eliment 








document.createElement('p');
let newp=document.createElement('p');
console.dir(newp);
newp.innerText="KANCHAN PANDEY FJHEILUHIDUHVHRE";
//console.log(newp.innerText);




let body=document.querySelector('body');
body.appendChild(newp);










let btn=document.querySelector('button');
console.dir('btn');
btn.innerText='clickme';
 box.appendChild(btn);
 <button>clickme</button>













 let newp=document.createElement('p');
console.dir(newp);
newp.innerText="KANCHAN PANDEY FJHEILUHIDUHVHRE";
//console.log(newp.innerText);

let body=document.querySelector('body');
body.prepend(newp);




*/





//eliment kaha add kre


let btn=document.createElement('button');
btn.innerHTML="NEW BUTTON";
let p = document.querySelector('p');
p.insertAdjacentElement('beforebegin',btn);




//remove eliment




btn.remove();







