/*var body = document.getElementsByTagName("body");
console.log(body[0]);*/

/*let a=[1,4,5,6,7];
console.log(a);
console.log(a[3]);

for(let i=0;i<a.length;i++){
    a[i]=a[i]*2;
    console.log(a[i]);

}
console.log(a);
let b = a.map((el,ui)=>{ //el is element and ui is a index (no need to write u only i also work)
return el*ui;
});
console.log(a);
console.log(b);*/
/*let a=[1,2,3,4,5,6,7,8,9,10];
for ( let i=0;i<a.length;i++){
    //a[i]=2*a[i];
console.log(`2 * ${a[i]}=`,a[i]*2);
}
console.log(a);

let b=a.map((el,ui)=>
{
    console.log(`3 *${el}=`,el*3);
});*/

/*let table=(a)=>
{
    for(let i=1;i<11;i++)
    console.log(`${a} * ${i}=`,a*i);
}

table(3);*/
/*let aa="40";
if(aa==4){
    console.log("value is same");
}else if (aa==40){//triple equal is there then it will check the type also means if nuber is string then the answer is not same.
    console.log("value is 40");
}
else if (aa==90){
    console.log("value is 90");
}
else{
    console.log("value is not same");
}*/

//mark more then 90 -bike
//more then 80-party
//more then 70-game
//else nothing
/*let mark=80;
if (mark>=90){
    console.log("bike");
}
else if(mark>=80&& mark<90){
    console.log("party");
}
else if (mark>=70&& mark<80){
    console.log("game");
}
else{
    console.log("nothing");
}*/

/*for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        console.log(" even");
    }
    else{
        console.log(" odd");
    }
}*/
//condition?true value:false value
/*let mark=80;
mark > 70 ? table(2) : table(6) ;*/
//let a=[1,2];
//let b=[1,2];
//console.log(a==b); ans will be false
//console.log(a[1]==b[1]); then it will be true
//let a=[1,2,3,4,5,6,7,8,9,10];
/*let b=a.filter((el)=>
{
return el%2==0;
});
console.log(b);*/
/*let b=a.filter((el)=> el>=5);
let c=b.map((el)=> el*6);
console.log(c);
//let b=a.filter((el)=> el>=5).map((el) => el*7);*/
/*let b=a.reduce((acc,cur,index)=>
{
    console.log(acc,cur,index);
    return acc+cur;
},0);
console.log(b);

let acc=0;
acc=acc+1
acc=acc+2;
acc=acc+3;
acc=acc+4;
acc=acc+5;
acc=acc+6;
acc=acc+7;*/
/*let b=a.filter((el)=> el%2==0);
let c=b.reduce((acc,cur,index)=>{
    return acc+cur;
});


let d=a.filter((el)=> el%2!=0);
let e=d.reduce((acc,cur,index)=>{
    return acc+cur;
});
console.log(c,e);*/
const a=[0,0,0,0,0,0,0,0,0,0,0,0]
const p=a.map((e,i)=>e+i+1).filter((e)=>e%2==0).reduce((a,e)=>a+e);
console.log(p);

const q=a
.map((e,i)=>e+i+1)
.filter((e)=>e%2==1)
.reduce((a,e)=>a+e);

console.log(q);


