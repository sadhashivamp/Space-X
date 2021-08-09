import React from 'react';
import Header from './components/Header/Header.jsx';
import Launch from './components/Launch/launch.jsx';


function App() {
  return (
    <div className="App">
      <Header />
        <Launch
          banner = "https://live.staticflickr.com/65535/51283604493_83a0e3f8da_c.jpg"
          title = "Title:"
            name = "DemoSat"
          launchDate = "Date:"
            date = "2007-03-21T13:10:00+12:00"
          description = "Description:" 
            details = "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
        />

        <Launch
          banner = "https://live.staticflickr.com/65535/51283604493_83a0e3f8da_c.jpg"
          title = "Title:"
            name = "Falcon 9 Test Flight"
          launchDate = "Date:"
            date = "2010-06-04T14:45:00-04:00"
          description = "Description:" 
            details = "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage"
        />

    </div>
  );
}

export default App;
