
import './App.css';
import React, { useState } from 'react';
import Helmet from 'react-helmet'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MenuBar from './components/menu-bar'
import Footer from './components/common/footer'
import {Home} from './pages/home'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAktHA0DpLe2p7FB4dMUEzi-yd0U_J2MsU",
  authDomain: "awethenticcreations-927fd.firebaseapp.com",
  projectId: "awethenticcreations-927fd",
  storageBucket: "awethenticcreations-927fd.appspot.com",
  messagingSenderId: "844891367264",
  appId: "1:844891367264:web:aa7ef8121e398525f82005",
  measurementId: "G-8XH53D0VEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Contact Us',
    path: '/contact'
  },
  {
    title: 'Testimonials',
    path: '/testimonials'
  },
  {
    title: 'Gallery',
    path: '/gallery'
  }
]

function App() {
  const [lightMode, setLightMode] = useState(true)
  return (
    <div className="App">
      <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="description"
            content="AweThentic Creations - Lorem ipsem dolor sit amet consectetur adipisicing elit. Quisquam, quaerat."
          />
          <meta property="og:site_name" content="AweThentic Creations" />
        </Helmet>
        <Router>
          <MenuBar
            onSetLightMode={setLightMode}
            {...{lightMode, navLinks}}
          />
          <Routes>
            <Route exact path="/" component={Home} />
          </Routes>
        </Router>
        <Footer pages={navLinks} />
    </div>
  );
}

export default App;
