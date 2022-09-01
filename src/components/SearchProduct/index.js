import { useState, useEffect, useRef } from 'react'
import { getAllProducts } from '../../store-data/products'
import removeVietNameseTones from '../../common/removeVietNameseTones'

function SearchProduct({ setProduct }) {
    const [valueSearch, setValueSearch] = useState('')
    const inputRef = useRef(null)

    function handleClearSearch() {
        setValueSearch('')
        inputRef.current.focus()
    }

    useEffect(() => {
        const searchProduct = getAllProducts().filter((product) => {
            return (
                product.name.toLowerCase().includes(valueSearch.toLowerCase()) ||
                removeVietNameseTones(product.name.toLowerCase()).includes(
                    valueSearch.toLowerCase()
                )
            )
        })
        setProduct(searchProduct)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueSearch])

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

    return (
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
                <i
                    className='bx bx-x search__clear'
                    onClick={handleClearSearch}
                    style={{ visibility: `${valueSearch !== '' ? 'visible' : 'hidden'}` }}
                ></i>
            </div>
        </div>
    )
}

export default SearchProduct
