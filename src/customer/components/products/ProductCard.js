import "./products.css"
const ProductCard = (props) => {

    return (
        <div className="productCard w-[15rem] m-3 transition-all cursor-pointer">
            <div className="h-[20rem]">
                <img src="https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/23518532/2023/6/3/273ebd01-f415-4e99-bdd2-1653bd54484c1685778790324KALINIWomenMultiColorStraightPrintedKurtawithTrouserDupatta7.jpg" alt="" className="h-full w-full object-cover object-left-top"/>
            </div>
            <div className="textPart bg-white p-3">
               <div>
                   <p className="font-bold opacity-60"> {props.product.name} </p>
                   <p>{props.product.description}</p>
               </div>
                <div className="flex items-center space-x-2">
                     <p className="font-semibold">Rs. {props.product.price}</p>
                    <p className="line-through opacity-50"> Rs. {props.product.original_price}</p>
                    <p className="text-green-600 font-semibold ">{props.product.discount}% off</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;