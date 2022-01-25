import React from 'react';
import Nav from './Nav';
import "./Lib.css";

const Lib = ()  => {
    return (

            <div>
              
<Nav />
              <div className="main">
  <h1>Library</h1>
  <ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://i.pinimg.com/474x/ac/97/0c/ac970cee3a8c539c4ff397474e28ed1a.jpg" /></div>
        <div className="card_content">
          <h2 className="card_title">C Programming</h2>
          <p className="card_text">Learn basic fundamental of C langaugae </p>
          <button className="btn card_btn"><a href="https://drive.google.com/file/d/0BwZHnG9OxyIjaFlRYXhEWHJUUUk/view?resourcekey=0-lgaSnj3Frt70nB9TQomcEA" target="_blank"> Read More</a> </button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://images-na.ssl-images-amazon.com/images/I/41LBD-XtzYL._SX377_BO1,204,203,200_.jpg" /></div>
        <div className="card_content">
          <h2 className="card_title">C++ Opps and STL </h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://images-na.ssl-images-amazon.com/images/I/61CVP-MfUoL.jpg" /></div>
        <div className="card_content">
          <h2 className="card_title">Learn DSA</h2>
          <p className="card_text">DSA is most important methods for resolve problem </p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://rukminim1.flixcart.com/image/416/416/jpu324w0/book/1/5/7/mastering-html-css-javascript-web-publishing-original-imafbyxqakn5nypa.jpeg" /></div>
        <div className="card_content">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://rukminim1.flixcart.com/image/416/416/kapoo7k0/book/7/4/6/gate-computer-science-and-information-technology-2021-original-imafs8e9ftgm87cy.jpeg?q=70" /></div>
        <div className="card_content">
          <h2 className="card_title">GATE C.S.E</h2>
          <p className="card_text"></p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://images-na.ssl-images-amazon.com/images/I/81eF-RxjuaL.jpg" /></div>
        <div className="card_content">
          <h2 className="card_title">Opertaing System</h2>
          <p className="card_text">Learn about OS </p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
  </ul>
</div>


            </div>
           
    );
}
export default Lib