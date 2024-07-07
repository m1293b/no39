/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const catClick = require("../../js/script.js");

// Mock the global variables used in the function
global.rooms = [
    {
        pictures: ["pic1.jpg", "pic2.jpg"],
        numbers: ["001", "002", "003", "004"],
        features: ["feature1", "feature2"],
        description: "Room description",
        priceFrom: 100,
        code: "ROOM1",
        upsells: [
            { item: "Upsell1", price: "$10", description: "Upsell description 1" },
            { item: "Upsell2", price: "$20", description: "Upsell description 2" }
        ]
    }
];
global.roomsPictures = document.createElement("div");
global.roomsDescription = document.createElement("div");
global.roomsExtras = "";
global.roomsSetupNum = "";
global.whichRoom = "";

beforeEach(() => {
    // Set up the DOM structure
    document.body.innerHTML = `
        <div class="room-categories">
            <div class="child1"></div>
            <div class="child2"></div>
        </div>
        <div id="rooms-pictures"></div>
        <div id="rooms-description"></div>
    `;
    // Add global variables to the DOM
    global.roomsPictures = document.getElementById("rooms-pictures");
    global.roomsDescription = document.getElementById("rooms-description");
});

describe("Script.js tests", () => {
    describe("catClick test", () => {
        test('catClick function modifies DOM correctly on click event', () => {
            // Get the parent element
            const parent = document.getElementsByClassName("room-categories")[0];
            
            // Mock the context of 'this' in the function
            parent.whichOne = 0;

            // Attach the event listener to the parent element
            parent.addEventListener('click', catClick);
            
            // Create a new click event
            const event = new MouseEvent('click');
            
            // Dispatch the event
            parent.dispatchEvent(event);

            // Assertions for descriptionHTML
            expect(global.roomsDescription.innerHTML).toContain("Room description");
            expect(global.roomsDescription.innerHTML).toContain("Upsell1");
            expect(global.roomsDescription.innerHTML).toContain("$10");
            expect(global.roomsDescription.innerHTML).toContain("Upsell description 1");
            expect(global.roomsDescription.innerHTML).toContain("Upsell2");
            expect(global.roomsDescription.innerHTML).toContain("$20");
            expect(global.roomsDescription.innerHTML).toContain("Upsell description 2");

            // Check that the button exists
            expect(document.getElementById('select-room')).not.toBeNull();
        });
    });
});