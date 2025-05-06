import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputI from '../components/ui/Common/InputI';

function SignUpPage() {
  
  
 
 
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const validatePassword = () => {
    let isValid = true;
    let passwordErrorMessage = '';
    let confirmPasswordErrorMessage = '';

    if (password.length < 8) {
      isValid = false;
      passwordErrorMessage = 'Password must be at least 8 characters long.';
    }

    if (!/\d/.test(password)) {
      isValid = false;
      passwordErrorMessage = 'Password must contain at least one number.';
    }

    if (password !== confirmPassword) {
      isValid = false;
      confirmPasswordErrorMessage = 'Passwords do not match.';
    }

    setPasswordError(passwordErrorMessage);
    setConfirmPasswordError(confirmPasswordErrorMessage);
    return isValid;
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validatePassword();
  };

  return (
    <div>
      <style>
        {`
          input:focus {outline: none;}
        `}
      </style>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 items-center mx-auto size-[404px] h-[636px] '>
     <div className='w-[274px] h-7 mt-4'> <p className='font-bold text-2xl leading-(125%) tracking-[0.2px] text-custom-grey-900'>
          Sign Up for an Account
        </p>
      </div>
      <div className='flex flex-col items-start p-0 gap-4 w-[404px] h-[200px]'>
       
        <div className='flex items-center gap-3 px-2 py-4 w-[404px] h-[56px] rounded-xl border border-custom-grey-200 self-stretch'>
          <img src='/src/assets/user.png' className='w-6 h-6' alt='user' />
          <InputI
          style={{ outline: 'none' }}
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(username);
              setUsername(e.target.value);
            }}
            className=' w-full'
            placeholder='Username'
          />
         
        </div>
        <div className='flex items-center gap-3 px-2 py-4 w-[404px] h-[56px] rounded-xl border border-custom-grey-200 self-stretch'>
          <img src='/src/assets/mail.svg' className='w-6 h-6' alt='user' />
          <input type='text' className='w-full order-1 ' placeholder='Email' />
        </div>
        <div className=' box-border flex items-center gap-3 px-2 py-4 w-[404px] h-[56px] rounded-xl border border-custom-grey-200 self-stretch'>
          <img src='/src/assets/Group.svg'  className='w-6 h-6' alt='user' />
          
          <input   type={showPassword ? 'text' : 'password'}
            className='w-full'
            
           
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <img onClick={toggleShowPassword} className='w-6 h-7 pr-1' src='/src/assets/eye.svg' alt='' />

        </div>
        {passwordError && <p className='text-red-500'>{passwordError}</p>}
        <div className=' box-border flex items-center gap-3 px-2 py-4 w-[404px] h-[56px] rounded-xl border border-custom-grey-200 self-stretch'>
          <img src='/src/assets/Group.svg'  className='w-6 h-6 ' alt='user' />
          <input
            
          type={showPassword ? 'text' : 'password'}
            className='w-full '
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <img className='w-6 h-7 pr-1' src=' /src/assets/eye.svg' alt='' />
        </div>
        {confirmPasswordError && <p className='text-red-500'>{confirmPasswordError}</p>}
        <p className='font-normal text-[12px] leading-[160%] text-custom-grey-500'>
          Your password must have at least 8 characters
        </p>
        <div className='flex items-start gap-3 w-80 h-9'>
          <input type='checkbox' className='w-5 h-5' />
          <p className='font-normal text-[12px] leading-[160%] text-center text-custom-grey-500 order-1 flex-grow'>
            By creating an account means you agree to the{' '}
            <span className='text-black font-semibold text-[12px] leading-[160%]'>Terms & Conditions </span> and our{' '}
            <span className='text-black font-semibold text-[12px] leading-[160%]'> Privacy Policy </span>
          </p>
        </div>
          <button
            type="submit"
            className='flex justify-center items-center p-2 gap-2 w-[404px] h-[56px] bg-blue-600 rounded-2xl'
          >
            <p className='w-16 h-5 font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white'>Sign Up</p>
          </button>
        
        <div className='flex items-center justify-center gap-4 w-[404px] mt-6'>
          <div className='flex-grow border-t border-custom-grey-200'></div>
          <p className='flex-shrink-0 font-normal text-[12px] leading-[160%] text-center text-custom-grey-500'>
            Or sign up with
          </p>
          <div className='flex-grow border-t border-custom-grey-200'></div>
        </div>
        <div className='flex items-center justify-center p-0 gap-6 w-[404px] h-11'>
                <div className='box-border flex flex-row justify-center items-center p-3 w-24 h-11 border border-custom-grey-200 rounded-lg'>
                    <img src='/src/assets/google.svg' className='w-6 h-6' alt='google' />
                </div>
                <div className='box-border flex flex-row justify-center items-center p-3 w-24 h-11 border border-custom-grey-200 rounded-lg'>
                    <img src='/src/assets/akar-icons_facebook-fill.svg' className='w-6 h-6' alt='facebook' />
                </div>
        </div>
        </div>
      </form></div>
      
   
      
  );
}
export { SignUpPage };