/*let pq=new Image(100,100);
pq.src=" https://via.assets.so/movie.png?id=5&q=95&w=360&h=360&fit=fill";
pq.alt="img not found";
document.body.appendChild(pq);*/
const c= document.getElementById("image");

        for (let id = 5; id <= 14; id++)
             {
            let img = document.createElement("img");
            img.src =`https://via.assets.so/movie.png?id=${id}&q=95&w=360&h=360&fit=fill`;
            img.alt="Image is not found"
        img.width=200;
        img.height="200";
        img.style.border= " 2px solid black";
        img.style.padding="10px 10px";
        img.style.margin="2px";
            c.appendChild(img);
        }