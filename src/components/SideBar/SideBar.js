import React, { Component } from 'react';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: this.props.stores.features,
      activeStore: ''
    }
  }
  buildLocationList() {
    const { stores, activeStore } = this.state;
    const { handleListingClick } = this.props;

    return stores.map((store, i) => {
      const prop = store.properties
      const { phone } = prop;
      const listingId = 'listing-' + i;

      return (
        <div
          key={listingId}
          className={`item ${prop.address === activeStore ? 'active': ''}`}
          onClick={() => {
            handleListingClick(store);
            this.setState({ activeStore: prop.address });
          }}
        >
          <a className="title" data-position={i}>
            {prop.address}
          </a>
          <div>
            {prop.city} {phone && ' : ' + prop.phoneFormatted}
          </div>
        </div>
      );
    });
  }

  render() {
    const { stores } = this.state;
    const locationNodes = this.buildLocationList();

    return (
      <div className='sidebar pad2'>
        <div className='heading'>
          <h1>Our locations</h1>
          <div className="listings">
            {locationNodes.length > 0 && locationNodes}
          </div>
        </div>
        <div id='listings' className='listings'></div>
      </div>
    );
  }
}

export default SideBar;
