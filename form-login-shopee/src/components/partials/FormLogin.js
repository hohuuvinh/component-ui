import styles from './css/FormLogin.module.css';
import React, { useEffect, useState } from 'react';
function FormLoginShopee(props) {
    const [formData, setFormData] = useState({ emailOrPhone: "", password: "" })
    const [hideShowPassword, setHideShowPassword] = useState(false)
    const [errorLogin, setErrorLogin] = useState("")
    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.type == "checkbox" ? target.checked : target.value;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const HideShowPassword = () => {
        setHideShowPassword(!hideShowPassword);
    }

    const submitFormLogin = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div>
            <div className={styles.box_sign_in}>
                <form onSubmit={submitFormLogin}>
                    <p className={styles.text_login}>Log In</p>
                    <div className={styles.box_input_email}>
                        <input name="emailOrPhone" checked={formData.emailOrPhone} onChange={handleChange} type="text" placeholder="Phone number / Username / Email" autoComplete="on" maxLength={128} />
                    </div>
                    <div className={styles.box_input_password}>
                        <input type={hideShowPassword ? "text" : "password"} name="password" checked={formData.password} onChange={handleChange} placeholder="Password" autoComplete="on" maxLength={128} />
                        <div className={styles.box_hide_show_pass}>
                            <div onClick={() => HideShowPassword()}>
                                {
                                    hideShowPassword ?
                                        <svg fill="none" viewBox="0 0 20 12"><path stroke="none" fill="#000" fillOpacity=".54" fillRule="evenodd" d="M19.975 5.823V5.81 5.8l-.002-.008v-.011a.078.078 0 01-.002-.011v-.002a.791.791 0 00-.208-.43 13.829 13.829 0 00-1.595-1.64c-1.013-.918-2.123-1.736-3.312-2.368-.89-.474-1.832-.867-2.811-1.093l-.057-.014a2.405 2.405 0 01-.086-.02L11.884.2l-.018-.003A9.049 9.049 0 0010.089 0H9.89a9.094 9.094 0 00-1.78.197L8.094.2l-.016.003-.021.005a1.844 1.844 0 01-.075.017l-.054.012c-.976.226-1.92.619-2.806 1.09-1.189.635-2.3 1.45-3.31 2.371a13.828 13.828 0 00-1.595 1.64.792.792 0 00-.208.43v.002c-.002.007-.002.015-.002.022l-.002.01V5.824l-.002.014a.109.109 0 000 .013L0 5.871a.206.206 0 00.001.055c0 .01 0 .018.002.027 0 .005 0 .009.003.013l.001.011v.007l.002.01.001.013v.002a.8.8 0 00.208.429c.054.067.11.132.165.197a13.9 13.9 0 001.31 1.331c1.043.966 2.194 1.822 3.428 2.48.974.52 2.013.942 3.09 1.154a.947.947 0 01.08.016h.003a8.864 8.864 0 001.596.16h.2a8.836 8.836 0 001.585-.158l.006-.001a.015.015 0 01.005-.001h.005l.076-.016c1.079-.212 2.118-.632 3.095-1.153 1.235-.66 2.386-1.515 3.43-2.48a14.133 14.133 0 001.474-1.531.792.792 0 00.208-.43v-.002c.003-.006.003-.015.003-.022v-.01l.002-.008c0-.004 0-.009.002-.013l.001-.012.001-.015.001-.019.002-.019a.07.07 0 01-.01-.036c0-.009 0-.018-.002-.027zm-6.362.888a3.823 3.823 0 01-1.436 2.12l-.01-.006a3.683 3.683 0 01-2.178.721 3.67 3.67 0 01-2.177-.721l-.009.006a3.823 3.823 0 01-1.437-2.12l.014-.01a3.881 3.881 0 01-.127-.974c0-2.105 1.673-3.814 3.738-3.816 2.065.002 3.739 1.711 3.739 3.816 0 .338-.047.662-.128.975l.011.009zM8.145 5.678a1.84 1.84 0 113.679 0 1.84 1.84 0 01-3.679 0z" clipRule="evenodd" /></svg>
                                        :
                                        <svg fill="none" viewBox="0 0 20 10" className="stardust-icon stardust-icon-eye-shut _2nnXgl"><path stroke="none" fill="#000" fillOpacity=".54" d="M19.834 1.15a.768.768 0 00-.142-1c-.322-.25-.75-.178-1 .143-.035.036-3.997 4.712-8.709 4.712-4.569 0-8.71-4.712-8.745-4.748a.724.724 0 00-1-.071.724.724 0 00-.07 1c.07.106.927 1.07 2.283 2.141L.631 5.219a.69.69 0 00.036 1c.071.142.25.213.428.213a.705.705 0 00.5-.214l1.963-2.034A13.91 13.91 0 006.806 5.86l-.75 2.535a.714.714 0 00.5.892h.214a.688.688 0 00.679-.535l.75-2.535a9.758 9.758 0 001.784.179c.607 0 1.213-.072 1.785-.179l.75 2.499c.07.321.392.535.677.535.072 0 .143 0 .179-.035a.714.714 0 00.5-.893l-.75-2.498a13.914 13.914 0 003.248-1.678L18.3 6.147a.705.705 0 00.5.214.705.705 0 00.499-.214.723.723 0 00.036-1l-1.82-1.891c1.463-1.071 2.32-2.106 2.32-2.106z" />
                                        </svg>
                                }
                            </div>
                        </div>
                    </div>
                    {
                        errorLogin === "" ?
                            <div className={styles.white_space}>
                            </div> :
                            <div className={styles.box_error}>
                                <div className={styles.icon_error}>
                                    <svg viewBox="0 0 16 16" className="stardust-icon stardust-icon-cross-with-circle _2-4Lck"><path fill="none" stroke="#FF424F" d="M8 15A7 7 0 108 1a7 7 0 000 14z" clipRule="evenodd" /><rect stroke="none" width={7} height="1.5" x="6.061" y={5} fill="#FF424F" rx=".75" transform="rotate(45 6.06 5)" /><rect stroke="none" width={7} height="1.5" fill="#FF424F" rx=".75" transform="scale(-1 1) rotate(45 -11.01 -9.51)" /></svg>
                                </div>
                                <div className={styles.text_error}>
                                    <p>Login failed, please try again later or use another login method</p>
                                </div>
                            </div>
                    }
                    <button disabled={formData.emailOrPhone.length < 8 || formData.password.length < 8} className={formData.emailOrPhone.length > 8 && formData.password.length > 8 ? `${styles.box_button_login} ${styles.enable}` : styles.box_button_login}>
                        <p>LOGIN</p>
                    </button>
                    <p className={styles.forgot_password} onClick={() => props.onChangeActive("forgot-password")}>Forgot Password</p>
                    <p className={styles.login_sms}>Log in with SMS</p>
                    <div className={styles.clear__both} />
                    <div className={styles.display__flex}>
                        <div className={styles.line} />
                        <div className={styles.or_text}>
                            <p>OR</p>
                        </div>
                        <div className={styles.line} />
                    </div>
                    <div className={styles.login_social}>
                        <div className={`${styles.fb_box} ${styles.cursor}`}>
                            <div>
                                <img src="images/icons/ic_fb.png" width="100%" />
                                <p>Facebook</p>
                            </div>
                        </div>
                        <div className={`${styles.gg_box} ${styles.cursor}`}>
                            <div>
                                <img src="images/icons/ic_gg.png" width="100%" />
                                <p>Google</p>
                            </div>
                        </div>
                        <div className={`${styles.ap_box} ${styles.cursor}`}>
                            <div>
                                <img src="images/icons/ic_ap.png" width="100%" />
                                <p>Apple</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.box_sign_up}>
                        <p>New to Shopee?<a> Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormLoginShopee;