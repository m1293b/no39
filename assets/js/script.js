function onLoad() {

};

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
    
    let insNumbers = rooms[this.whichOne].numbers.slice();
    let insFeatures = rooms[this.whichOne].features.slice();
    let insDescription = rooms[this.whichOne].description;
    let insPriceFrom = rooms[this.whichOne].priceFrom;

    let descriptionHTML = `${insDescription}<br><hr><br>
    <h4><u>Available extras</u></h4><br><hr style="width:50%;text-align:center;">
    <ul class = "extras-center">
        <li><b>${rooms[this.whichOne].upsells[0].item}</b></li>
        <li><i>${rooms[this.whichOne].upsells[0].price}</i></li>
        <li><i>${rooms[this.whichOne].upsells[0].description}</i></li>
    </ul>
    <br><hr style="width:50%;text-align:center;">
    <ul class = "extras-center">
        <li><b>${rooms[this.whichOne].upsells[1].item}</b></li>
        <li><i>${rooms[this.whichOne].upsells[1].price}</i></li>
        <li><i>${rooms[this.whichOne].upsells[1].description}</i></li>
    </ul>
    
    `
    roomsDescription.innerHTML = descriptionHTML;
}

// The room categories setup starts here. These objects contain the room numbers, amenities, description of the rooms and the service it comes with,
// and the starting price.
// These information are then used to fill out the divs when the user selects a specific room category.

let rooms = [
    cosy = {
        numbers: ["1", " 2", " 3", " 4"],
        features: [
            'King bed',
            ' Walk-in shower',
            ' Minibar',
            ' Wallet safe',
            ' Wired and Wireless internet connection',
            ' In-Room Coffee and Tea'],
        description: `<h2><u>Cosy Room</u></h2><br>
        <p>Our Cosy Room is designed to cater to the needs of business people, offering comfort and convenience at an affordable price. Perfect for the modern professional, this room provides everything you need for a productive and restful stay.</p>
        
        <br><h3>Features</h4><br>
        <h5>Sleeping Arrangements</h5>
        <p>Relax and unwind in the comfortable King bed, ensuring you get a good night's sleep to prepare for your busy day ahead.</p>

        <h5>Modern Amenities</h5>
        <p>Start your day with a refreshing experience in the walk-in shower, equipped with premium toiletries.</p>
        <p>Keep your valuables secure in the in-room wallet safe, providing peace of mind during your stay.</p>
        <p>Stay connected with both wired and wireless internet connections, ideal for business travelers who need reliable internet access.</p>
        <p>Enjoy a selection of beverages with the in-room coffee and tea facilities, perfect for a quick refreshment anytime.</p>
        <p>The room also includes a minibar stocked with a variety of drinks and snacks for your convenience.</p>
        
        <br><br><h5>Pricing</h5>
        <p>Prices start from: £120</p>
        
        <br><h5>Room Numbers</h5>
        <p>Available rooms: 1, 2, 3, 4</p><br><br>

        <p>Our Cosy Room is ideal for business people, offering the perfect blend of comfort, convenience, and functionality for the modern professional.</p>`,
        priceFrom: '£120',
        upsells: [
            {
                item: '24/7 Room Service',
                price: '£10',
                description: "",
            },
            {
                item: 'Tech Kits',
                price: '£8',
                description: "Chargers, adapters, and HDMI cables for connecting devices to the room’s TV.",
            },
        ],
    },
    excellent = {
        numbers: [5, 6, 7, 8],
        features: ['Super King bed',
            'Walk-in shower',
            'Minibar',
            'Work desk',
            'Laptop safe',
            'Wired and Wireless internet connection',
            'Complimentary coffee and tea'],
        description: "<p><i>Experience unparalleled comfort and luxury in our Excellent Room, meticulously designed for the executive business traveler. This room category combines sophisticated amenities with elegant design to create an ideal environment for both relaxation and productivity.</i></p>" +

            "<h5>Room Features:</h5>" +

            "<b>Super King Bed:</b> Sink into the lavish super king bed, adorned with premium linens and a selection of pillows to ensure an exceptional sleep experience. The spacious bed provides ample room for stretching out and enjoying a restful night.\n\n" +

            "<b>Walk-In Shower:</b> Start your day invigorated or unwind in the evening with our modern walk-in shower. Featuring a luxurious rainfall showerhead and high-end toiletries, it offers a refreshing, spa-like escape.\n\n" +

            "\n\n<b>Amenities:</b>\n\n" +

            "<b>Minibar:</b> Enjoy a selection of fine beverages and snacks from the well-stocked minibar, perfect for unwinding after a busy day or hosting a casual meeting in your room.\n" +
            "<b>Work Desk:</b> Enhance your productivity with a dedicated work desk, equipped with an ergonomic chair and ample lighting. The thoughtfully designed space ensures a comfortable and efficient working environment.\n" +
            "<b>Laptop Safe:</b> Keep your valuables and important documents secure in the in-room laptop safe, providing peace of mind during your stay.\n" +
            "<b>Wired and Wireless Internet Connection:</b> Stay connected with both wired and wireless internet options, ensuring fast and reliable access for all your business and personal needs.\n\n" +
            "<b>Complimentary Coffee and Tea:</b> Enjoy complimentary coffee and tea in your room, featuring a variety of premium selections to help you start your day or recharge during your busy schedule.\n\n" +
            "<b>Additional Services:</b>\n\n" +

            "<b>Executive Lounge Access:</b> Benefit from exclusive access to the Executive Lounge, where you can enjoy a range of complimentary refreshments, private meeting spaces, and personalized services designed to cater to your professional needs.\n" +
            "<b>24/7 Room Service:</b> Take advantage of our 24/7 room service, offering a diverse menu of gourmet dishes and beverages delivered directly to your room at any hour.\n" +
            "<i>Designed with the executive business traveler in mind, the Excellent Room provides a seamless blend of comfort, convenience, and luxury. Whether you're here for business or pleasure, our top-tier amenities and services ensure a stay that exceeds your expectations.</i>",
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
        numbers: [9, 10, 11, 12],
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
        numbers: [12, 14, 15, 16],
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

let booking = [];

// This is the part that is calling for the "onLoad" function that makes loading up the page a bit more interesting.

//window.onload(onLoad());

// This is an Event Listener for hovering over, cursor leaving or user clicking on one of the room category pictures

let categories = document.getElementsByClassName('rooms-categories');
let roomsPictures = document.getElementById('rooms-picture');
let roomsDescription = document.getElementById('rooms-description');
categories.whichOne = 1;
for (let i = 0; i < categories.length; i++) {
    categories[i].whichOne = i;
    categories[i].addEventListener('mouseover', catMIn);
    categories[i].addEventListener('mouseleave', catMOut);
    categories[i].addEventListener('click', catClick);
}
