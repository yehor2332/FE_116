import { Outlet } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';
import '../../assets/scss/style.scss';

function Layout () {
    return (
        <>
        <Header />
        <main className="main-wrapper">
            <Outlet />
        </main>
        <Footer />
        </>
    )
}

export default Layout;