import Base from './components/Base/Base';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import BackendProductList from './pages/BackendProductList/BackendProductList';

const App = () => {
    return (
        <div className="App w-100 h-100">
            <Base>
                <Navbar />
                <Main>
                    <BackendProductList />
                </Main>
            </Base>
        </div>
    );
}

export default App;
