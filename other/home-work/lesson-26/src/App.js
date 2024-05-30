import Base from './components/Base/Base';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="App">
        <Base>
            <Header title='My React App' />
            <Sidebar menus={[
                {
                    title: 'Menu 1',
                    items: [
                        { url: '/home', text: 'Home' },
                        { url: '/about', text: 'About' },
                        { url: '/contact', text: 'Contact' }
                    ]
                }
            ]} />
            <Main className="test">
                <h2>Home</h2>
                <p>Wats up?</p>
            </Main>
        </Base>
    </div>
  );
}

export default App;
