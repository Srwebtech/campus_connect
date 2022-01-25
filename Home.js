import React from 'react';
import {Carousel} from 'react-bootstrap'
import {Link} from "react-router-dom";
import Nav from './Nav';
import Feed from './Feed'
import Widgets from './Widget'
import Footer from './Footer'
import TodoList from './TodoList'
import "./Home.css"



const Home = ()  => {
    return (
        <div>
            
            <Nav />
           
            <div className="bg-img">
        
            </div>
            <h2 className="cen">Connect With Campus</h2>
            <div className="sec"> 
            <h2></h2>
              <div className="cards">
                <div className="card">
                <i className="fas fa-bell"></i>
                GET NOTIFICATION
                
                <p>Its give notification of university Upadates.</p>
                </div>
                <div className="card">
                <i className="fas  fa-question-circle"></i>
               POST FOR DOUBT 
                
                <p>
                  Its provides Dynamic Post section for asking doubts or many more things . its page enable after user login authentication.
                </p>
                </div>
                <div className="card">
                <i className="fa fa-book"></i>
                Prepare for Exam
                  <p>No more Confusion in Books . We provide Best Collection Book pdf In a single Platform With guided Path.
                </p>
                </div>

              </div>
        
            </div>
            <div>
              
            </div>


            <section>
            <div class = "image"> </div>
    
            <div class = "content">
                <h2>About Us</h2>
            
    
                <p>Campus Connect  is  online student portal which help  students to interact with each other .
The website have many features like  AKTU upadtes ,dynamic post , Pyqs.
Students can post their doubts publically .
College notice can be  post The tremendous popularity of using social media networking could never been realized before .In fact , social media have become an important tool of marketing in true sense of customer orientation .But this kind of social networking site which can acceess only for college campus not from outside the college will make make a dramatic change inside the college campus.
.</p>
               
    
            </div>
        </section>

      
        
        <Footer/>
          </div>

        
        
           
        
    );
}

export default Home;