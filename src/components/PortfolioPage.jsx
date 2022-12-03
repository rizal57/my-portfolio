import { Link } from 'react-router-dom';
import network from './images/portfolio/network.png';

const Portfolio = () => {
    return (
        <div>
            <a href={'https://github.com/rizal57/network'} target={'_blank'} rel="noopener noreferrer">
                <div className={'group mb-3 py-4 hover:bg-slate-800 duration-300'}>
                    <div className={'flex gap-3 px-4'}>
                        <div className={'w-44 h-32 flex-shrink-0'}>
                            <img src={network} alt="network" className={'w-full h-full rounded-md object-cover object-left'} />
                        </div>
                        <div>
                            <h1 className={'text-slate-100 font-semibold text-xl'}>Network</h1>
                            <p className={'text-slate-400 text-base'}>Aplikasi sederhana untuk memperluas pertemanan secara online</p>
                            <ul className={'flex flex-wrap items-center text-slate-300'}>
                                <li className={'group-hover:bg-slate-700 mr-1 py-[2px] px-2 mb-[2px] text-sm rounded-sm underline'}>TALL Stack</li>
                                <li className={'group-hover:bg-slate-700 mr-1 py-[2px] px-2 mb-[2px] text-sm rounded-sm underline'}>MySQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </a>

            <a href="https://github.com/rizal57/mini-e-commerce" target="_blank" rel="noopener noreferrer">
                <div className={'group mb-3 py-4 hover:bg-slate-800 duration-300'}>
                    <div className={'flex gap-3 px-4'}>
                        <div className={'w-44 h-32 flex-shrink-0'}>
                            <img src={network} alt="network" className={'w-full h-full rounded-md object-cover object-left'} />
                        </div>
                        <div>
                            <h1 className={'text-slate-100 font-semibold text-xl'}>Mini E-Commerce</h1>
                            <p className={'text-slate-400 text-base'}>E-commerce sederhana yang terintegrasi dengan Raja Ongkir dan Midtrans</p>
                            <ul className={'flex flex-wrap items-center text-slate-300'}>
                                <li className={'group-hover:bg-slate-700 mr-1 py-[2px] px-2 mb-[2px] text-sm rounded-sm underline'}>Laravel</li>
                                <li className={'group-hover:bg-slate-700 mr-1 py-[2px] px-2 mb-[2px] text-sm rounded-sm underline'}>Livewire</li>
                                <li className={'group-hover:bg-slate-700 mr-1 py-[2px] px-2 mb-[2px] text-sm rounded-sm underline'}>MySQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Portfolio;
