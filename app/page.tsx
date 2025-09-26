import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <div className='flex flex-row'><span>AfriKaizen</span><img src='logo.png' className='w-12 -mt-4'/><span>Digital</span></div>
      </h1>
      <p className="mb-4">
          <span className='text-xl'>Hi 👋🏾<br/>
          We are AfriKaizen.<br/>
          A tech-foused digital agency building cool things out of Southern Africa. 🌍<br/>
          </span>

          <br/>
          We love building solutions for tough challenges. <span className='italic'>We also believe in keeping things simple.</span><br/><br/>

          We have worked with businesses, agencies, startups & individuals, turning their dreams and ideas into working apps and solutions that have impacted them forever.
          We deliver on time, on budget and always exceed expectations. <br/><br/>
          
          Reach out to us today, we would love to help you build your next big thing!<br/>
          Drop us an email: <a className='underline' href="mailto:hi@afrikaizen.co.zw">hi@afrikaizen.co.zw</a> and we can schedule a call.<br/><br/>

          Here is some of the cool stuff we've done for our clients & partners 👇🏾
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
