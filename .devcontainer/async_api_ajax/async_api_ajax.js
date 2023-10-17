/*
 
 // async  function
 
 async function greet(){
      return "hello";
}
greet()
.then((result)=>{
     console.log("promis resolve");
})
.catch((err)=>{
     console.log("promis reject",err)
});













//Await keyword




function getNum(){
    //console.log(5);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    })

}
async function demo(){
   await getNum();
    await getNum();

   await getNum();

}
//getNum();
//getNum();
demo();







h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,delay)=>{
        setTimeout(()=>{
            h1.style.color=color;
            console.log(`clolor change to ${color}`);
            resolve("color changed");
        },delay);
    });
}
async function demo(){
  await  changeColor("red",1000);
   await changeColor("yellow",1000);
   await   changeColor("pink",1000);
    await  changeColor("blue",1000);



}

demo();
















//API




let student={
    name:"kanchan",
    roll:67,
    phn:66456
}
console.log(JSON.stringify(student));







//fetch api#first request



let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    console.log(response);
    console.log(response.json());
    response.json().then((data)=>{
        console.log(data);
    })
})
.catch((err)=>{
   console.log("ERROR -",err);
})











//request using fectch with async/await





let url="https://catfact.ninja/fact";
async function getFacts(){
    fetch(url);
    let res= await fetch(url);
    let data=await res.json();
    console.log(dataget);
}















//AXIOS





let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
     let fact= await getFacts();
     console.log(fact);
     let p=document.querySelector("#output");
     p.innerText=fact;
});

let url="https://catfact.ninja/fact";
async function getFacts(){
   try{
    let res= await axios.get(url);
    return res.data.fact;
   

}catch(e){
    console.log("error",e);
    return "no fact found";
}
}
getFacts();















//print img

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
   let link =await getImg();
   //console.log(link);
   let img=document.querySelector("#output");
   img.setAttribute("src",link);
});

let url="https://dog.ceo/api/breeds/image/random"

async function getImg(){
   try{
    let res= await axios.get(url);
    return res.data.message;
   // return res.data.fact;
   

}catch(e){
    console.log("error",e);
    return "no img found";
}
}
getImg();





*/















//activity usinjg query string










let url="http://universities.hipolabs.com/search?name="
let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    //console.log("button was clicked")
 let colleges=await  getCollege(country);
 console.log(colleges);
 Show(colleges);
});
function Show(colleges)

{
    let list=document.querySelector("#list");

     for(col of colleges){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
     }
}




//let country="nepal";
async function getCollege(country){
    try{
        let res=await axios.get(url+country);
        return res.data;
    }
    catch(e){
      console.log("error",e)
      return [];
    }
}
getCollege();




















