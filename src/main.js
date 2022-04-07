var Bloghome = /** @class */ (function () {
    function Bloghome(title, text) {
        this.title = title;
        this.text = text;
    }
    return Bloghome;
}());
var bloghomeinfo = new Bloghome("Blogs", "See all blogs");
var blog = [bloghomeinfo];
var bloglist = document.getElementById("blog-list");
for (var i = 0; i < blog.length; i++) {
    var newSection = document.createElement("section");
    var title = document.createElement("h1");
    var text = document.createElement("h3");
    title.innerHTML = blog[i].title;
    text.innerHTML = blog[i].text;
    newSection.appendChild(title);
    newSection.appendChild(text);
    bloglist.appendChild(newSection);
}
