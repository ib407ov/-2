const supertest = require("supertest");
const app = require("../src");

const idd = {
    id: 0,
    authors: "Illia",
    title: "Nature",
    description: "Flowers",
    url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fhrltx12pl8hq%2F5Iq664jCcrgs8BDsnpqoqg%2F8626987010e480955298017173d4c02d%2F01-flowers_797194879.jpg%3Ffit%3Dfill%26w%3D480%26h%3D270&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fru%2Fcategory%2Fnature%2Fflowers&tbnid=oUWlOYrWIsetbM&vet=12ahUKEwi8pcqUuOr0AhUJ2aQKHRe-DFwQMygGegUIARDCAQ..i&docid=s2FXBXOjwyVV4M&w=480&h=270&itg=1&q=flowers&ved=2ahUKEwi8pcqUuOr0AhUJ2aQKHRe-DFwQMygGegUIARDCAQ",
    heshtag: "#nature, #flowers",
    published: new Date (2020, 3, 6),
    likes: 1008
};

describe("Integration test Photo API", () => {

    it("should get photo with max likes of author", async() => {
        const response = await supertest(app).get("/photo/Illia");
        const data = JSON.parse(response.text);
        data.published = new Date(data.published);

        expect(response.status).toBe(200);
        expect(data).toMatchObject(idd);
    });

});