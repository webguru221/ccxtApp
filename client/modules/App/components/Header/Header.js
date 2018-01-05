import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );

  return (
    <header className="header">
      <div className="row clearfix">
        <div className="col-md-5 col-sm-3 col-xs-12">
          <h1 className="logo">LOGO <span className="logo yellow"> HERE</span></h1>
        </div>
        <div className="col-md-7 col-sm-9 col-xs-12 margin-top">
          <div className="row clearfix">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <form>
                <div className="input-group">
                  <input type="text" className="form-control search_box" placeholder="Search currencies" />
                  <div className="input-group-btn">
                    <button className="btn btn-default search_button" type="submit">
                      <i className="fa fa-search light-color" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-12">
              <div className="login-button margin-top">
                <a className="login-button" href="#">LOGIN</a>
              </div>
            </div>
            <div className="col-md-4 col-sm-3 col-xs-12 no">
              <div className="signup-button margin-top">
                <a className="signup-button" href="#">SIGN UP FREE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header >
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
