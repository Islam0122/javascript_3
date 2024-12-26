import Header from "./header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./footer/Footer.jsx"
import LoginModal from "../login-modal/LoginModal.jsx";
import KodModal from "../login-modal/KodModal.jsx";
import {useState} from "react";

const Layout = () => {
    // state
    const [showModal, setShowModal] = useState('');

    // if else, switch case ? :
    return (
        <div>
            <Header setShowModal={setShowModal}/>
            <Outlet/>
            {showModal === 'login' ?  <LoginModal setShowModal={setShowModal}/> : null }
            {showModal === 'kod' ?  <KodModal setShowModal={setShowModal}/> : null }
            {/*{showModal === 'password' ?  <PasswordModal setShowModal={setShowModal}/> : null }*/}
            <Footer/>
            {/*<KodModal/>*/}

        </div>
    );
};

export default Layout;