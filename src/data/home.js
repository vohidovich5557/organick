import cardBg1 from '../assets/cardBg1.png';
import cardBg2 from '../assets/cardBg2.png';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import product5 from '../assets/product5.png';
import product6 from '../assets/product6.png';
import product7 from '../assets/product7.png';
import product8 from '../assets/product8.png';
import star from '../assets/icon/star.svg';
import offer1 from '../assets/offer1.png';
import offer2 from '../assets/offer2.png';
import offer3 from '../assets/offer3.png';
import offer4 from '../assets/offer4.png';
import organic1 from '../assets/organic1.png';
import organic2 from '../assets/organic2.png';
import organic3 from '../assets/organic3.png';
import newCard1 from '../assets/newscard1.png';
import newCard2 from '../assets/newscard2.png';
import { nanoid } from 'nanoid';


export const navData = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },

    {
        id: 2,
        name: "About",
        path: "/about",
    },

    {
        id: 3,
        name: "Pages",
        path: "/pages",
    },

    {
        id: 4,
        name: "Shop",
        path: "/shop",
    },

    {
        id: 5,
        name: "Projects",
        path: "/projects",
    },

    {
        id: 6,
        name: "News",
        path: "/news",
    }
];


export const cardInfo = [
    {
        aos: "fade-right",
        title: "Natural!!",
        text: "Get Garden Fresh Fruits",
        id: 1,
        img: cardBg1,
    },

    {
        aos: "fade-left",
        title: "Offer!!",
        text: "Get 10% off on Vegetables",
        id: 2,
        img: cardBg2,
    },
];

export const shopData = {
    productData: [
        {
            aos: "fade-right",
            id: 12,
            img: product1,
            type: "Vegetable",
            title: "Calabrese Broccoli",
            oldPrice: "$20.00",
            newprice: "$13.00",
            star: star,
        },

        {
            aos: "fade-left",
            id: 13,
            img: product2,
            type: "Fresh",
            title: "Fresh Banana Fruites",
            oldPrice: "$20.00",
            newprice: "$14.00",
            star: star,
        },

        {
            aos: "fade-right",
            id: 14,
            img: product3,
            type: "Millets",
            title: "White Nuts",
            oldPrice: "$20.00",
            newprice: "$15.00",
            star: star,
        },

        {
            aos: "fade-left",
            id: 15,
            img: product4,
            type: "Vegetable",
            title: "Vegan Red Tomato",
            oldPrice: "$20.00",
            newprice: "$17.00",
            star: star,
        },

        {
            aos: "fade-right",
            id: 16,
            img: product5,
            type: "Health",
            title: "Mung Bean",
            oldPrice: "$20.00",
            newprice: "$11.00",
            star: star,
        },

        {
            aos: "fade-left",
            id: 17,
            img: product6,
            type: "Nuts",
            title: "Brown Hazelnut",
            oldPrice: "$20.00",
            newprice: "$12.00",
            star: star,
        },

        {
            aos: "fade-right",
            id: 18,
            img: product7,
            type: "Fresh",
            title: "Eggs",
            oldPrice: "$20.00",
            newprice: "$17.00",
            star: star,
        },

        {
            aos: "fade-left",
            id: 19,
            img: product8,
            type: "Fresh",
            title: "Zelco Suji Elaichi Rusk",
            oldPrice: "$20.00",
            newprice: "$15.00",
            star: star,
        },
    ],

    offerData: [

        {
            aos: "fade-right",
            id: 20,
            img: offer1,
            type: "Vegetable",
            title: "Mung Bean",
            oldPrice: "$20.00",
            newprice: "$11.00",
            star: star,
        },

        {
            aos: "fade-left",
            id: 21,
            img: offer2,
            type: "Vegetable",
            title: "Brown Hazelnut",
            oldPrice: "$20.00",
            newprice: "$12.00",
            star: star,
        },

        {
            aos: "fade-right",
            id: 22,
            img: offer3,
            type: "Vegetable",
            title: "Onion",
            oldPrice: "$20.00",
            newprice: "$17.00",
            star: star,
        },

        {
            aos: "fade-left",
            id: 23,
            img: offer4,
            type: "Vegetable",
            title: "Cabbage",
            oldPrice: "$20.00",
            newprice: "$17.00",
            star: star,
        },
    ],

}



export const circleData = [
    {
        precent: "100%",
        text: "Organic",
    },

    {
        precent: "285",
        text: "Active Product",
    },

    {
        precent: "350+",
        text: "Organic Orchads",
    },

    {
        precent: "25+",
        text: "Years of Farming",
    },
];





export const organicData = [
    {
        img: organic1,
        text: "Organic Juice",
    },

    {
        img: organic2,
        text: "Organic Food",
    },

    {
        img: organic3,
        text: "Nuts Cookis",
    },
];



export const newData = [
    {
        img: newCard1,
        title: "The Benefits of Vitamin D & How to Get It",
        name: "By Rachi Card",
        text2: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },

    {
        img: newCard2,
        title: "Our Favourite Summertime Tommeto",
        name: "By Rachi Card",
        text2: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    },
]