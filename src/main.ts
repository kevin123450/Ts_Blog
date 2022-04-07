class Bloghome{
    title: string;
    text: string;
    constructor(title,text){
        this.title = title;
        this.text = text;
    }
}

let bloghomeinfo = new Bloghome("Blogs","See all blogs");

let blog = [bloghomeinfo];

let bloglist = document.getElementById("blog-list");

for (let i = 0; i < blog.length; i++) {
    let newSection = document.createElement("section");

    let title = document.createElement("h1");
    let text = document.createElement("h3");
    
    title.innerHTML = blog[i].title;
    text.innerHTML = blog[i].text;
    
    newSection.appendChild(title);
    newSection.appendChild(text);
    
    bloglist.appendChild(newSection);
}




