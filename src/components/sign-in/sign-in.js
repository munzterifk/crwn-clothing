import React from 'react';

import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {signInWithGoogle} from '../../firebase/firebase.utils';

export default class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return (
            <div className="sign-in">
                <h2 className='title'>I already have an account</h2>
                <span>Sign with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        type="email" 
                        name="email" 
                        label='Email'
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required 
                    />

                    <FormInput 
                        type="password" 
                        name="password" 
                        label="Password"
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required 
                    />
                    
                    <div className="buttons">
                        <CustomButton type="submit" >
                            Submit Form
                        </CustomButton> 

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign-in with Google
                        </CustomButton> 
                    </div>

                </form>
            </div>
        )
    }
}