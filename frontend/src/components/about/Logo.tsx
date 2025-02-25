import {Image} from "antd";
import logo1 from "../../assets/logo1.jpg";
import logo from "../../assets/logo.png";
import {useNavigate} from "react-router-dom";
import "./Logo.scss"

function Logo() {

    const navigate = useNavigate();
    return (
        <>
            <div className="logo-container" onClick={() => navigate("/")}>
                <Image src={logo1} alt="Logo" className="logo" preview={false}/>
                <Image
                    src={logo}
                    alt="Logo"
                    className="logo"
                    style={{width: 108}}
                    preview={false}
                />
            </div>
        </>
    )
}

export default Logo;