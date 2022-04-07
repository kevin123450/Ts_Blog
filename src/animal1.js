var animal1info = {
    author: "",
    title: "",
    text: "",
    time: ""
};
function printanimal1(post) {
    console.log(post);
}
var Animal1 = /** @class */ (function () {
    function Animal1(author, title, text, time) {
        this.author = author;
        this.title = title;
        this.text = text;
        this.time = time;
    }
    return Animal1;
}());
var animalinfo = new Animal1("Author", "Animal1", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde earum reiciendis repellat eos molestiae cupiditate itaque quod, neque magni impedit reprehenderit similique, id asperiores dolore dolorem quae! Distinctio, aliquid explicabo.", "2022-X-X");
var animal1 = [animalinfo];
var animal1List = document.getElementById("animal1");
var _loop_1 = function (i) {
    var newSection = document.createElement("section");
    var author = document.createElement("h5");
    var title = document.createElement("h1");
    var text = document.createElement("h3");
    var time = document.createElement("h5");
    author.innerHTML = animal1[i].author;
    title.innerHTML = animal1[i].title;
    text.innerHTML = animal1[i].text;
    time.innerHTML = animal1[i].time;
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(text);
    newSection.appendChild(time);
    newSection.addEventListener("click", function () {
        printanimal1(animal1[i]);
    });
    animal1List.appendChild(newSection);
};
for (var i = 0; i < animal1.length; i++) {
    _loop_1(i);
}
