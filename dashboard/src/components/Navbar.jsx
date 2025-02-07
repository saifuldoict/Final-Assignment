import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Navbar = () => {
  let [menuItem, setMenuItem]=useState("")
  let [buttonText, setButtonText]=useState("")
  let [buttonShow, setButtonShow]=useState(false)
  let [id, setId]= useState("")
  

  let handleSubmit =()=>{
      if(id){
        axios.put('http://localhost:3060/navbar/'+id,{
          menuItem:menuItem,
          buttonText:buttonText,
          buttonShow:buttonShow,
        }).then(res=>{
          console.log(res)
        }).catch((e)=>{
          console.log(e)
        })
        
      }else{
        axios.post('http://localhost:3060/navbar',{
        menuItem:menuItem,
        buttonText:buttonText,
        buttonShow:buttonShow,
      }).then(res=>{
        console.log(res)
      }).catch((e)=>{
        console.log(e)
      })
      }
  }
  let handleMenuItemChange = (e) => {
    setMenuItem(e.target.value)
  }
  let handleButtonText = (e) => {
    setButtonText(e.target.value)
  }
  let handleButtonShow = (e) => {
    setButtonShow(e.target.checked)
  }

  useEffect(()=>{
    async function getData(){
      let data= await axios.get("http://localhost:3060/navitem")
      setMenuItem(data.data.menuItem)
      setButtonText(data.data.buttonText)
      setButtonShow(data.data.buttonShow)
      setId(data.data._id)
    }
    getData()
  },[])
  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Dashboard Input</h2>
    
    <div className="mb-4">
        <input type='file' className="block w-full text-sm text-gray-500 
            file:mr-4 file:py-2 file:px-4 
            file:rounded-full file:border-0 
            file:text-sm file:font-semibold 
            file:bg-blue-50 file:text-blue-700 
            hover:file:bg-blue-100" />
    </div>

    <div className="mb-4">
        <input value={menuItem} onChange={handleMenuItemChange}  type="text" placeholder='Menu Item' 
            className="block w-full p-2 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    <div className="mb-4">
        <input value={buttonText} onChange={handleButtonText} type="text" placeholder='Button text' 
            className="block w-full p-2 border border-gray-300 rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    <div className="flex items-center mb-4">
        <input value={buttonShow} onChange={handleButtonShow} type='checkbox' id="buttonShow" checked={buttonShow} className="mr-2" />
        <label for="buttonShow" className="text-gray-700">Button show</label>
    </div>

    <button onClick={handleSubmit} 
        className="w-full py-2 bg-blue-600 text-white rounded-md 
        hover:bg-blue-700 focus:outline-none focus:ring-2 
        focus:ring-blue-500 focus:ring-opacity-50">
        Submit
    </button>
</div>
    </>
  )
}

export default Navbar