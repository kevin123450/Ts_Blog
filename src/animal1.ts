let animal1info = {
    author: "",
    title: "",
    text: "",
    time: "",
    blogId: ""
};

function printanimal1(post){
    console.log(post);
}

class Post {
    author: string;
    title: string;
    text: string;
    time: string;
    blogId: number;
    constructor(author, title, text, time, blogId){
        this.author = author;
        this.title = title;
        this.text = text;
        this.time = time;
        this.blogId = blogId;
    }
}

let allPosts: Post[] = JSON.parse(localStorage.getItem('posts') || '[]');
let blogId: number = +localStorage.getItem('blogId');
let posts: Post[] = [];

let blogIdfromLS = JSON.parse(blogId.toString());

let allPostslist = document.getElementById("animal1");

for (let i = 0; i < allPosts.length; i++){
    if(allPosts[i].blogId==blogIdfromLS){
    
    let newLi = document.createElement("li");

    let author = document.createElement("h5");
    let title = document.createElement("h1");
    let text = document.createElement("h3");
    let time = document.createElement("h5");
    let blogId = document.createElement("h5");
    
    author.innerHTML = allPosts[i].author;
    title.innerHTML = allPosts[i].title;
    text.innerHTML = allPosts[i].text;
    time.innerHTML = allPosts[i].time;
    blogId.innerHTML = allPosts[i].blogId.toString();

    newLi.appendChild(author);
    newLi.appendChild(title);
    newLi.appendChild(text);
    newLi.appendChild(time);
    newLi.appendChild(blogId);

    allPostslist.appendChild(newLi);
    }
}

// Loopa igenom allPosts
// Hitta de inlägg som har rätt blogId
// Lägg till inläggen i en ny lista (posts)

let animal1List = document.getElementById("animal1");

for (let i = 0; i < posts.length; i++) {
    let newSection = document.createElement("section");

    let author = document.createElement("h5");
    let title = document.createElement("h1");
    let text = document.createElement("h3");
    let time = document.createElement("h5");
    let blogId = document.createElement("h5");
    
    author.innerHTML = posts[i].author;
    title.innerHTML = posts[i].title;
    text.innerHTML = posts[i].text;
    time.innerHTML = posts[i].time;
    
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(text);
    newSection.appendChild(time);
    newSection.appendChild(blogId);

    newSection.addEventListener("click" , ()=>{
        printanimal1(posts[i]);
    });
    
    animal1List.appendChild(newSection);
}