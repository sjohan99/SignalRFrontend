import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserComponent from './signalcomponents/UserComponent';
import { HubConnection, HubConnectionBuilder, HubConnectionState } from '@microsoft/signalr';

function App() {

  // Create connection
  let connectionUserCount: HubConnection = new HubConnectionBuilder().withUrl('https://localhost:7170/hubs/userCount').build()

  // Start connection
  useEffect(() => {
    async function startConnection() {
      if (connectionUserCount.state === HubConnectionState.Disconnected) {
        await connectionUserCount.start();
        newWindowLoadedOnClient();
        console.log('Connection to user hub successful');
      }
    }
    startConnection().catch((e) => {
      console.log("Could not connect to user hub");
      console.log(e);
    });
  }, [])

  // Invoke hub methods aka send notification to hub
  function newWindowLoadedOnClient():void {
    connectionUserCount.send("NewWindowLoaded");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserComponent connection={connectionUserCount}></UserComponent>
      </header>
    </div>
  );
}

export default App;
