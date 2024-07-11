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
    // test("checking if document has loaded", () => {
    //     expect(document.getElementsByTagName("h1").length).toBe(1);
    // })
    // test("checking further", () => {
    //     expect(document.body.innerHTML).toContain("cosy-select");
    // })
    // test("check", () => {
    //     const clicked = new MouseEvent('click');

    //     const cosyPic = document.getElementsByClassName('room-categories')[0];

    //     cosyPic.dispatchEvent(clicked);

    //     expect(cosyPic.innerHTML).toContain("pexels-jonathanborba-3144580.jpg");

    //     // cosyPic.clicked;

    //     // expect((document.getElementById("rooms-description")).innerHTML).toContain("Our Cosy Rooms are designed");
    // })
    // test("check mouseover", () => {
    //     // const mouseoverImg = new MouseEvent('mouseover');
    //     (document.getElementsByClassName("room-categories")[0]).hover;
    //     expect(document.getElementsByClassName("room-categories")[0].children[0].style.borderRadius).toBe("8%");
    // })
    // test("check click", () => {

    //     // const clicked = new MouseEvent('click');
    //     const cosyPic = document.getElementsByClassName('room-categories')[0];

    //     const clicked = new MouseEvent("click", {
    //         bubbles: true,
    //         cancelable: true,
    //         view: window
    //     });

    //     cosyPic.dispatchEvent(clicked);

    //     const categoryDesc = document.getElementById("rooms-description");
    //     expect(categoryDesc.innerHTML).toContain("Our Cosy Rooms are designed");
    // })

    
    test("checking if catClick function works as intended", () => {
        const categories = document.getElementsByClassName("room-categories");
        catClick.bind(categories[0])();
        const categoryDesc = document.getElementById("rooms-description");
        expect(categoryDesc.innerHTML).toContain("Our Cosy Rooms are designed");
    })
})
