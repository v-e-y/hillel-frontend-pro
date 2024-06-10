import Base from './components/Base/Base';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import ProductList from './pages/ProductList/ProductList';

const App = () => {
    return (
        <div className="App w-100 h-100">
            <Base>
                <Navbar />
                <Main>
                    <ProductList />
                </Main>
            </Base>
        </div>
    );
}

export default App;
