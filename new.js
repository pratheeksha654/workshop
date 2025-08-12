
        const ul=document.getElementById("skills");
        const input=document.getElementById("i");
        const btn=document.getElementById("button");
        btn.addEventListener("click",()=>{
            let li= document.createElement("li");
            li.textContent=input.value;
            ul.appendChild(li);

        });
        const c=document.getElementById("color");
        c.addEventListener("click",()=>{
            document.body.classList.toggle("a");
        });

          const d=document.getElementById("fetch");
        let val=1;
        const p=async()=>{
            const resp=await fetch("https://jsonplaceholder.typicode.com/users");
             const cont=await resp.json();
             cont.forEach((el)=>{
             let tr=document.createElement("tr");
            let no=document.createElement("td");
        let name=document.createElement("td");
               let email=document.createElement("td");
                  no.textContent=val++;
                      tr.appendChild(no);
                 name.textContent=el.name;
                tr.appendChild(name);
                email.textContent=el.email;
                tr.appendChild(email);
              
                d.appendChild(tr);

            });

        };p();
    


