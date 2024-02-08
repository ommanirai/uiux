const initialData = [
    {
        "id": 1,
        'product_name': "iMac",
        "product_price": "NPR 230,000",
        "product_description": "Apple | iMac (24-Inch, M3 Chip) 8C CPU - 8C GPU, 8GB, 256GB",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/iMac%20M3/71BYUW+yeRL._AC_SX522_-400x400.jpg"
    },
    {
        "id": 2,
        'product_name': "MacBook Pro (14-Inch, M3 Pro, 2023)",
        "product_price": "NPR 230,000",
        "product_description": "Apple | MacBook Pro (14-Inch, M3, 2023) 11C CPU - 14C GPU, 18GB, 512GB",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/Mac%20M3/m3-16-2-400x400.jpg"
    },
    {
        "id": 3,
        'product_name': "AirPods Pro (2nd generation)",
        "product_price": "NPR 44,500",
        "product_description": "AirPods Pro (2nd generation) with MagSafe Case (USB‑C)",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/Earpods/MTJV3_AV3-400x400.jpeg"
    },
    {
        "id": 4,
        'product_name': "iPhone 15 Pro Max 256GB",
        "product_price": "NPR 230,000",
        "product_description": "iPhone 15 Pro Max 256GB",
        "product_image": "https://evostore.com.np/image/cache/catalog/iPhone%2015/apple-iphone-15-pro-4-400x400.jpg"
    },
    {
        "id": 5,
        'product_name': "iMac",
        "product_price": "NPR 230,000",
        "product_description": "iMac. Supercharged by M3. Iconic design iMac. The world’s best all-in-one desktop computer, now supercharged by the M3 chip. With a stunning 24-inch display in an iconic design and best-in-class camera, mics, and speakers. iMac is perfect for work and play.",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/iMac%20M3/71BYUW+yeRL._AC_SX522_-400x400.jpg"
    },
    {
        "id": 6,
        'product_name': "iMac",
        "product_price": "NPR 230,000",
        "product_description": "Apple | iMac (24-Inch, M3 Chip) 8C CPU - 8C GPU, 8GB, 256GB",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/iMac%20M3/71BYUW+yeRL._AC_SX522_-400x400.jpg"
    },
    {
        "id": 7,
        'product_name': "MacBook Pro (14-Inch, M3 Pro, 2023)",
        "product_price": "NPR 230,000",
        "product_description": "Apple | MacBook Pro (14-Inch, M3, 2023) 11C CPU - 14C GPU, 18GB, 512GB",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/Mac%20M3/m3-16-2-400x400.jpg"
    },
    {
        "id": 8,
        'product_name': "AirPods Pro (2nd generation)",
        "product_price": "NPR 44,500",
        "product_description": "AirPods Pro (2nd generation) with MagSafe Case (USB‑C)",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/Earpods/MTJV3_AV3-400x400.jpeg"
    },
    {
        "id": 9,
        'product_name': "iPhone 15 Pro Max 256GB",
        "product_price": "NPR 230,000",
        "product_description": "iPhone 15 Pro Max 256GB",
        "product_image": "https://evostore.com.np/image/cache/catalog/iPhone%2015/apple-iphone-15-pro-4-400x400.jpg"
    },
    {
        "id": 10,
        'product_name': "iMac",
        "product_price": "NPR 230,000",
        "product_description": "iMac. Supercharged by M3. Iconic design iMac. The world’s best all-in-one desktop computer, now supercharged by the M3 chip. With a stunning 24-inch display in an iconic design and best-in-class camera, mics, and speakers. iMac is perfect for work and play.",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/iMac%20M3/71BYUW+yeRL._AC_SX522_-400x400.jpg"
    },
    {
        "id": 11,
        'product_name': "iMac",
        "product_price": "NPR 230,000",
        "product_description": "Apple | iMac (24-Inch, M3 Chip) 8C CPU - 8C GPU, 8GB, 256GB",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/iMac%20M3/71BYUW+yeRL._AC_SX522_-400x400.jpg"
    },
    {
        "id": 12,
        'product_name': "MacBook Pro (14-Inch, M3 Pro, 2023)",
        "product_price": "NPR 230,000",
        "product_description": "Apple | MacBook Pro (14-Inch, M3, 2023) 11C CPU - 14C GPU, 18GB, 512GB",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/Mac%20M3/m3-16-2-400x400.jpg"
    },
    {
        "id": 13,
        'product_name': "AirPods Pro (2nd generation)",
        "product_price": "NPR 44,500",
        "product_description": "AirPods Pro (2nd generation) with MagSafe Case (USB‑C)",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/Earpods/MTJV3_AV3-400x400.jpeg"
    },
    {
        "id": 14,
        'product_name': "iPhone 15 Pro Max 256GB",
        "product_price": "NPR 230,000",
        "product_description": "iPhone 15 Pro Max 256GB",
        "product_image": "https://evostore.com.np/image/cache/catalog/iPhone%2015/apple-iphone-15-pro-4-400x400.jpg"
    },
    {
        "id": 15,
        'product_name': "iMac",
        "product_price": "NPR 230,000",
        "product_description": "iMac. Supercharged by M3. Iconic design iMac. The world’s best all-in-one desktop computer, now supercharged by the M3 chip. With a stunning 24-inch display in an iconic design and best-in-class camera, mics, and speakers. iMac is perfect for work and play.",
        "product_image": "https://evostore.com.np/image/cache/catalog/Apple/iMac%20M3/71BYUW+yeRL._AC_SX522_-400x400.jpg"
    }
]

const itemReducer = (state = initialData, action) => {
    return state;
}

export default itemReducer;