import React, { useEffect, useState } from 'react';
import FormVerifySMS from '../partials/FormVerifySMS';
import FormLogin from './../partials/FormLogin';
import FormReset from './../partials/FormReset';

function FormLoginShopee(props) {
    const [active,setActive] = useState("login-form")

    const onChangeActive = (type)=>{
        setActive(type)
    }
    return (
        <div>
        {
            active==="login-form"?<FormLogin onChangeActive={onChangeActive}/>:""
        }
        {
            active==="forgot-password"?<FormReset  onChangeActive={onChangeActive}/>:""
        }   

        {/* <FormVerifySMS/> */}
        </div>
    );
}

export default FormLoginShopee;