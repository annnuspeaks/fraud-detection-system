import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PageContainer from "../PageContainer/PageContainer";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <PageContainer>
                {children}
            </PageContainer>
            <Footer />
        </>
    );
}

export default Layout;