import { GitMerge, Hash, Phone } from 'react-feather';
import { NavLink, Route, Routes } from 'react-router-dom';
import Portfolio from './PortfolioPage';
import SkillPage from './SkillPage';

const Navbar = () => {
    return (
        <div className={'container mx-auto w-full'}>
            <div className={'px-4'}>
                <nav className={'flex gap-1 items-center justify-between bg-slate-300 rounded-full my-8 overflow-hidden p-1'}>
                    <NavLink
                        to={'/'}
                        className={
                            'py-3 px-8 w-full flex items-center justify-center rounded-full text-slate-900 hover:bg-slate-600 hover:text-slate-100 font-semibold ease-in-out duration-300'
                        }
                        activeClassName="active">
                        <GitMerge />
                    </NavLink>
                    <NavLink
                        to={'/skills'}
                        className={
                            'py-3 px-8 w-full flex items-center justify-center rounded-full text-slate-900 hover:bg-slate-600 hover:text-slate-100 font-semibold ease-in-out duration-300'
                        }>
                        <Hash />
                    </NavLink>
                    <NavLink
                        to={'/contact'}
                        className={
                            'py-3 px-8 w-full flex items-center justify-center rounded-full text-slate-900 hover:bg-slate-600 hover:text-slate-100 font-semibold ease-in-out duration-300'
                        }>
                        <Phone />
                    </NavLink>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/skills" element={<SkillPage />} />
            </Routes>
        </div>
    );
};

export default Navbar;
