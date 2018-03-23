import React, { Component } from 'react';
import './App.css';


const MyContext = React.createContext();

class ContextProvider extends Component {
  state = {
    name: "Deadpool",
    soldTickets: 100
  }

  render() {
    return(
      <MyContext.Provider value={ { 
        state: this.state,
        sellTicket: () => this.setState({
          soldTickets: this.state.soldTickets +1 
        })
      } }>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const TicketSolder = (props) => (
  <MyContext.Consumer>
    {
      (context) => (
        <React.Fragment>
          <p> Movie Title: {context.state.name} </p>
          <p> Sold Tickets: {context.state.soldTickets} </p>
          <button onClick={context.sellTicket} > Sell Ticket </button>
        </React.Fragment>
      )
    }
  </MyContext.Consumer>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContextProvider>
          <TicketSolder/>
        </ContextProvider>
      </div>
    );
  }
}

export default App;
