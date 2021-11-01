import Helmet from "../components/Helmet"
import productData from "../assets/fake-data/products"
import CategoryProduct from "../components/CategoryProduct"
import { dress, colors, size } from "../assets/fake-data/category"

export default function Category(){
    return (
        <Helmet title='Sản phẩm'>
            <div className='container'>
                <div className='category'>
                    <div className='category__filter'>
                        <h3 className='category__filter__title'>Danh mục sản phẩm</h3>
                        <div className='category__filter__list'>
                            {
                                dress.map((item, index) => {
                                    return (
                                        <label className='category__filter__list__group' key={index}>
                                            <input type='checkbox' />
                                            <span>{item.name}</span>
                                        </label>
                                    )
                                })
                            }
                        </div>
                        <h3 className='category__filter__title'>Màu sắc</h3>
                        <div className='category__filter__list'>
                            {
                                colors.map((item, index) => {
                                    return (
                                        <label className='category__filter__list__group' key={index}>
                                            <input type='checkbox' />
                                            <span>{item.name}</span>
                                        </label>
                                    )
                                })
                            }
                        </div>
                        <h3 className='category__filter__title'>Kích cỡ</h3>
                        <div className='category__filter__list'>
                            {
                                size.map((item, index) => {
                                    return (
                                        <label className='category__filter__list__group' key={index}>
                                            <input type='checkbox' />
                                            <span>{item.name}</span>
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='category__product'>
                        {
                            productData.getAllProducts().map((product, index) => {
                                return <CategoryProduct product={product} key={index}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </Helmet>
    )
}