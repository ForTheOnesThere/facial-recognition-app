import React from 'react';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignIn = () => {
        fetch('https://intense-mountain-61371.herokuapp.com/signin', {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
						email: this.state.signInEmail,
						password: this.state.signInPassword
					})
				})
				.then(res => res.json())
				.then(user => {
					if (user.id){
						this.props.loadUser(user);
						this.props.changeRoute('home');
					}
				})   
    }

    render(){

    const { changeRoute } = this.props;

    return(
        <div>     
            <article className="br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    onChange={this.onEmailChange} 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                    onChange={this.onPasswordChange} />
                            </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={() => this.onSubmitSignIn()}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Sign In" 
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p onClick={() => changeRoute('register')} 
                            href="#0" 
                            className="f6 link dim black db">Create Account
                            </p>
                        </div>
                    </div>
                </main>
            
            </article>
            {window.innerWidth < 1000
            ?   console.log('Small screen')
            :   (<div>
                    <p className='ba br-pill' style={{margin: '5%', padding: '25px'}}>
                    To give the app a spin, use the email 'test@test.com', and the password 'test'. Or, create an account. Don't worry, you can use random details, make them as silly as you like!
                    </p>
                </div>)
            }
           
            
        </div>
    ) 
    }   
}

export default SignIn;