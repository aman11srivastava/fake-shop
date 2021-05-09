import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {removeSelectedProduct, selectedProduct} from "../redux/actions/productActions";

export const ProductDetails = () => {
    const product: any = useSelector((state: any) => state.product)
    const {productId}: any = useParams()
    const dispatch = useDispatch()

    const {image, category, description, title, price} = product

    const fetchProductDetail = async () => {
        const response: any = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err: Error) => {
            console.log(err)
        })
        dispatch(selectedProduct(response?.data))
    }

    useEffect(() => {
        if (productId && productId !== "") fetchProductDetail()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId])

    return (
        <div className="ui grid container" style={{paddingTop: '3rem'}}>
            {Object.keys(product).length === 0 ? (
                <div style={{paddingTop: '3rem'}}>Loading...</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} alt={title}/>
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a href="#" className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button">
                                    <div className="hidden content">
                                        <i className="shop icon"/>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>)
}

export default ProductDetails
