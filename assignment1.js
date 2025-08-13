 const students = [
 { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
 { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
 { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
 { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
 { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
 { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
 { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
 { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
 { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
 ];
 

 //1
 students.map((el)=>{
    const c=el.name;
    console.log(c);
 });


 //2
const d= students.map((el)=>
    {
        return ` name: ${el.name}  course:${el.course}`
    
 });
console.log(d);


//3
students.map((el)=>
{
    const e=el.marks=el.marks+5;
    console.log(e);
});
console.log(students);


//4
const f = students.map((el)=>
    {
        return ` ${el.name}  ${el.course}`
    
 });
console.log(f);

//5

students.map((el)=>{
    if(el.marks>=60)
    {
        el.status="Pass";

    }
    else{
        el.status="Fail";
    }
});
console.log(students);

//FILTER

//1
const g = students.filter((el) =>
    el.course === "Computer Science"
);
console.log(g);

//2
const h = students.filter((el) =>
     el.marks >= 80);
console.log(h);


//3
const i=students.filter((el)=>
el.feesPaid === false);
console.log(i);


//4
const j=students.filter((el)=>
el.age>20&& el.marks>70
);
console.log(j);


//5
const k=students.filter((el)=>
    el.course="Mechanical"&& el.marks<85
);
console.log(k);

//REDUCE


//1
const l=students.reduce((acc,curr)=>{
    return acc+curr.marks;
},0
);
console.log(l);

// 2
const m = students.reduce((cur, index) => cur + index.marks, 0);
const avg = m / students.length;
console.log(avg);

//3

const n = students.filter((el) => el.feesPaid === true).reduce((acc)=> {return(acc+1)},0)

console.log(n);

/*const n = students.filter((el) => el.feesPaid === true).length
console.log(n);*/


//4

const o = students.reduce((i, el) => {
    return el.marks > i.marks ? el : i;
});
console.log(o.marks);

//5


/*const groupedByCourse = students.reduce((acc, el) => {
    if (!acc[el.course]) {
        acc[el.course] = [];
    }
    acc[el.course].push(el);
    return acc;
}, {});

console.log(groupedByCourse);*/

/*const groupedByCourse = students.reduce((acc, el) => ({
    ...acc,
    [el.course]: [...(acc[el.course] || []), el]
}), {});

console.log(groupedByCourse);*/

const u = students.reduce((acc, el) => {
    acc[el.course] = (acc[el.course] || []).concat(el);
    return acc;
},{});

console.log(u);



