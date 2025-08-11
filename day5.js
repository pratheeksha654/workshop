/*const fetchDATA= async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log(response);
    let b=await response.json();
    console.log(b);
};
fetchDATA();*/


/*const fetchData=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
console.log(response.ok);
if (response.ok==true){
const data=  await response.json();
console.log(data);
}
};



fetchData();

console.log("Hello");*/

/*
const fetchData=async()=>{
    const a=await fetch("https://jsonplaceholder.typicode.com/users");
console.log(a);
const b=await fetch("https://jsonplaceholder.typicode.com/todos");
console.log(b);
const c=await fetch("https://jsonplaceholder.typicode.com/photos");
console.log(c);

const data=  await a.json();
console.log(data);
const pq=  await b.json();
console.log(pq);
const daa=  await c.json();
console.log(daa);
};

fetchData();


const a=async()=>{
    try{
        const b=await fetch("https://jsonplaceholder.typicode.com/users");
        const c=await fetch("https://jsonplaceholder.typicode.com/users");
        const d=await fetch("https://jsonplaceholder.typicode.com/users");
        if(b.ok ){
            const da=await b.json();
            console.log(da);
        }
             if(c.ok ){
            const da=await c.json();
            console.log(da);
        }
             if(d.ok ){
            const da=await d.json();
            console.log(da);
        }
        else{
            throw new error("Something went wrong");

        }}
        catch (err){
            console.log("Error",err);

        }
    
};
a();



const q=async ()=>
    

      {
    const a=await fetch("https://jsonplaceholder.typicode.com/users");
console.log(a.ok);
if (a.ok==true){
const data=  await a.json();
console.log(data);
}
const b=await fetch("https://jsonplaceholder.typicode.com/users");
console.log(b.ok);
if (b.ok==true){
const data=  await b.json();
console.log(data);
}
const c=await fetch("https://jsonplaceholder.typicode.com/users");
console.log(c.ok);
if (c.ok==true){
const data=  await c.json();
console.log(data);
}

};

fetchData();
*/


const q=async()=>
{
 const a=await fetch("https://jsonplaceholder.typicode.com/users");
 
 const data=  await a.json();
console.log(data);

const b=await fetch("https://jsonplaceholder.typicode.com/photos");

if (b.ok==true){
const da=  await b.json();
console.log(da);
}

 try{
        const b=await fetch("https://jsonplaceholder.typicode.com/users");
        if(b.ok==true){
            const pa=await b.json();
            console.log(pa);
        }
        else{
            throw new error("Something went wrong");

        }}
        catch (spa){
            console.log("Error",spa);

        }
    
};
q();

