import product_01_image_01 from '../assets/images/products/product-01 (1).jpg'
import product_01_image_02 from '../assets/images/products/product-01 (2).jpg'

import product_02_image_01 from '../assets/images/products/product-02 (1).jpg'
import product_02_image_02 from '../assets/images/products/product-02 (2).jpg'

import product_03_image_01 from '../assets/images/products/product-03 (1).jpg'
import product_03_image_02 from '../assets/images/products/product-03 (2).jpg'

import product_04_image_01 from '../assets/images/products/product-04 (1).jpg'
import product_04_image_02 from '../assets/images/products/product-04 (2).jpg'

import product_05_image_01 from '../assets/images/products/product-05 (1).jpg'
import product_05_image_02 from '../assets/images/products/product-05 (2).jpg'

import product_06_image_01 from '../assets/images/products/product-06 (1).jpg'
import product_06_image_02 from '../assets/images/products/product-06 (2).jpg'

import product_07_image_01 from '../assets/images/products/product-07 (1).jpg'
import product_07_image_02 from '../assets/images/products/product-07 (2).jpg'

import product_08_image_01 from '../assets/images/products/product-08 (1).jpg'
import product_08_image_02 from '../assets/images/products/product-08 (2).jpg'

import product_09_image_01 from '../assets/images/products/product-09 (1).jpg'
import product_09_image_02 from '../assets/images/products/product-09 (2).jpg'

import product_10_image_01 from '../assets/images/products/product-10 (1).jpg'
import product_10_image_02 from '../assets/images/products/product-10 (2).jpg'

import product_11_image_01 from '../assets/images/products/product-11 (1).jpg'
import product_11_image_02 from '../assets/images/products/product-11 (2).jpg'

import product_12_image_01 from '../assets/images/products/product-12 (1).jpg'
import product_12_image_02 from '../assets/images/products/product-12 (2).jpg'

import ao_so_mi_caro_keisha_01 from '../assets/images/products/ao-so-mi-ke-tam-01.jpg'
import ao_so_mi_caro_keisha_02 from '../assets/images/products/ao-so-mi-ke-tam-02.jpg'

import ao_so_mi_nam_phong_cach_01 from '../assets/images/products/ao-somi-nam-6-01.jpg'
import ao_so_mi_nam_phong_cach_02 from '../assets/images/products/ao-somi-nam-6-02.jpg'

import ao_so_mi_tay_dai_ke_tam_01 from '../assets/images/products/ao-somi-nam-5-01.jpg'
import ao_so_mi_tay_dai_ke_tam_02 from '../assets/images/products/ao-somi-nam-5-02.jpg'

import ao_thun_nam_pima_tron_01 from '../assets/images/products/ao-thun-nam-1-01.jpg'
import ao_thun_nam_pima_tron_02 from '../assets/images/products/ao-thun-nam-1-02.jpg'

import ao_somi_name_melange_01 from '../assets/images/products/ao-somi-nam-3-01.jpg'
import ao_somi_name_melange_02 from '../assets/images/products/ao-somi-nam-3-02.jpg'

import ao_somi_name_slimfit_01 from '../assets/images/products/ao-somi-nam-2-01.jpg'
import ao_somi_name_slimfit_02 from '../assets/images/products/ao-somi-nam-2-02.jpg'

const products = [
    {
        id: 13,
        name: 'Áo Sơ Mi Nam Tay Dài Keisha',
        price: 184000,
        image01: ao_so_mi_caro_keisha_01,
        image02: ao_so_mi_caro_keisha_02,
        dressSlug: 'ao-somi',
        colors: ['Trắng', 'Đỏ'],
        slug: 'ao-somi-nam-tay-dai-keisha',
        size: ['s', 'm', 'xl'],
        sex: 'male',
        description: '- Áo Sơ Mi Nam Tay Dài Keisha Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo Sơ Mi Nam Tay Dài Keisha Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    
    {
        id: 2,
        name: 'Áo thun Dinosaur 01',
        price: 166500,
        image01: product_02_image_01,
        image02: product_02_image_02,
        dressSlug: 'ao-thun',
        colors: ['Trắng', 'Đen', 'Cam'],
        slug: 'ao-thun-dinosaur-01',
        size: ['s', 'm', 'xl'],
        sex: 'female',
        description: '- Áo thun Dinosaur 01 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo thun Dinosaur 01 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 16,
        name: 'Áo Thun Nam Pima Trơn',
        price: 159000,
        image01: ao_thun_nam_pima_tron_01,
        image02: ao_thun_nam_pima_tron_02,
        dressSlug: 'ao-thun',
        colors: ['Nâu', 'Trắng', 'Đen'],
        slug: 'ao-thun-nam-pima-tron',
        size: ['m', 'l', 'xl'],
        sex: 'male',
        description: '- Áo Thun Nam Pima Trơn Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo Thun Nam Pima Trơn Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 4,
        name: 'Áo thun Dinosaur 02',
        price: 166500,
        image01: product_04_image_01,
        image02: product_04_image_02,
        dressSlug: 'ao-thun',
        colors: ['Trắng', 'Cam', 'Xanh'],
        slug: 'ao-thun-dinosaur-02',
        size: ['xl'],
        sex: 'female',
        description: '- Áo thun Dinosaur 02 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo thun Dinosaur 02 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 5,
        name: 'Áo thun Dinosaur 03',
        price: 166500,
        image01: product_05_image_01,
        image02: product_05_image_02,
        dressSlug: 'ao-thun',
        colors: ['Trắng', 'Hồng'],
        slug: 'ao-thun-dinosaur-03',
        size: ['xxl'],
        sex: 'female',
        description: '- Áo thun Dinosaur 03 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo thun Dinosaur 03 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 17,
        name: 'Áo Sơ Mi Nam Tay Ngắn Melange',
        price: 259000,
        image01: ao_somi_name_melange_01,
        image02: ao_somi_name_melange_02,
        dressSlug: 'ao-somi',
        colors: ['Xanh', 'Đen'],
        slug: 'ao-so-mi-nam-tay-ngan-melange',
        size: ['s', 'l', 'xl'],
        sex: 'male',
        description: '- Áo Sơ Mi Nam Tay Ngắn Melange Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo Sơ Mi Nam Tay Ngắn Melange Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 7,
        name: 'Áo Sơ Mi Nữ Tay Dài Kẻ Sọc Caro',
        price: 159000,
        image01: product_07_image_01,
        image02: product_07_image_02,
        dressSlug: 'ao-somi',
        colors: ['Trắng', 'Đỏ', 'Cam', 'Xanh'],
        slug: 'ao-so-mi-nu-tay-dai-ke-soc-caro',
        size: ['l', 'xl'],
        sex: 'female',
        description: '- Áo Sơ Mi Nữ Tay Dài Kẻ Sọc Caro Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo Sơ Mi Nữ Tay Dài Kẻ Sọc Caro Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 8,
        name: 'Áo Sơ Mi Nữ Tay Dài Công Sở',
        price: 194000,
        image01: product_08_image_01,
        image02: product_08_image_02,
        dressSlug: 'ao-somi',
        colors: ['Trắng', 'Đỏ', 'Đen'],
        slug: 'ao-so-mi-nu-tay-dai-cong-so',
        size: ['s', 'm', 'xl'],
        sex: 'female',
        description: '- Áo Sơ Mi Nữ Tay Dài Công Sở Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo Sơ Mi Nữ Tay Dài Công Sở Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 9,
        name: 'Áo Sơ Mi Nữ Tay Dài Dáng Suông',
        price: 194000,
        image01: product_09_image_01,
        image02: product_09_image_02,
        dressSlug: 'ao-somi',
        colors: ['Trắng', 'Xanh'],
        slug: 'ao-so-mi-nu-tay-dai-dang-suong',
        size: ['m'],
        sex: 'female',
        description: '- Áo Sơ Mi Nữ Tay Dài Dáng Suông Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo Sơ Mi Nữ Tay Dài Dáng Suông Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 10,
        name: 'Quần Jean Nữ Dáng Skinny Trơn',
        price: 194000,
        image01: product_10_image_01,
        image02: product_10_image_02,
        dressSlug: 'quan-jean',
        colors: ['Xanh', 'Đen'],
        slug: 'quan-jean-nu-dang-skinny-tron',
        size: ['l'],
        sex: 'female',
        description: '- Quần Jean Nữ Dáng Skinny Trơn Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Quần Jean Nữ Dáng Skinny Trơn Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 6,
        name: 'Áo thun Dinosaur 04',
        price: 166500,
        image01: product_06_image_01,
        image02: product_06_image_02,
        dressSlug: 'ao-thun',
        colors: ['Đen'],
        slug: 'ao-thun-dinosaur-04',
        size: ['s', 'm', 'xl'],
        sex: 'female',
        description: '- Áo thun Dinosaur 04 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo thun Dinosaur 04 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 12,
        name: 'Quần Jean Nữ Lưng Cao Xước Nhẹ',
        price: 194000,
        image01: product_12_image_01,
        image02: product_12_image_02,
        dressSlug: 'quan-jean',
        colors: ['Xanh'],
        slug: 'quan-jean-nu-lung-cao-xuoc-nhe',
        size: ['s', 'm', 'xl'],
        sex: 'female',
        description: '- Quần Jean Nữ Lưng Cao Xước Nhẹ Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Quần Jean Nữ Lưng Cao Xước Nhẹ Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 1,
        name: 'Áo thun Dinosaur 05',
        price: 166500,
        image01: product_01_image_01,
        image02: product_01_image_02,
        dressSlug: 'ao-thun',
        colors: ['Trắng', 'Đỏ', 'Cam'],
        slug: 'ao-thun-dinosaur-05',
        size: ['s', 'm', 'l', 'xl'],
        sex: 'female',
        description: '- Áo thun Dinosaur 05 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo thun Dinosaur 05 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 14,
        name: 'Áo Sơ Mi Nam Tay Dài Phong Cách',
        price: 159000,
        image01: ao_so_mi_nam_phong_cach_01,
        image02: ao_so_mi_nam_phong_cach_02,
        dressSlug: 'ao-somi',
        colors: ['Trắng', 'Xanh'],
        slug: 'ao-somi-nam-tay-phong-cach',
        size: ['s', 'm'],
        sex: 'male',
        description: '- Áo Sơ Mi Nam Tay Dài Phong Cách Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo Sơ Mi Nam Tay Dài Phong Cách Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 15,
        name: 'Áo Sơ Mi Nam Tay Dài Kẻ Tăm',
        price: 169000,
        image01: ao_so_mi_tay_dai_ke_tam_01,
        image02: ao_so_mi_tay_dai_ke_tam_02,
        dressSlug: 'ao-somi',
        colors: ['Đen', 'Xanh'],
        slug: 'ao-so-mi-tay-dai-ke-tam',
        size: ['m', 'l', 'xl'],
        sex: 'male',
        description: '- Áo Sơ Mi Nam Tay Dài Kẻ Tăm Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo Sơ Mi Nam Tay Dài Kẻ Tăm Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 3,
        name: 'Áo thun Dinosaur 06',
        price: 166500,
        image01: product_03_image_01,
        image02: product_03_image_02,
        dressSlug: 'ao-thun',
        colors: ['Trắng', 'Đỏ', 'Cam', 'Vàng'],
        slug: 'ao-thun-dinosaur-06',
        size: ['m'],
        sex: 'female',
        description: '- Áo thun Dinosaur 06 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo thun Dinosaur 06 Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 11,
        name: 'Quần Jean Baggy Nữ',
        price: 194000,
        image01: product_11_image_01,
        image02: product_11_image_02,
        dressSlug: 'quan-jean',
        colors: ['Xanh', 'Đen'],
        slug: 'quan-jean-baggy-nu',
        size: ['s', 'm', 'xl'],
        sex: 'female',
        description: '- Quần Jean Baggy Nữ Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Quần Jean Baggy Nữ Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nữ Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    },
    {
        id: 18,
        name: 'Áo Sơ Mi Nam Tay Ngắn Slimfit',
        price: 229000,
        image01: ao_somi_name_slimfit_01,
        image02: ao_somi_name_slimfit_02,
        dressSlug: 'ao-somi',
        colors: ['Trắng', 'Vàng'],
        slug: 'ao-so-mi-nam-tay-ngan-slimfit',
        size: ['s', 'l', 'xl'],
        sex: 'male',
        description: '- Áo Sơ Mi Nam Tay Ngắn Slimfit Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính có thiết kế kiểu dáng cơ bản với dáng ôm vừa, cổ bẻ, tay ngắn in logo 5S, kiểu dáng thể thao <br><br> - Áo Sơ Mi Nam Tay Ngắn Slimfit Chất Liêu 100% Coolmax Phối Viền Năng Động, Trẻ Trung, Nam Tính, dễ dàng phối cùng quần jeans hoặc shorts, giày thể thao hoặc giày lười, thích hợp sử dụng trong các dịp đi chơi, gặp gỡ bạn bè và các hoạt động ngoài trời.'
    }
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max-min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug
}

export default productData