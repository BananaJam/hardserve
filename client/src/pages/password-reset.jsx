import { useParams } from 'react-router-dom';
import { useRef, useState } from 'react';

export default function PasswordReset() {

    const { uid, token } = useParams();
    const passwdRef = useRef();
    const [errors, setErrors] = useState("");


    function validatePassword() {
        if (passwdRef.current.value.length < 8) {
            setErrors('Password must be at least 8 characters long');
            return false;
        }
        return true;
    }

    function resetPassword() {
        if (validatePassword()) {
            fetch(`http://localhost:8000/api/accounts/password-reset-confirm/${uid}/${token}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    new_password: passwdRef.current.value,
                }),
            })
        }
    }

    
    return (
        <main className='flex items-center justify-center bg-gray-300'>
            <div className='flex flex-col items-center max-w-full px-8 py-4 bg-gray-100 rounded-md shadow-md w-96'>
                <h1 className='mb-4 text-2xl font-bold'>Password Reset</h1>
                <input className='mb-1 bg-white' type="password" placeholder="New Password" />
                <p className='mb-6 text-sm text-red-500'>{errors}</p>
                <button onClick={resetPassword} ref={passwdRef} className='px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700'>Reset Password</button>
            </div>
        </main>
    );
}