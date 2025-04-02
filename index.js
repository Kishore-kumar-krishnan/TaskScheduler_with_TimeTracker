var arr=[{
    id:1,
    category:"Work1",
    subcategory:"Lon",
    Duration:10,
    Task:"Done1"
},
{
    id:2,
    category:"Professional",
    subcategory:"Movie",
    Duration:10,
    Task:"Not Done"
},
{
    id:3,
    category:"Professional",
    subcategory:"Movie",
    Duration:10,
    Task:"Done"
},
{
    id:4,
    category:"Work",
    subcategory:"Movie",
    Duration:10,
    Task:"Not Done"
},
{
    id:5,
    category:"Professional",
    subcategory:"Movie",
    Duration:10,
    Task:"Not Done"
},
{
    id:6,
    category:"Work",
    subcategory:"Movie",
    Duration:10,
    Task:"Done"
},
{
    id:7,
    category:"Professional",
    subcategory:"Movie",
    Duration:10,
    Task:"Done"
},
{
    id:8,
    category:"Work",
    subcategory:"Movie",
    Duration:10,
    Task:"Done"
},
{
    id:9,
    category:"Work",
    subcategory:"Movie",
    Duration:10,
    Task:"Not Done"
},
{
    id:10,
    category:"Professional",
    subcategory:"Movie",
    Duration:10,
    Task:"Not Done"
}
]

var head=''
head =`<th>Category</th>
<th>SubCategory</th>
<th>Duration</th>
<th>Task</th>`

var body=''
arr.map((e)=>{
   body+= `<tr>
    <td> ${e.category}</td>
    <td> ${e.subcategory}</td>
    <td> ${e.Duration}</td>
    <td> ${e.Task}</td>
    </tr>`
})

var table=`<table> ${head}`+`${body} </table>`;
var title
let e=document.querySelector('.div').innerHTML=table;
console.log(e);
const change=()=>{
    title=''
    let sel=document.querySelector('#selop')
    let val=sel.value
    // document.querySelector(".span").textContent=val;
    console.log(val);
    arr.filter((e)=>{
        return val==e.category
    }).map((e)=>{
        console.log(e);
        title+=`<tr>
        <td> ${e.category}</td>
        <td> ${e.subcategory}</td>
        <td> ${e.Duration}</td>
        <td> ${e.Task}</td>
        </tr>`
    })

    var total=`<table> ${head}`+`${title} </table>`;
    let e1=document.querySelector('.div').innerHTML=total;
}

// Stop Watch using setInterval  
var sec=''
var s=0;
var m=0; 
var h=0;
const start=()=>{
     sec=setInterval(()=>{
        ++s;
        document.querySelector('.sec').textContent=s.toString().padStart(2,"0");
        if(s==60){
            s=0;
            ++m;
            document.querySelector('.min').textContent=m.toString().padStart(2,"0") + ` :`;
            if(m==60){
                m=0;
                ++h;
                document.querySelector('.sec').textContent=s.toString().padStart(2,"0");
                document.querySelector('.min').textContent=m.toString().padStart(2,"0") + ` :`;
                document.querySelector('.hour').textContent=h.toString().padStart(2,"0") + ` :`;
            }
        }
    },1000)
}

const stop=()=>{
    clearTimeout(sec); 
}
const reset=()=>{
    clearTimeout(sec);
    s=0;
    h=0;
    m=0;
    document.querySelector('.sec').textContent=s.toString().padStart(2,"0");
    document.querySelector('.min').textContent=m.toString().padStart(2,"0") + ` :`;
    document.querySelector('.hour').textContent=h.toString().padStart(2,"0") + ` :`;
}



//form Add Task
let add=document.querySelector('.add').addEventListener('click',(e)=>{
    const newuser={
        category:null,
        subcategory:null,
        Duration:0,
        Task:null
    }
    e.preventDefault();
    let cat=document.querySelector('.cat').value;
    let subcat=document.querySelector('.subcat').value;
    let task=document.querySelector('.task').value;
    let sec=document.querySelector('.sec').textContent
    let min=document.querySelector('.min').textContent
    let hour=document.querySelector('.hour').textContent
    let dur=`${hour}` +`${min}` +`${sec}`;
    newuser.category=cat;
    newuser.subcategory=subcat;
    newuser.Task=task;
    newuser.Duration=dur;
    arr.push(newuser);
    body=``
    arr.map((e)=>{
    body+= `<tr>
     <td> ${e.category}</td>
     <td> ${e.subcategory}</td>
     <td> ${e.Duration}</td>
     <td> ${e.Task}</td>
     </tr>`
 })
 
 let table=`<table> ${head}` + `${body} </table>`;
 let e1=document.querySelector('.div').innerHTML=table;
 console.log(arr);
})


let del=document.querySelector('.delete').addEventListener('click',(e)=>{
    e.preventDefault();
    let cat=document.querySelector('.cat').value;
    let subcat=document.querySelector('.subcat').value;
    let task=document.querySelector('.task').value;
    let body=''
    let k=arr.filter((e)=>{return cat!=e.category && subcat!=e.subcategory && task!=e.Task });
    arr=[];
    arr=k;
    arr.map((e)=>{
        body+= `<tr>
        <td> ${e.category}</td>
        <td> ${e.subcategory}</td>
        <td> ${e.Duration}</td>
        <td> ${e.Task}</td>
        </tr>`
    })
    console.log(arr);
    let table=`<table> ${head}` + `${body} </table>`;
    let e1=document.querySelector('.div').innerHTML=table;

})
















