import { useEffect } from 'react'
import Checkbox from '../../Checkbox'
import { ButtonNoLink } from '../../../common/Button'

function CategoryField({ filter, setFilter, filterSelect, dress, sex, colors, size }) {
    useEffect(() => {
        const body = document.querySelector('body')
        const categoryFilter = document.querySelector('.category-field')
        const titleFilter = document.querySelector('.category-field-sort')
        const categoryFilterMobile = document.querySelector('.category-field--mobile')
        const iconClose = document.querySelector('.category-field__icon-close')

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
        const categoryFilterTitle = document.querySelector('.category-field-sort')
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
        <>
            <div className='category-field--mobile'></div>
            <div className='category-field-sort'>
                <p>Lọc sản phẩm </p>
                <i className='fas fa-sort-down'></i>
            </div>
            <div className='category-field'>
                <i className='fas fa-times category-field__icon-close'></i>
                <div className='category-field__group'>
                    <h3 className='category-field__title'>Danh mục sản phẩm</h3>
                    <div className='category-field__list'>
                        {dress.map((item, index) => {
                            return (
                                <Checkbox
                                    label={item.name}
                                    onChange={(input) => filterSelect('DRESS', input.checked, item)}
                                    checked={filter.dress.includes(item.dresstag)}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className='category-field__group'>
                    <h3 className='category-field__title'>Giới tính</h3>
                    <div className='category-field__list'>
                        {sex.map((item, index) => {
                            return (
                                <Checkbox
                                    label={item.name}
                                    onChange={(input) => filterSelect('SEX', input.checked, item)}
                                    checked={filter.initialSex.includes(item.sex)}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className='category-field__group'>
                    <h3 className='category-field__title'>Màu sắc</h3>
                    <div className='category-field__list'>
                        {colors.map((item, index) => {
                            return (
                                <Checkbox
                                    label={item.name}
                                    onChange={(input) => filterSelect('COLOR', input.checked, item)}
                                    checked={filter.color.includes(item.color)}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className='category-field__group'>
                    <h3 className='category-field__title'>Kích cỡ</h3>
                    <div className='category-field__list'>
                        {size.map((item, index) => {
                            return (
                                <Checkbox
                                    label={item.name}
                                    onChange={(input) => filterSelect('SIZE', input.checked, item)}
                                    checked={filter.size.includes(item.size)}
                                    key={index}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className='category-field__group'>
                    <ButtonNoLink
                        className='btn category-field__btn'
                        onClick={() =>
                            setFilter({ dress: [], initialSex: [], color: [], size: [] })
                        }
                    >
                        Reset bộ lọc
                    </ButtonNoLink>
                </div>
            </div>
        </>
    )
}

export default CategoryField
