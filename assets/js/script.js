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
    },
    family = {
        numbers: [9,10,11,12],
        features: ['Super King bed', '2x single beds', 'Walk-in shower', 'Seating area with board games', ''],
        description: '',
        priceFrom: '',
    },
    superior = {
        numbers: [12,14,15,16],
        features: ['Emperor bed', 'Roll-top bath', 'Double Walk-in shower', 'Balcony', 'Minibar'],
        description: '',
        priceFrom: '',
    }
]