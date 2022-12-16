import foto from './images/bg-white.png';
import { Linkedin, Instagram, GitHub } from 'react-feather';

const About = () => {
    return (
        <div>
            <div className={'container mx-auto lg:py-4'}>
                <div className="py-4">
                    <h1 className={'text-3xl font-bold text-zinc-100 text-center lg:text-left'}>M. Fahrur Rizal</h1>
                    <div className={'mt-8 flex items-center justify-between'}>
                        <div
                            className={
                                'rounded-full w-28 h-28 overflow-hidden mr-10 flex-shrink-0 cursor-pointer hover:shadow-lg hover:shadow-zinc-200/20 hover:scale-[1.01] hover:-rotate-6 duration-300'
                            }>
                            <img src={foto} alt="foto-profil" className={'w-full'} />
                        </div>
                        {/* Social Media */}
                        <div className="text-zinc-100 flex items-center gap-4">
                            <a
                                href={'https://www.linkedin.com/in/fahrur-rizal-0698571b1/'}
                                target={'_blank'}
                                className={
                                    'w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:rotate-12 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/40 ease-out duration-300'
                                }
                                rel="noreferrer">
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={'https://github.com/rizal57'}
                                target={'_blank'}
                                className={
                                    'w-10 h-10 rounded-full bg-[#333] flex items-center justify-center hover:rotate-12 hover:bg-[#252525] hover:shadow-lg hover:shadow-[#252525]/40 ease-out duration-300'
                                }
                                rel="noreferrer">
                                <GitHub size={20} />
                            </a>
                            <a
                                href={'https://www.instagram.com/fahrur_rzl/'}
                                target={'_blank'}
                                className={
                                    'w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:rotate-12 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-600/40 ease-out duration-300'
                                }
                                rel="noreferrer">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={'text-zinc-300'}>
                    <h1 className="font-bold text-base text-zinc-400">Pengen jadi Developer</h1>
                    <p>
                        Lulusan Teknik Informatika Universitas Nusantara PGRI Kediri. Pengen juga jadi konten kreator game di{' '}
                        <a href="https://www.tiktok.com/@joule0507" target={'_blank'} className={'text-blue-500 hover:underline'} rel="noreferrer">
                            TikTok
                        </a>
                        , hobi bermain game.
                    </p>
                    <div className={'mt-4'}>
                        <a
                            href={'mailto:fahrurrzl5798@gmail.com?subject=SendMail&body=Description'}
                            className={
                                'flex items-center gap-2 justify-center bg-zinc-700 py-2 px-4 rounded-full w-full hover:bg-zinc-800 duration-300'
                            }>
                            Sapa saya! 👋
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
