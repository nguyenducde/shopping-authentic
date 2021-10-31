import product_01_image_01 from '../../assets/images/products/product-01 (1).jpg'
import product_01_image_02 from '../../assets/images/products/product-01 (2).jpg'

import product_02_image_01 from '../../assets/images/products/product-02 (1).jpg'
import product_02_image_02 from '../../assets/images/products/product-02 (2).jpg'

import product_03_image_01 from '../../assets/images/products/product-03 (1).jpg'
import product_03_image_02 from '../../assets/images/products/product-03 (2).jpg'

import product_04_image_01 from '../../assets/images/products/product-04 (1).jpg'
import product_04_image_02 from '../../assets/images/products/product-04 (2).jpg'

import product_05_image_01 from '../../assets/images/products/product-05 (1).jpg'
import product_05_image_02 from '../../assets/images/products/product-05 (2).jpg'

import product_06_image_01 from '../../assets/images/products/product-06 (1).jpg'
import product_06_image_02 from '../../assets/images/products/product-06 (2).jpg'

import product_07_image_01 from '../../assets/images/products/product-07 (1).jpg'
import product_07_image_02 from '../../assets/images/products/product-07 (2).jpg'

import product_08_image_01 from '../../assets/images/products/product-08 (1).jpg'
import product_08_image_02 from '../../assets/images/products/product-08 (2).jpg'

import product_09_image_01 from '../../assets/images/products/product-09 (1).jpg'
import product_09_image_02 from '../../assets/images/products/product-09 (2).jpg'

import product_10_image_01 from '../../assets/images/products/product-10 (1).jpg'
import product_10_image_02 from '../../assets/images/products/product-10 (2).jpg'

const products = [
    {
        name: 'Áo thun Dinosaur 01',
        price: 189,
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: 'ao-thun',
        colors: ['white', 'red', 'orange'],
        slug: 'ao-thun-dinosaur-01',
        size: ['s', 'm', 'l', 'xl']
    },
    {
        name: 'Áo thun Dinosaur 02',
        price: 189,
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: 'ao-thun',
        colors: ['white', 'black', 'orange'],
        slug: 'ao-thun-dinosaur-02',
        size: ['s', 'm', 'xl']
    },
    {
        name: 'Áo thun Dinosaur 02',
        price: 190,
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: 'ao-thun',
        colors: ['white', 'red', 'orange', 'yellow'],
        slug: 'ao-thun-dinosaur-03',
        size: ['m']
    },
    {
        name: 'Áo thun Dinosaur 04',
        price: 194,
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: 'ao-thun',
        colors: ['white', 'orange', 'blue'],
        slug: 'ao-thun-dinosaur-04',
        size: ['xl']
    },
    {
        name: 'Áo thun Dinosaur 05',
        price: 159,
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: 'ao-thun',
        colors: ['white', 'pink'],
        slug: 'ao-thun-dinosaur-05',
        size: ['xxl']
    },
    {
        name: 'Áo thun Dinosaur 06',
        price: 159,
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: 'ao-thun',
        colors: ['black'],
        slug: 'ao-thun-dinosaur-06',
        size: ['s', 'm', 'xl']
    },
    {
        name: 'Áo somi caro 07',
        price: 159,
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: 'ao-somi',
        colors: ['white', 'red', 'orange', 'blue'],
        slug: 'ao-somi-caro-07',
        size: ['l', 'xl']
    },
    {
        name: 'Áo somi dài tay 08',
        price: 194,
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: 'ao-somi',
        colors: ['white', 'red', 'black'],
        slug: 'ao-somi-dai-tay-08',
        size: ['s', 'm', 'xl']
    },
    {
        name: 'Áo somi tay dài 09',
        price: 194,
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: 'ao-somi',
        colors: ['white', 'blue'],
        slug: 'ao-somi-tay-dai-09',
        size: ['m']
    },
    {
        name: 'Áo jean phong cách 10',
        price: 194,
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: 'quan-jean',
        colors: ['blue', 'black'],
        slug: 'ao-jean-phong-cach-10',
        size: ['l']
    }
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max-min) + min)
    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts
}

export default productData