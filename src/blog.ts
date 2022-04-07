let bloginfo = {
    author: "",
    title: "",
    text: "",
    time: "",
};

function printBlog(bloginfo: Blog1){
    console.log(bloginfo);
    localStorage.setItem("blogId", bloginfo.id.toString());
    location.href = "animal1.html";
}

//post 1
class Blog1{
    id: number;
    author: string;
    title: string;
    text: string;
    time: string;
    constructor(author, title, text, time, id){ 
        this.author = author;
        this.title = title;
        this.text = text;
        this.time = time;
        this.id = id;
    }
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

let bloginfo1 = new Blog1("Author","Animal1", "lorem ipsum", "2022-X-X", 1);
let bloginfo2 = new Blog1("Author","Animal2", "lorem ipsum", "2022-X-X", 2);
let bloginfo3 = new Blog1("Author","Running", "lorem ipsum", "2023-X-X", 3);
let bloginfo4 = new Blog1("Author","Choklad", "lorem ipsum", "2024-X-X", 4);

let post1 = new Post("Author","Animal1", "lorem ipsum","2022-X-X", 1);
let post2 = new Post("Author","Animal2", "lorem ipsum","2022-X-X", 2);
let post3 = new Post("Author","Running", "lorem ipsum","2023-X-X", 3);
let post4 = new Post("Author","Choklad", "lorem ipsum","2024-X-X", 4);

let blogs = [bloginfo1, bloginfo2, bloginfo3, bloginfo4];
let posts = [post1, post2, post3, post4];
localStorage.setItem('blogs', JSON.stringify(blogs));
localStorage.setItem('posts', JSON.stringify(posts));

let blog1 = [bloginfo1];

let bloglist1 = document.getElementById("post1");

for (let i = 0; i < blogs.length; i++) {
    let newSection = document.createElement("section");

    let author = document.createElement("h5");
    let title = document.createElement("h1");
    let text = document.createElement("h3");
    let time = document.createElement("h5");
    
    author.innerHTML = blogs[i].author;
    title.innerHTML = blogs[i].title;
    text.innerHTML = blogs[i].text;
    time.innerHTML = blogs[i].time;
    
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(text);
    newSection.appendChild(time);

    newSection.addEventListener("click" , ()=>{
        printBlog(blogs[i]);
    });
    
    bloglist1.appendChild(newSection);
}