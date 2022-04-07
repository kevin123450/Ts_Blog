var bloginfo = {
    author: "",
    title: "",
    text: "",
    time: ""
};
function printBlog(bloginfo) {
    console.log(bloginfo);
}
//post 1
var Blog1 = /** @class */ (function () {
    function Blog1(author, title, text, time) {
        this.author = author;
        this.title = title;
        this.text = text;
        this.time = time;
    }
    return Blog1;
}());
var bloginfo1 = new Blog1("Author", "Animal1", "lorem ipsum", "2022-X-X");
var blog1 = [bloginfo1];
var bloglist1 = document.getElementById("post1");
var _loop_1 = function (i) {
    var newSection = document.createElement("section");
    var author = document.createElement("h5");
    var title = document.createElement("h1");
    var text = document.createElement("h3");
    var time = document.createElement("h5");
    author.innerHTML = blog1[i].author;
    title.innerHTML = blog1[i].title;
    text.innerHTML = blog1[i].text;
    time.innerHTML = blog1[i].time;
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(text);
    newSection.appendChild(time);
    newSection.addEventListener("click", function () {
        printBlog(blog1[i]);
    });
    bloglist1.appendChild(newSection);
};
for (var i = 0; i < blog1.length; i++) {
    _loop_1(i);
}
//post 2
var Blog2 = /** @class */ (function () {
    function Blog2(author, title, text, time) {
        this.author = author;
        this.title = title;
        this.text = text;
        this.time = time;
    }
    return Blog2;
}());
var bloginfo2 = new Blog2("Author", "Animal2", "lorem ipsum", "2022-X-X");
var blog2 = [bloginfo2];
var bloglist2 = document.getElementById("post2");
var _loop_2 = function (i) {
    var newSection = document.createElement("section");
    var author = document.createElement("h5");
    var title = document.createElement("h1");
    var text = document.createElement("h3");
    var time = document.createElement("h5");
    author.innerHTML = blog2[i].author;
    title.innerHTML = blog2[i].title;
    text.innerHTML = blog2[i].text;
    time.innerHTML = blog2[i].time;
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(text);
    newSection.appendChild(time);
    newSection.addEventListener("click", function () {
        printBlog(blog2[i]);
    });
    bloglist2.appendChild(newSection);
};
for (var i = 0; i < blog2.length; i++) {
    _loop_2(i);
}
