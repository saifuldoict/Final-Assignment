
import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'

import BlogForm from './components/Blog'
import ServiceForm from './components/Service'

import TeamForm from './components/TeamSection'
import FeedbackForm from './components/Feedback'
// import Banner from './components/Banner'
function App() {
 
  let [activeMenu, setActiveMenu] = useState('Navbar')

  let handleActive = (menu) => {
    setActiveMenu(menu)
  }

  return (
    <>
          <div className="main">
            <div className='left'>
              <ul>
                <li onClick={()=>handleActive("Navbar")}>Navbar</li>
                <li onClick={()=>handleActive("Banner")}>Banner</li>
                <li onClick={()=>handleActive("About")}>About</li>
                <li onClick={()=>handleActive("Blog")}>Blog</li>
                <li onClick={()=>handleActive("Service")}>Service</li>
                <li onClick={()=>handleActive("Team")}>Team</li>
                <li onClick={()=>handleActive("Portfolio")}>Portfolio</li>
                <li onClick={()=>handleActive("Testimonial")}>Testimonial</li>
                <li onClick={()=>handleActive("Feedback")}>Feedback</li>
                <li onClick={()=>handleActive("Footer")}>Footer</li>
              </ul>
            </div>
            <div className='right'>
              {activeMenu=="Navbar" && <Navbar/>}
              {activeMenu=="Banner" && <Banner/>}
              {activeMenu=="About" && <h>About</h>}
              {activeMenu=="Blog" && <BlogForm/>}
              {activeMenu=="Service" && <ServiceForm/>}
              {activeMenu=="Team" && <TeamForm/>}
              {activeMenu=="Portfolio" && <h>Portfolio</h>}
              {activeMenu=="Testimonial" && <h>Testimonial</h>}
              {activeMenu=="Feedback" && <FeedbackForm/>}
              {activeMenu=="Footer" && <h>Footer</h>}
               </div>
           

          </div>
        
      
      
    
    </>
  )
}

export default App
