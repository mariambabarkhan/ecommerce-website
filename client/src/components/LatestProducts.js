import React, { useState } from 'react';

const LatestProducts = () => {
    const [hovered, setHovered] = useState(null);

    const products = [
        {
            id: 1,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/serum2.jpg?v=1700379942&width=720',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01500.jpg?v=1700379954&width=720',
            name: 'Hyalaronic Acid',
            price: 'Rs.2,200.00 PKR'
        },
        {
            id: 2,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/Serum4.jpg?v=1700379826&width=720',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01311.jpg?v=1700379914&width=720',
            name: 'Brightening Serum - Vitamin C',
            price: 'Rs.2,200.00 PKR'
        },
        {
            id: 3,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/Serium1.jpg?v=1700380125&width=720',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01343.jpg?v=1700380125&width=720',
            name: 'Retinol',
            price: 'Rs.2,800.00 PKR'
        },
        {
            id: 4,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG_0214.jpg?v=1700379107&width=720',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01591.jpg?v=1700379107&width=720',
            name: 'Barrier Repair Moisturizer',
            price: 'Rs.1,200.00 PKR'
        },
        {
            id: 5,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG_0321-Enhanced-NR.jpg?v=1700379575&width=720',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01614.jpg?v=1700379575&width=720',
            name: 'Hydrating Cleanser',
            price: 'Rs.1,550.00 PKR'
        },
        {
            id: 6,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG_2457.jpg?v=1715335725&width=720',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC07337.jpg?v=1715335725&width=720',
            name: 'Tinted Sunscreen SPF 60',
            price: 'Rs.1,800.00 PKR'
        }
    ];

    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-heading text-center mb-12">Latest Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="bg-white w-90 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105"
                        onMouseEnter={() => setHovered(product.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <img
                            src={hovered === product.id ? product.hoverImage : product.image}
                            alt={product.name}
                            className="object-cover transition-transform duration-300"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-body font-semibold mb-2 group-hover:underline">{product.name}</h3>
                            <p className="text-md font-body text-gray-700">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestProducts;
