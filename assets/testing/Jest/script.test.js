/**
 * @jest-environment jsdom
 */
const catClick = require("../../js/script.js");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("rooms.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// I spent a lot of time on the interweb, looking for solution how to test this function. I found answers after posting on Reddit.
// I had to learn how to properly bind the element, so the function can use "this".

describe("Rooms.html tests", () => {

    
    test("checking if catClick function works as intended", () => {
        const categories = document.getElementsByClassName("room-categories");
        catClick.bind(categories[0])();
        const categoryDesc = document.getElementById("rooms-description");
        expect(categoryDesc.innerHTML).toContain("Our Cosy Rooms are designed");
    })
})
