import network from './images/portfolio/network.png';
import ecommerce from './images/portfolio/ecommerce.png';

const Portfolio = () => {
    return (
        <div>
            <a
                href={'https://github.com/rizal57/network'}
                target={'_blank'}
                rel="noopener noreferrer"
                className={'border-b border-b-zinc-500 block my-3'}>
                <div className={'group mb-3 py-4 hover:bg-zinc-800 duration-300 rounded-md'}>
                    <div className={'flex gap-3 px-4 flex-col lg:flex-row'}>
                        <div className={'lg:w-64 w-full flex-shrink-0 overflow-hidden rounded-md'}>
                            <img
                                src={network}
                                alt="network"
                                className={'w-full h-full rounded-md object-cover lg:group-hover:scale-105 duration-300'}
                            />
                        </div>
                        <div>
                            <h1 className={'text-zinc-100 font-semibold text-xl'}>Network</h1>
                            <p className={'text-zinc-400 text-base'}>Aplikasi sederhana untuk memperluas pertemanan secara online</p>
                            <ul className={'flex flex-wrap items-center text-zinc-300'}>
                                <li className={'group-hover:bg-zinc-700 mr-1 py-[2px] px-2 mb-[2px] text-sm rounded-sm underline'}>TALL Stack</li>
                                <li className={'group-hover:bg-zinc-700 mr-1 py-[2px] px-2 mb-[2px] text-sm rounded-sm underline'}>MySQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </a>

            <a
                href="https://github.com/rizal57/mini-e-commerce"
                target="_blank"
                rel="noopener noreferrer"
                className={'border-b border-b-zinc-500 block my-3'}>
                <div className={'group mb-3 py-4 hover:bg-zinc-800 duration-300 rounded-md'}>
                    <div className={'flex gap-3 px-4 flex-col lg:flex-row'}>
                        <div className={'lg:w-64 w-full flex-shrink-0 overflow-hidden rounded-md'}>
                            <img
                                src={ecommerce}
                                alt="network"
                                className={'w-full h-full rounded-md object-cover lg:group-hover:scale-105 duration-300'}
                            />
                        </div>
                        <div>
                            <h1 className={'text-zinc-100 font-semibold text-xl'}>Mini E-Commerce</h1>
                            <p className={'text-zinc-400 text-base'}>E-commerce sederhana yang terintegrasi dengan Raja Ongkir dan Midtrans</p>
                            <ul className={'flex flex-wrap items-center text-zinc-300'}>
                                <li className={'group-hover:bg-zinc-700 mr-1 py-[2px] px-2 mb-[2px] text-sm rounded-sm underline'}>Laravel</li>
                                <li className={'group-hover:bg-zinc-700 mr-1 py-[2px] px-2 mb-[2px] text-sm rounded-sm underline'}>Livewire</li>
                                <li className={'group-hover:bg-zinc-700 mr-1 py-[2px] px-2 mb-[2px] text-sm rounded-sm underline'}>MySQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Portfolio;
