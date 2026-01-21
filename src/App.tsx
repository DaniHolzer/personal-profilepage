import './App.css'
import profileImage from './assets/Profilfoto500x500px.jpg'

function App() {

  return (
    <>
      <a href="" className="flex justify-center" >
        <img src={profileImage} className="logo h-40 mb-10 rounded-full " alt="Profile foto"/>
      </a>
      <section>
        <p className="bg-stone-700 p-5 mb-20">
          This profile page is currently under construction. In the meantime, 
          feel free to explore
          <a href="https://daniholzer.github.io/my-blog" target="_blank"> my Blog </a> 
          or connect with me on social media.
        </p>
        <h1 className="mb-10">About Me</h1>
        <h3 className="mb-3 ">Hi, I’m Daniel</h3>
        <p className="text-xl font-bold mb-5 secondaryText">
          a self-taught software engineering student from South Tyrol.
        </p>
        <p className="mb-3 secondaryText">
          I started learning software development from home two years ago, 
          following a structured but independent path. My main learning resources 
          have been Udemy courses and CompTIA certifications, 
          which helped me build a strong technical foundation.
        </p>
        <p className="mb-3 secondaryText">
          So far, I’ve worked with HTML, CSS, JavaScript, TypeScript, React, 
          and Tailwind CSS. I enjoy turning ideas into clean, functional interfaces 
          and continuously improving my skills one step at a time.
        </p>
      </section>
      <nav className="flex gap-3 justify-center mt-20">
        {/* GitHub */}
        <a href="https://github.com/DaniHolzer" target="_blank">
          <svg className="hover:fill-[#ddd]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#999" viewBox="0 0 256 256">
            <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
          </svg>
        </a> 
        {/* GitLab */}
        <a href="https://gitlab.com/DaniHolzer">
          <svg className="hover:fill-[#ddd]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#999" viewBox="0 0 256 256">
            <path d="M230.15,117.1,210.25,41a11.94,11.94,0,0,0-22.79-1.11L169.78,88H86.22L68.54,39.87A11.94,11.94,0,0,0,45.75,41L25.85,117.1a57.19,57.19,0,0,0,22,61l73.27,51.76a11.91,11.91,0,0,0,13.74,0l73.27-51.76A57.19,57.19,0,0,0,230.15,117.1ZM198.91,165,128,215.09,57.09,165a41.1,41.1,0,0,1-15.75-43.84L58,57.5,73.13,98.76A8,8,0,0,0,80.64,104h94.72a8,8,0,0,0,7.51-5.24L198,57.5l16.63,63.65A41.1,41.1,0,0,1,198.91,165Z"></path>
          </svg>
        </a> 
        {/* X */}
        <a href="https://x.com/DanielHolz19614">
          <svg className="hover:fill-[#ddd]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#999" viewBox="0 0 256 256">
            <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
          </svg>
        </a> 
        {/* LinkedIn */}
        <a href="https://linkedin.com/in/daniel-holzer-9963262a1">
          <svg className="hover:fill-[#ddd]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#999" viewBox="0 0 256 256">
            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
          </svg> 
        </a> 
        {/* Instagram */}
        <a href="https://instagram.com/daniel_holzer01">
           <svg className="hover:fill-[#ddd]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#999" viewBox="0 0 256 256">
             <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
           </svg>
         </a> 
         {/* Discord */}
         <a href="https://discordapp.com/users/504335286700998656">
           <svg className="hover:fill-[#ddd]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#999" viewBox="0 0 256 256">
             <path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"></path>
           </svg> 
         </a> 
      </nav>
    </>
  )
}

export default App
