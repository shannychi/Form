import { useState } from "react";
import success from "../assets/download.png"


function About() {

const [editMode, setEditMode] = useState(true)

const [formData, setFormData] = useState({
    endingdate: '',
    startingDate: '',
    title: '',
    company: '',
    date: '',
    study: '',
    school: '',
    Phone: '',
    email: '',
    name: '',
    job:''

})

const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
}


const handleSubmit=(event) => {
    event.preventDefault();
    toggleEditMode();
    console.log('form subitted', formData)
}

const toggleEditMode = () => {
    setEditMode(!editMode);
}

  return (
    <>
      {editMode ? (
        <form onSubmit={handleSubmit} className=" bg-slate-950 w-full  m-10 lg:w-2/4   flex justify-center items-center font-semibold font-serif rounded shadow-2xl" method="POST">
        <div>
        <div className="">
          <div className=" flex lg:flex-row gap-3 lg:flex-wrap flex-nowrap flex-col text-slate-400">
            <label htmlFor="name" className="lg:m-5 mt-5  ml-2">
              Full Name
              <input
               name="name"
                type="text"
                placeholder="Enter your name"
                id="name"
                className=" w-11/12 lg:w-full"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
  
            <label htmlFor="email" className="lg:m-5 mt-5 ml-2">
              {" "}
              Email
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                id="email"
                className=" w-11/12 lg:w-full"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="phone" className="lg:m-5 mt-5  ml-2">
              {" "}
              Phone Number
              <input
                type="text"
                name="Phone"
                placeholder=" Enter your phone numher"
                id="Phone"
                className="w-11/12 lg:w-full"
                value={formData.Phone}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className=" flex lg:flex-row gap-3 lg:flex-wrap flex-nowrap flex-col lg:m-5  text-slate-400">
            <label htmlFor="school" className="mt-5  ml-2">
              {" "}
              School Name
              <input
                type="text"
                name="school"
                placeholder="Enter school name"
                id="school"
                className=" w-11/12 lg:w-full"
                value={formData.school}
                onChange={handleInputChange}
                required
              />
            </label>
            <label htmlFor="study" className="mt-5 ml-2">
              {" "}
              Title of study
              <input
                type="text"
                name="study"
                placeholder=" Enter title of study"
                id="study"
                className="w-11/12 lg:w-full"
                value={formData.study}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div className=" lg:ml-5 mt-5  ml-2  text-slate-400">
            <label htmlFor="date">
              {" "}
              Select date of study
              <input
                type="date"
               
                id="date"
                name="date"
                className=" lg:w-11/12  lg:m-auto text-gray-400 w-11/12"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
  
          <div className=" flex lg:flex-row gap-1 lg:flex-wrap flex-nowrap flex-col text-slate-400">
            <label htmlFor="Company" className="lg:m-5 mt-5  ml-2">
              Company's Name
              <input
                type="text"
                placeholder="Enter company name"
                id="Company"
                name="company"
                className=" w-11/12 lg:w-full"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
            </label>
  
            <label htmlFor="title" className="lg:m-5 mt-5 ml-2">
              {" "}
              Position title
              <input
                type="text"
                name="title"
                placeholder="Enter your Position at the company"
                id="title"
                className=" w-11/12 lg:w-full"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </label>
              </div>
              
            <div className="lg:m-5 mt-5 ml-2">
            <label className="text-slate-400 "htmlFor="job" > Discribe your Job at the Company
                  <textarea className="w-11/12 h-auto" placeholder="" 
                  name="job"
                  id="job"
                  value={formData.job}
                  onChange={handleInputChange}
                  required
                  ></textarea>
            </label>
            </div>
           <div className="flex flex-col text-gray-400">
           <label htmlFor="date" className="lg:m-5 mt-5  ml-2">
              {" "}
              Starting date
              <input
                type="date"
               name="startingDate"
                id="startingDate"
                className=" w-11/12 lg:w-11/12  lg:m-auto text-gray-400"
                value={formData.startingDate}
                onChange={handleInputChange}
                required
              />
  </label>
               <label className="lg:m-5 mt-5  ml-2"> Ending date
               <input
                type="date"
                name="endingdate"
                id="endingdate"
                className=" w-11/12 lg:w-11/12  lg:m-auto text-gray-400"
                value={formData.endingdate}
                onChange={handleInputChange}
                required
              />
               </label>
           </div>
          </div>

   <div className="flex justify-center mt-10 lg:mt-20 relative bottom-5 lg:bottom-7">
  <button   type="submit" className="bg-slate-950 text-slate-400 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group lg:w-80 w-60">
    <span className="bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80  h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
    Submit
   </button>
   </div>
        </div>
      </form>
      ) : (
        <div className="w-full  m-10 lg:w-2/4   flex justify-center items-center flex-col border-indigo-500 bg-white h-svh border-2 shadow-lg shadow-indigo-500/50 lg:justify-center lg:align-middle lg:items-center">
            

<div className="flex w-auto relative bottom-7 lg:bottom-4">
    <img src={success} alt={success} className="w-8 fill-indigo-500"/>
<h1 className=" font-serif font-extrabold">Your submission has been received</h1>
</div>

           <div className="flex justify-between gap-10  w-full lg:w-3/4 lg:gap-0">
           <p className="ml-10 font-extrabold font-serif lg:ml-0">Name:</p>
           <p className="mr-20 font-semibold lg:mr-0">{formData.name}</p>
           </div>

           <div className="flex justify-between gap-10  w-full m-2 lg:w-3/4 lg:gap-0">
           <p className="ml-10 font-extrabold font-serif lg:ml-0">Email:</p>
           <p className="mr-5 font-semibold lg:mr-0">{formData.email}</p>
           </div>


           <div className="flex justify-between gap-10  w-full m-2 lg:w-3/4 lg:gap-0">
           <p className="ml-10 font-extrabold font-serif lg:ml-0">PhoneNumber:</p>
           <p className="mr-10 font-semibold lg:mr-0">{formData.Phone}</p>
           </div>

           <div className="flex justify-between gap-10  w-full m-2 lg:w-3/4 lg:gap-0">
           <p className="ml-10 font-extrabold font-serif lg:ml-0">School:</p>
           <p className="mr-10 font-semibold lg:mr-0">{formData.school}</p>
           </div>

           <div className="flex justify-between gap-10  w-full m-2 lg:w-3/4 lg:gap-0">
           <p className="ml-10 font-extrabold font-serif lg:ml-0">Date: </p>
           <p className="mr-10 font-semibold lg:mr-0">{formData.date}</p>
           </div>

           <div className="flex justify-between gap-10  w-full m-2 lg:w-3/4 lg:gap-0">
           <p className="ml-10 font-extrabold font-serif lg:ml-0">Study:</p>
           <p className="mr-10 font-semibold lg:mr-0">{formData.study}</p>
           </div>

           <div className="flex justify-between gap-10  w-full m-2 lg:w-3/4 lg:gap-0">
           <p className="ml-10 font-extrabold font-serif lg:ml-0">TItle:</p>
           <p className="mr-10 font-semibold lg:mr-0">{formData.title}</p>
           </div>

           <div className="flex justify-between gap-10  w-full m-2 lg:w-3/4 lg:gap-0">
           <p className="ml-10 font-extrabold font-serif lg:ml-0">Job:</p>
           <p className="mr-10 font-semibold lg:mr-0">{formData.job}</p>
           </div>

           <div className="flex justify-between gap-10  w-full m-2 lg:w-3/4 lg:gap-0">
           <p className="ml-10 font-extrabold font-serif lg:ml-0">Company:</p>
           <p className="mr-10 font-semibold lg:mr-0">{formData.company}</p>
           </div>

           <div className="flex justify-between gap-10  w-full m-2 lg:w-3/4 lg:gap-0">
           <p className="ml-10 font-extrabold font-serif lg:ml-0">Starting Date:</p>
           <p className="mr-10 font-semibold lg:mr-0">{formData.startingDate}</p>
           </div>

           <div className="flex justify-between gap-10  w-full m-2 lg:w-3/4 lg:gap-0">
           <p className="ml-10 font-extrabold font-serif lg:ml-0">Ending Date:</p>
           <p className="mr-10 font-semibold lg:mr-0">{formData.endingdate}</p>
           </div>
            <button type="button" onClick={toggleEditMode} className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white w-80 mt-5">Edit</button>
        </div>
      )}
    </>
  );
}

export default About;
