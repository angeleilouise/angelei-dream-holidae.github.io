function handleBooking() { // function for book now form 
    const name = document.getElementById('name'); // let name input user name 
    const email = document.getElementById('email'); // let email input user email 
    const bundle = document.querySelector('.bundle-select'); // let bundle input user's desired bundle 

    // Only proceed if fields are filled 
    if (!name.value.trim() || !email.value.trim() || bundle.value === 'choose') {
        alert('Please fill in all fields before booking.'); // this will pop up if user press Book Now button but DID NOT fill up the form 
        return;
    }

    document.getElementById('formSection').style.display = 'none'; // display class formSection 
    document.getElementById('successSection').style.display = 'flex'; // display class successSection 
    document.getElementById('successSection').style.flexDirection = 'column'; // flex direction of class successSection 
}

function resetForm() { // once form is reset and user wish to book again display and flex direction 
    document.getElementById('name').value = ''; // Name value is back to being empty 
    document.getElementById('email').value = ''; // Email value is back to being empty
    document.querySelector('.bundle-select').selectedIndex = 0; // Bundle value is back to being empty 
    document.getElementById('successSection').style.display = 'none'; // display class for successSection is none 
    document.getElementById('formSection').style.display = 'flex'; // display class for formSection is flex 
    document.getElementById('formSection').style.flexDirection = 'column'; // flex direction for formSection is set to column 
}

const holidaeBundle = [ // Assigns the holidaeBundle with the following values: 
    {
        title: "⛇☃︎ Winter Wonderland ☃︎⛇", // Interactive button 1 (title, desc, img)
        desc: "The Winter Wonderland holiday bundle begins with a sophisticated stay at the Chalet Fantasia hotel, situated in a sunny and very peaceful location and with an amazing view of the most iconic Matterhorn.",
        img: "/Holidae Website/media/fantasia.jpg"
    },
    {
        title: "↟↟𓂃 ོ ☼𓂃 Sustainable Transportation 𓂃 ོ𓂃↟ 𖠰", // Interactive button 2 (title, desc, img)
        desc: "Zermatt is a car-free village with free E-buses and shuttle trains to ensure comfortability while traveling around the location.",
        img: "/Holidae Website/media/train.webp"
    },
    {
        title: "𓌉 ◯ 𓇋 Excellent Dining 𓐐𓎩 ", // Interactive button 3 (title, desc, img)
        desc: "Experience traditional Valais cuisine all while encountering breathtaking views and a beautiful panorama of the Matternhorn.",
        img: "/Holidae Website/media/cuisine.jpg"
    },
    {
        title: "Unlimited Skiing ⛷", // Interactive button 4 (title, desc, img)
        desc: "Ski and glide as you witness a breathtaking mountain panoramas and discover the peaks in the Alps.",
        img: "/Holidae Website/media/ski.jpg"
    },
    {
        title: "⛰︎ ☀︎ Peak Hiking ☀︎ ❀", // Interactive button 5 (title, desc, img)
        desc: "Walk and explore along the Matternhorn Glacier Paradise and enjoy the views of Zermatt's nature.",
        img: "/Holidae Website/media/hike.jpg"
    }
];

let currentIndex = 0; // To start with interactive button 1 


const btn = document.querySelector('.ultimate-button'); // Selects the button element 
const titleEl = document.querySelector('.ultimate-title'); // Selects the title and changes it 
const descEl = document.querySelector('.ultimate-text'); // Selects the text and changes it 
const imgEl = document.querySelector('.ultimate-image img'); // Selects the image and changes it within its default size and display 

if (btn) {
    btn.addEventListener('click', () => { // The conditions will only occur if the button is pressed 
        titleEl.classList.remove('animate-text');
        descEl.classList.remove('animate-text');
        void titleEl.offsetWidth;

        currentIndex = (currentIndex + 1) % holidaeBundle.length; // Allows for the button to loop back from the start after hitting the interactive button 3
        titleEl.textContent = holidaeBundle[currentIndex].title; // Display title 
        descEl.textContent = holidaeBundle[currentIndex].desc; // Display the description 
        imgEl.src = holidaeBundle[currentIndex].img; // Display the image 

        titleEl.classList.add('animate-text'); // To activate the class animate-text from CSS (text)
        descEl.classList.add('animate-text'); // To activate the class animate-text from CSS (paragraph description)

        console.log("Clicked! Now showing index:", currentIndex); // To avoid the three items from being stuck, and for the button to work smoothly !!
    });
}