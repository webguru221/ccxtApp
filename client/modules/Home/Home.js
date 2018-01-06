import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';
import Switch from 'react-bootstrap-switch';
import NumberFormat from 'react-number-format';

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
      layoutModal: false,
      filterModal: false,
      keyword: '',
      marketCapFilterSwitch: false,
      activeFilters: [],
      filterableColumns: ['price', 'volume', 'hour', 'day', 'week'],
      activeColumns: {
        id: { status: true, text: '#' },
        coin: { status: true, text: 'COIN' },
        market_cap: { status: true, text: 'Market Cap' },
        price: { status: true, text: 'Price' },
        volume: { status: true, text: 'Volume (24h)' },
        circulating: { status: true, text: 'Circulating' },
        hour: { status: true, text: '1h' },
        day: { status: true, text: '24h' },
        week: { status: true, text: 'Weekly' },
      },
      markets: [
        {
          id: 1,
          coin: {
            image: bit_coin,
            name: 'Bit coin',
            symbol: 'BTC'
          },
          market_cap: Math.floor((Math.random() * 10000000000) + 1000000000),
          price: Math.round(((Math.random() * 100000) + 10000) * 100) / 100,
          volume: Math.floor((Math.random() * 10000000000) + 1000000000),
          circulating: Math.floor((Math.random() * 1000000000) + 100000000),
          hour: Math.round(((Math.random() * 99) + 1) * 100) / 100,
          day: Math.round(((Math.random() * 99) + 10) * 100) / 100,
          week: '#'
        }, {
          id: 2,
          coin: {
            image: Ethereum,
            name: 'Ethereum',
            symbol: 'ETH'
          },
          market_cap: Math.floor((Math.random() * 10000000000) + 1000000000),
          price: Math.round(((Math.random() * 100000) + 10000) * 100) / 100,
          volume: Math.floor((Math.random() * 10000000000) + 1000000000),
          circulating: Math.floor((Math.random() * 1000000000) + 100000000),
          hour: Math.round(((Math.random() * 10) + 1) * 100) / 100,
          day: Math.round(((Math.random() * 99) + 10) * 100) / 100,
          week: '#'
        }, {
          id: 3,
          coin: {
            image: Ripple,
            name: 'Ripple',
            symbol: 'XRP'
          },
          market_cap: Math.floor((Math.random() * 10000000000) + 1000000000),
          price: Math.round(((Math.random() * 100000) + 10000) * 100) / 100,
          volume: Math.floor((Math.random() * 10000000000) + 1000000000),
          circulating: Math.floor((Math.random() * 1000000000) + 100000000),
          hour: Math.round(((Math.random() * 10) + 1) * 100) / 100,
          day: Math.round(((Math.random() * 99) + 10) * 100) / 100,
          week: '#'
        }, {
          id: 4,
          coin: {
            image: IOTA,
            name: 'IOTA',
            symbol: 'MIOTA'
          },
          market_cap: Math.floor((Math.random() * 10000000000) + 1000000000),
          price: Math.round(((Math.random() * 100000) + 10000) * 100) / 100,
          volume: Math.floor((Math.random() * 10000000000) + 1000000000),
          circulating: Math.floor((Math.random() * 1000000000) + 100000000),
          hour: Math.round(((Math.random() * 10) + 1) * 100) / 100,
          day: Math.round(((Math.random() * 99) + 10) * 100) / 100,
          week: '#'
        }, {
          id: 5,
          coin: {
            image: Dash,
            name: 'Dash',
            symbol: 'DASH'
          },
          market_cap: Math.floor((Math.random() * 10000000000) + 1000000000),
          price: Math.round(((Math.random() * 100000) + 10000) * 100) / 100,
          volume: Math.floor((Math.random() * 10000000000) + 1000000000),
          circulating: Math.floor((Math.random() * 1000000000) + 100000000),
          hour: Math.round(((Math.random() * 10) + 1) * 100) / 100,
          day: Math.round(((Math.random() * 99) + 10) * 100) / 100,
          week: '#'
        }, {
          id: 6,
          coin: {
            image: Litecoin,
            name: 'Litecoin',
            symbol: 'LTC'
          },
          market_cap: Math.floor((Math.random() * 10000000000) + 1000000000),
          price: Math.round(((Math.random() * 100000) + 10000) * 100) / 100,
          volume: Math.floor((Math.random() * 10000000000) + 1000000000),
          circulating: Math.floor((Math.random() * 1000000000) + 100000000),
          hour: Math.round(((Math.random() * 10) + 1) * 100) / 100,
          day: Math.round(((Math.random() * 99) + 10) * 100) / 100,
          week: '#'
        }, {
          id: 7,
          coin: {
            image: MCO,
            name: 'Monero',
            symbol: 'XMR'
          },
          market_cap: Math.floor((Math.random() * 10000000000) + 1000000000),
          price: Math.round(((Math.random() * 100000) + 10000) * 100) / 100,
          volume: Math.floor((Math.random() * 10000000000) + 1000000000),
          circulating: Math.floor((Math.random() * 1000000000) + 100000000),
          hour: Math.round(((Math.random() * 10) + 1) * 100) / 100,
          day: Math.round(((Math.random() * 99) + 10) * 100) / 100,
          week: '#'
        }, {
          id: 8,
          coin: {
            image: Cardano,
            name: 'Cardano',
            symbol: 'ADA'
          },
          market_cap: Math.floor((Math.random() * 10000000000) + 1000000000),
          price: Math.round(((Math.random() * 100000) + 10000) * 100) / 100,
          volume: Math.floor((Math.random() * 10000000000) + 1000000000),
          circulating: Math.floor((Math.random() * 1000000000) + 100000000),
          hour: Math.round(((Math.random() * 10) + 1) * 100) / 100,
          day: Math.round(((Math.random() * 99) + 10) * 100) / 100,
          week: '#'
        }
      ]
    }
  }

  modalClose = () => {
    this.state.layoutModal = false;
    this.state.filterModal = false;
    this.setState(this.state);
  }

  openLayoutModal = () => {
    this.state.layoutModal = true;
    this.setState(this.state);
  }

  openFilterModal = () => {
    this.state.filterModal = true;
    this.setState(this.state);
  }

  handleChange = (event) => {
    this.state[event.target.name] = event.target.value;
    this.setState(this.state);
  }

  handleSwitch = (elem, state) => {
    this.state.activeColumns[elem.props.name].status = state;
    this.setState(this.state);
  }

  handleMarketCapFilterSwitch = (elem, state) => {
    if (state) {
      let filterObj = {
        column: elem.props.name,
        type: 'sort',
        limit: 100
      };

      this.state.activeFilters.push(filterObj);
    } else {
      this.state.activeFilters = this.state.activeFilters.filter(filter => {
        return filter.column != elem.props.name
      });
    }

    this.state.marketCapFilterSwitch = state;
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

    if (this.state.activeFilters.length > 0) {
      this.state.activeFilters.forEach(filter => {
        switch (filter.type) {
          case 'sort':
            markets = markets.sort((a, b) => {
              return b[filter.column] - a[filter.column]
            });
            break;

          default:
            break;
        }
      });
    }

    return markets;
  }

  renderMarketColumn = (market) => {
    const self = this;
    let tableData = [];

    for (let column in market) {
      if (self.state.activeColumns[column].status) {
        switch (column) {
          case 'coin':
            tableData.push(
              <td key={column}>
                <div className="row-fluid clearfix">
                  <div className="col-md-4 nopadding">
                    <img src={market[column].image} className="img-responsive" />
                  </div>
                  <div className="col-md-8 nopadding">
                    <p className="pdl-5">{market[column].name} <br/>{market[column].symbol}</p>
                  </div>
                </div>
              </td>
            );
            break;
          case 'market_cap':
          case 'price':
          case 'volume':
            tableData.push(
              <td key={column}>
                <NumberFormat
                  value={market[column]}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </td>
            );
            break;
          case 'circulating':
            tableData.push(
              <td key={column}>
                <NumberFormat
                  value={market[column]}
                  displayType={'text'}
                  thousandSeparator={true}
                />
              </td>
            );
            break;
          case 'hour':
          case 'day':
            tableData.push(
              <td key={column}>
                <NumberFormat
                  value={market[column]}
                  displayType={'text'}
                  suffix={'%'}
                />
              </td>
            );
            break;
          default:
            tableData.push(<td key={column}>{market[column]}</td>);
            break;
        }
      }
    }

    return tableData;
  }

  render() {
    const self = this;
    let layoutCheckBoxes = [], tableHeaders = [];

    for (let column in this.state.activeColumns) {
      if (column != 'id') {
        layoutCheckBoxes.push(
          <div key={column} className="margin-top">
            <Switch
              bsSize="small"
              onChange={self.handleSwitch}
              name={column}
              value={self.state.activeColumns[column].status}
              labelText={self.state.activeColumns[column].text}
            />
          </div>
        );
      }

      if (this.state.activeColumns[column].status) {
        tableHeaders.push(<th key={column}>{this.state.activeColumns[column].text}</th>)
      }
    }

    return (
      <div>
        <div className="row clearfix filers">
          <div className="col-md-3 col-sm-4 col-xs-12">
            <div className="row clearfix">
              <div className="col-md-5 col-xs-12">
                <a className="layout-button" href="javascript:void(0)" onClick={() => this.openLayoutModal()}>
                  <span>
                    <i className="fa fa-list" aria-hidden="true"></i>
                  </span>&nbsp;Layout</a>
              </div>
              <div className="col-md-5 col-xs-12">
                <a className="filters-button" href="javascript:void(0)" onClick={() => this.openFilterModal()}>
                  <span>
                    <i className="fa fa-filter" aria-hidden="true"></i>
                  </span> &nbsp; {this.state.activeFilters.length} Filters</a>
              </div>
            </div>
          </div>
          <div className="right_fillter col-md-9 col-sm-8 col-xs-12 pull-right">
            <div className="search col-md-5 col-sm-5 col-xs-12 pull-right nopadding">
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
        <div className="row clearfix">
          <div className="col-md-9 col-sm-9 col-xs-12">
            <div className="coin_table table-responsive">
              <table className="table table-striped detail_table">
                <thead className="heading_yellow heading_box">
                  <tr>
                    {tableHeaders}
                  </tr>
                </thead>
                <tbody>
                  {this.filteredMarkets().map((market, index) => {
                    return (
                      <tr key={index} className="gry-bg-tr border-gry padding_top text-align">
                        {this.renderMarketColumn(market)}
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
                <div className="news_2 clearfix border_bottom padding_11">
                  <div className="col-md-2 col-sm-2 col-xs-12 news_timg right_border padding-left ">
                    <p className="news_timingtext">11 min</p>
                  </div>
                  <div className="col-md-10 col-sm-10 col-xs-12 news_timg">
                    <p className="news_text">Bitcoiners Increasingly Targeted by Police as Prices Yield Large Asset Forfeiture Gains</p>
                  </div>
                </div>
                <div className="news_2 clearfix border_bottom padding_11 ">
                  <div className="col-md-2 col-sm-2 col-xs-12 news_timg right_border padding-left ">
                    <p className="news_timingtext">11 min</p>
                  </div>
                  <div className="col-md-10 col-sm-10 col-xs-12 news_timg">
                    <p className="news_text">Bitcoiners Increasingly Targeted by Police as Prices Yield Large Asset Forfeiture Gains</p>
                  </div>
                </div>
                <div className="news_3 clearfix border_bottom padding_11 ">
                  <div className="col-md-2 col-sm-2 col-xs-12 news_timg right_border padding-left">
                    <p className="news_timingtext">11 min</p>
                  </div>
                  <div className="col-md-10 col-sm-10 col-xs-12 news_timg">
                    <p className="news_text">Bitcoiners Increasingly Targeted by Police as Prices Yield Large Asset Forfeiture Gains</p>
                  </div>
                </div>
                <div className="news_4 clearfix border_bottom padding_11">
                  <div className="col-md-2 col-sm-2 col-xs-12 news_timg right_border padding-left ">
                    <p className="news_timingtext">11 min</p>
                  </div>
                  <div className="col-md-10 col-sm-10 col-xs-12 news_timg">
                    <p className="news_text">Bitcoiners Increasingly Targeted by Police as Prices Yield Large Asset Forfeiture Gains</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>

        <Modal show={this.state.layoutModal} onHide={this.modalClose} dialogClassName="filter_modal">
          <Modal.Header closeButton>
            <h3>Customize Layout</h3>
          </Modal.Header>
          <Modal.Body>
            <p>Select values you wish to see</p>
            <div>
              {layoutCheckBoxes}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="clearfix">
              <button onClick={this.modalClose} className="btn btn-success pull-right">Done</button>
            </div>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.filterModal} onHide={this.modalClose} dialogClassName="layout_modal">
          <Modal.Header closeButton>
            <h3>Manage Filters</h3>
          </Modal.Header>
          <Modal.Body>
            <p>Only coins matching all filter criteria will be shown</p>
            <div>
              <Switch
                bsSize="normal"
                onChange={this.handleMarketCapFilterSwitch}
                name='market_cap'
                value={this.state.marketCapFilterSwitch}
              /> &nbsp; Show top 100 coins by market cap
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="clearfix">
              <button onClick={this.modalClose} className="btn btn-success pull-right">Done</button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Home;
