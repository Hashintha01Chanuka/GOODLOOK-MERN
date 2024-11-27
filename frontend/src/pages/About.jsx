import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../component/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quas fugit dolore odio similique quos voluptates perspiciatis, iste totam necessitatibus aspernatur, reprehenderit doloremque quo sunt tempore accusantium laborum praesentium sapiente!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis non explicabo culpa. Ipsa voluptate commodi quas quaerat vel quis itaque reiciendis soluta, iusto architecto aliquam quidem possimus cupiditate molestiae veritatis!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit impedit veniam iste quia nisi aliquid molestias qui quae natus praesentium nulla neque facilis repellat doloribus, rerum atque illo. Eligendi.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'Why'} text2={'Choose us'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi nesciunt officiis corporis fugiat, ratione voluptatum sed, perferendis sapiente natus facilis hic ipsa, dicta perspiciatis consequuntur! Ducimus culpa alias veritatis.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex temporibus autem dicta quis. Id delectus amet ullam. Id, deleniti, consectetur, eos officiis unde aperiam vel voluptates impedit laboriosam at possimus.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex temporibus autem dicta quis. Id delectus amet ullam. Id, deleniti, consectetur, eos officiis unde aperiam vel voluptates impedit laboriosam at possimus.</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
