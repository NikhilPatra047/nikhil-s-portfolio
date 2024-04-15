import Image from "next/image"
import nikhil_fun from "../../../../public/assets/Nikhil_fun.jpeg"

export default function About() {
  return (
    <section className="max-w-[1500px] mx-auto">
      <div className="w-[90%] my-6 mx-auto">
        <h1 className="text-[2.5rem] border-r-4 pr-2 w-fit border-r-white">About</h1>
        <div className="mt-4">
          <Image height={500} width={300} className="max-sm:w-full sm:float-left sm:mr-4" src={nikhil_fun} alt="A picture of author" />
          <p className="max-sm:mt-2">Bengaluru-based frontend web developer who likes to spend his time honing his coding skills, working on interesting projects, and learning something new related to the domain of Computer Science.</p>
          <span className="my-4 inline-block">....</span>
          <p>
            Hi there!👋 I&apos;m Nikhil, and I&apos;m passionate about bringing ideas to life on the internet. My journey began back in 2019 when I started my adventure at IIIT, Bhubaneswar, diving headfirst into the fascinating world of Computer Engineering.
          </p>
          <p className="my-2">
            Throughout my time in college, I delved into a variety of captivating subjects, from mastering the ins and outs of C++ to diving into databases, networking, and beyond. Alongside my studies, I also took on the role of team lead for our social committee, where we organized events to help educate and support underprivileged children in our community.
          </p>
          <p className="my-2">
            One of the highlights of my journey so far was reaching the finals of SIH 2023, a thrilling competition that put my problem-solving skills to the test. It was during this experience that I discovered my true passion lies in making websites not just functional, but visually stunning—the frontend magic!
          </p>
          <p className="my-2">
            Nowadays, I spend my time crafting captivating digital experiences using tools like NextJS, ReactJS, and a whole toolkit of other goodies. With over a year and a half of hands-on experience in web development, I&apos;m continually refining my skills and exploring new techniques to stay at the forefront of this ever-evolving field.
          </p>
          <p>
            But here&apos;s the thing — I&apos;m just scratching the surface. I&apos;m always hungry to learn more and stay ahead of the curve in web technology. So, join me on this exciting journey as we explore the boundless possibilities of web development together!
          </p>
          <span className="my-4 inline-block">....</span>
          <p>Think we could create something together? Please <a className="text-purple-500" href="mailto:patra.nikhil04@gmail.com">drop me an email</a>.</p>
        </div>
      </div>
    </section>
  )
}