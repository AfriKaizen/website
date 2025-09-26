import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        AfriKaizen Digital
      </h1>
      <p className="mb-4">
          <span className='text-xl'>Hi 👋🏾<br/>
          We are AfriKaizen.<br/>
          We are a tech-foused digital agency building cool things out of Southern Africa. 🌍<br/>
          </span>

          <br/><br/>
          We love building solutions for tough challenges. <span className='italic'>We also believe in keeping things simple.</span><br/><br/>
          We believe <span className='font-mono'>digital transformation</span> does not have to give you headaches. <br/>
          We have worked with businesses, agencies, startups & individuals, turning their dreams and ideas into working apps and solutions that have impacted them forever.
          We deliver on time, on budget and always exceed expectations. <br/><br/><br/>
          
          Reach out to us today, we would love to help you build your next big thing!<br/>
          Drop us an email: <a className='underline' href="mailto:hi@afrikaizen.co.zw">hi@afrikaizen.co.zw</a> and we can schedule a call.

          <br/><br/><br/>
          If you would like to see what we do, here is some of the work we've done 👇🏾
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
