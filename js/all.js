const url = "https://64a6fca7096b3f0fcc80ef97.mockapi.io/posts";
const posts = document.getElementById("post");
const inputAll=document.querySelector('.inputAll')

fetch(url)
  .then((response) => response.json()) 
  .then((data) => {
    // data.sort((a, b) => a.rating - b.rating);
    data.forEach((element) => {
      const div = document.createElement("div");
      div.classList.add("card", "post-item");
      div.innerHTML = `
       <a href='./blog.html'>
       <img src='${element.img}' style="width:400px;height: 300px;"></img>
       <div class='element-body'>
       <p class='title'>${element.category}</p>
       <h5 class='h55'>${element.title}</h5>
       <p class='par1'>${element.body}</p>
       </div></a>
        `;
      if (element) {
        posts.append(div); 
        console.log(element);
      }
    });
  })
  .catch((error) => {
    console.log("Xatolik yuz berdi:", error);
  });



   inputAll.addEventListener('input',async(event)=>{
    // console.log(event.target.value)
    const currentUser=event.target.value.toLowerCase()
    const element=await getUsers()
    element=element.filter((title)=>title.name.toLowerCase().includes(currentUser))
    console.log(element )
   })