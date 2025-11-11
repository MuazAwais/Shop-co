


interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviews: number;
}

interface ProductData extends Product {
  sizes: string[];
  detail: string;
  images: string[];
}

// Men's Clothing Data - 50 Products
export const menClothingData: ProductData[] = [
    {
      id: 55,
      name: "Vertical Striped Shirt",
      price: 212,
      originalPrice: 232,
      rating: 5.0,
      reviews: 5,
      discount: "20%",
      sizes: ["Small", "Medium", "Large", "X-Large"],
      detail: "A sleek vertical striped shirt with a tailored fit, perfect for both casual and formal looks.",
      images: [
        "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761565014/image_7_pbipl6.png",
        "https://media.istockphoto.com/id/131936811/photo/striped-shirts.jpg?s=2048x2048&w=is&k=20&c=ccGTdp8TVnTnKqcLxJYw8jQfWBupJgyDmViDYEaVPt0=",
        "https://media.istockphoto.com/id/1837704661/photo/folded-shirt-isolated.jpg?s=2048x2048&w=is&k=20&c=rcGCA8l2vIVCZBDt9f3ngZUbWbWS2lyyMlhgAarfveo="
      ]
    },
    {
      id: 56,
      name: "Courage Graphic T-shirt",
      price: 145,
      rating: 4.0,
      reviews: 5,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      detail: "Soft cotton T-shirt featuring a bold 'Courage' graphic design with a relaxed fit.",
      images: [
        "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761565014/image_8_ivdbi7.png",
        "https://images.unsplash.com/photo-1758214873619-32d1674ffd3b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
        "https://images.unsplash.com/photo-1643023342069-90d203d3533c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687"
      ]
    },
    {
      id: 57,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      rating: 3.0,
      reviews: 5,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      detail: "Casual and comfortable loose-fit Bermuda shorts made from breathable cotton fabric.",
      images: [
        "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761565014/image_9_dvp373.png",
        "https://images.unsplash.com/photo-1740512922260-543b1b83c986?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=764",
        "https://images.unsplash.com/photo-1654432009411-280e499767e7?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687"
      ]
    },
    {
      id: 58,
      name: "Faded Skinny Jeans",
      price: 210,
      rating: 4.5,
      reviews: 5,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      detail: "Trendy faded skinny jeans with stretch fabric for ultimate comfort and a sleek look.",
      images: [
        "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761565013/image_10_xsl8an.png",
        "https://images.unsplash.com/photo-1605192554106-d549b1b975cd?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
        "https://images.unsplash.com/photo-1596246247700-bda63e6c44d8?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500"
      ]
    },
    {
      id: 51,
      name: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5,
      reviews: 5,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      detail: "Casual T-shirt featuring trendy tape details along the shoulders for a sporty look.",
      images: [
        "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761554278/image_7_dzfbrn.png",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
        "https://images.unsplash.com/photo-1678872844677-d650b788709b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=765"
      ]
    },
    {
      id: 52,
      name: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      rating: 3.4,
      reviews: 5,
      discount: "-20%",
      sizes: ["Small", "Medium", "Large", "X-Large"],
      detail: "Classic skinny fit jeans designed with stretch denim for all-day comfort and style.",
      images: [
        "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761554278/image_8_dyj3zc.png",
        "https://images.unsplash.com/photo-1754555009601-498e9873197e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
        "https://images.unsplash.com/photo-1634564235572-cd6f37694266?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500"
      ]
    },
    {
      id: 53,
      name: "Checkered Shirt",
      price: 180,
      rating: 2.5,
      reviews: 5,
      sizes: ["Small", "Medium", "Large", "X-Large"],
      detail: "Classic checkered shirt with a relaxed fit — ideal for everyday wear.",
      images: [
        "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761554278/image_9_pyj5db.png",
        "https://images.unsplash.com/photo-1641380848962-807139c82b92?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
        "https://images.unsplash.com/photo-1558560727-f55d4a76b32d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500"
      ]
    },
    {
      id: 54,
      name: "Sleeve Striped T-shirt",
      price: 130,
      originalPrice: 160,
      rating: 4,
      reviews: 5,
      discount: "-30%",
      sizes: ["Small", "Medium", "Large", "X-Large"],
      detail: "Casual striped T-shirt with contrast sleeve details for a modern streetwear style.",
      images: [
        "https://res.cloudinary.com/dv8dtipj1/image/upload/v1761554278/image_10_cnhscn.png",
        "https://images.unsplash.com/photo-1602653018235-6fdfc8a4ae8d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
        "https://images.unsplash.com/photo-1760287363713-a864ca9b1b1f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500"
      ]
    },
    
      {
        id: 1,
        name: "Classic Denim Jacket",
        rating: 4.5,
        reviews: 5,
        price: 59.99,
        originalPrice: 79.99,
        discount: "-25%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800",
          "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?w=800"
        ],
        detail: "Premium quality denim jacket with a classic fit. Features button closure, chest pockets, and durable construction. Perfect for casual everyday wear.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 2,
        name: "Slim Fit Chino Pants",
        rating: 4.7,
        reviews: 5,
        price: 44.99,
        originalPrice: 59.99,
        discount: "-25%",
        images: [
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800",
          "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800"
        ],
        detail: "Versatile slim fit chino pants made from stretch cotton blend. Features belt loops, side and back pockets. Ideal for both casual and semi-formal occasions.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 3,
        name: "Cotton Oxford Shirt",
        rating: 4.8,
        reviews: 5,
        price: 39.99,
        originalPrice: 49.99,
        discount: "-20%",
        images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
          "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800"
        ],
        detail: "Classic Oxford button-down shirt crafted from 100% premium cotton. Features a button-down collar, chest pocket, and comfortable regular fit.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 4,
        name: "Leather Bomber Jacket",
        rating: 4.9,
        reviews: 5,
        price: 149.99,
        originalPrice: 249.99,
        discount: "-40%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800"
        ],
        detail: "Genuine leather bomber jacket with ribbed cuffs and hem. Features front zip closure, side pockets, and soft interior lining. A timeless wardrobe essential.",
        sizes: ["Medium", "Large", "X-Large"]
      },
      {
        id: 5,
        name: "Graphic Print T-Shirt",
        rating: 4.3,
        reviews: 5,
        price: 19.99,
        originalPrice: 29.99,
        discount: "-33%",
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800"
        ],
        detail: "Comfortable cotton t-shirt with modern graphic print. Features crew neck, short sleeves, and regular fit. Perfect for casual everyday style.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 6,
        name: "Wool Blend Sweater",
        rating: 4.6,
        reviews: 5,
        price: 54.99,
        originalPrice: 89.99,
        discount: "-39%",
        images: [
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
          "https://images.unsplash.com/photo-1598032895397-b9c336fc6a74?w=800"
        ],
        detail: "Cozy wool blend sweater with ribbed trim. Features crew neck, long sleeves, and comfortable regular fit. Ideal for layering in cooler weather.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 7,
        name: "Athletic Jogger Pants",
        rating: 4.4,
        reviews: 5,
        price: 34.99,
        originalPrice: 49.99,
        discount: "-30%",
        images: [
          "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800",
          "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800",
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800"
        ],
        detail: "Modern jogger pants with elastic waistband and cuffs. Features side pockets, drawstring closure, and moisture-wicking fabric. Perfect for workouts or casual wear.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 8,
        name: "Formal Blazer",
        rating: 4.7,
        reviews: 5,
        price: 119.99,
        originalPrice: 199.99,
        discount: "-40%",
        images: [
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
          "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
          "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800"
        ],
        detail: "Sophisticated formal blazer with notch lapels. Features button closure, chest and side pockets, and tailored fit. Essential for professional and formal occasions.",
        sizes: ["Medium", "Large", "X-Large"]
      },
      {
        id: 9,
        name: "Casual Henley Shirt",
        rating: 4.5,
        reviews: 5,
        price: 29.99,
        originalPrice: 39.99,
        discount: "-25%",
        images: [
          "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800",
          "https://images.unsplash.com/photo-1598032895397-b9c336fc6a74?w=800",
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800"
        ],
        detail: "Comfortable henley shirt with button placket neckline. Made from soft cotton blend with long sleeves and regular fit. Great for layering or wearing solo.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 10,
        name: "Cargo Shorts",
        rating: 4.2,
        reviews: 5,
        price: 32.99,
        originalPrice: 44.99,
        discount: "-27%",
        images: [
          "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800",
          "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800",
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800"
        ],
        detail: "Practical cargo shorts with multiple pockets. Features zip fly with button closure, belt loops, and relaxed fit. Perfect for outdoor activities and casual summer wear.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 11,
        name: "V-Neck Pullover",
        rating: 4.6,
        reviews: 5,
        price: 42.99,
        originalPrice: 59.99,
        discount: "-28%",
        images: [
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
          "https://images.unsplash.com/photo-1598032895397-b9c336fc6a74?w=800",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800"
        ],
        detail: "Elegant V-neck pullover in soft cotton blend. Perfect for layering over shirts or wearing casually. Features ribbed cuffs and hem.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 12,
        name: "Flannel Plaid Shirt",
        rating: 4.4,
        reviews: 5,
        price: 36.99,
        originalPrice: 49.99,
        discount: "-26%",
        images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
          "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800"
        ],
        detail: "Classic flannel shirt with timeless plaid pattern. Made from soft brushed cotton. Features button front closure and chest pockets.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 13,
        name: "Track Jacket",
        rating: 4.3,
        reviews: 5,
        price: 49.99,
        originalPrice: 69.99,
        discount: "-29%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
          "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800"
        ],
        detail: "Sporty track jacket with contrasting stripes. Features full zip closure, side pockets, and elastic cuffs. Great for athletic or casual wear.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 14,
        name: "Linen Beach Shirt",
        rating: 4.7,
        reviews: 5,
        price: 44.99,
        originalPrice: 64.99,
        discount: "-31%",
        images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
          "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800",
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800"
        ],
        detail: "Lightweight linen shirt perfect for summer. Breathable fabric with relaxed fit. Features button front and short sleeves.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 15,
        name: "Hooded Sweatshirt",
        rating: 4.8,
        reviews: 5,
        price: 39.99,
        originalPrice: 54.99,
        discount: "-27%",
        images: [
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
          "https://images.unsplash.com/photo-1598032895397-b9c336fc6a74?w=800"
        ],
        detail: "Comfortable hooded sweatshirt with kangaroo pocket. Made from soft fleece material. Perfect for lounging or casual outings.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 16,
        name: "Dress Pants",
        rating: 4.5,
        reviews: 5,
        price: 54.99,
        originalPrice: 79.99,
        discount: "-31%",
        images: [
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800",
          "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800"
        ],
        detail: "Classic dress pants with tailored fit. Features flat front, belt loops, and side pockets. Essential for business and formal occasions.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 17,
        name: "Polo Shirt",
        rating: 4.6,
        reviews: 5,
        price: 32.99,
        originalPrice: 44.99,
        discount: "-27%",
        images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
          "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800",
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800"
        ],
        detail: "Classic polo shirt in premium piqué cotton. Features button placket, collar, and short sleeves. Versatile for casual or smart-casual wear.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 18,
        name: "Puffer Vest",
        rating: 4.4,
        reviews: 5,
        price: 64.99,
        originalPrice: 89.99,
        discount: "-28%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
          "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800"
        ],
        detail: "Insulated puffer vest with quilted design. Features zip closure and side pockets. Perfect for layering in transitional weather.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 19,
        name: "Corduroy Pants",
        rating: 4.5,
        reviews: 5,
        price: 49.99,
        originalPrice: 69.99,
        discount: "-29%",
        images: [
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
          "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800",
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800"
        ],
        detail: "Stylish corduroy pants with classic ribbed texture. Features straight leg fit, belt loops, and five-pocket styling.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 20,
        name: "Striped Long Sleeve Tee",
        rating: 4.3,
        reviews: 5,
        price: 24.99,
        originalPrice: 34.99,
        discount: "-29%",
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800"
        ],
        detail: "Classic striped long sleeve t-shirt in soft cotton. Features crew neck and comfortable fit. A wardrobe staple for casual wear.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 21,
        name: "Windbreaker Jacket",
        rating: 4.7,
        reviews: 5,
        price: 54.99,
        originalPrice: 74.99,
        discount: "-27%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800"
        ],
        detail: "Lightweight windbreaker with water-resistant coating. Features hood, zip closure, and adjustable hem. Perfect for outdoor activities.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 22,
        name: "Thermal Underwear Set",
        rating: 4.6,
        reviews: 5,
        price: 34.99,
        originalPrice: 49.99,
        discount: "-30%",
        images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
          "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800",
          "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800"
        ],
        detail: "Thermal underwear set for cold weather. Made from heat-retaining fabric with moisture-wicking properties. Includes top and bottom.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 23,
        name: "Quilted Jacket",
        rating: 4.8,
        reviews: 5,
        price: 89.99,
        originalPrice: 129.99,
        discount: "-31%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
          "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800"
        ],
        detail: "Stylish quilted jacket with diamond pattern. Features snap button closure, side pockets, and warm lining. Ideal for autumn and spring.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 24,
        name: "Swim Shorts",
        rating: 4.2,
        reviews: 5,
        price: 27.99,
        originalPrice: 39.99,
        discount: "-30%",
        images: [
          "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800",
          "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800",
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800"
        ],
        detail: "Quick-dry swim shorts with mesh lining. Features elastic waistband with drawstring and side pockets. Perfect for beach and pool.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 25,
        name: "Turtleneck Sweater",
        rating: 4.7,
        reviews: 5,
        price: 59.99,
        originalPrice: 84.99,
        discount: "-29%",
        images: [
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
          "https://images.unsplash.com/photo-1598032895397-b9c336fc6a74?w=800",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800"
        ],
        detail: "Classic turtleneck sweater in fine knit. Features high collar, long sleeves, and slim fit. Perfect for layering in winter.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 26,
        name: "Canvas Sneakers",
        rating: 4.5,
        reviews: 5,
        price: 44.99,
        originalPrice: 59.99,
        discount: "-25%",
        images: [
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800",
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800"
        ],
        detail: "Classic canvas sneakers with rubber sole. Features lace-up design and cushioned insole. Comfortable for everyday wear.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 27,
        name: "Zip-Up Hoodie",
        rating: 4.6,
        reviews: 5,
        price: 44.99,
        originalPrice: 64.99,
        discount: "-31%",
        images: [
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
          "https://images.unsplash.com/photo-1598032895397-b9c336fc6a74?w=800"
        ],
        detail: "Full zip hoodie with soft fleece lining. Features drawstring hood, side pockets, and ribbed cuffs. Perfect for casual comfort.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 28,
        name: "Peacoat",
        rating: 4.9,
        reviews: 5,
        price: 129.99,
        originalPrice: 189.99,
        discount: "-32%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
        ],
        detail: "Classic wool blend peacoat with double-breasted design. Features wide lapels, side pockets, and sophisticated tailoring.",
        sizes: ["Medium", "Large", "X-Large"]
      },
      {
        id: 29,
        name: "Running Shorts",
        rating: 4.4,
        reviews: 5,
        price: 29.99,
        originalPrice: 39.99,
        discount: "-25%",
        images: [
          "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800",
          "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800",
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800"
        ],
        detail: "Lightweight running shorts with built-in brief. Features moisture-wicking fabric, elastic waistband, and reflective details.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 30,
        name: "Button-Down Cardigan",
        rating: 4.5,
        reviews: 5,
        price: 49.99,
        originalPrice: 69.99,
        discount: "-29%",
        images: [
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
          "https://images.unsplash.com/photo-1598032895397-b9c336fc6a74?w=800"
        ],
        detail: "Comfortable button-down cardigan in soft knit. Features V-neck, button closure, and front pockets. Great for layering.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 31,
        name: "Work Shirt",
        rating: 4.3,
        reviews: 5,
        price: 34.99,
        originalPrice: 49.99,
        discount: "-30%",
        images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
          "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800",
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800"
        ],
        detail: "Durable work shirt with button-up front. Features chest pockets and reinforced stitching. Made from sturdy cotton twill.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 32,
        name: "Compression Leggings",
        rating: 4.7,
        reviews: 5,
        price: 39.99,
        originalPrice: 54.99,
        discount: "-27%",
        images: [
          "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800",
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800",
          "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800"
        ],
        detail: "Performance compression leggings with moisture-wicking technology. Features elastic waistband and stretchy fabric for maximum movement.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 33,
        name: "Utility Jacket",
        rating: 4.6,
        reviews: 5,
        price: 79.99,
        originalPrice: 109.99,
        discount: "-27%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800"
        ],
        detail: "Versatile utility jacket with multiple pockets. Features button front, adjustable waist, and durable cotton canvas construction.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 34,
        name: "Muscle Fit Tank",
        rating: 4.2,
        reviews: 5,
        price: 17.99,
        originalPrice: 24.99,
        discount: "-28%",
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
          "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800"
        ],
        detail: "Athletic muscle fit tank top in breathable fabric. Features scoop neck and armhole design. Perfect for gym or casual summer wear.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 35,
        name: "Trench Coat",
        rating: 4.8,
        reviews: 5,
        price: 139.99,
        originalPrice: 199.99,
        discount: "-30%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800"
        ],
        detail: "Classic trench coat with water-resistant finish. Features double-breasted design, belt, and sophisticated styling. A timeless essential.",
        sizes: ["Medium", "Large", "X-Large"]
      },
      {
        id: 36,
        name: "Athletic Shorts",
        rating: 4.5,
        reviews: 5,
        price: 24.99,
        originalPrice: 34.99,
        discount: "-29%",
        images: [
          "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800",
          "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800",
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800"
        ],
        detail: "Versatile athletic shorts with mesh panels. Features elastic waistband with drawstring and side pockets. Great for sports and casual wear.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 37,
        name: "Crewneck Sweatshirt",
        rating: 4.6,
        reviews: 5,
        price: 37.99,
        originalPrice: 52.99,
        discount: "-28%",
        images: [
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800",
          "https://images.unsplash.com/photo-1598032895397-b9c336fc6a74?w=800"
        ],
        detail: "Classic crewneck sweatshirt in soft cotton blend. Features ribbed collar, cuffs, and hem. Essential for casual comfort and layering.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 38,
        name: "Dress Shirt",
        rating: 4.7,
        reviews: 5,
        price: 42.99,
        originalPrice: 59.99,
        discount: "-28%",
        images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
          "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800"
        ],
        detail: "Formal dress shirt with spread collar. Made from premium cotton with wrinkle-resistant finish. Perfect for business and formal events.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 39,
        name: "Basketball Shorts",
        rating: 4.4,
        reviews: 5,
        price: 32.99,
        originalPrice: 44.99,
        discount: "-27%",
        images: [
          "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800",
          "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800",
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800"
        ],
        detail: "Mesh basketball shorts with breathable fabric. Features elastic waistband with drawstring and deep side pockets. Great for sports.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 40,
        name: "Parka Coat",
        rating: 4.9,
        reviews: 5,
        price: 159.99,
        originalPrice: 229.99,
        discount: "-30%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
          "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800"
        ],
        detail: "Heavy-duty winter parka with insulated lining. Features fur-trimmed hood, multiple pockets, and water-resistant shell. Maximum warmth.",
        sizes: ["Medium", "Large", "X-Large"]
      },
      {
        id: 41,
        name: "Slim Fit Jeans",
        rating: 4.6,
        reviews: 5,
        price: 52.99,
        originalPrice: 74.99,
        discount: "-29%",
        images: [
          "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800",
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800",
          "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800"
        ],
        detail: "Classic slim fit jeans in premium denim. Features five-pocket styling, zip fly, and comfortable stretch. A wardrobe essential.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 42,
        name: "Baseball Cap",
        rating: 4.3,
        reviews: 5,
        price: 19.99,
        originalPrice: 27.99,
        discount: "-29%",
        images: [
          "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800",
          "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800",
          "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800"
        ],
        detail: "Classic baseball cap with adjustable strap. Features embroidered logo and curved brim. Perfect for casual wear and sun protection.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 43,
        name: "Mock Neck Shirt",
        rating: 4.5,
        reviews: 5,
        price: 36.99,
        originalPrice: 49.99,
        discount: "-26%",
        images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
          "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800",
          "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=800"
        ],
        detail: "Modern mock neck shirt in soft cotton blend. Features long sleeves and slim fit. Perfect for layering or wearing alone.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 44,
        name: "Rain Jacket",
        rating: 4.7,
        reviews: 5,
        price: 69.99,
        originalPrice: 99.99,
        discount: "-30%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800"
        ],
        detail: "Waterproof rain jacket with sealed seams. Features adjustable hood, zip pockets, and breathable fabric. Essential for wet weather.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 45,
        name: "Terry Cloth Robe",
        rating: 4.4,
        reviews: 5,
        price: 44.99,
        originalPrice: 64.99,
        discount: "-31%",
        images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800"
        ],
        detail: "Plush terry cloth robe in soft absorbent fabric. Features belt tie, pockets, and shawl collar. Perfect for lounging and after-shower comfort.",
        sizes: ["Medium", "Large", "X-Large"]
      },
      {
        id: 46,
        name: "Tech Fleece Pants",
        rating: 4.8,
        reviews: 5,
        price: 64.99,
        originalPrice: 89.99,
        discount: "-28%",
        images: [
          "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800",
          "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800",
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800"
        ],
        detail: "Modern tech fleece pants with tapered fit. Features zip pockets, elastic waistband, and lightweight warmth. Perfect for active lifestyle.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 47,
        name: "Suede Jacket",
        rating: 4.6,
        reviews: 5,
        price: 124.99,
        originalPrice: 179.99,
        discount: "-31%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
          "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800"
        ],
        detail: "Premium suede jacket with soft texture. Features zip closure, side pockets, and classic styling. A sophisticated outerwear choice.",
        sizes: ["Medium", "Large", "X-Large"]
      },
      {
        id: 48,
        name: "Chambray Shirt",
        rating: 4.5,
        reviews: 5,
        price: 38.99,
        originalPrice: 54.99,
        discount: "-29%",
        images: [
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800",
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800",
          "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800"
        ],
        detail: "Lightweight chambray shirt with button-down collar. Features chest pocket and relaxed fit. Versatile for casual and smart-casual wear.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 49,
        name: "Sweat Pants",
        rating: 4.4,
        reviews: 5,
        price: 39.99,
        originalPrice: 54.99,
        discount: "-27%",
        images: [
          "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=800",
          "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800",
          "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800"
        ],
        detail: "Comfortable sweat pants with soft fleece lining. Features elastic waistband with drawstring and side pockets. Perfect for lounging.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      },
      {
        id: 50,
        name: "Down Vest",
        rating: 4.7,
        reviews: 5,
        price: 74.99,
        originalPrice: 104.99,
        discount: "-29%",
        images: [
          "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800",
          "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
          "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800"
        ],
        detail: "Lightweight down vest with excellent insulation. Features zip closure, stand collar, and packable design. Great for layering in cold weather.",
        sizes: ["Small", "Medium", "Large", "X-Large"]
      }
    ];
  
    export const getProductById = (id: number) => {
      return menClothingData.find(product => product.id === id);
    };