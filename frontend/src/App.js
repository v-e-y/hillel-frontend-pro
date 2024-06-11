import Base from './components/Base/Base';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import ProductPreview from './pages/ProductPreview/ProductPreview';

const App = () => {
    return (
        <div className="App w-100 h-100">
            <Base>
                <Navbar />
                <Main>
                    <ProductPreview />
                </Main>
            </Base>
        </div>
    );
}

export default App;
