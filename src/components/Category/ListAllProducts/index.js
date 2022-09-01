import ProductCard from '../../../common/ProductCard'
import image_empty from '../../../assets/images/empty_product.png'

function ListAllProducts({ products }) {
    return (
        <>
            {products.length === 0 ? (
                <div className='category__empty'>
                    <img src={image_empty} alt='' />
                    <p>Không tìm thấy sản phẩm</p>
                </div>
            ) : (
                <div className='category__product'>
                    {products.map((product, index) => {
                        return (
                            <ProductCard
                                className={'category__product__item'}
                                link={`/danh-muc/san-pham/${product.slug}`}
                                image={product.image01}
                                name={product.name}
                                price={product.price}
                                buttonTitle={'Chọn mua'}
                                key={index}
                            />
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default ListAllProducts
