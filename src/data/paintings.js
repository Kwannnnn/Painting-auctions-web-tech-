const paintings = [
    {
        id: 1,
        name: "The Scream",
        artist: "Edvard Munch",
        year_of_origin: 1893,
        current_price: 200,
        end_date: "2021-10-24",
        is_sold: true,
        list_of_bidders: [1],
        img_name: "TheScream"
    },
    {
        id: 2,
        name: "Starry Night",
        artist: "Vincent van Gogh",
        year_of_origin: 1889,
        current_price: 200,
        end_date: "2021-11-15",
        is_sold: false,
        list_of_bidders: [2],
        img_name: "StarryNight"
    },
    {
        id: 3,
        name: "The Kiss",
        artist: "Gustav Klimt",
        year_of_origin: 1909,
        current_price: 200,
        end_date: "2021-10-31",
        is_sold: false,
        list_of_bidders: [],
        img_name: "TheKiss"
    },
    {
        id: 4,
        name: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        year_of_origin: 1665,
        current_price: 200,
        end_date: "2021-12-01",
        is_sold: false,
        list_of_bidders: [],
        img_name: "GirlwithaPearlEarring"
    },
    {
        id: 5,
        name: "Mona Lisa",
        artist: "Leonardo da Vinci",
        year_of_origin: 1506,
        current_price: 200,
        end_date: "2022-01-28",
        is_sold: false,
        list_of_bidders: [],
        img_name: "MonaLisa"
    },
    {
        id: 6,
        name: "La Guernica",
        artist: "Picasso",
        year_of_origin: 1937,
        current_price: 800,
        end_date: "2022-10-15",
        is_sold: true,
        list_of_bidders: [4,2,3],
        img_name: "LaGuernica"
    },
    {
        id: 7,
        name: "The Creation of Adam",
        artist: "Michelangelo",
        year_of_origin: 1511,
        current_price: 100,
        end_date: "2022-01-15",
        is_sold: false,
        list_of_bidders: [],
        img_name: "TheCreationOfAdam"
    }
];

module.exports = paintings;