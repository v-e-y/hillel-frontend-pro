import './Login.css';
import logo from '../../../../assets/images/logo/logo-base.svg';
import Card from '../Card/Card';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';

/**
 * Cmp Login
 * @module Login
 */
const Login = () => {
    
    const handleLogin = async (e) => {
        // TODO: impl
    };
    
    return (
        <div className='w-100 h-100 bg-success bg-gradient'>
            <div className='row align-items-center h-100'>
                <div className='col-12 col-sm-8 col-md-6 col-lg-4 mx-auto'>
                    <Card className="p-5">
                        <div className='text-center mb-5'>
                            <img src={logo} alt='logo' className='img-fluid w-75' />
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
                            <div className='mb-5'>
                                <Input 
                                    id='password' 
                                    type='password' 
                                    placeholder="Password" 
                                    required 
                                    className="bg-light form-control-lg border-0 rounded-0 py-3"
                                />
                            </div>
                            <Button type='submit' text='Login' size='lg' color='success' className="w-100 rounded-0" />
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;