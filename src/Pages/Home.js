import NavBar from "../features/Navbar/navbar";
import ProductList from "../features/Products-list/ProductList";

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