import Base from './components/Base/Base';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';

const App = () => {
    return (
        <div className="App w-100 h-100">
            <Base>
                <Navbar />
                <Main>
                    <Login />
                </Main>
            </Base>
        </div>
    );
}

export default App;
