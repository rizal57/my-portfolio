import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/PortfolioPage';

function App() {
    return (
        <div className={'bg-slate-900 min-h-screen pb-4'}>
            <div className={'flex flex-wrap'}>
                <div>
                    <Home />
                </div>
                <div className={'w-full'}>
                    <Navbar />
                </div>
            </div>
        </div>
    );
}

export default App;
