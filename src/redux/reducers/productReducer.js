const initialState = [
    {
        name: 'Áo thun Dinosaur 01',
        price: 189,
        // image01: product_01_image_01,
        // image02: product_01_image_02,
        dresstag: 'ao-thun',
        colors: ['Trắng', 'Đỏ', 'Cam'],
        tag: 'ao-thun-dinosaur-01',
        size: ['s', 'm', 'l', 'xl'],
        description:
            '- Áo thun Dinosaur 01 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo thun Dinosaur 01 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.',
    },
    {
        name: 'Áo thun Dinosaur 02',
        price: 189,
        // image01: product_02_image_01,
        // image02: product_02_image_02,
        dresstag: 'ao-thun',
        colors: ['Trắng', 'Đen', 'Cam'],
        tag: 'ao-thun-dinosaur-02',
        size: ['s', 'm', 'xl'],
        description:
            '- Áo thun Dinosaur 02 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo thun Dinosaur 02 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.',
    },
    {
        name: 'Áo thun Dinosaur 03',
        price: 190,
        // image01: product_03_image_01,
        // image02: product_03_image_02,
        dresstag: 'ao-thun',
        colors: ['Trắng', 'Đỏ', 'Cam', 'Vàng'],
        tag: 'ao-thun-dinosaur-03',
        size: ['m'],
        description:
            '- Áo thun Dinosaur 03 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo thun Dinosaur 03 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.',
    },
]

const productReducer = (state = initialState, action) => {
    switch (action) {
        default:
            return [...state]
    }
}

export default productReducer
