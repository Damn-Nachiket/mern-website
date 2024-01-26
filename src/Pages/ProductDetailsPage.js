import NavBar from "../features/Navbar/navbar";
import ProductDetails from "../features/Product/Components/ProductDetails";

function ProductDetailsPage(){
    return(
        <div>
            <NavBar>
                <ProductDetails></ProductDetails>
            </NavBar>
        </div>
    );
}

export default ProductDetailsPage;