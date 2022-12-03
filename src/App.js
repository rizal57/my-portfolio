import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/PortfolioPage';

function App() {
    return (
        <div className={'bg-zinc-900 min-h-screen pb-4 lg:px-16'}>
            <div className={'flex flex-wrap gap-2 lg:grid lg:grid-cols-8'}>
                <div className={'lg:col-span-3'}>
                    <Home />
                </div>
                <div className={'w-full lg:col-span-5'}>
                    <Navbar />
                </div>
            </div>
        </div>
    );
}

export default App;
