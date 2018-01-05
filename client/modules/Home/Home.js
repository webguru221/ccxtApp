import React, { Component } from 'react';

import Sidebar from '../Sidebar/Sidebar'
import xme from '../Sidebar/images/xme.png';
import ADA from '../Sidebar/images/ADA.png';
import POWR from '../Sidebar/images/POWR.png';
import BNB from '../Sidebar/images/BNB.png';
import MCO from '../Sidebar/images/MCO.png';
import bit_coin from '../Sidebar/images/bit_coin.png';
import Ethereum from '../Sidebar/images/Ethereum.png';
import IOTA from '../Sidebar/images/IOTA.png';
import Ripple from '../Sidebar/images/Ripple.png';
import Dash from '../Sidebar/images/Dash.png';
import Litecoin from '../Sidebar/images/Litecoin.png';
import BTG from '../Sidebar/images/BTG.png';
import Cardano from '../Sidebar/images/Cardano.png';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markets: [
        {
          id: 1,
          coin: {
            image: bit_coin,
            name: 'Bit coin',
            symbol: 'BTC'
          },
          market_cap: '$292,917,848,069',
          price: '$17,501.43',
          volume: '$15,680,320,055',
          circulating: '16,727,350',
          hour: '2.86%',
          day: '16.02%',
          week: '#'
        },
        {
          id: 2,
          coin: {
            image: Ethereum,
            name: 'Ethereum',
            symbol: 'ETH'
          },
          market_cap: '$292,917,848,069',
          price: '$17,501.43',
          volume: '$15,680,320,055',
          circulating: '16,727,350',
          hour: '2.86%',
          day: '16.02%',
          week: '#'
        },
        {
          id: 3,
          coin: {
            image: Ripple,
            name: 'Ripple',
            symbol: 'XRP'
          },
          market_cap: '$292,917,848,069',
          price: '$17,501.43',
          volume: '$15,680,320,055',
          circulating: '16,727,350',
          hour: '2.86%',
          day: '16.02%',
          week: '#'
        }
      ]
    }
  }

  render() {

    return (
      <div className="content">
        <div className="row-fluid clearfix">
          <Sidebar />
          <div className="col-md-11">
            <div className="row clearfix">
              <div className="filers col-md-9 col-sm-9 col-xs-6">
                <div className="col-md-2 col-sm-6 col-xs-12">
                  <div className="layout-button margin-top">
                    <a className="layout-button" href="#">
                      <span>
                        <i className="fa fa-list" aria-hidden="true"></i>
                      </span>&nbsp;Layout</a>
                  </div>
                </div>
                <div className="col-md-2 col-sm-6 col-xs-12 nopadding">
                  <div className="filters-button margin-top">
                    <a className="filters-button" href="#">
                      <span>
                        <i className="fa fa-filter" aria-hidden="true"></i>
                      </span> &nbsp; 0 Filters</a>
                  </div>
                </div>
                <div className="right_fillter col-md-6 col-sm-9 col-xs-12 pull-right">
                  <div className="search col-md-8 col-sm-6 col-xs-12 pull-right nopadding">
                    <form>
                      <div className="input-group">
                        <input type="text" className="form-control search_box" placeholder="Search" />
                        <div className="input-group-btn">
                          <button className="btn btn-default search_button" type="submit">
                            <i className="fa fa-search light-color" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="filers col-md-3 col-sm-3 col-xs-6">
                <div className="col-md-6 news_fillter pull-left nopadding">
                  <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle news_fillter" type="button" data-toggle="dropdown">All News
                    <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">All News</a>
                      </li>
                      <li>
                        <a href="#">Top News</a>
                      </li>
                      <li>
                        <a href="#">Latest News</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 search pull-right">
                  <form>
                    <div className="input-group">
                      <input type="text" className="form-control search_box" placeholder="Search" />
                      <div className="input-group-btn">
                        <button className="btn btn-default search_button" type="submit">
                          <i className="fa fa-search light-color" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-md-9 col-sm-9 col-xs-12">
                <div className="col-md-12 col-sm-12 col-xs-12  coin_table table-responsive">
                  <table className="table table-striped detail_table">
                    <thead className="heading_yellow heading_box">
                      <tr>
                        <th className="">#</th>
                        <th>COIN</th>
                        <th>Market Cap</th>
                        <th>Price</th>
                        <th>Volume (24h)</th>
                        <th>Circulating</th>
                        <th>1h</th>
                        <th>24h</th>
                        <th>Weekly</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.markets.map((market, index) => {
                        return (
                          <tr key={index} className="gry-bg-tr border-gry padding_top text-align">
                            <td>{market.id}</td>
                            <td>
                              <div className="row-fluid clearfix">
                                <div className="col-md-4 nopadding">
                                  <img src={market.coin.image} className="img-responsive" />
                                </div>
                                <div className="col-md-8 nopadding">
                                  <p>{market.coin.name}</p>
                                  <p>{market.coin.symbol}</p>
                                </div>
                              </div>
                            </td>
                            <td>{market.market_cap}</td>
                            <td>{market.price}</td>
                            <td>{market.volume}</td>
                            <td>{market.circulating}</td>
                            <td>{market.hour}</td>
                            <td>{market.day}</td>
                            <td>{market.week}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-12 all_news">
                <div className="coin-detail_box1 box_bg">
                  <div className="social-box">
                    <div className="heading_box ">
                      <h2 className="heading_yellow">Twitter</h2>
                    </div>
                  </div>
                  <div className="coin_detail_1 col-md-12 col-sm-12 col-xs-12 border_bottom padding_middle ">
                    <div className="col-md-2 col-sm-5 col-xs-12 ">
                      <img src={xme} className="img_coin" />
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-12 ">
                      <p className="coin-name">XEM</p>
                      <a className="detail-button" href="#">DETAILS</a>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                      <div className="button-buy">
                        <a className="button_buy" href="#">BUY</a>
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>
                  <div className="coin_detail_box-2 col-md-12 col-sm-12 col-xs-12 border_bottom padding_middle ">
                    <div className="col-md-2 col-sm-5 col-xs-12">
                      <img src={ADA} className="img_coin" />
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-12 ">
                      <p className="coin-name">ADA</p>
                      <a className="detail-button" href="#">DETAILS</a>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                      <div className="button-buy">
                        <a className="button_buy" href="#">BUY</a>
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>
                  <div className="coin_detail_3 col-md-12 col-sm-12 col-xs-12 border_bottom padding_middle ">
                    <div className="col-md-2 col-sm-5 col-xs-12">
                      <img src={POWR} className="img_coin" />
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-12">
                      <p className="coin-name">POWR</p>
                      <a className="detail-button" href="#">DETAILS</a>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                      <div className="button-buy">
                        <a className="button_buy" href="#">BUY</a>
                      </div>
                    </div>
                  </div>
                  <div className="clear">
                  </div>
                  <div className="coin_detail_4 col-md-12 col-sm-12 col-xs-12 border_bottom padding_middle ">
                    <div className="col-md-2 col-sm-5 col-xs-12">
                      <img src={BNB} className="img_coin" />
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-12">
                      <p className="coin-name">BNB</p>
                      <a className="detail-button" href="#">DETAILS</a>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                      <div className="button-buy">
                        <a className="button_buy" href="#">BUY</a>
                      </div>
                    </div>
                  </div>
                  <div className="clear">
                  </div>
                </div>
                <div className="coin_detail_box-2 box_bg margin_30 nopadding">
                  <div className="social-box">
                    <div className="heading_box ">
                      <h2 className="heading_yellow">Volume</h2>
                    </div>
                  </div>
                  <div className="coin_detail_2 col-md-12 col-sm-12 col-xs-12 border_bottom padding_middle ">
                    <div className="col-md-2 col-sm-5 col-xs-12 ">
                      <img src={MCO} className="img_coin" />
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-12">
                      <p className="coin-name">MCO</p>
                      <a className="detail-button" href="#">DETAILS</a>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                      <div className="button-buy">
                        <a className="button_buy" href="#">BUY</a>
                      </div>
                    </div>
                  </div>
                  <div className="clear">
                  </div>
                </div>
                <div className="news_fillter">

                  <div className="news_box newsbox_bg margin_30 nopadding">
                    <div className="news_2 col-md-12 col-sm-12 col-xs-12  border_bottom padding_11">
                      <div className="col-md-2 col-sm-2 col-xs-12 news_timg right_border padding-left ">
                        <p className="news_timingtext">11 min</p>
                      </div>
                      <div className="col-md-10 col-sm-10 col-xs-12 news_timg">
                        <p className="news_text">Bitcoiners Increasingly Targeted by Police as Prices Yield Large Asset Forfeiture Gains</p>
                      </div>
                    </div>
                    <div className="clear">
                    </div>

                    <div className="news_2 col-md-12 col-sm-12 col-xs-12  border_bottom padding_11 ">
                      <div className="col-md-2 col-sm-2 col-xs-12 news_timg right_border padding-left ">
                        <p className="news_timingtext">11 min</p>
                      </div>
                      <div className="col-md-10 col-sm-10 col-xs-12 news_timg">
                        <p className="news_text">Bitcoiners Increasingly Targeted by Police as Prices Yield Large Asset Forfeiture Gains</p>
                      </div>
                    </div>
                    <div className="clear">
                    </div>
                    <div className="news_3 col-md-12 col-sm-12 col-xs-12 border_bottom padding_11 ">
                      <div className="col-md-2 col-sm-2 col-xs-12 news_timg right_border padding-left">
                        <p className="news_timingtext">11 min</p>
                      </div>
                      <div className="col-md-10 col-sm-10 col-xs-12 news_timg">
                        <p className="news_text">Bitcoiners Increasingly Targeted by Police as Prices Yield Large Asset Forfeiture Gains</p>
                      </div>
                    </div>
                    <div className="clear">
                    </div>
                    <div className="news_4 col-md-12 col-sm-12 col-xs-12  border_bottom padding_11">
                      <div className="col-md-2 col-sm-2 col-xs-12 news_timg right_border padding-left ">
                        <p className="news_timingtext">11 min</p>
                      </div>
                      <div className="col-md-10 col-sm-10 col-xs-12 news_timg">
                        <p className="news_text">Bitcoiners Increasingly Targeted by Police as Prices Yield Large Asset Forfeiture Gains</p>
                      </div>
                    </div>
                    <div className="clear">
                    </div>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
