import { GitMerge, Hash, Home } from 'react-feather';
import { NavLink, Route, Routes } from 'react-router-dom';
import Portfolio from './PortfolioPage';
import SkillPage from './SkillPage';
import HomePage from './Home';

const Navbar = () => {
    return (
        <div className={'w-full'}>
            <div>
                <nav className={'flex gap-1 items-center justify-between bg-zinc-500 rounded-full my-8 overflow-hidden p-1'}>
                    <NavLink
                        to={'/'}
                        className={
                            'py-3 px-8 w-full flex items-center justify-center rounded-full text-zinc-900 hover:bg-zinc-600 hover:text-zinc-100 font-semibold ease-in-out duration-300'
                        }>
                        <Home />
                    </NavLink>
                    <NavLink
                        to={'/portfolio'}
                        className={
                            'py-3 px-8 w-full flex items-center justify-center rounded-full text-zinc-900 hover:bg-zinc-600 hover:text-zinc-100 font-semibold ease-in-out duration-300'
                        }
                        activeClassName="active">
                        <GitMerge />
                    </NavLink>
                    <NavLink
                        to={'/skills'}
                        className={
                            'py-3 px-8 w-full flex items-center justify-center rounded-full text-zinc-900 hover:bg-zinc-600 hover:text-zinc-100 font-semibold ease-in-out duration-300'
                        }>
                        <Hash />
                    </NavLink>
                </nav>
            </div>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/skills" element={<SkillPage />} />
            </Routes>
        </div>
    );
};

export default Navbar;
