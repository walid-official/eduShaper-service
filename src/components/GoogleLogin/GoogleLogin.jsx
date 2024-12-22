import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const GoogleLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log("Error is :", error);
        })
    }
    return (
        <div>
             <div className="divider">OR</div>
             <div className="">
                <button type='button' onClick={handleGoogleSignIn} className='btn bg-gradient-to-r from-[#8e67f1] to-[#8e67f1ae] w-full text-white'>Continue With Google</button>
             </div>
        </div>
    );
};

export default GoogleLogin;