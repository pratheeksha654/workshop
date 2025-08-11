/*let body=document.getElementsByTagName("h1");
console.log(body[0]);

let classes=document.getElementsByClassName("a");
console.log(classes[0]);

let c=document.querySelector(".a");
console.log(c);

let val=document.getElementById("val");
console.log(val);


let q=document.querySelectorAll("h1");
console.log(q);

let h=document.getElementsByClassName("a");
//read
let g = h[0],innerHTML;
console.log(g);

//write
h[0].textContent="Hello mangalore";*/



//step 1 classees
/*let node=document.getElementsByClassName("a");
//rread

let g=node[0].innerHTML;
console.log(g);

let h=node[0].textContent;
console.log(h);

let node1=document.querySelector("h1");

let i=node1.innerHTML;
console.log(i);

let j=node1.textContent;
console.log(j);*/


/*let a=document.querySelector("class");

a.textContent="hello";

//let text3=node1.innerHTML;
//console.textContent="HELLO";

let sty=document.querySelectorAll("h1");
console.log("sty");

sty[0].style.color="red";
sty[1].style.color="blue";

let cls=document.getElementsByClassName("cnt");
console.log(cls);

cls[0].style.backgroundColor="pink";

//to remove a class
//sty[1].classList.remove("hidden");

//to add a class
//sty[1].classList.add("body");

//toggle class
sty[1].classList.toggle("hidden");

sty[1].classList.toggle("body");*/


/*//1 CREATE tag

const v= document.createElement("h3");

//2 put content

v.textContent="Hello World";

//3. wher we have to put the first node
const h3=document.getElementsByClassName("cnt");

//4
h3[0].appendChild(v);

const div=document.createElement("div");
const h2=document.createElement("h2");
h2.textContent="Namasthe";
h2.classList.add("sd");
div.appendChild(h2);
document.body.appendChild(div);
*/
/*const div=document.createElement("div");
const b=document.createElement("button");
b.textContent="Increment";
b.classList.add("a");
const c=document.createElement("button");
    c.textContent="Decrement";
    const d=document.createElement("button");
d.textContent="reset";

div.appendChild(b);
div.appendChild(c);
div.appendChild(d);
document.body.appendChild(div);*/

/*let b=document.createElement("img");
b.setAttribute("src","https://www.bing.com/th/id/OIP.B39-1EvwOFXOffOfIKZT0AHaEK?w=243&h=128&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2");
b.setAttribute("alt","img not found");
b.setAttribute("id","val");
b.setAttribute("height","150");
b.setAttribute("width","150");
document.body.appendChild(b);*/

/*let img=document.createElement("img");
img.src="https://www.bing.com/th/id/OIP.B39-1EvwOFXOffOfIKZT0AHaEK?w=243&h=128&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
img.alt="img not found";
img.id="val";
img.height="200";
img.width="200";
document.body.appendChild(img);*/

/*let pq=new img(100,100);
pq.src="https://www.bing.com/th/id/OIP.B39-1EvwOFXOffOfIKZT0AHaEK?w=243&h=128&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";
pq.alt="img not found";
document.body.appendChild(pq);*/


//document.body.innerHTML += '<img src="https://www.example.com/image.jpg" alt="img not found" width="200" height="200">';


/*
const incButton = document.createElement("button");

console.log(incButton);
incButton.addEventListener("click", ()=>{
    console.log("Button clicked");
});*/

/*const btn=document.getElementsByTagName("button");
const incbtn=btn[0];
const decbtn=btn[1];
const resetbtn=btn[2];
const p=document.querySelector("#val");
let val=0;
let inc=true;
 let pause=()=>{
    if (val>=10){
        inc=false;
    }
 };*/
/*incbtn.addEventListener("click",()=>{
    if(inc){
    val=val+1;
    p.textContent=val;}
    if(val>=10){
        inc=false;
    }
    pause();
});


decbtn.addEventListener("click",()=>{
    if(inc){
    val=val-1;
    p.textContent=val;}
    pause();
});

resetbtn.addEventListener("click",()=>{
    val=0;
    p.textContent=val;
});*/
/*const handleInc=()=>{
    if(inc){
        val=val+1;
        p.textContent=val;
    }
    if(val>=10){
        inc=false;
    }
    pause();
 };
 const handleDec=()=>{
    if(inc){
        val=val-1;
        p.textContent=val;
    }
    if(val<=0){
        inc=true;
    }
    pause();
 };
const handleReset=()=>{
    val=0;
    p.textContent=val;
    inc=true;
    pause();
 };
 const init=()=>{
    val=0;
    p.textContent=val;
    inc=true;
    pause();
};

    incbtn.addEventListener("click",handleInc);
    decbtn.addEventListener("click",handleDec);
    resetbtn.addEventListener("click",handleReset);
 */

    /*const handler=(vall)=>{
        if (inc){
            vall?(val=val+1):(val=val-1);
            val>=0?(p.style.color="green"):(p.style.color="blue");
            p.textContent=val;
        }
        pause();
    };
    const init=()=>{
        val=0;
        p.textContent=val;
        inc=true;
        
    };

    incbtn.addEventListener("click",()=>{
        handler(true);
    });
    decbtn.addEventListener("click",()=>{
        handler(false);
    });
    resetbtn.addEventListener("click",init);*/
    
/*
    var obj={
        id:1,
        name:"Name",
        email:"example@vom",
        data:{
            address:"sullia",
            contact:123456,
            adhaar:56788,
        },
        info:{
            contact:13256,
            adh:1239078,
        },
    };
  /*  console.log(obj.id);
    console.log(obj.name);
    console.log(obj.email);
    console.log(obj);*/
   // console.log(obj.data.address);
   // console.log(obj);
    //JSON.stringify(obj);
   // console.log(obj.data);

  /*  let arr=[
        {id:1,name:"pratheeksha"},
        {id:2,name:"prajna"},
        {id:3,name:"prajna"},
        {id:4,name:"tripthi"},
    ];
    //console.log(arr);
    //arr.forEach((el)=>console.log(el));
  //arr.forEach((el)=> (el.id=el.id*el.id));
  const a=arr.map((el)=>{
    el.id=el.id*el.id;
    return {
        i: el.id,
        n: el.name,
    };
});*/
//console.log(a);
  
    //arr.map((el)=> console.log(el));

  /*  const b=[0,0,0,0,0,0,0,0];
    const c=b.map((el,index)=>
    {
       // let n=el+index;
       // const asd=index+n;
        return{
            id:index,
            name:el+index,
            as:index+(el+index),
        };
    });
   /* let e=c.filter((el)=> el.id%2==0);
    console.log(e);
    let d=c.filter((el)=>el.id%2==1);
    console.log(d);*/
  //  let d=c.filter((el))


  













    