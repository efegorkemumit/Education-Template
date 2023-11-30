import React from 'react'

function ContactForm() {
  return (
    <div className='w-full'>
        <div className='bg-primary-light dark:bg-primary-dark text-second-light dark:text-second-dark h-96'></div>

        <div className='max-w-5xl mx-auto px-6 mb-12'>

            <div className='bg-white w-full shadow rounded-2xl p-8 -mt-80'>

                <p className='text-3xl font-bold text-center'> Contact Me</p>

                <form>

                    <div className='md:flex items-center mt-12'>


                        <div className='w-full md:w-1/2 flex flex-col p-2'>
                            <label className='font-semibold'>Name</label>
                            <input type='text' className='text-gray-800 border border-black p-3 rounded-md bg-gray-200'></input>
                        </div>
                        <div className='w-full md:w-1/2 flex flex-col p-2'>
                            <label className='font-semibold'>Surname</label>
                            <input type='text' className='text-gray-800 border border-black p-3 rounded-md bg-gray-200'></input>
                        </div>

                    </div>

                    <div className='md:flex items-center mt-12'>


                        <div className='w-full flex flex-col p-2'>
                            <label className='font-semibold'>Subject</label>
                            <input type='text' className='text-gray-800 border border-black p-3 rounded-md bg-gray-200'></input>
                        </div>
                       

                    </div>

                    <div className='md:flex items-center mt-12'>


                    <div className='w-full flex flex-col p-2'>
                        <label className='font-semibold'>Description</label>

                        <textarea type="text" rows={10} className='text-gray-800 border border-black p-3 rounded-md bg-gray-200'></textarea>
                    </div>

                    
                    </div>

                    <div className='md:flex items-center mt-12'>
                    <div className='w-full flex flex-col p-2'>

                        <button className='bg-primary-light px-4 py-5 rounded-xl shadow-lg dark:bg-primary-dark text-white dark:text-second-dark'>Send me</button>
                    
                    
                    
                    </div>

                    </div>
                </form>



            </div>




        </div>



    </div>
  )
}

export default ContactForm