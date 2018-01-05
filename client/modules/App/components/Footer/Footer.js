import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div className="footer clearfix">
      <div className="col-md-12 col-sm-12 col-xs-12 social_icons text-center">
        <div className="col-md-2 col-sm-2 col-xs-12 col-md-offset-2">
          <div className="facebook">
            <a className="social_link" href="#">
              <i className="fa fa-facebook social_icon" aria-hidden="true"></i>groups/livecoinwatch</a>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-12">
          <div className="facebook">
            <a className="social_link" href="#">
              <i className="fa fa-twitter social_icon" aria-hidden="true"></i>@LiveCoinWatch</a>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-12">
          <div className="facebook">
            <a className="social_link" href="#">
              <i className="fa fa-reddit-alien social_icon" aria-hidden="true"></i>r/Livecoinwatch</a>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-12">
          <div className="facebook">
            <a className="social_link" href="#">
              <i className="fa fa-location-arrow social_icon" aria-hidden="true"></i>livecoinwatch</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
