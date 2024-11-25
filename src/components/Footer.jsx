

import Logo from "../assets/logo.png";
import "../components/footer.css";


function footer() {
    return (
        <>
            <div className="footer">
                <img src={Logo} alt="Logo picture" />
                <p>2023 Jigsaaw. All rights reserved.</p>
            </div>
        </>

    );


}

export default footer;