const { JSDOM } = require("jsdom");
const catMIn = require("../js/script.js");

describe("Script.js tests", () =>{
    describe("catMIn test", () =>{
        test('catMIn function modifies styles correctly on mouseover event', () => {
            // Create a mock DOM structure
            const dom = new JSDOM(`
                <div id="parent">
                    <div id="child1"></div>
                    <div id="child2"></div>
                </div>
            `);
        
            // Get the parent element
            const parent = dom.window.document.getElementById("parent");
            
            // Attach the event listener to the parent element
            parent.addEventListener('mouseover', catMIn);
            
            // Create a new mouseover event
            const event = new dom.window.Event('mouseover');
            
            // Dispatch the event
            parent.dispatchEvent(event);
            
            // Assertions for the first child
            expect(parent.children[0].style.borderRadius).toBe("30%");
            expect(parent.children[0].style.border).toBe("thin solid #222831");
            expect(parent.children[0].style.cursor).toBe("pointer");
        
            // Assertions for the second child
            expect(parent.children[1].style.visibility).toBe("visible");
        });
    })
})