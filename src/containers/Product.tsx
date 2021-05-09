import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const Product = () => {
    const products = useSelector((state: any) => state.allProducts.products)
    const renderProducts = products.map((product: any) => {
        const {title, price, category, image, id} = product
        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title}/>
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
    return <>{renderProducts}</>
}

export default Product
