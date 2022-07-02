import styles from './css/FormReset.module.css';
import React, { useState } from 'react';
function FormReset(props) {
    const [emailOrPhone, setEmailOrPhone] = useState("")
    const [errorReset, setErrorReset] = useState("")
    const handleChange = event => {
        const target = event.target;
        const value = target.value;
        setEmailOrPhone(value)
    }
    const submitFormLogin = (e) => {
        e.preventDefault();
        console.log(emailOrPhone)
    }
    return (
        <div>
            <div className={styles.box_sign_in}>
                <form onSubmit={submitFormLogin}>
                    <div className={`${styles.cursor} ${styles.back_icon}`} onClick={()=> props.onChangeActive("login-form")}>
                        <svg fill="#2aaf62" viewBox="0 0 22 17" className="stardust-icon stardust-icon-back-arrow yGpYhu"><g stroke="none" strokeWidth={1} fillRule="evenodd" transform="translate(-3, -6)"><path d="M5.78416545,15.2727801 L12.9866648,21.7122915 C13.286114,22.0067577 13.286114,22.4841029 12.9866648,22.7785691 C12.6864297,23.0738103 12.200709,23.0738103 11.9004739,22.7785691 L3.29347136,15.0837018 C3.27067864,15.0651039 3.23845445,15.072853 3.21723364,15.0519304 C3.06240034,14.899273 2.99480814,14.7001208 3.00030983,14.5001937 C2.99480814,14.3002667 3.06240034,14.1003396 3.21723364,13.9476821 C3.23845445,13.9275344 3.2714646,13.9345086 3.29425732,13.9166857 L11.9004739,6.22026848 C12.200709,5.92657717 12.6864297,5.92657717 12.9866648,6.22026848 C13.286114,6.51628453 13.286114,6.99362977 12.9866648,7.288096 L5.78416545,13.7276073 L24.2140442,13.7276073 C24.6478918,13.7276073 25,14.0739926 25,14.5001937 C25,14.9263948 24.6478918,15.2727801 24.2140442,15.2727801 L5.78416545,15.2727801 Z" /></g></svg>
                    </div>
                    <p className={styles.text_reset}>Reset Password</p>
                    <div className={styles.clear__both} />
                    <div className={styles.box_input_email}>
                        <input value={emailOrPhone} onChange={handleChange} type="text" placeholder="Phone number / Username / Email" autoComplete="on" maxLength={128} />
                    </div>
                    {errorReset === ""
                        ?
                        <div className={styles.white_space}>
                        </div>
                        :
                        <div className={styles.box_error}>
                            <div className={styles.icon_error}>
                                <svg viewBox="0 0 16 16" className="stardust-icon stardust-icon-cross-with-circle _2-4Lck"><path fill="none" stroke="#FF424F" d="M8 15A7 7 0 108 1a7 7 0 000 14z" clipRule="evenodd" /><rect stroke="none" width={7} height="1.5" x="6.061" y={5} fill="#FF424F" rx=".75" transform="rotate(45 6.06 5)" /><rect stroke="none" width={7} height="1.5" fill="#FF424F" rx=".75" transform="scale(-1 1) rotate(45 -11.01 -9.51)" /></svg>
                            </div>
                            <div className={styles.text_error}>
                                <p>reset failed, please try again later or use another reset method</p>
                            </div>
                        </div>
                    }
                    <button disabled={emailOrPhone.length < 10} className={emailOrPhone.length>9?`${styles.box_button_reset} ${styles.enable}` : styles.box_button_reset} >
                        <p>NEXT</p>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormReset;