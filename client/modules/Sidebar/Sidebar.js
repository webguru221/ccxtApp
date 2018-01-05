import React, { Component } from 'react';

import currencies_icon from './images/currencies_icon-white.png';
import exchanges_icon from './images/exchanges_icon.png';
import watchlist_icon from './images/watchlist_icon.png';
import markets_icon from './images/markets_icon.png';
import portfolio_icon from './images/portfolio_icon.png';
import kitties_icon from './images/kitties_icon.png';
import lights_icon from './images/lights_icon.png';
import usd_icon from './images/usd_icon.png';
import sec_icon from './images/2sec_icon.png';

export class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-1 col-sm-2 col-xs-12 sidebar text-center nopadding">
                <ul className="sidenav side_menu">
                    <li className="droplink">
                        <a href="#">
                            <span>
                                <img src={currencies_icon} className="icon_menu" />
                            </span>
                            <p>Currencies</p>
                        </a>
                    </li>
                    <li className="droplink">
                        <a href="#">
                            <span>
                                <img src={exchanges_icon} className="icon_menu" />
                            </span>
                            <p>Exchanges</p>
                        </a>
                    </li>
                    <li className="droplink">
                        <a href="#">
                            <span>
                                <img src={markets_icon} className="icon_menu" />
                            </span>
                            <p>Markets</p>
                        </a>
                    </li>
                    <li className="droplink">
                        <a href="#">
                            <span>
                                <img src={watchlist_icon} className="icon_menu" />
                            </span>
                            <p>Watchlists</p>
                        </a>
                    </li>
                    <li className="droplink">
                        <a href="#">
                            <span>
                                <img src={portfolio_icon} className="icon_menu" />
                            </span>
                            <p>Portfolio</p>
                        </a>
                    </li>
                    <li className="droplink">
                        <a href="#">
                            <span>
                                <img src={kitties_icon} className="icon_menu" />
                            </span>
                            <p>Kitties</p>
                        </a>
                    </li>
                    <li className="droplink">
                        <a href="#">
                            <span>
                                <img src={lights_icon} className="icon_menu" />
                            </span>
                            <p>Lights</p>
                        </a>
                    </li>
                    <li className="droplink">
                        <a href="#">
                            <span>
                                <img src={usd_icon} className="icon_menu" />
                            </span>
                            <p>USD</p>
                        </a>
                    </li>
                    <li className="droplink">
                        <a href="#">
                            <span>
                                <img src={sec_icon} className="icon_menu" />
                            </span>
                            <p>2 sec</p>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;