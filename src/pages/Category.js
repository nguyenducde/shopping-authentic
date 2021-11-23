import React, { useCallback, useEffect } from "react"
import Helmet from "../components/Helmet"
import productData from "../assets/fake-data/products"
import CategoryProduct from "../components/CategoryProduct"
import { dress, colors, size } from "../assets/fake-data/category"
import { useState } from "react"
import Checkbox from "../components/Checkbox"
import BackToTop from "../components/BackToTop"


function Category(){

    const [filter, setFilter] = useState({
        dress: [],
        color: [],
        size: []
    })
    const [valueSearch, setValueSearch] = useState('')
    const [products, setProduct] = useState(productData.getAllProducts())
    const productSearch = productData.getAllProducts()

    useEffect(() => {
        const searchProduct = productSearch.filter((product) => {
            return product.name.toLowerCase().includes(valueSearch.toLowerCase())
        })
        setProduct(searchProduct)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueSearch])

    const filterSelect = (type, checked, item) => {
        if(checked){
            switch(type){
                case 'DRESS':
                    setFilter({...filter, dress: [...filter.dress, item.dressSlug]})
                    break
                case 'COLOR':
                    setFilter({...filter, color: [...filter.color, item.color]})
                    break
                case 'SIZE':
                    setFilter({...filter, size: [...filter.size, item.size]})
                    break
                default:
            }
        }else {
            switch(type){
                case 'DRESS':
                    const newDress = filter.dress.filter(e => e !== item.dressSlug)
                    setFilter({...filter, dress: newDress})
                    break
                case 'COLOR':
                    const newColor = filter.color.filter(e => e !== item.color)
                    setFilter({...filter, color: newColor})
                    break
                case 'SIZE':
                    const newSize = filter.size.filter(e => e !== item.size)
                    setFilter({...filter, size: newSize})
                    break
                default:
            }
        }
    }

    const updateProducts = useCallback(() => {
        let allProduct = productData.getAllProducts()

        if(filter.dress.length > 0) {
            allProduct = allProduct.filter(e => filter.dress.includes(e.dressSlug))
        }
        if(filter.color.length > 0) {
            allProduct = allProduct.filter(e => {
                const check = e.colors.find(color => filter.color.includes(color))
                return check !== undefined
            })
        }
        if(filter.size.length > 0) {
            allProduct = allProduct.filter(e => {
                const check = e.size.find(size => filter.size.includes(size))
                return check !== undefined
            })
        }
        setProduct(allProduct)
    }, [filter, setProduct])

    useEffect(() => {
        updateProducts()
    }, [updateProducts])

    // useEffect(() => {
    //     window.scrollTo(0,0)
    // }, [products])

    return (
        <Helmet title='Sản phẩm'>
            <div className='container'>
                <div className='search'>
                    <div className='search__group'>
                        <span>Tìm kiếm</span>
                        <input 
                            type='text' 
                            placeholder='Nhập tên sản phẩm' 
                            value={valueSearch}
                            onChange={(e) => setValueSearch(e.target.value)}
                        />
                    </div>
                    
                </div>
                <div className='category'>
                    <div className='category__filter'>
                        <h3 className='category__filter__title'>Danh mục sản phẩm</h3>
                        <div className='category__filter__list'>
                            {
                                dress.map((item, index) => {
                                    return (
                                        <Checkbox label={item.name} onChange={(input) => filterSelect('DRESS', input.checked, item)} key={index} />
                                    )
                                })
                            }
                        </div>
                        <h3 className='category__filter__title'>Màu sắc</h3>
                        <div className='category__filter__list'>
                            {
                                colors.map((item, index) => {
                                    return (
                                        <Checkbox label={item.name} onChange={(input) => filterSelect('COLOR', input.checked, item)} key={index} /> 
                                    )
                                })
                            }
                        </div>
                        <h3 className='category__filter__title'>Kích cỡ</h3>
                        <div className='category__filter__list'>
                            {
                                size.map((item, index) => {
                                    return (
                                        <Checkbox label={item.name} onChange={(input) => filterSelect('SIZE', input.checked, item)} key={index} /> 
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='category__product'>
                        {
                            products.map((product, index) => {
                                return <CategoryProduct product={product} key={index}/>
                            })
                        }
                    </div>
                </div>
            </div>
            
            <BackToTop />
        </Helmet>
    )
}

export default Category