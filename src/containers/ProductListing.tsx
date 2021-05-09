import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Product from "./Product";
import axios from "axios";
import {setProducts} from "../redux/actions/productActions";

export const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log(products)

    const fetchProducts = async () => {
        const response: any = await axios.get('https://fakestoreapi.com/products/').catch((err: Error) => {
            console.log(err)})
        dispatch(setProducts(response?.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    return (
        <div className={"ui grid container"}>

            <Product/>
        </div>
    )
}

export default ProductListing
