import React, { useCallback, useEffect } from 'react'
import Helmet from '../common/Helmet'
import { getAllProducts } from '../store-data/products'
import { dress, sex, colors, size } from '../store-data/category'
import { useState } from 'react'
import CategoryField from '../components/Category/Field'
import ListAllProducts from '../components/Category/ListAllProducts'
import SearchProduct from '../components/SearchProduct'

function Category() {
    const [filter, setFilter] = useState({
        dress: [],
        initialSex: [],
        color: [],
        size: [],
    })
    const [products, setProduct] = useState(getAllProducts())

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case 'DRESS':
                    setFilter({ ...filter, dress: [...filter.dress, item.dressSlug] })
                    break
                case 'SEX':
                    setFilter({ ...filter, initialSex: [...filter.initialSex, item.sex] })
                    break
                case 'COLOR':
                    setFilter({ ...filter, color: [...filter.color, item.color] })
                    break
                case 'SIZE':
                    setFilter({ ...filter, size: [...filter.size, item.size] })
                    break
                default:
            }
        } else {
            switch (type) {
                case 'DRESS':
                    const newDress = filter.dress.filter((e) => e !== item.dressSlug)
                    setFilter({ ...filter, dress: newDress })
                    break
                case 'SEX':
                    const newSex = filter.initialSex.filter((e) => e !== item.sex)
                    setFilter({ ...filter, initialSex: newSex })
                    break
                case 'COLOR':
                    const newColor = filter.color.filter((e) => e !== item.color)
                    setFilter({ ...filter, color: newColor })
                    break
                case 'SIZE':
                    const newSize = filter.size.filter((e) => e !== item.size)
                    setFilter({ ...filter, size: newSize })
                    break
                default:
            }
        }
    }

    const updateProducts = useCallback(() => {
        let allProduct = getAllProducts()

        if (filter.dress.length > 0) {
            allProduct = allProduct.filter((e) => filter.dress.includes(e.dressSlug))
        }
        if (filter.initialSex.length > 0) {
            allProduct = allProduct.filter((e) => filter.initialSex.includes(e.sex))
        }
        if (filter.color.length > 0) {
            allProduct = allProduct.filter((e) => {
                const check = e.colors.find((color) => filter.color.includes(color))
                return check !== undefined
            })
        }
        if (filter.size.length > 0) {
            allProduct = allProduct.filter((e) => {
                const check = e.size.find((size) => filter.size.includes(size))
                return check !== undefined
            })
        }
        setProduct(allProduct)
    }, [filter, setProduct])

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    return (
        <Helmet title='Sản phẩm'>
            <div className='container'>
                <SearchProduct setProduct={setProduct} />
                <div className='category'>
                    <CategoryField
                        filter={filter}
                        setFilter={setFilter}
                        filterSelect={filterSelect}
                        dress={dress}
                        sex={sex}
                        colors={colors}
                        size={size}
                    />
                    <ListAllProducts products={products} />
                </div>
            </div>
        </Helmet>
    )
}

export default Category
