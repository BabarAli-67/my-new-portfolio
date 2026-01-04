import { getImgPath } from '@/utils/image'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='relative md:pt-44 pt-28 bg-white dark:bg-darklight bg-cover text-white'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        <div
          className='md:col-span-6 col-span-12 p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'
          data-aos='fade-right'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-success'></span>
            <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
              Hello, I'm
            </span>
          </div>
          <h1 className='text-midnight_text font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]'>
            Babar Ali
          </h1>
          <h2 className='text-midnight_text font-semibold dark:text-white text-2xl md:text-3xl md:leading-tight'>
            Full-Stack Developer & AI Enthusiast
          </h2>
          <p className='text-grey dark:text-white/70 text-xl font-semibold'>
            Building modern web applications and AI-driven solutions with React.js and Django.
          </p>
          <Link
            href='/contact'
            className='py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
            Hire Me
          </Link>
        </div>

        <div className="md:col-span-6 col-span-12 relative flex items-center justify-center md:justify-end">
          <div className="relative w-full max-w-md flex items-center justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-darkmode">
              <Image
                src={getImgPath('/images/Updated-profile-pic.png')}
                alt='Babar Ali - Full-Stack Developer'
                width={320}
                height={320}
                quality={100}
                className="object-cover"
                style={{ position: 'absolute', width: '100%', inset: '0px', color: 'transparent' }}
                priority
                unoptimized
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement?.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-400">Hero Image</div>';
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

