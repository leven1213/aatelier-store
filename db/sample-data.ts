import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: "Kaye",
      email: "admin@example.com",
      password: hashSync("123456", 10), // Recommended. Salt length (random value added to pw for added security)
      role: "admin",
    },
    {
      name: "Brix",
      email: "user@example.com",
      password: hashSync("123456", 10), // Recommended. Salt length (random value added to pw for added security)
      role: "user",
    },
  ],
  products: [
    {
      name: "Distressed Dyed Denim Jacket",
      slug: "rebel-rebel-distressed-dyed-denim-jacket",
      category: "Men' Jackets",
      description: "Non-stretch denim jacket that gives off a grunge attitude",
      blurb: null,
      // An array – A product can have more than one image
      images: [
        "/images/sample-products/p1-1.jpg",
        "/images/sample-products/p1-2.jpg",
      ],
      price: 1939.99,
      brand: "Rebel Rebel",
      rating: 4.5,
      numReviews: 10,
      stock: 5,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Coral Oversized Stretch T-Shirt",
      slug: "aura-oversized-stretch-tshirt",
      category: "Men' T-Shirts",
      description:
        "Crafted from 100% cotton for premium comfort and breathability",
      blurb: null,
      images: [
        "/images/sample-products/p2-1.jpg",
        "/images/sample-products/p2-2.jpg",
      ],
      price: 239.9,
      brand: "Aura",
      rating: 4.2,
      numReviews: 8,
      stock: 10,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Green Sweat Pullover Hoodie",
      slug: "caxxual-sweat-pullover-hoodie",
      category: "Men' Sweatshirts & Hoodies",
      description: "Cotton hoodie with rib-knit cuffs",
      blurb: null,
      images: [
        "/images/sample-products/p3-1.jpg",
        "/images/sample-products/p3-2.jpg",
      ],
      price: 649.95,
      brand: "Caxxual",
      rating: 4.9,
      numReviews: 3,
      stock: 0,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Grey Sleeveless Hoodie",
      slug: "homme-sleeveless-hoodie",
      category: "Men' Sweatshirts & Hoodies",
      description: "Streamlined design with flexible stretch fabric",
      blurb: null,
      images: [
        "/images/sample-products/p4-1.jpg",
        "/images/sample-products/p4-2.jpg",
      ],
      price: 449.95,
      brand: "Homme",
      rating: 3.6,
      numReviews: 5,
      stock: 10,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Pink Turtleneck Blouse",
      slug: "la-jeune-pink-turtleneck-blouse",
      category: "Women' Blouses",
      description:
        "Casual chic in a semi-sheer viscose-blend long-sleeved blouse",
      blurb: null,
      images: [
        "/images/sample-products/p5-1.jpg",
        "/images/sample-products/p5-2.jpg",
      ],
      price: 739.99,
      brand: "La Jeune",
      rating: 4.7,
      numReviews: 18,
      stock: 6,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Off White Maxie Shirt Dress",
      slug: "villanelle-maxie-shirt-dress",
      category: "Women' Dresses",
      description:
        "Feel confident in a shirt-style long dress cinched with a waist belt",
      blurb: null,
      images: [
        "/images/sample-products/p6-1.jpg",
        "/images/sample-products/p6-2.jpg",
      ],
      price: 1710.99,
      brand: "Villanelle",
      rating: 4.6,
      numReviews: 12,
      stock: 8,
      isFeatured: false,
      banner: null,
    },
    {
      name: "Fitted Tailoured Blazer",
      slug: "stefani-fitted-tailoured-blazer",
      category: "Women' Jackets & Coats",
      description:
        "Powerful jet-black blazer with welt pockets during business hours",
      blurb:
        "Explore the Italian designer' collection of power suits, featuring sharp tailoring and timeless elegance",
      images: [
        "/images/sample-products/p7-1.jpg",
        "/images/sample-products/p7-2.jpg",
      ],
      price: 1299.99,
      brand: "Stefani",
      rating: 4.6,
      numReviews: 12,
      stock: 8,
      isFeatured: true,
      banner: "/images/stefani-banner.jpg",
    },
    {
      name: "Off Shoulder Strap Mini Dress",
      slug: "viva-la-diva-off-shoulder-strap-mini-dress",
      category: "Women' Dresses",
      description:
        "Feel like heaven in an off shoulder mini dress with draping panels",
      blurb: null,
      images: [
        "/images/sample-products/p8-1.jpg",
        "/images/sample-products/p8-2.jpg",
      ],
      price: 1594.99,
      brand: "Viva La Diva",
      rating: 4.6,
      numReviews: 12,
      stock: 8,
      isFeatured: false,
      banner: null,
    },
  ],
};

export default sampleData;
