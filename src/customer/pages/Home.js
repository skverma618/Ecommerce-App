import MainCarousel from "../components/caraousels/MainCaraousel";
import HomeSectionCaraousel from "../components/caraousels/HomeSectionCaraousel";
import Products from "../components/products/Products";
import ProductDetails from "../components/ProductDetails/ProductDetails";
const Home = () => {
    return (
        <div>
            <MainCarousel />
            <main>
                {/*<Products />*/}
                <ProductDetails />
                {/*<HomeSectionCaraousel data = {'data'} sectionName = {"Section 1"} />*/}
                {/*<HomeSectionCaraousel data = {'data'} sectionName = {"Section 2"} />*/}
                {/*<HomeSectionCaraousel data = {'data'} sectionName = {"Section 3"} />*/}
                {/*<HomeSectionCaraousel data = {'data'} sectionName = {"Section 4"} />*/}
            </main>
        </div>
    );
}

export default Home;