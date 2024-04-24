import '../styles/LoginSignPage.css';
import background from '../assets/login_join_background.jpg';

const LoginPage = () => {
    return (
        <div className="popup">
            <div className="cotn_principal">
                <div className="cont_centrar">
                    <div className="cont_login">
                        <div className="cont_info_log_sign_up">
                            <div className="col_md_login">
                                <div className="cont_ba_opcitiy">
                                    <h2>LOGIN</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                    <button
                                        className="btn_login"
                                        onclick="change_to_login()"
                                    >
                                        LOGIN
                                    </button>
                                </div>
                            </div>
                            <div className="col_md_sign_up">
                                <div className="cont_ba_opcitiy">
                                    <h2>SIGN UP</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                    <button
                                        className="btn_sign_up"
                                        onclick="change_to_sign_up()"
                                    >
                                        SIGN UP
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cont_back_info">
                            <div className="cont_img_back_grey">
                                <img src={background} alt="" />
                            </div>
                        </div>
                        <div className="cont_forms">
                            <div className="cont_img_back_">
                                <img src={background} alt="" />
                            </div>

                            <div className="cont_form_login">
                                <a
                                    href="#"
                                    onclick="hidden_login_and_sign_up()"
                                >
                                    <i className="material-icons">&#xE5C4;</i>
                                </a>
                                <h2>LOGIN</h2>
                                <input type="text" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button
                                    className="btn_login"
                                    onclick="change_to_login()"
                                >
                                    LOGIN
                                </button>
                            </div>

                            <div className="cont_form_sign_up">
                                <a
                                    href="#"
                                    onclick="hidden_login_and_sign_up()"
                                >
                                    <i className="material-icons">&#xE5C4;</i>
                                </a>
                                <h2>SIGN UP</h2>
                                <input type="text" placeholder="Email" />
                                <input type="text" placeholder="User" />
                                <input type="password" placeholder="Password" />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                />
                                <button
                                    className="btn_sign_up"
                                    onclick="change_to_sign_up()"
                                >
                                    SIGN UP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup_close"></div>
        </div>
    );
};

export { LoginPage };
