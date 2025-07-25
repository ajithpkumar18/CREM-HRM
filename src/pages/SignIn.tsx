import { useState } from 'react';
import InputI from '../components/ui/Common/InputI';
import axios from 'axios';

import z, { set } from 'zod';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authState } from '../data/atom';
import { replace, useNavigate } from 'react-router';


const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character");


export default function SignInPage() {

  const navigate = useNavigate()
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const setAuthState = useSetRecoilState(authState);




  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  const validatePassword = () => {
    const result = passwordSchema.safeParse(password)
    const error = result.error?.issues[0]?.message || 'Invalid password';
    if (!result.success) {
      setPasswordError(error);
      return false;
    }
    return true;

  };

  const emailSchema = z.object({
    email: z.string().email('Invalid email address'),
  });


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validatePassword()) {
      axios.post('http://localhost:3001/hr/signin', {
        identifier: user,
        password
      }, {
        withCredentials: true
      })
        .then((response) => {
          if (response.status === 200) {
            alert(response.status)
            console.log(response.data)
            setAuthState(c => c = response.data);
            console.log('User logged in successfully', authState);

            navigate('/dashboard', { replace: true });

            localStorage.setItem('user', JSON.stringify(response.data));
          }
        })
        .catch((error) => {
          console.error('Error logging in', error);
        });
    };
  }
  return (
    <div>
      <style>
        {`
          input:focus {outline: none;}
        `}
      </style>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 items-center mx-auto size-[404px] h-[636px] '>
        <div className='w-[274px] h-7 mt-4 flex items-center justify-center'> <p className='font-bold text-2xl leading-(125%) tracking-[0.2px] text-custom-grey-900'>
          Sign In
        </p>
        </div>
        <div className='flex flex-col items-start p-0 gap-4 w-[404px] h-[200px]'>

          <div className='flex items-center gap-3 px-2 py-4 w-[404px] h-[56px] rounded-xl border border-custom-grey-200 self-stretch'>
            <img src='/src/assets/user.png' className='w-6 h-6' alt='user' />
            <InputI
              style={{ outline: 'none' }}
              type='text'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(user);
                setUser(e.target.value);
              }}
              className=' w-full'
              placeholder='Username or Email'
            />

          </div>
          <div className=' box-border flex items-center gap-3 px-2 py-4 w-[404px] h-[56px] rounded-xl border border-custom-grey-200 self-stretch'>
            <img src='/src/assets/Group.svg' className='w-6 h-6' alt='user' />

            <input type={showPassword ? 'text' : 'password'}
              className='w-full'


              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <img onClick={toggleShowPassword} className='w-6 h-7 pr-1' src='/src/assets/eye.svg' alt='' />

          </div>
          {passwordError && <p className='text-red-500'>{passwordError}</p>}
          <p className='font-normal text-[12px] leading-[160%] text-custom-grey-500'>
            Your password must have at least 8 characters
          </p>
          {/* <div className='flex items-start gap-3 w-80 h-9'>
            <input type='checkbox' className='w-5 h-5' />
            <p className='font-normal text-[12px] leading-[160%] text-center text-custom-grey-500 order-1 flex-grow'>
              By creating an account means you agree to the{' '}
              <span className='text-black font-semibold text-[12px] leading-[160%]'>Terms & Conditions </span> and our{' '}
              <span className='text-black font-semibold text-[12px] leading-[160%]'> Privacy Policy </span>
            </p>
          </div> */}
          <button
            type="submit"
            className='flex justify-center items-center p-2 gap-2 w-[404px] h-[56px] bg-blue-600 rounded-2xl'
          >
            <p className='w-16 h-5 font-bold text-[16px] leading-[140%] tracking-[0.2px] text-white'>Sign In</p>
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



  )
}