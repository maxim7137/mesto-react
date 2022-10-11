import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className='page'>
      <div className='container'>
        <Header />
        <Main />
        <Footer />
        {/* <!-- Попап профиля --> */}
        
      </div>
    </div>
  );
}

export default App;
