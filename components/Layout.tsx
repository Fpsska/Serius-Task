import Header from './Header';
import Footer from './Footer';

// /. imports

const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
