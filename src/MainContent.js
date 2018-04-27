import React, { Component } from 'react';
import './App.css';

import ConfirmedFilter from './ConfirmedFilter';
import GuestList from './GuestList';
import Counter from './Counter';

class MainContent = props =>

      <div className="main">
        <ConfirmedFilter
          toggleFilter={props.toggleFilter}
          isFiltered={props.isFiltered}
        />
        <Counter
          totalInvited = {totalInvited}
          numberAttending = {numberAttending}
          numberUnconfirmed = {numberUnconfirmed}
        />
        <GuestList
          guests = {this.state.guests}
          toggleConfirmationAt = {this.toggleConfirmationAt}
          toggleEditingAt = {this.toggleEditingAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}
        />
      </div>;

MainContent.propTypes = {
      numberAttending: PropTypes.number,
      numberUnconfirmed: PropTypes.number,
      totalInvited: PropTypes.number,
      guests: PropTypes.array.isRequired,
      toggleConfirmationAt: PropTypes.func.isRequired,
      toggleEditingAt: PropTypes.func.isRequired,
      setNameAt: PropTypes.func.isRequired,
      isFiltered: PropTypes.bool.isRequired,
      removeGuestAt: PropTypes.func.isRequired,
      pendingGuest: PropTypes.string.isRequired,
      toggleFilter: PropTypes.bool.isRequired,
      isFiltered: propTypes.bool.isRequired
}

export default MainContent;
