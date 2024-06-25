// This function will be executed when the user hovers over one of the divs that contains a picture of a room in that specific category

function catMIn(event) {
    this.children[0].style.borderRadius = "30%";
    this.children[0].style.border = "thin solid #222831";
    this.children[0].style.cursor = "pointer";
};

function catMOut(event) {
    this.children[0].style.borderRadius = "8%";
    this.children[0].style.border = "thin solid white";
    this.children[0].style.cursor = "default";
};


function catClick(event) {

    let insPictures = rooms[this.whichOne].pictures.slice();
    let insNumbers = rooms[this.whichOne].numbers.slice();
    let insFeatures = rooms[this.whichOne].features.slice();
    let insDescription = rooms[this.whichOne].description;
    let insPriceFrom = rooms[this.whichOne].priceFrom;

    let picturesHTML = `<div id="pics">`;

    for (let i = 0; i < insPictures.length; i++) {
        picturesHTML += `
    <div class="pics-in-div">
        <img src="${insPictures[i]}">
    </div>
    `;
    }

    picturesHTML += `</div>`;

    roomsPictures.innerHTML = picturesHTML;

    let descriptionHTML = `${insDescription}<br><hr><br>
    <h4><u>Available extras</u></h4><br><hr style="width:50%;text-align:center;">
    <ul class = "extras-center">
        <li><u><b>${rooms[this.whichOne].upsells[0].item}</b></u></li>
        <li><i><b>${rooms[this.whichOne].upsells[0].price}</b></i></li>
        <li><i>${rooms[this.whichOne].upsells[0].description}</i></li>
    </ul>
    <br><hr style="width:50%;text-align:center;">
    <ul class = "extras-center">
        <li><u><b>${rooms[this.whichOne].upsells[1].item}</b></u></li>
        <li><i><b>${rooms[this.whichOne].upsells[1].price}</b></i></li>
        <li><i>${rooms[this.whichOne].upsells[1].description}</i></li>
    </ul>
    <br><hr style="width:50%;text-align:center;">
    <br>
    <p><i>* select extras on the next page</i></p><br>
    <button type="button" class="btn btn-success mb-3" id="select-room" style="width:50%;text-align:center;" onclick="nextPage()";>Select Room</button>
    
    `
    roomsDescription.innerHTML = descriptionHTML;
    const rndOrdNum = rooms[this.whichOne].numbers[Math.floor((Math.random() * 4) + 1)] + ':' + Math.floor((Math.random() * 10000) * 11);
    roomsSetupNum = rooms[this.whichOne].code + rndOrdNum;
    
    roomsExtras = `
    <div class="row mt-2">
        <div class="col p-4 bg-light rounded">
            <ul class = "extras-center">
                <li><u><b>${rooms[this.whichOne].upsells[0].item}</b></u></li>
                <li><i><b>${rooms[this.whichOne].upsells[0].price}</b></i></li>
                <li><i>${rooms[this.whichOne].upsells[0].description}</i></li>
            </ul>
            <button type="button" class="btn btn-success mb-3" id="1st-extra-add";text-align:center;" onclick="addExtra1()";>Add</button>
        <br><hr style="width:50%;text-align:center;">
            <ul class = "extras-center">
                <li><u><b>${rooms[this.whichOne].upsells[1].item}</b></u></li>
                <li><i><b>${rooms[this.whichOne].upsells[1].price}</b></i></li>
                <li><i>${rooms[this.whichOne].upsells[1].description}</i></li>
            </ul>
            <button type="button" class="btn btn-success mb-3" id="2nd-extra-add" ;text-align:center;" onclick="addExtra2()";>Add</button>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col p-4 bg-light rounded" id="setup-confirmation"><i>This is where the user sees the booking confirmation.</i></div>
    </div>
    `
    document.getElementById('select-room').addEventListener('click', nextPage);
};

function nextPage(event) {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    roomsSetup.innerHTML = roomsExtras;
 
    let selectExtras = document.getElementById('1st-extra-add');
    selectExtras.addEventListener('click', addExtra1);

    let bookingConf = document.getElementById('2nd-extra-add');
    bookingConf.addEventListener('click', addExtra2);
}


// UPDATE this to make the last section work
function addExtra1(event) {
    if (firstExtra === false) {
        roomsSetupNum += ':1e';
    document.getElementById('setup-confirmation').innerHTML = `
    <h2>Thank you for booking your stay with us!</h2>
    <hr style="width:50%;text-align:center;">
    <br><h4>Your booking reference number</h4>

    <br><p>${roomsSetupNum}:1e</p>
    `;
    firstExtra = true;
    } else {
        if(roomsSetup.includes == ":1e") {
            roomsSetup.replace(":1e", "");
        }
        firstExtra = false
    }
}
function addExtra2(event) {
    if (secondExtra === false) {
        roomsSetupNum += ':2e';
    document.getElementById('setup-confirmation').innerHTML = `
    <h2>Thank you for booking your stay with us!</h2>
    <hr style="width:50%;text-align:center;">
    <br><h4>Your booking reference number</h4>

    <br><p>${roomsSetupNum}</p>
    `;
    secondExtra = true;
    } else {
        if(roomsSetup.includes == ":2e") {
            roomsSetup.replace(":2e", "");
        }
        secondExtra = false;
    }
}



function orderConfirm() {

}

// The room categories setup starts here. These objects contain the room numbers, amenities, description of the rooms and the service it comes with,
// and the starting price.
// These information are then used to fill out the divs when the user selects a specific room category.

let rooms = [
    cosy = {
        code: 'co',
        pictures: [
            "./assets/images/cosy_rooms/pexels-heyho-6527066.jpg",
            "./assets/images/cosy_rooms/pexels-jonathanborba-3144580.jpg",
            "./assets/images/cosy_rooms/pexels-pixabay-164595.jpg",
            "./assets/images/cosy_rooms/pexels-pixabay-271618.jpg",
            "./assets/images/cosy_rooms/pexels-pixabay-271624.jpg",],
        numbers: ["1", "2", "3", "4"],
        features: [
            'King bed',
            ' Walk-in shower',
            ' Minibar',
            ' Wallet safe',
            ' Wired and Wireless internet connection',
            ' In-Room Coffee and Tea'],
        description: `<h2><u>Cosy Room</u></h2><br>
        <p><i>Our Cosy Rooms are designed to cater to the needs of business people, offering comfort and convenience at an affordable price. Perfect for the modern professional, this room provides everything you need for a productive and restful stay.</i></p>
        
        <hr style="width:50%;text-align:center;">

        <br><h3>Features</h3><br>
        <h5>Sleeping Arrangements</h5>
        <p>Relax and unwind in the comfortable King bed, ensuring you get a good night's sleep to prepare for your busy day ahead.</p>

        <br><h5>Modern Amenities</h5>
        <p>Start your day with a refreshing experience in the walk-in shower, equipped with premium toiletries.</p>
        <p>Keep your valuables secure in the in-room wallet safe, providing peace of mind during your stay.</p>
        <p>Stay connected with both wired and wireless internet connections, ideal for business travelers who need reliable internet access.</p>
        <p>Enjoy a selection of beverages with the in-room coffee and tea facilities, perfect for a quick refreshment anytime.</p>
        <p>The room also includes a minibar stocked with a variety of drinks and snacks for your convenience.</p>
        
        <br><br><h5>Pricing</h5>
        <p>Prices start from: £120</p>
        
        <br><h5>Room Numbers</h5>
        <p>Available rooms: 1, 2, 3, 4</p><br><br>`,
        priceFrom: '£120',
        upsells: [
            {
                item: '24/7 Room Service',
                price: '£10',
                description: "Order anything, anytime.",
            },
            {
                item: 'Tech Kits',
                price: '£8',
                description: "Chargers, adapters, and HDMI cables for connecting devices to the room’s TV.",
            },
        ],
    },
    excellent = {
        code: 'ex',
        pictures: [
            "./assets/images/excellent_rooms/pexels-heyho-6032203.jpg",
            "./assets/images/excellent_rooms/pexels-heyho-6284232.jpg",
            "./assets/images/excellent_rooms/pexels-heyho-6316054.jpg",
            "./assets/images/excellent_rooms/pexels-heyho-6933760.jpg",
            "./assets/images/excellent_rooms/pexels-vika-glitter-392079-3315291.jpg",],
        numbers: ["5","6","7","8"],
        features: ['Super King bed',
            'Walk-in shower',
            'Minibar',
            'Work desk',
            'Laptop safe',
            'Wired and Wireless internet connection',
            'Complimentary coffee and tea'],
        description: `<h2><u>Excellent Room</u></h2><br>
        <p><i>Our Excellent Rooms offer the ultimate in comfort and convenience, perfect for business professionals in high positions seeking a superior stay experience.</i></p>
        
        <hr style="width:50%;text-align:center;">

        <br><h3>Features</h3><br>
        <h5>Sleeping Arrangements</h5>
        <p>Rest easy in the spacious and luxurious Super King bed, designed to provide you with a peaceful night's sleep.</p>

        <br><h5>Modern Amenities</h5>
        <p>Refresh yourself with the walk-in shower, equipped with high-quality toiletries.</p>
        <p>Enjoy a selection of beverages from the minibar, stocked with a variety of drinks and snacks.</p>
        <p>Stay productive at the work desk, designed for business travelers who need a dedicated workspace.</p>
        <p>Secure your valuables in the in-room laptop safe, giving you peace of mind during your stay.</p>
        <p>Stay connected with both wired and wireless internet connections, ensuring reliable and high-speed access.</p>
        <p>Complimentary coffee and tea are available in-room, providing you with a quick and convenient refreshment.</p>

        <br><h5>Pricing</h5>
        <p>The price starts from £180.</p>
        
        <br><h5>Room Numbers</h5>
        <p>Available rooms: 5, 6, 7, 8</p>`,
        priceFrom: '£180',
        upsells: [
            {
                item: 'Meeting Room Rentals',
                price: 'Customised discounted rates',
                description: "Discounted rates for on-site meeting room bookings.",
            },
            {
                item: 'Airport Transfers',
                price: '£80',
                description: "Luxury car services for airport pick-ups and drop-offs.",
            },
        ],
    },
    family = {
        code: 'fa',
        pictures: [
            "./assets/images/family_rooms/pexels-athenea-codjambassis-rossitto-472760075-26571204.jpg",
            "./assets/images/family_rooms/pexels-enginakyurt-3688261.jpg",
            "./assets/images/family_rooms/pexels-fotoaibe-1743229.jpg",
            "./assets/images/family_rooms/pexels-naimbic-2029722.jpg",
            "./assets/images/family_rooms/pexels-pixabay-271631.jpg",
            "./assets/images/family_rooms/pexels-suhel-vba-1749662-3659683.jpg"],
        numbers: ["9","10","11","12"],
        features: ['Super King bed',
            '2x single beds',
            'Walk-in shower',
            'Seating area with board games'],
        description: `<h2>Family Room</h2><br>
        <i><p>Welcome to our spacious Family Room, the ideal haven for families seeking comfort, privacy, and fun. This thoughtfully designed suite offers everything you need for a memorable family stay.</p></i><br>

        <h5>Sleeping Arrangements</h5>
        <p>Enjoy a restful night's sleep in the luxurious Super King bed, located in the main room, ensuring parents have a tranquil retreat. Adjacent to this is a separate, connected room featuring two comfortable single beds, perfect for children. A door between the rooms allows for privacy when needed, giving everyone their own space to unwind.</p><br>

        <h5>Modern Amenities</h5>
        <p>Begin your day with a refreshing experience in our modern walk-in shower. The bathroom is equipped with complimentary toiletries and soft, fluffy towels, ensuring your stay is as convenient and comfortable as possible.</p><br>

        <h5>Family-Friendly</h5>
        <p>Spend quality time together in the inviting seating area, designed with families in mind. Engage in friendly competition or collaborative fun with our selection of board games, perfect for creating cherished memories during your stay.</p><br>

        <p>Our Family Room offers a blend of comfort, privacy, and entertainment, making it the ideal choice for families looking to enjoy a home away from home. Book your stay today and create lasting memories with your loved ones!</p>`,
        priceFrom: '£240',
        upsells: [
            {
                item: 'Local Experience Packages',
                price: '£95',
                description: "Tickets to nearby attractions, theme parks, or family-friendly tours.",
            },
            {
                item: 'Kids Club',
                price: '£20 per child',
                description: "Access to the hotel's kids club or supervised play area with organized activities.",
            },
        ],
    },
    superior = {
        code: 'su',
        pictures: [
            "./assets/images/superior_suites/pexels-heyho-6032424.jpg",
            "./assets/images/superior_suites/pexels-heyho-6032425.jpg",
            "./assets/images/superior_suites/pexels-heyho-6585757.jpg",
            "./assets/images/superior_suites/pexels-heyho-6587902.jpg",
            "./assets/images/superior_suites/pexels-jvdm-1457847.jpg",],
        numbers: ["12","14","15","16"],
        features: ['Emperor bed',
            'Roll-top bath',
            'Double Walk-in shower',
            'Balcony',
            'Minibar'],
        description: `Experience unparalleled luxury and comfort in our Superior Suites, the perfect retreat for couples seeking an unforgettable getaway.

Sumptuous Sleeping Arrangements
Relax and rejuvenate in the lavish Emperor bed, draped in the finest linens and designed to provide the ultimate sleeping experience. Wake up refreshed and ready to embrace the day in this spacious and beautifully appointed suite.

Luxurious Bathing Experience
Indulge in the elegance of the roll-top bath, ideal for unwinding with a long, soothing soak. The suite also features a double walk-in shower, offering a spacious and invigorating start to your day, complete with premium toiletries and plush towels.

Modern Amenities
Step out onto your private balcony to enjoy serene views, whether you're sipping your morning coffee or toasting the evening with a glass of wine. Enhance your stay with our well-stocked minibar, offering a selection of premium beverages and snacks for your convenience.

Our Superior Suites blend luxury, comfort, and style, making them the perfect choice for couples seeking a sophisticated and romantic escape. Book your stay today and indulge in the ultimate luxury experience.`,
        priceFrom: '£260',
        upsells: [
            {
                item: 'In-Room Spa Services',
                price: '£140',
                description: 'Couples massages, facials, or private yoga sessions in the comfort of their suite.'
            },
            {
                item: 'Private Dining Experience',
                price: '£180',
                description: 'Romantic in-room dining with a personalized menu curated by the hotel’s chef.'
            },
        ],
    }
]

// Next, an array is getting declared, which will be used to store all the information about the experience the user is choosing while going through this page

// This is the part that is calling for the "onLoad" function that makes loading up the page a bit more interesting.

//window.onload(onLoad());

// This is an Event Listener for hovering over, cursor leaving or user clicking on one of the room category pictures

let roomsSetup = document.getElementById('rooms-setup');
let categories = document.getElementsByClassName('rooms-categories');
let roomsPictures = document.getElementById('rooms-picture');
let roomsDescription = document.getElementById('rooms-description');
let roomsExtras = ``;
let firstExtra = false;
let secondExtra = false;

let roomsSetupNum = '';

for (let i = 0; i < categories.length; i++) {
    categories[i].whichOne = i;
    categories[i].addEventListener('mouseover', catMIn);
    categories[i].addEventListener('mouseleave', catMOut);
    categories[i].addEventListener('click', catClick);
}
