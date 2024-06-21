function onLoad() {

};

// This function will be executed when the user hovers over one of the divs that contains a picture of a room in that specific category

function catMIn(event) {
    this.style.fontSize = 'x-large';
    this.style.fontStyle = 'italic';
    document.getElementById('family').style.backgroundImage = 'url("./assets/hotel_icon.png")';
};

function catMOut(event) {
    this.style.fontSize = 'large';
    this.style.fontStyle = 'clear';
};

// The room categories setup starts here. These objects contain the room numbers, amenities, description of the rooms and the service it comes with,
// and the starting price.
// These information are then used to fill out the divs when the user selects a specific room category.

let rooms = [
    cosy = {
        numbers: [1,2,3,4],
        features: [
            'King bed',
            'Walk-in shower',
            'Minibar',
            'Wallet safe',
            'Wired and Wireless internet connection',
            'In-Room Coffee and Tea'],
        description: "Welcome to the Cosy Room, your perfect retreat after a busy day. Tailored specifically for the discerning business traveler, this room offers a harmonious blend of comfort and functionality.\n\n" +

"Room Features:\n\n" +

"King-Sized Bed: Unwind in the embrace of our plush king-sized bed, designed to provide the utmost comfort and ensure a restful night's sleep. Crisp, high-quality linens and a selection of pillows cater to your personal preference for a truly relaxing experience.\n\n" +

"Walk-In Shower: Refresh and rejuvenate in the modern walk-in shower, equipped with premium toiletries and soft, oversized towels. The spacious design and rainfall showerhead promise a spa-like experience to wash away the day's stresses.\n\n" +

"Amenities:\n\n" +

"Work Desk: A well-appointed workspace featuring a large desk, ergonomic chair, and ample lighting, ensuring productivity and comfort for your business needs.\n" +
"High-Speed Wi-Fi: Stay connected with complimentary high-speed Wi-Fi, allowing you to work seamlessly or unwind with your favorite streaming services.\n" +
"Flat-Screen TV: Enjoy a variety of local and international channels on the flat-screen TV, perfect for catching up on the news or unwinding with a movie.\n" +
"In-Room Coffee and Tea: Kickstart your mornings or recharge during the day with the convenience of an in-room coffee and tea station, stocked with a selection of premium beverages.\n" +
"Secure Safe: Keep your valuables secure with the in-room safe, providing peace of mind throughout your stay.\n" +
"Iron and Ironing Board: Ensure you always look your best with the provided iron and ironing board, perfect for quick touch-ups before important meetings.\n" +
"Designed with the business traveler in mind, the Cosy Room offers a serene environment where you can relax, recharge, and remain productive. Enjoy the perfect balance of comfort and convenience, making your stay both pleasant and efficient.",
        priceFrom: '£120',
        upsells: [
            {
                item: '24/7 Room Service',
                price: '£10',
                description: "",
            },
            {
                item: 'Tech Kits:',
                price: '£8',
                description: "Chargers, adapters, and HDMI cables for connecting devices to the room’s TV.",
            },
        ],
    },
    excellent = {
        numbers: [5,6,7,8],
        features: ['Super King bed',
            'Walk-in shower',
            'Minibar',
            'Work desk',
            'Laptop safe',
            'Wired and Wireless internet connection',
            'Complimentary coffee and tea'],
        description: "<i>Experience unparalleled comfort and luxury in our Excellent Room, meticulously designed for the executive business traveler. This room category combines sophisticated amenities with elegant design to create an ideal environment for both relaxation and productivity.</i>\n\n" +

"<b>Room Features:</b>\n\n" +

"<b>Super King Bed:</b> Sink into the lavish super king bed, adorned with premium linens and a selection of pillows to ensure an exceptional sleep experience. The spacious bed provides ample room for stretching out and enjoying a restful night.\n\n" +

"<b>Walk-In Shower:</b> Start your day invigorated or unwind in the evening with our modern walk-in shower. Featuring a luxurious rainfall showerhead and high-end toiletries, it offers a refreshing, spa-like escape.\n\n" +

"<b>Amenities:</b>\n\n" +

"<b>Minibar:</b> Enjoy a selection of fine beverages and snacks from the well-stocked minibar, perfect for unwinding after a busy day or hosting a casual meeting in your room.\n" +
"<b>Work Desk:</b> Enhance your productivity with a dedicated work desk, equipped with an ergonomic chair and ample lighting. The thoughtfully designed space ensures a comfortable and efficient working environment.\n" +
"<b>Laptop Safe:</b> Keep your valuables and important documents secure in the in-room laptop safe, providing peace of mind during your stay.\n" +
"<b>Wired and Wireless Internet Connection:</b> Stay connected with both wired and wireless internet options, ensuring fast and reliable access for all your business and personal needs.\n\n" +
"<b>Complimentary Coffee and Tea:</b> Enjoy complimentary coffee and tea in your room, featuring a variety of premium selections to help you start your day or recharge during your busy schedule.\n\n" +
"<b>Additional Services:</b>\n\n" +

"<b>Executive Lounge Access:</b> Benefit from exclusive access to the Executive Lounge, where you can enjoy a range of complimentary refreshments, private meeting spaces, and personalized services designed to cater to your professional needs.\n" +
"<b>24/7 Room Service:</b> Take advantage of our 24/7 room service, offering a diverse menu of gourmet dishes and beverages delivered directly to your room at any hour.\n"+
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
        numbers: [9,10,11,12],
        features: ['Super King bed',
            '2x single beds',
            'Walk-in shower',
            'Seating area with board games'],
        description: `Welcome to our spacious Family Room, the ideal haven for families seeking comfort, privacy, and fun. This thoughtfully designed suite offers everything you need for a memorable family stay.

Sleeping Arrangements
Enjoy a restful night's sleep in the luxurious Super King bed, located in the main room, ensuring parents have a tranquil retreat. Adjacent to this is a separate, connected room featuring two comfortable single beds, perfect for children. A door between the rooms allows for privacy when needed, giving everyone their own space to unwind.

Modern Amenities
Begin your day with a refreshing experience in our modern walk-in shower. The bathroom is equipped with complimentary toiletries and soft, fluffy towels, ensuring your stay is as convenient and comfortable as possible.

Family-Friendly Features
Spend quality time together in the inviting seating area, designed with families in mind. Engage in friendly competition or collaborative fun with our selection of board games, perfect for creating cherished memories during your stay.

Our Family Room offers a blend of comfort, privacy, and entertainment, making it the ideal choice for families looking to enjoy a home away from home. Book your stay today and create lasting memories with your loved ones!`,
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
        numbers: [12,14,15,16],
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
                price: '180',
                description: 'Romantic in-room dining with a personalized menu curated by the hotel’s chef.'
            },
        ],
    }
]

// Next, an array is getting declared, which will be used to store all the information about the experience the user is choosing while going through this page

let booking = [];

// This is the part that is calling for the "onLoad" function that makes loading up the page a bit more interesting.

//window.onload(onLoad());

// This is an Event Listener for hovering over

let categories = document.getElementsByClassName('categories');

for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener('mouseover', catMIn);
    categories[i].addEventListener('mouseleave', catMOut);
}