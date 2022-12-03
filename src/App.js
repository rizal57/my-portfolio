import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
    return (
        <div className={'bg-zinc-900 min-h-screen'}>
            <div className={'container px-4 mx-auto'}>
                <div className={'flex flex-wrap lg:gap-16 lg:grid lg:grid-cols-8'}>
                    <div className={'lg:col-span-3'}>
                        <About />
                    </div>
                    <div className={'w-full lg:col-span-5'}>
                        <Navbar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
