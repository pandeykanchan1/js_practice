
//onclick event
/*
let btn=document.querySelector("button");
console.dir(btn);

//btn.onclick=function(){
  //  console.log("button was clicked")
//}


function sayhello(){
    alert("hello");
}
btn.onclick=sayhello;



let btns=document.querySelectorAll("button");
console.dir(btns);
for(btns of btns){
    btns.onclick=sayhello;
}

function sayhello(){
    alert("hello");
}
    
}











//onmouseenter


let btns= document.querySelectorAll("button");
for(btn of btns){
    btn.onmouseenter=function(){
        console.log("you enter button")
    };
    console.dir(btn);
}



function sayHello(){
    alert("hello");
}










// add eventListner

let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}
function sayHello(){
     alert("hello");
}


function sayName(){
    alert("apna college");
}








//activity



let btn =document.querySelector("button");
btn.addEventListener("click",function(){
   let h3=document.querySelector("h3");
   let randomColor = getRandomColor();
   h3.innerText= randomColor;

   let div =document.querySelector("div");
   div.style.backgroundColor=randomColor;
   console.log("color updated")
});



function getRandomColor(){
    let red=Math.floor(Math.random()*255);

    let green=Math.floor(Math.random()*255);  
    let blue=Math.floor(Math.random()*255);
    //let yellow=math.floor(math.radom()*255);
    let color =`rgb(${red},${green},${blue})`;
    return color;




}












let p=document.querySelector("p");
p.addEventListener("click",function(){
     console.log("para was clickd");
});






let box= document.querySelector(".box");
box.addEventListener("mouseenter",function(){
    console.log("mouse inside div");
})











//this in event listner





let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    console.log(this.innerText);
    this.style.backgroundColor="pink";
});



let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let h2=document.querySelector("h2");

function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor="pink";

}
btn.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h2.addEventListener("click",changeColor);









// keyboard events









let btn=document.querySelector("button");
btn.addEventListener("click",function(event){
    console.log("button clicked")
    console.log(event);
});





let inp=document.querySelector("input");
inp.addEventListener("keydown",function(event){
 // console.log("key pressed");
  //console.log(event);

console.log("code=",event.code);
if(event.code=="ArroUp"){
    console.log("charcater was forword");
}
else if(event.code=="ArrowDown"){
    console.log("character moves backword");

}
else if(event.code=="ArrowLeft"){
    console.log("character moves left");
}
else if(event.code=="ArrowRight"){
    console.log("character moves right");

}

});

//inp.addEventListener("keyup",function(){
   // console.log("key pressed")});








//FORM EVENTS





let form= document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submit");
});











//Extracting form Data






let form= document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
     let inp=document.querySelector("input");
     console.log(inp);
     console.log(inp.value);



});

















let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    //let user=document.querySelector("#user");
    //let pass=document.querySelector("#pass");
//or

     let user=this.elements[0];
     let pass=this.elements[1];



    console.log(user.value);
    console.log(pass.value);
   //alert{`hi${user.value},your password is set to ${pass.value}`}

})




let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

})
    let user=document.querySelector("#user");
    //let pass=document.querySelector("#pass");
   user.addEventListener("change",function(){
    console.log("input changed eveny");
    console.log("final value =",this.value);


});




//let user=document.querySelector("#user");
//let pass=document.querySelector("#pass");
user.addEventListener("input",function(){
console.log("input changed");
console.log("final value =",this.value);


});









let inp=document.querySelector("#text");
let p=document.querySelector("p");

inp.addEventListener("input",function(){
    console.log(inp.value);
    p.innerText=inp.value;
});











//more event



//change event




