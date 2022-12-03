import foto from './images/bg-white.png';
import { Linkedin, Instagram, GitHub } from 'react-feather';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div name="home" className={'py-4 w-full'}>
            <div className="container mx-auto px-10 py-4 xl:px-10">
                <h1 className={'text-3xl font-semibold text-slate-100 text-center'}>M. Fahrur Rizal</h1>
                <div className={'mt-8 flex items-center gap-4'}>
                    <div className={'rounded-full w-32 h-32 overflow-hidden mr-10'}>
                        <img src={foto} alt="foto-profil" className={'w-full object-cover'} />
                    </div>
                    {/* Social Media */}
                    <div className="text-slate-100 flex items-center gap-4">
                        <Link
                            to={''}
                            className={
                                'w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:rotate-12 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/40 ease-out duration-300'
                            }>
                            <Linkedin size={20} />
                        </Link>
                        <Link
                            to={''}
                            className={
                                'w-10 h-10 rounded-full bg-[#333] flex items-center justify-center hover:rotate-12 hover:bg-[#252525] hover:shadow-lg hover:shadow-[#252525]/40 ease-out duration-300'
                            }>
                            <GitHub size={20} />
                        </Link>
                        <Link
                            to={''}
                            className={
                                'w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:rotate-12 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-600/40 ease-out duration-300'
                            }>
                            <Instagram size={20} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'px-10 text-slate-300'}>
                <h1 className="font-semibold text-base text-slate-400">Pengen jadi Developer</h1>
                <p>
                    Lulusan Teknik Informatika Universitas Nusantara PGRI Kediri. Konten kreator game di{' '}
                    <a href="#" className={'text-blue-500 hover:underline'}>
                        TikTok
                    </a>
                    , hobi bermain game.
                </p>
                <div className={'mt-8'}>
                    <button
                        className={
                            'flex items-center gap-2 justify-center bg-slate-700 py-2 px-4 rounded-full w-full hover:bg-slate-800 duration-300'
                        }>
                        Sapa saya! 👋
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
