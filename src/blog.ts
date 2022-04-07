let bloginfo = {
    author: "",
    title: "",
    text: "",
    time: "",
};

function printBlog(bloginfo){
    console.log(bloginfo);
}

//post 1
class Blog1{
    author: string;
    title: string;
    text: string;
    time: string;
    constructor(author, title, text, time,){
        this.author = author;
        this.title = title;
        this.text = text;
        this.time = time;
    }
}

let bloginfo1 = new Blog1("Author","Animal1", "lorem ipsum", "2022-X-X");

let blog1 = [bloginfo1];

let bloglist1 = document.getElementById("post1");

for (let i = 0; i < blog1.length; i++) {
    let newSection = document.createElement("section");

    let author = document.createElement("h5");
    let title = document.createElement("h1");
    let text = document.createElement("h3");
    let time = document.createElement("h5");
    
    author.innerHTML = blog1[i].author;
    title.innerHTML = blog1[i].title;
    text.innerHTML = blog1[i].text;
    time.innerHTML = blog1[i].time;
    
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(text);
    newSection.appendChild(time);

    newSection.addEventListener("click" , ()=>{
        printBlog(blog1[i]);
    });
    
    bloglist1.appendChild(newSection);
}

//post 2
class Blog2{
    author: string;
    title: string;
    text: string;
    time: string;
    constructor(author, title, text,time,){
        this.author = author;
        this.title = title;
        this.text = text;
        this.time = time;
    }
}

let bloginfo2 = new Blog2("Author","Animal2", "lorem ipsum","2022-X-X");

let blog2 = [bloginfo2];

let bloglist2 = document.getElementById("post2");

for (let i = 0; i < blog2.length; i++) {
    let newSection = document.createElement("section");

    let author = document.createElement("h5");
    let title = document.createElement("h1");
    let text = document.createElement("h3");
    let time = document.createElement("h5");
    
    author.innerHTML = blog2[i].author;
    title.innerHTML = blog2[i].title;
    text.innerHTML = blog2[i].text;
    time.innerHTML = blog2[i].time;
    
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(text);
    newSection.appendChild(time);

    newSection.addEventListener("click" , ()=>{
        printBlog(blog2[i]);
    });
    
    bloglist2.appendChild(newSection);
}






