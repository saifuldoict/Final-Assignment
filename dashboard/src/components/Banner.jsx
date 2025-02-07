// // src/BannerDashboard.js
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const BannerDashboard = () => {
//   const [subHeading, setSubHeading] = useState('');
//   const [heading, setHeading] = useState('');
//   const [paragraph, setParagraph] = useState('');
//   const [buttonText, setButtonText] = useState('');
//   const [buttonShow, setButtonShow] = useState(false);
//   const [id, setId]=useState("")
  

//   const handleSubHeading=(e)=>{
//     setSubHeading(e.target.value);
//   }
//   const handleHeading=(e)=>{
//     setHeading(e.target.value);
//   }
//   const handleParagraph=(e)=>{
//     setParagraph(e.target.value);
//   }
//   const handleButtonText=(e)=>{
//     setButtonText(e.target.value)
//   }
//   const handleShowButton=(e)=>{
//     setButtonShow(e.target.checked)
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can handle the form submission here
//     console.log({ subHeading, heading, paragraph, buttonText, buttonShow,IDBCursorWithValue });
//     let formData = new FormData()
//     formData.append('subHeading', subHeading)
//     formData.append('heading', heading)
//     formData.append('paragraph', paragraph)
//     formData.append('buttonText', buttonText)
//     formData.append('buttonShow', buttonShow)
    
//     if(id){
//       axios.put('http://localhost:3060/banner/'+id,
//       {
//         subHeading: subHeading,
//         heading: heading,
//         paragraph: paragraph,
//         buttonText: buttonShow,
//         buttonShow: buttonText
//       })
//       .then((res) => {
//         console.log(res)
//       }).catch(err=>{
//         console.log(err)
//       })
      
//       }else{
//         axios.post('http://localhost:3060/banner',{
//         subHeading: subHeading,
//         heading: heading,
//         paragraph: paragraph,
//         buttonText: buttonShow,
//         buttonShow: buttonText
//         })
//         .then((res) => {
//           console.log(res)
//         }).catch(err=>{
//           console.log(err)
//         })
        
//       }
      
//     }
      
//   };
//   useEffect(()=>{
//     async function fetchData(){
//       let data= await axios.get("http://localhost:3060/banner")
//       setSubHeading(data.data.subHeading);
//       setHeading(data.data.heading);
//       setParagraph(data.data.paragraph);
//       setButtonText(data.data.buttonText);
//       setButtonShow(data.data.buttonShow);
//       setId(data.data._id)
//     }
//     fetchData();
//   },[])
//   return (
//     <div className="max-w-md m-4 mx-auto p-5 bg-white rounded-lg shadow-md">
//       <h1 className="text-1xl font-bold mb-2 text-center">Banner Dashboard</h1>
     
//         <div>
//           <label className="block text-sm font-medium">Subheading</label>
//           <input
//             type="text"
//             value={subHeading}
//             onChange={handleSubHeading}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Heading</label>
//           <input
//             type="text"
//             value={heading}
//             onChange={handleHeading}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Paragraph</label>
//           <textarea
//             value={paragraph}
//             onChange={handleParagraph}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Button Text</label>
//           <input
//             type="text"
//             value={buttonText}
//             onChange={handleButtonText}
//             className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//           />
//         </div>
//         <div>
//           <label className="inline-flex items-center">
//             <input checked={buttonShow} onChange={handleShowButton} type="checkbox"className="form-checkbox h-5 w-5 text-blue-600"/>
//             <span className="ml-2">Show Button</span>
//           </label>
//         </div>
//         <button type="submit" onClick={handleSubmit} className="w-full bg-blue-600 text-white py-2 rounded-md">Submit</button>
     

      
//     </div>
//   );
// };

// export default BannerDashboard;