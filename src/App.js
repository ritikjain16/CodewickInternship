import React from 'react'
import './App.css'
import insignia from './images/insignia.png'
import firstimg from './images/1.png'
import secimg from './images/2.png'
import thirdimg from './images/3.png'
import Clipboard from './images/ClipboardText.png'
import Printer from './images/Printer.png'
import Shield from './images/ShieldCheck.png'
import p1 from './images/p1.png'
import p2 from './images/p2.png'
import twitter from './images/twitter.png'
import insta from './images/InstagramLogo.png';
import fb from './images/FacebookLogo.png'
import chat from './images/chat.png'
import Navbar from './components/Navbar'
import SaveData from './components/SaveData'
import HighLevelData from './components/HighLevelData'
import Features from './components/Features'
import Download from './components/Download'
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Separator from './components/Separator';
import Footer from './components/Footer'
const App = () => {
  return (
    <div style={{
      background: "#282828",
      fontFamily: "Now",
      color: "red",
      fonrStyle: "normal"
    }}>
      <Navbar insignia={insignia} />
      <SaveData img={firstimg} />
      <HighLevelData img={secimg} />
      <Features Clipboard={Clipboard} Printer={Printer} Shield={Shield} />
      <Download img={thirdimg} />
      <Testimonials p1={p1} p2={p2} />
      <Subscribe />
      <Separator />
      <Footer insignia={insignia} twitter={twitter} insta={insta} fb={fb} chat={chat} />
    </div>
  )
}


export default App