// This function will be executed when the user hovers over one of the divs that contains a picture of a room in that specific category.

function catMIn(event) {
    this.children[0].style.borderRadius = "30%";
    this.children[0].style.border = "thin solid #222831";
    this.children[0].style.cursor = "pointer";
    this.children[1].style.visibility = "visible";
};

// This function will be executed when the cursor leaves one of the divs that contains a picture of a room in that specific category.

function catMOut(event) {
    this.children[0].style.borderRadius = "8%";
    this.children[0].style.border = "thin solid white";
    this.children[0].style.cursor = "default";
    this.children[1].style.visibility = "hidden";
};

// This functions changes the innerHTML of the two column divs inside the container to showcase pictures of the selected room category,
// and display more information about it.

function catClick(event) {

    let insPictures = rooms[this.whichOne].pictures.slice();
    let insNumbers = rooms[this.whichOne].numbers.slice();
    let insFeatures = rooms[this.whichOne].features.slice();
    let insDescription = rooms[this.whichOne].description;
    let insPriceFrom = rooms[this.whichOne].priceFrom;

    let picturesHTML = `<div class="row justify-content-center" id="pics">`;

    insPictures.map(pictures => {
        picturesHTML += `
    <div class="pics-in-div col-12 col-md-5">
        <img src="${pictures}">
    </div>
    `;
    });
    // for (let i = 0; i < insPictures.length; i++) {
    //     picturesHTML += `
    // <div class="pics-in-div col-12 col-md-5">
    //     <img src="${insPictures[i]}">
    // </div>
    // `;
    // }

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
    const rndOrdNum = rooms[this.whichOne].numbers[Math.floor(Math.random() * 4)] + ':' + Math.floor((Math.random() * 10000) * 11);
    roomsSetupNum = rooms[this.whichOne].code + ":" + rndOrdNum;

    whichRoom = rooms[this.whichOne].code;

    roomsExtras = `
    <div class="row mt-2">
        <div class="col p-4 bg-light rounded">
            <ul class = "extras-center">
                <li><u><b>${rooms[this.whichOne].upsells[0].item}</b></u></li>
                <li><i><b>${rooms[this.whichOne].upsells[0].price}</b></i></li>
                <li><i>${rooms[this.whichOne].upsells[0].description}</i></li>
            </ul>
            <button type="button" class="btn btn-success mb-3" id="1st-extra-add";text-align:center;>Add</button>
        <br><hr style="width:50%;text-align:center;">
            <ul class = "extras-center">
                <li><u><b>${rooms[this.whichOne].upsells[1].item}</b></u></li>
                <li><i><b>${rooms[this.whichOne].upsells[1].price}</b></i></li>
                <li><i>${rooms[this.whichOne].upsells[1].description}</i></li>
            </ul>
            <button type="button" class="btn btn-success mb-3" id="2nd-extra-add" ;text-align:center;>Add</button>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col p-4 bg-light rounded" id="setup-confirmation"><i>This is where the user sees the booking confirmation.</i></div>
    </div>
    `
    document.getElementById('select-room').addEventListener('click', nextPageExtras);
};

// This function controls what happens when the user selects the room category by clicking on the button at the bottom of the page.

function nextPageExtras(event) {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    roomsSetup.innerHTML = roomsExtras;

    let selectExtras = document.getElementById('1st-extra-add');
    selectExtras.addEventListener('mouseup', addExtra1);

    let bookingConf = document.getElementById('2nd-extra-add');
    bookingConf.addEventListener('mouseup', addExtra2);

    document.getElementById('setup-confirmation').innerHTML = `
        <br><h4>Your package reference number</h4>

    <br><p>${roomsSetupNum}</p>
    <hr style="width:50%;text-align:center;">
    <br>
    <p class = "text-center"><i>Thank you for choosing our ${whichRoom} room for your ideal stay, and for selecting any additional extras to enhance your stay. 
    <br><br>To ensure we accommodate all your needs, please quote the reference number you just received in the "Additional notes" on the following page.
    <br><br>This will help our team prepare for your arrival and meet your specific requirements.
    <br><br>Additionally, please select the appropriate room category on the following page if you wish to utilize the extras you have chosen.
    <br><br>If you would like to reserve a table at our restaurant for the duration of your stay, you can do so on the Restaurant's page or by requesting it in the additional notes section as well.
    <br><br><br>We look forward to making your stay unforgettable.</i></p>
    <br>
    <hr style="width:50%;text-align:center;">
    <button type="button" class="btn btn-secondary mb-3" id="next-page-details" ;text-align:center; onclick="nextPageDetails(this);">Finalise booking</button>
    `
};


// The functions below control what happens when the user clicks on one of the buttons to add an extra service to their booking.

function addExtra1(event) {
    if (firstExtra === false) {
        roomsSetupNum += ':1e';
        document.getElementById('setup-confirmation').innerHTML = `
        <br><h4>Your package reference number</h4>

    <br><p>${roomsSetupNum}</p>
    <hr style="width:50%;text-align:center;">
    <br>
    <p class = "text-center"><i>Thank you for choosing our ${whichRoom} room for your ideal stay, and for selecting any additional extras to enhance your stay. 
    <br><br>To ensure we accommodate all your needs, please quote the reference number you just received in the "Additional notes" on the following page.
    <br><br>This will help our team prepare for your arrival and meet your specific requirements.
    <br><br>Additionally, please select the appropriate room category on the following page if you wish to utilize the extras you have chosen.
    <br><br>If you would like to reserve a table at our restaurant for the duration of your stay, you can do so on the Restaurant's page or by requesting it in the additional notes section as well.
    <br><br><br>We look forward to making your stay unforgettable.</i></p>
    <br>
    <hr style="width:50%;text-align:center;">
    <button type="button" class="btn btn-secondary mb-3" id="next-page-details" ;text-align:center; onclick="nextPageDetails(this);">Finalise booking</button>
    `;
        this.style.backgroundColor = "red";
        this.textContent = "Remove";
        firstExtra = true;
    } else {

        roomsSetupNum = roomsSetupNum.replace(/:1e/g, "");
        console.log(roomsSetupNum);
        this.style.backgroundColor = "green";
        this.textContent = "Add";
        document.getElementById('setup-confirmation').innerHTML = `
        <br><h4>Your package reference number</h4>

    <br><p>${roomsSetupNum}</p>
    <hr style="width:50%;text-align:center;">
    <br>
    <p class = "text-center"><i>Thank you for choosing our ${whichRoom} room for your ideal stay, and for selecting any additional extras to enhance your stay. 
    <br><br>To ensure we accommodate all your needs, please quote the reference number you just received in the "Additional notes" on the following page.
    <br><br>This will help our team prepare for your arrival and meet your specific requirements.
    <br><br>Additionally, please select the appropriate room category on the following page if you wish to utilize the extras you have chosen.
    <br><br>If you would like to reserve a table at our restaurant for the duration of your stay, you can do so on the Restaurant's page or by requesting it in the additional notes section as well.
    <br><br><br>We look forward to making your stay unforgettable.</i></p>
    <br>
    <hr style="width:50%;text-align:center;">
    <button type="button" class="btn btn-secondary mb-3" id="next-page-details" ;text-align:center; onclick="nextPageDetails(this);">Finalise booking</button>
    `;
        firstExtra = false;
    };
};

function addExtra2(event) {
    if (secondExtra === false) {
        roomsSetupNum += ':2e';
        console.log(roomsSetupNum);
        document.getElementById('setup-confirmation').innerHTML = `
        <br><h4>Your package reference number</h4>

    <br><p>${roomsSetupNum}</p>
    <hr style="width:50%;text-align:center;">
    <br>
    <p class = "text-center"><i>Thank you for choosing our ${whichRoom} room for your ideal stay, and for selecting any additional extras to enhance your stay. 
    <br><br>To ensure we accommodate all your needs, please quote the reference number you just received in the "Additional notes" on the following page.
    <br><br>This will help our team prepare for your arrival and meet your specific requirements.
    <br><br>Additionally, please select the appropriate room category on the following page if you wish to utilize the extras you have chosen.
    <br><br>If you would like to reserve a table at our restaurant for the duration of your stay, you can do so on the Restaurant's page or by requesting it in the additional notes section as well.
    <br><br><br>We look forward to making your stay unforgettable.</i></p>
    <br>
    <hr style="width:50%;text-align:center;">
    <button type="button" class="btn btn-secondary mb-3" id="next-page-details" ;text-align:center; onclick="nextPageDetails(this);">Finalise booking</button>
    `;
        this.style.backgroundColor = "red";
        this.textContent = "Remove";
        secondExtra = true;
    } else {

        roomsSetupNum = roomsSetupNum.replace(/:2e/g, "");
        this.style.backgroundColor = "green";
        this.textContent = "Add";
        document.getElementById('setup-confirmation').innerHTML = `
        <br><h4>Your package reference number</h4>

    <br><p>${roomsSetupNum}</p>
    <hr style="width:50%;text-align:center;">
    <br>
    <p class = "text-center"><i>Thank you for choosing our ${whichRoom} room for your ideal stay, and for selecting any additional extras to enhance your stay. 
    <br><br>To ensure we accommodate all your needs, please quote the reference number you just received in the "Additional notes" on the following page.
    <br><br>This will help our team prepare for your arrival and meet your specific requirements.
    <br><br>Additionally, please select the appropriate room category on the following page if you wish to utilize the extras you have chosen.
    <br><br>If you would like to reserve a table at our restaurant for the duration of your stay, you can do so on the Restaurant's page or by requesting it in the additional notes section as well.
    <br><br><br>We look forward to making your stay unforgettable.</i></p>
    <br>
    <hr style="width:50%;text-align:center;">
    <button type="button" class="btn btn-secondary mb-3" id="next-page-details" ;text-align:center; onclick="nextPageDetails(this);">Finalise booking</button>
    `;
        secondExtra = false;
    };
};

// This function takes the user to the hotel.html page where they will be able to provide further information that is required to make a booking.

function nextPageDetails(event) {
    window.location.href = "./hotel.html";
};

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
        
        <br><h5>Available rooms</h5>
        <p>1, 2, 3, 4</p>`,
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
            "./assets/images/excellent_rooms/pexels-heyho-6933760.jpg",
            "./assets/images/excellent_rooms/pexels-heyho-6284232.jpg",
            "./assets/images/excellent_rooms/pexels-heyho-6316054.jpg",
            "./assets/images/excellent_rooms/pexels-vika-glitter-392079-3315291.jpg",],
        numbers: ["5", "6", "7", "8"],
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

        <br><br><h5>Pricing</h5>
        <p>The price starts from £180.</p>
        
        <br><h5>Available rooms</h5>
        <p>5, 6, 7, 8</p>`,
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
        numbers: ["9", "10", "11", "12"],
        features: ['Super King bed',
            '2x single beds',
            'Walk-in shower',
            'Seating area with board games'],
        description: `<h2><u>Family Room</u></h2><br>
        <i><p>Welcome to our spacious Family Room, the ideal haven for families seeking comfort, privacy, and fun. This thoughtfully designed suite offers everything you need for a memorable family stay.</p></i><br>

        <hr style="width:50%;text-align:center;">

        <br><h3>Features</h3><br>
        <h5>Sleeping Arrangements</h5>
        <p>Enjoy a restful night's sleep in the luxurious Super King bed, located in the main room, ensuring parents have a tranquil retreat. Adjacent to this is a separate, connected room featuring two comfortable single beds, perfect for children. A door between the rooms allows for privacy when needed, giving everyone their own space to unwind.</p><br>

        <br><h5>Modern Amenities</h5>
        <p>Begin your day with a refreshing experience in our modern walk-in shower. The bathroom is equipped with complimentary toiletries and soft, fluffy towels, ensuring your stay is as convenient and comfortable as possible.</p><br>

        <br><h5>Family-Friendly</h5>
        <p>Spend quality time together in the inviting seating area, designed with families in mind. Engage in friendly competition or collaborative fun with our selection of board games, perfect for creating cherished memories during your stay.</p><br>

        <p>Our Family Room offers a blend of comfort, privacy, and entertainment, making it the ideal choice for families looking to enjoy a home away from home. Book your stay today and create lasting memories with your loved ones!</p>

        <br><br><h5>Pricing</h5>
        <p>The price starts from £2400.</p>
        
        <br><h5>Available rooms</h5>
        <p>9, 10, 11, 12</p>`,
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
            "./assets/images/superior_suites/pexels-heyho-6032425.jpg",
            "./assets/images/superior_suites/pexels-heyho-6585757.jpg",
            "./assets/images/superior_suites/pexels-heyho-6032424.jpg",
            "./assets/images/superior_suites/pexels-jvdm-1457847.jpg",
            "./assets/images/superior_suites/pexels-heyho-6587902.jpg",],
        numbers: ["12", "14", "15", "16"],
        features: ['Emperor bed',
            'Roll-top bath',
            'Double Walk-in shower',
            'Balcony',
            'Minibar'],
        description: `<h2><u>Superior Suite</u></h2><br><br>
        <p><i>Experience the epitome of luxury and comfort in our Superior Suite, the perfect retreat for couples seeking an unforgettable getaway.</i></p>

        <hr style="width:50%;text-align:center;">

        <br><h3>Features</h3><br>
        <h5>Sleeping Arrangements</h5>
        <p>Relax and rejuvenate in the lavish Emperor bed, draped in the finest linens and designed to provide the ultimate sleeping experience.</p>

        <br><h5>Luxurious Bathing Experience</h5>
        <p>Indulge in the elegance of the roll-top bath, ideal for unwinding with a long, soothing soak. The suite also features a double walk-in shower, offering a spacious and invigorating start to your day, complete with premium toiletries and plush towels.</p>

        <br><h5>Private Balcony</h5>
        <p>Step out onto your private balcony to enjoy serene views, whether you're sipping your morning coffee or toasting the evening with a glass of wine.</p>

        <br><h5>Modern Amenities</h5>
        <p>Enhance your stay with our well-stocked minibar, offering a selection of premium beverages and snacks for your convenience.</p>

        <br><br><h5>Pricing</h5>
        <p>Prices start from: £260</p>
        
        <br><h5>Available rooms</h5>
        <p>12, 14, 15, 16</p>`,
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

// Next, a variable is getting declared, which will be used to store all the information about the experience the user is choosing while going through this page

let roomsSetupNum = '';

// These variables will be used to acces specific elements or set of elements on the first "page".

let roomsSetup = document.getElementById('rooms-setup');
let categories = document.getElementsByClassName('room-categories');
let roomsPictures = document.getElementById('rooms-picture');
let roomsDescription = document.getElementById('rooms-description');
let roomCategoryLabels = document.getElementsByClassName('over-image');

// This variable is used to tranfer code to the roomsSetup innerHTML to take the user to the next "page".

let roomsExtras = ``;

// These variables are used to determine whether an extra is selected or not.

let firstExtra = false;
let secondExtra = false;

// This variable is used on the final page of the room selection, to thank the user for selecting the specific room.

let whichRoom = '';

// This for loop iterates through the divs that are in the container with the class of "room-categories"

for (let i = 0; i < categories.length; i++) {
    categories[i].whichOne = i;
    categories[i].addEventListener('mouseover', catMIn);
    categories[i].addEventListener('mouseleave', catMOut);
    categories[i].addEventListener('click', catClick);
}
