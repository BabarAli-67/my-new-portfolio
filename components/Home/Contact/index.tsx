import React from 'react'

const Contactform = () => {
  return (
    <section className='overflow-x-hidden bg-darkmode dark:bg-darklight' id='contact'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 grid-cols-1 md:gap-7 gap-0'>
          <div
            className='row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center justify-start'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-sm text-white'>
                get in touch
              </span>
            </div>
            <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-white py-12'>
              Let's discuss about your project and take it to the next level.
            </h2>
            <div className='grid grid-cols-6 pb-12 border-b border-dark_border '>
              <div className='col-span-6'>
                <span className='text-white/50 text-lg'>Email</span>
                <p className='bg-transparent border-0 text-white text-lg'>
                  babarali36912@gmail.com
                </p>
              </div>
              <div className='col-span-6 pt-8'>
                <span className='text-white/50 text-lg'>Available for</span>
                <p className='bg-transparent border-0 text-white text-lg'>
                  Freelance projects, collaborations, and consulting
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos='fade-right'
            data-aos-delay='200'
            data-aos-duration='1000'
            className="md:row-start-1 row-start-2 md:col-start-8 col-start-1 row-end-2 col-end-13">
            <div className='lg:mt-0 mt-8 bg-white dark:bg-darkmode max-w-[50rem] m-auto pt-[2.1875rem] pb-8 px-[2.375rem] rounded-md relative z-10'>
              <h2 className='sm:text-3xl text-lg font-bold text-midnight_text mb-3 dark:text-white'>
                Start the project
              </h2>
              <form action='/api/contact' method='POST' className='flex w-full m-auto justify-between flex-wrap gap-4'>
                <div className='flex gap-4 w-full'>
                  <input
                    name='name'
                    required
                    className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                    type='text'
                    placeholder='Name *'
                  />
                </div>
                <div className='w-full'>
                  <input
                    name='email'
                    required
                    type='email'
                    className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                    placeholder='youremail@website.com *'
                  />
                </div>
                <div className='w-full'>
                  <input
                    name='subject'
                    required
                    className='text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-border border-solid focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                    type='text'
                    placeholder='Subject *'
                  />
                </div>
                <div className='w-full'>
                  <textarea
                    name='message'
                    required
                    className='text-midnight_text h-[9.375rem] w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border! border-border border-solid! focus:border-primary dark:focus:border-primary placeholder:text-grey rounded-lg focus-visible:outline-0'
                    placeholder='Let us know about your project *'></textarea>
                </div>
                <div className='w-full'>
                  <button
                    className='w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg transition-colors'
                    type='submit'>
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactform

