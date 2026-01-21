import './App.css'
import profileImage from './assets/Profilfoto500x500px.jpg'

function App() {

  return (
    <>
      <div>
        <a href="#" className="" >
          <img src={profileImage} className="logo" alt="Profile foto"/>
        </a>
      </div>
      <section>
        <p>
          This profile page is currently under construction. In the meantime, 
          feel free to explore my blog or connect with me on social media.
        </p>
        <h1 className="">
          About Me
        </h1>
        <h2>
          Hi, I’m Daniel
        </h2>
        <p className="">
        a self-taught software engineering student from South Tyrol.
        </p>
        <p>
        I started learning software development from home two years ago, 
        following a structured but independent path. My main learning resources 
        have been Udemy courses and CompTIA certifications, 
        which helped me build a strong technical foundation.
        </p>
        <p>
        So far, I’ve worked with HTML, CSS, JavaScript, TypeScript, React, 
        and Tailwind CSS. I enjoy turning ideas into clean, functional interfaces 
        and continuously improving my skills one step at a time.
        </p>
      </section>
    </>
  )
}

export default App
