

let Hotels = [
    {   "id": 1,
        "HotelName": "Alisa Hotel",
        "Location": "East Legon",
        "website": "www.alisa.com",
        "image": "../images/hotel.jpg",
        "about": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod temporincididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat.`
    },

    {   "id": 2,
        "HotelName": "Marriot Hotel",
        "Location": "Airport",
        "website": "www.alisa.com",
        "image": "../images/hotel2.jpg",
        "about": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod temporincididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat.`
    },

    {   "id": 3,
        "HotelName": "Accra City Hotel",
        "Location": "Accra Central",
        "website": "www.alisa.com",
        "image": "../images/hotel3.jpg",
        "about": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod temporincididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat.`
    },

    {   "id": 4,
        "HotelName": "Kempinski Hotel",
        "Location": "Accra",
        "website": "www.alisa.com",
        "image": "../images/hotel4.jpg",
        "about": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod temporincididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat.`
    },

    {   "id": 5,
        "HotelName": "Alisa Hotel",
        "Location": "East Legon",
        "website": "www.alisa.com",
        "image": "../images/hotel.jpg",
        "about": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod temporincididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat.`
    },

    {   "id": 6,
        "HotelName": "Luxury West Hotel",
        "Location": "Adenta",
        "website": "www.alisa.com",
        "image": "../images/hotel.jpg",
        "about": `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod temporincididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
         nisi ut aliquip ex ea commodo consequat.`
    },

    
    

]

export function HotelData (){
    return Hotels
}


//geting one beach
//find one hotel where hotel id given is the same as searched for
export function getHotel (id){
    return Hotels.find((hotel) => hotel.id === id)
}