//castles
const castles = [
    {
        "name": "Sleeping Beauty Castle",
        "imageUrl": 
            "http://www.safeandsobertours.com/Destinations/images/SoCal-DisneyCastle.jpg",
        "size": 50000,
        "location": "United states",
        "price": 15000000,
        "amenitites": {
            "window": 20, 
            "room": 10, 
            "prince": 1
        },
        "description": "Sleeping Beauty Castle is a fairy tale castle at the center of Disneyland and Hong Kong Disneyland. It is based on the late-19th century Neuschwanstein Castle in Bavaria, Germany.",
        "historyLink": "https://en.wikipedia.org/wiki/Sleeping_Beauty_Castle",
        "category": ['disney']
    },
    {
        "imageURL": 
            "https://ladygeekgirl.files.wordpress.com/2013/06/howls_moving_castle_artwork_prop_10.jpg"
        ,
        "size": 25250,
        "location": "anywhere",
        "price": 5126000,
        "name": "Howl's Moving Castle",
        "amenities": {
            "windows": "varies",
            "turrets": "varies",
            "princes": 0,
            "unicorns": 0,
            "rooms": "varies"
        },
        "description": "Howl's castle is a tall, black building with four thin turrets. It seems to be made of blocks of coal (a suitable habitat for a fire demon) and is \"bespelled to hold together.\" It has four doors on the outside, although three are made inaccessible by an invisible wall.",
        "historyLink": "https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle#Howl.27s_moving_castle",
        "category": ['unicorns']
    }
]

    //users

const users = [
    {
        "firstName": "Aurore",
        "lastName": "Disney",
        "email": "aurore@disney.com",
        "username": "sleepyhead",
        "address": "1234 disneyway, anaheim, CA 91745",
        "password": "1234"
    },
    {
        "firstName": "Sophie",
        "lastName": "Howl",
        "email": "sophie.howl@gmail.com",
        "username": "sophie",
        "address": "5 Hanover Sq, New York City, NY, 10004",
        "password": "password"
    }
]


    //orders
const orders = [
    {
        "date": "1/1/2016",
        "shippingAddress": "1234 disneyway, anaheim, CA 91745"

    },
    {
        "date": "10/31/2016",
        "discountCode": "HALOWEEN",
        "discountRate": "10",
        "shippingAddress": "5 Hanover Sq., New York City, NY, 10004"
    }
]
    //reviews + memories
const reviews = [
    {
        "content": "Beautiful castle in the happiest place on Earth!",
        "star": 5,
        "date": "2015-12-01",
        "subject": "AWESOME!"
    },
    {
        "content": "Very great castle",
        "star": 1,
        "date": "2016-12-12",
        "subject": "Great castle"
    } 
]

module.exports = {castles,reviews,users}
//need to add orders and create orders model