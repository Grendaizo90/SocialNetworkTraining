import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/SettingsPage/SettingsPage';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/users"
            render={() => <UsersContainer />} />
          <Route
            path="/dialogs"
            render={() => <DialogsContainer />} />
          <Route
            path="/profile"
            render={() => <ProfileContainer />} />
          <Route
            path="/news"
            render={() => <News />} />
          <Route
            path="/music"
            render={() => <Music />} />
          <Route
            path="/settings"
            render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
