const express = require("express");

const app = express();


let Photos = [
    {
        id: 1,
        authors: "Illia",
        title: "Nature",
        description: "Flowers",
        url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fhrltx12pl8hq%2F5Iq664jCcrgs8BDsnpqoqg%2F8626987010e480955298017173d4c02d%2F01-flowers_797194879.jpg%3Ffit%3Dfill%26w%3D480%26h%3D270&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fru%2Fcategory%2Fnature%2Fflowers&tbnid=oUWlOYrWIsetbM&vet=12ahUKEwi8pcqUuOr0AhUJ2aQKHRe-DFwQMygGegUIARDCAQ..i&docid=s2FXBXOjwyVV4M&w=480&h=270&itg=1&q=flowers&ved=2ahUKEwi8pcqUuOr0AhUJ2aQKHRe-DFwQMygGegUIARDCAQ",
        heshtag: "#nature, #flowers",
        published: new Date (2020, 3, 6),
        likes: 1008
    },
    {
        id: 0,
        authors: "Andrii",
        title: "Computer",
        description: "GPU",
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fglobal.aorus.com%2Fblog-detail.php%3Fi%3D878&psig=AOvVaw2a5fRDo9qmFjSZmw56PIoY&ust=1639816934713000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCNuaK46vQCFQAAAAAdAAAAABAD",
        heshtag: "#technik, #GPU",
        published: new Date (2021, 12, 16),
        likes: 99932
    }
]

app.get("/photo/:athor", (req, res) => {
    let authorsPhoto = Photos.filter(photo => photo.author == req.params.athour);
    if(authorsPhoto.length == 0)
        res.status(404).send("New Found");
    else
    {
        authorsPhoto.sort(
            (photo1, photo2) => photo1.id -photo2.id
        )
        res.send(authorsPhoto[0]);
    }
});

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) =>{
    res.render("photo");
})

if (process.env.NODE_ENV == "test") module.exports = app;
else
    app.listen(3000, () => {
        console.log("http://localhost:3000");
})

