var animal1info = {
    author: "",
    title: "",
    text: "",
    time: "",
    blogId: ""
};
function printanimal1(post) {
    console.log(post);
}
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
var allPosts = JSON.parse(localStorage.getItem('posts') || '[]');
var blogId = +localStorage.getItem('blogId');
var posts = [];
var blogIdfromLS = JSON.parse(blogId.toString());
var allPostslist = document.getElementById("animal1");
for (var i = 0; i < allPosts.length; i++) {
    if (allPosts[i].blogId == blogIdfromLS) {
        var newLi = document.createElement("li");
        var author = document.createElement("h5");
        var title = document.createElement("h1");
        var text = document.createElement("h3");
        var time = document.createElement("h5");
        var blogId_1 = document.createElement("h5");
        author.innerHTML = allPosts[i].author;
        title.innerHTML = allPosts[i].title;
        text.innerHTML = allPosts[i].text;
        time.innerHTML = allPosts[i].time;
        blogId_1.innerHTML = allPosts[i].blogId.toString();
        newLi.appendChild(author);
        newLi.appendChild(title);
        newLi.appendChild(text);
        newLi.appendChild(time);
        newLi.appendChild(blogId_1);
        allPostslist.appendChild(newLi);
    }
}
// Loopa igenom allPosts
// Hitta de inlägg som har rätt blogId
// Lägg till inläggen i en ny lista (posts)
var animal1List = document.getElementById("animal1");
var _loop_1 = function (i) {
    var newSection = document.createElement("section");
    var author = document.createElement("h5");
    var title = document.createElement("h1");
    var text = document.createElement("h3");
    var time = document.createElement("h5");
    var blogId_2 = document.createElement("h5");
    author.innerHTML = posts[i].author;
    title.innerHTML = posts[i].title;
    text.innerHTML = posts[i].text;
    time.innerHTML = posts[i].time;
    newSection.appendChild(author);
    newSection.appendChild(title);
    newSection.appendChild(text);
    newSection.appendChild(time);
    newSection.appendChild(blogId_2);
    newSection.addEventListener("click", function () {
        printanimal1(posts[i]);
    });
    animal1List.appendChild(newSection);
};
for (var i = 0; i < posts.length; i++) {
    _loop_1(i);
}
