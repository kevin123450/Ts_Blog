let animal1info = {
    author: "",
    title: "",
    text: "",
    time: "",
};

function printanimal1(post){
    console.log(post);
}

class Animal1{
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

let animalinfo = new Animal1("Author","Animal1", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde earum reiciendis repellat eos molestiae cupiditate itaque quod, neque magni impedit reprehenderit similique, id asperiores dolore dolorem quae! Distinctio, aliquid explicabo.", "2022-X-X");

let animal1 = [animalinfo];

let animal1List = document.getElementById("animal1");

for (let i = 0; i < animal1.length; i++) {
    let newSection = document.createElement("section");

    let author = document.createElement("h5");
    let title = document.createElement("h1");
    let text = document.createElement("h3");
    let time = document.createElement("h5");
    
    author.innerHTML = animal1[i].author;
    title.innerHTML = animal1[i].title;
    text.innerHTML = animal1[i].text;
    time.innerHTML = animal1[i].time;
    
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(text);
    newSection.appendChild(time);

    newSection.addEventListener("click" , ()=>{
        printanimal1(animal1[i]);
    });
    
    animal1List.appendChild(newSection);
}