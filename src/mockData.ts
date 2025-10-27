import type {Product} from "./types/product.ts";
import Headphones from './assets/images/headphones.jpg'
import CoffeeMaker from './assets/images/coffee_maker.jpg'
import Book from './assets/images/book.jpg'
import Speaker from './assets/images/speaker.jpg'

export const productsData: Product[] = [
    {
        id: 1,
        name: "Wireless Noise-Cancelling Headphones",
        price: 199.99,
        shortDescription: "High-quality over-ear headphones with active noise cancellation.",
        longDescription:
            "Experience premium sound with deep bass and clear highs. These wireless headphones offer up to 30 hours of battery life, comfortable memory-foam ear cushions, and fast USB-C charging. Ideal for travel, work, and home.",
        thumbnail: Headphones,
        category: "Electronics",
        reviews: [
            { id: 1, author: "Emma", text: "Fantastic sound and comfortable to wear." },
            { id: 2, author: "Liam", text: "Good value for the price." }
        ]
    },
    {
        id: 2,
        name: "Modern Ceramic Coffee Maker",
        price: 89.5,
        shortDescription: "Stylish ceramic coffee maker with built-in grinder.",
        longDescription:
            "Brew fresh coffee with this sleek ceramic coffee maker. It features a conical burr grinder, adjustable brew strength, a timer for morning auto-start, and a stylish matte finish. Capacity: 1.2 L (about 10 cups).",
        thumbnail: CoffeeMaker,
        category: "Kitchen Appliances",
        reviews: [
            { id: 3, author: "Noah", text: "Makes my mornings so much easier." }
        ]
    },
    {
        id: 3,
        name: "Hardcover Bestseller: Learn React Today",
        price: 34.95,
        shortDescription: "Comprehensive guide to building React apps in 2025.",
        longDescription:
            "Whether you're new to React or want to refresh your skills, this book covers hooks, context, state management, performance optimisation, and modern best practices. Includes downloadable code examples.",
        thumbnail: Book,
        category: "Books",
        reviews: [
            { id: 4, author: "Olivia", text: "Very helpful and easy to follow." },
            { id: 5, author: "Ethan", text: "A must-read for any frontend dev." }
        ]
    },
    {
        id: 4,
        name: "Portable Bluetooth Speaker – Aqua Blue",
        price: 59.99,
        shortDescription: "Water-resistant outdoor Bluetooth speaker with 12h battery.",
        longDescription:
            "Take your music anywhere. This compact Bluetooth speaker delivers rich audio, 12 hours of continuous play, IP67 water and dust resistance, and comes in a vibrant aqua blue finish. Pair two for true stereo sound.",
        thumbnail: Speaker,
        category: "Electronics",
        reviews: []
    }
];

