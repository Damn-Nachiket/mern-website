import NavBar from "../features/Navbar/navbar";
import ProductList from "../features/Product/Components/ProductList";

function Home(){
    return(
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
    );
}

export default Home;