var bloginfo = {
    author: "",
    title: "",
    text: "",
    time: ""
};
function printBlog(bloginfo) {
    console.log(bloginfo);
    localStorage.setItem("blogId", bloginfo.id.toString());
    location.href = "animal1.html";
}
//post 1
var Blog1 = /** @class */ (function () {
    function Blog1(author, title, text, time, id) {
        this.author = author;
        this.title = title;
        this.text = text;
        this.time = time;
        this.id = id;
    }
    return Blog1;
}());
var Post = /** @class */ (function () {
    function Post(author, title, text, time, blogId) {
        this.author = author;
        this.title = title;
        this.text = text;
        this.time = time;
        this.blogId = blogId;
    }
    return Post;
}());
var bloginfo1 = new Blog1("Author", "Animal1", "lorem ipsum", "2022-X-X", 1);
var bloginfo2 = new Blog1("Author", "Animal1 pt 2", "lorem ipsum", "2022-X-X", 1);
var bloginfo3 = new Blog1("Author", "Running", "lorem ipsum", "2023-X-X", 2);
var bloginfo4 = new Blog1("Author", "Choklad", "lorem ipsum", "2024-X-X", 3);
var post1 = new Post("Author", "Animal1", "lorem ipsum", "2022-X-X", 1);
var post2 = new Post("Author", "Animal1", "lorem ipsum", "2022-X-X", 1);
var post3 = new Post("Author", "Running", "lorem ipsum", "2023-X-X", 2);
var post4 = new Post("Author", "Choklad", "lorem ipsum", "2024-X-X", 3);
var blogs = [bloginfo1, bloginfo2, bloginfo3, bloginfo4];
var posts = [post1, post2, post3, post4];
localStorage.setItem('blogs', JSON.stringify(blogs));
localStorage.setItem('posts', JSON.stringify(posts));
var blog1 = [bloginfo1];
var bloglist1 = document.getElementById("post1");
var _loop_1 = function (i) {
    var newSection = document.createElement("section");
    var author = document.createElement("h5");
    var title = document.createElement("h1");
    var text = document.createElement("h3");
    var time = document.createElement("h5");
    author.innerHTML = blogs[i].author;
    title.innerHTML = blogs[i].title;
    text.innerHTML = blogs[i].text;
    time.innerHTML = blogs[i].time;
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(text);
    newSection.appendChild(time);
    newSection.addEventListener("click", function () {
        printBlog(blogs[i]);
    });
    bloglist1.appendChild(newSection);
};
for (var i = 0; i < blogs.length; i++) {
    _loop_1(i);
}
