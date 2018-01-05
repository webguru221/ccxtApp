import React, { Component } from 'react';

import xme from '../App/images/xme.png';
import ADA from '../App/images/ADA.png';
import POWR from '../App/images/POWR.png';
import BNB from '../App/images/BNB.png';
import MCO from '../App/images/MCO.png';
import bit_coin from '../App/images/bit_coin.png';
import Ethereum from '../App/images/Ethereum.png';
import IOTA from '../App/images/IOTA.png';
import Ripple from '../App/images/Ripple.png';
import Dash from '../App/images/Dash.png';
import Litecoin from '../App/images/Litecoin.png';
import BTG from '../App/images/BTG.png';
import Cardano from '../App/images/Cardano.png';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
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
        }, {
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
        }, {
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
        }, {
          id: 4,
          coin: {
            image: IOTA,
            name: 'IOTA',
            symbol: 'MIOTA'
          },
          market_cap: '$292,917,848,069',
          price: '$17,501.43',
          volume: '$15,680,320,055',
          circulating: '16,727,350',
          hour: '2.86%',
          day: '16.02%',
          week: '#'
        }, {
          id: 5,
          coin: {
            image: Dash,
            name: 'Dash',
            symbol: 'DASH'
          },
          market_cap: '$292,917,848,069',
          price: '$17,501.43',
          volume: '$15,680,320,055',
          circulating: '16,727,350',
          hour: '2.86%',
          day: '16.02%',
          week: '#'
        }, {
          id: 6,
          coin: {
            image: Litecoin,
            name: 'Litecoin',
            symbol: 'LTC'
          },
          market_cap: '$292,917,848,069',
          price: '$17,501.43',
          volume: '$15,680,320,055',
          circulating: '16,727,350',
          hour: '2.86%',
          day: '16.02%',
          week: '#'
        }, {
          id: 7,
          coin: {
            image: MCO,
            name: 'Monero',
            symbol: 'XMR'
          },
          market_cap: '$292,917,848,069',
          price: '$17,501.43',
          volume: '$15,680,320,055',
          circulating: '16,727,350',
          hour: '2.86%',
          day: '16.02%',
          week: '#'
        }, {
          id: 8,
          coin: {
            image: Cardano,
            name: 'Cardano',
            symbol: 'ADA'
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

  handleChange = (event) => {
    this.state[event.target.name] = event.target.value;
    this.setState(this.state);
  }

  filteredMarkets = () => {
    let markets = this.state.markets;
    
    if (this.state.keyword != '') {
      let keyword = this.state.keyword.toLowerCase();
      markets = markets.filter(market => {
        return ( 
          market.coin.name.toLowerCase().search(keyword) != -1 ||
          market.coin.symbol.toLowerCase().search(keyword) != -1
        ); 
      });
    }

    return markets;
  }

  render() {

    return (
      <div>
        <div className="row clearfix">
          <div className="filers col-md-12">
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
              <div className="search col-md-7 col-sm-6 col-xs-12 pull-right nopadding">
                <form>
                  <div className="input-group">
                    <input name="keyword" onChange={this.handleChange} value={this.state.keyword} type="text" className="form-control search_box" placeholder="Search" />
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
                  {this.filteredMarkets().map((market, index) => {
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
    );
  }
}


export default Home;
