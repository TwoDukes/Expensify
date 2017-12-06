import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const LoginPage = ({ startGoogleLogin, startFacebookLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control</p>
      <button className="button button--login" onClick={startGoogleLogin}>Login with Google</button>
      <button className="button button--login" onClick={startFacebookLogin}>Login with Facebook</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startLogin('google')),
  startFacebookLogin: () => dispatch(startLogin('facebook')),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
