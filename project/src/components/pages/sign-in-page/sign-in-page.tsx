import { FormEvent, useRef,useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { loginAction } from '../../../store/actions/api-actions';
import Footer from '../../footer/footer';
import Logo from '../../logo/logo';

export default function SignInPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const {requireAuthorization} = useAppSelector((state) => state.USER);
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const handleSubmitLoginForm = (evt: FormEvent) => {
    evt.preventDefault();
    if (emailInput.current !== null && passwordInput.current !== null) {

      const validPassword = /\S*(\S*([a-zA-Z]\S*[0-9])|([0-9]\S*[a-zA-Z]))\S*/;
      const validEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if(!validEmail.test(emailInput.current.value)) {
        setIsEmailValid(false);
        return;
      }
      setIsEmailValid(true);

      if(!validPassword.test(passwordInput.current.value)) {
        setIsPasswordValid(false);
        return;
      }
      setIsPasswordValid(true);

      dispatch(loginAction({
        email: emailInput.current.value,
        password: passwordInput.current.value,
      }));
    }
  };

  if(requireAuthorization === AuthorizationStatus.Auth) {
    return <Navigate to='/'/>;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmitLoginForm}>
          {!isPasswordValid &&
            <div className="sign-in__message">
              <p>Please enter a valid password. <br /> The password must contain at least one number and one letter. </p>
            </div>}
          {!isEmailValid &&
            <div className="sign-in__message">
              <p>Please enter a valid email address </p>
            </div>}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${!isEmailValid && 'sign-in__field--error'}`}>
              <input ref={emailInput} className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" required />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${!isPasswordValid && 'sign-in__field--error'}`}>
              <input ref={passwordInput} className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" required />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
