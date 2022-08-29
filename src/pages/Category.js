import React, { useCallback, useEffect, useRef } from "react"
import Helmet from "../common/Helmet"
import productData from "../fake-data/products"
import CategoryProduct from "../components/CategoryProduct"
import { dress, sex, colors, size } from "../fake-data/category"
import { useState } from "react"
import Checkbox from "../components/Checkbox"
import removeVietNameseTones from "../common/removeVietNameseTones"
import image_empty from '../assets/images/empty_product.png'

function Category(){

    const [filter, setFilter] = useState({
        dress: [],
        initialSex: [],
        color: [],
        size: []
    })
    const [valueSearch, setValueSearch] = useState('')
    const [products, setProduct] = useState(productData.getAllProducts())
    const productSearch = productData.getAllProducts()
    const inputRef = useRef(null)

    useEffect(() => {
        const searchProduct = productSearch.filter((product) => {
            return product.name.toLowerCase().includes(valueSearch.toLowerCase()) || 
                removeVietNameseTones(product.name.toLowerCase()).includes(valueSearch.toLowerCase())
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
                case 'SEX':
                    setFilter({...filter, initialSex: [...filter.initialSex, item.sex]})
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
                case 'SEX':
                    const newSex = filter.initialSex.filter(e => e !== item.sex)
                    setFilter({...filter, initialSex: newSex})
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
        if(filter.initialSex.length > 0) {
            allProduct = allProduct.filter(e => filter.initialSex.includes(e.sex))
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

    useEffect(() => {
        window.scrollTo(0,0)
    }, [products])

    function handleClearSearch() {
        setValueSearch('')
        inputRef.current.focus()
    }

    useEffect(() => {
        const search = document.querySelector('.search')
        const input = document.querySelector('.search__input')

        function addClass() {
            search.classList.add('search-focus')
        }

        function removeClass() {
            search.classList.remove('search-focus')
        }

        input.addEventListener('focus', addClass)
        input.addEventListener('blur', removeClass)

        return () => {
            input.removeEventListener('focus', addClass)
            input.removeEventListener('blur', removeClass)
        }

    }, [])

    useEffect(() => {
        const body = document.querySelector('body')
        const categoryFilter = document.querySelector('.category__filter')
        const titleFilter = document.querySelector('.category__filter-sort')
        const categoryFilterMobile = document.querySelector('.category__filter--mobile')
        const iconClose = document.querySelector('.category__filter__icon-close')

        const handleOpenModalFilter = (e) => {
            e.stopPropagation()
            categoryFilter.style.display = 'flex'
            categoryFilterMobile.style.display = 'block'
            iconClose.style.display = 'block'
            body.style.overflow = 'hidden'
        }

        const handleCloseModalFilter = () => {
            categoryFilter.style.display = 'none'
            categoryFilterMobile.style.display = 'none'
            iconClose.style.display = 'none'
            body.style.overflow = 'visible'
        }

        categoryFilterMobile.addEventListener('click', handleCloseModalFilter)
        titleFilter.addEventListener('click', handleOpenModalFilter)
        iconClose.addEventListener('click', handleCloseModalFilter)

        return () => {
            categoryFilterMobile.removeEventListener('click', handleCloseModalFilter)
            titleFilter.removeEventListener('click', handleOpenModalFilter)
            iconClose.removeEventListener('click', handleCloseModalFilter)
        }
    }, [])

    useEffect(() => {
        const categoryFilterTitle = document.querySelector('.category__filter-sort')
        const categoryProduct = document.querySelector('.category__product')

        const handleStickyFilter = () => {
            categoryProduct.classList.toggle('top', window.scrollY > 60)
            categoryFilterTitle.classList.toggle('sticky', window.scrollY > 60)
        }

        window.addEventListener('scroll', handleStickyFilter)

        return () => {
            window.removeEventListener('scroll', handleStickyFilter)
        }
    }, [])


    return (
        <Helmet title='Sản phẩm'>
            <div className='container'>
                <div className='search'>
                    <span>Tìm kiếm</span>
                    <div className='search__group'>
                        <input
                            type='text' 
                            className='search__input'
                            placeholder='Nhập tên sản phẩm' 
                            value={valueSearch}
                            onChange={(e) => setValueSearch(e.target.value)}
                            ref={inputRef}
                        />
                        <i className='bx bx-x search__clear'
                            onClick={handleClearSearch}
                            style={{visibility: `${valueSearch !== '' ? 'visible' : 'hidden'}`}}
                        >
                        </i>
                    </div>
                </div>
                <div className='category'>
                    <div className='category__filter--mobile'></div>
                    <div className='category__filter-sort'>
                        <p>Lọc sản phẩm </p>
                        <i className="fas fa-sort-down"></i>
                    </div>
                    <div className='category__filter'>
                        <i className='fas fa-times category__filter__icon-close'></i>
                        <div className='category__filter__group'>
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
                        </div>
                        <div className='category__filter__group'>
                            <h3 className='category__filter__title'>Giới tính</h3>
                            <div className='category__filter__list'>
                                {
                                    sex.map((item, index) => {
                                        return (
                                            <Checkbox label={item.name} onChange={(input) => filterSelect('SEX', input.checked, item)} key={index} /> 
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='category__filter__group'>
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
                        </div>
                        <div className='category__filter__group'>
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
                    </div>
                    {
                        products.length === 0 
                        ? 
                            <div className='category__empty'>
                                <img src={image_empty} alt='' />
                                <p>Không tìm thấy sản phẩm</p>
                            </div>
                        :
                            <div className='category__product'>
                                {
                                    products.map((product, index) => {
                                        return <CategoryProduct product={product} key={index}/>
                                    })
                                }
                            </div>
                    }
                    
                </div>
            </div>
        </Helmet>
    )
}

export default Category