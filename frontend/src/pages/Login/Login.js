import './Login.css';
import Card from './components/Card/Card';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import { IoIosEye } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import React from 'react';


/**
 * Cmp Login
 * @module Login
 */
const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleLogin = async (e) => {
        // TODO: impl
    };
    
    return (
        <div className='w-100 h-100'>
            <div className='row align-items-center h-100'>
                <div className='col-12 col-sm-8 col-md-6 col-lg-4 mx-auto'>
                    <Card className="p-5">
                        <div className='text-center mb-5'>
                            <Logo />
                        </div>
                        <form onSubmit={handleLogin} className='pb-5'>
                            <div className='mb-5'>
                                <Input 
                                    id='userName' 
                                    type='text' 
                                    placeholder="User Name" 
                                    required  
                                    className="bg-light form-control-lg border-0 rounded-0 py-3" 
                                />
                            </div>
                            <div className='mb-5 position-relative'>
                                <Input 
                                    id='password' 
                                    type={showPassword ? 'text' : 'password'}
                                    icon={
                                        showPassword 
                                            ? <FaRegEyeSlash 
                                                className='fs-3 text-success' 
                                                onClick={handleClickShowPassword}
                                            />
                                            : <IoIosEye 
                                                className='fs-3 text-success' 
                                                onClick={handleClickShowPassword}
                                            /> 
                                        }
                                    placeholder="Password" 
                                    required 
                                    className="bg-light form-control-lg border-0 rounded-0 py-3"
                                />
                                <div
                                    type='button'
                                    className='pe-2 position-absolute end-0 top-50 translate-middle-y cursor-pointer'
                                >
                                    <IoIosEye className='fs-3 text-success' />
                                </div>
                            </div>
                            <Button 
                                type='submit' 
                                text='Login' 
                                size='lg' 
                                color='success' 
                                className="w-100 rounded-0" 
                            />
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;