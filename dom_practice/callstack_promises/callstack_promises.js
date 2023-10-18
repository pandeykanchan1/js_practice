tack
/*


function hello(){
    console.log("hello");

}
function demo(){
    hello();
}
console.log("calling demo");
demo();





function one(){
    return 1;
}
function two(){
    return one()+one();

}
function three(){
    let ans =two()+one();
    console.log(ans);
}
three();











//js is single threaded 







setTimeout (function(){
    console.log("kanchan");
},2000);
console.log("hello")





















//callback Hell




setTimeout(()=>{
    h1.style.color="red";


},1000);
h1=document.querySelector("h1");


setTimeout(()=>{
    h1.style.color="pink";


},2000);


h1=document.querySelector("h1");


function changeColor(color,delay,nextColorChange){
 setTimeout(()=>{
   h1.style.color=color;
   if(nextColorChange)nextColorChange();
 },delay);
}

changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000);
    });
});
















//call back hell


function savetoDb(data){
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        console.log("your data saved",data);
    }else{
        console.log("your data not saved");
    }
}












function savetoDb(data,succes,failure){
    let internetSpeed = Math.floor(Math.random()*16)+1;
    if(internetSpeed>4){
        succes();
    }else{
        failure();
    }
}
savetoDb(
    "apna college",()=>{
        console.log("data saved");
        savetoDb("kanchan",()=>{
            console.log("succes2,: data save");
            savetoDb("jhunjhun",()=>{
                console.log("success data save"),()=>{
                    console.log("data not save");
                }
            })
        },()=>{
            console.log("data not saved");
        }
        );
    },
    ()=>{
        console.log("week connection,data not saved");

    }
);


















//promises





function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*16)+1;
        if(internetSpeed>4){
            resolve("success:data saves");

        }
        else{
            reject("failure:week connection");
        }

    });
}


//then  catch


 savetoDb("apna college")//req=promise obj
 .then(()=>{
    console.log("promis was resolve");
    //console.log(request);
})
.catch(()=>{
    console.log("promise was rejected");
});
























//promise #improved version



function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*16)+1;
        if(internetSpeed>4){
            resolve("success:data saves");

        }
        else{
            reject("failure:week connection");
        }

    });
}


 savetoDb("apna college")//req=promise obj
 .then(()=>{
    console.log("promis was resolve data1 saved");
   return  savetoDb("hello word")
    .then(()=>{
        console.log("data 2 save");
        return savetoDb("jhunjhu");
    })                            
    .then(()=>{
        console.log("data3 save");
    })
    .then(()=>{
        console.log("data 4 saves");
    })
})
.catch(()=>{
    console.log("promise was rejected");
});

















function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*16)+1;
        if(internetSpeed>4){
            resolve("success:data saves");

        }
        else{
            reject("failure:week connection");
        }

    });
}


 savetoDb("apna college")//req=promise obj
 .then((result)=>{
    console.log("promis was resolve data1 saved");
   return  savetoDb("hello word")
    .then((result)=>{
        console.log("data 2 save");
        console.log(result);

        return savetoDb("jhunjhu");
    })                            
    .then((result)=>{
        console.log("data3 save");
        console.log(result);
    })
    .then((result)=>{
        console.log("data 4 saves");
        console.log(result);

    })
})
.catch((error)=>{
    console.log("promise was rejected");
    console.log(error);
});
*/















h1=document.querySelector("h1");


function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
          },delay);

    })
 
}
changeColor("green",1000)
.then(()=>{
    console.log("red color completed");
    return changeColor("orange",1000);

})
.then(()=>{
    console.log("orange completed");
    return changeColor("blue",1000);
})


.then(()=>{
    console.log("blue completed");
    return changeColor("pink",1000);
})



.then(()=>{
    console.log("pink completed");
    return changeColor("black",1000);
});




//changeColor("red",1000,()=>{
  //  changeColor("orange",1000,()=>{
   //     changeColor("green",1000);
    //});
//});






















