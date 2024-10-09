import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold from-neutral-900 ">Contact us</h1>
      <form>
        <input type='text' className='border-black p-1 m-2 bg-green-200' placeholder='Name'/>
        <input type='text' className='border-black p-1 m-2 bg-green-200' placeholder='Message'/>
        <button className='border-black p-1 m-2 bg-green-600 rounded-xl'>Submit</button>
      </form>
    </div>
  );
}

export default Contact