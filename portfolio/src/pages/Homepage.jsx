import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect , useRef ,useState } from 'react'
import 'boxicons/css/boxicons.min.css';
import Profile from "../assets/Profile.png"
import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.png"
import Project3 from "../assets/project3.png"



export const Homepage = () => {

    // Back to top buttom
                const [showButton, setShowButton] = useState(false);
        const [isHovered, setIsHovered] = useState(false);

        // Show button when scrolled past 300px
        window.onscroll = () => {
            setShowButton(window.scrollY > 300);
        };


       //Aos animation
            useEffect(() => {
        AOS.init({
            duration: 1000, // Optional default duration
            once: true,     // Optional: only animate once
        });
        }, []);

        useEffect(() => {
        AOS.refresh();
        }, []);


        const toggleDarkMode = () => {
  document.body.classList.toggle('dark');
};

    return (
        <>

        <body data-aos-easing="ease-in-out" data-aos-duration="2000" data-aos-delay="0" className='roboto' >

           {/* Header  */}
           <nav className='bg-white fixed top-0 left-0 w-full z-50 p-1.5 overflow-hidden shadow-lg dark:bg-gray-800 transition-all duration-300' data-aos-duration="1000" data-aos="fade-down">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <a href="#" className="flex items-center gap-2">
                        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">RA | Portfolio</h1>
                    </a>
                    <button  className="md:hidden text-gray-700 dark:text-white focus:outline-none"><i className="bx bx-menu text-2xl" id="burger"></i></button>

                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <a href="#home" className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600">
                            <i className="bx bx-home"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600">
                            <i className="bx bx-id-card"></i>
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600">
                            <i className="bx bx-code-alt"></i>
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experience" className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600">
                            <i className="bx bx-briefcase-alt"></i>
                            <span>Experience</span>
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600">
                            <i className="bx bx-bar-chart-alt-2"></i>
                            <span>Skills</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600">
                            <i className="bx bx-envelope"></i>
                            <span>Contact</span>
                        </a>
                    </li>
                     <li>
                        <a  className="flex cursor-pointer items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600">
                             <i className="bx bx-moon text-xl"></i>
                            <span onClick={toggleDarkMode}>Dark Mode</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
           </nav>

           {/* Hidden Menu */}
            
 
     <div id="menu"  className="fixed top-0 right-0 h-full w-70 bg-white dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden translate-x-full">
     <div className="flex flex-col h-full">
         <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
         <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Navigation</h2>
         </div>
            <button className="text-gray-800 dark:text-white focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors duration-200" >
            <i className="bx bx-x text-2xl"></i>
            </button>
          </div>
            <div className="flex-1 overflow-y-auto py-6">
            <ul className="flex flex-col gap-2 px-6">
            <li className="transform transition-all duration-300 translate-x-10 opacity-0">
    <a href="#home" className="flex items-center gap-3 text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 bg-gray-800 dark:bg-white dark:text-gray-800 text-white shadow-lg">
        <i className="bx bx-home text-xl"></i>
        <span>Home</span>
        <i className="bx bx-chevron-right ml-auto text-xl"></i>
        </a>
    </li>
    <li className="transform transition-all duration-300 translate-x-10 opacity-0">
        <a href="#about" className="flex items-center gap-3 text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700">
            <i className="bx bx-id-card text-xl"></i>
            <span>About</span>
            <i className="bx bx-chevron-right ml-auto text-xl"></i>
        </a>
    </li>
        <li className="transform transition-all duration-300 translate-x-10 opacity-0">
            <a href="#projects" className="flex items-center gap-3 text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                <i className="bx bx-code-alt text-xl"></i>
                <span>Projects</span>
                <i className="bx bx-chevron-right ml-auto text-xl"></i>
                </a>
            </li>
            <li className="transform transition-all duration-300 translate-x-10 opacity-0">
                <a href="#experience" className="flex items-center gap-3 text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <i className="bx bx-briefcase-alt text-xl"></i>
                    <span>Experience</span>
                    <i className="bx bx-chevron-right ml-auto text-xl"></i>
                    </a>
                </li>
                <li className="transform transition-all duration-300 translate-x-10 opacity-0">
                    <a href="#skills" className="flex items-center gap-3 text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <i className="bx bx-bar-chart-alt-2 text-xl"></i>
                        <span>Skills</span>
                        <i className="bx bx-chevron-right ml-auto text-xl"></i> 
                    </a>
                </li>
                <li className="transform transition-all duration-300 translate-x-10 opacity-0">
                    <a href="#contact" className="flex items-center gap-3 text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <i className="bx bx-envelope text-xl"></i>
                        <span>Contact</span>
                        <i className="bx bx-chevron-right ml-auto text-xl"></i>
                        </a>
                    </li>
                    <li>
                        <button className="w-full flex items-center gap-3 text-lg font-medium px-4 py-3 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Toggle dark mode">
                            <i className="bx bx-moon text-xl"></i>
                            <span>Dark Mode</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">© 2025 Ramla Aminu. All rights reserved</div>
            </div>
        </div>
    </div>




    {/* Home */}
         <section id="home" className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden" data-aos-duration="1000" data-aos="fade-down">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white" data-aos-dely="600" data-aos="fade-down">Hi, I'm Ramla Aminu</h1>
                   <h2 className="text-xl font-semibold text-gray-800 dark:text-white" data-aos="fade-right" data-aos-delay="600">
                    <span className="typing-text text-2xl">Aspring Web Developer</span>
                    </h2>

            </div>
            <p className="text-lg text-gray-800 dark:text-white leading-relaxed max-w-lg" data-aos-delay="600" data-aos="fade-left">I create beautiful, functional, and user-friendly digital experiences. Passionate about turning ideas into reality through clean code and innovative design.</p>
            <div className="flex items-center space-x-4" data-aos-delay="600" data-aos="fade-down">
                <span className="text-gray-800 dark:text-white font-medium">Follow me on:</span>
                <div className="flex space-x-3">
                    <a href="https://github.com/Ramlah22" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white dark:bg-white rounded-full flex items-center shadow-2xl justify-center dark:text-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" title='Visit GitHub' aria-label="Visit GitHub">
                        <i className="bx bxl-github text-lg"></i>
                    </a>
                    <a href="https://www.tiktok.com/@urfav_lerh?_t=ZM-8yHI5ZyydWs&_r=1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white dark:bg-white rounded-full flex items-center shadow-2xl justify-center dark:text-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" title='Visit Tiktok' aria-label="Visit Tiktok">
                    <i className="bx bxl-tiktok text-lg"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white dark:bg-white rounded-full flex items-center shadow-2xl justify-center dark:text-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"  title="Visit Instagram" aria-label="Visit Instagram">
                    <i className="bx bxl-instagram text-lg"></i>
                </a>
                <a href="https://x.com/ramlaami?s=21" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 text-white dark:bg-white rounded-full flex items-center shadow-2xl justify-center dark:text-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1" title='Visit Twitter' aria-label="Visit Twitter">
                    <i className="bx bxl-twitter text-lg"></i>
                </a>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 aos-init" data-aos-delay="600" data-aos="fade-down">
            <button className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 bg-gray-800 dark:bg-white text-white dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-100" title='Explore My Project' aria-label="Explore My Project">
                <i className="bx bx-download mr-2"></i>Explore My Project</button>
                <button className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800" title='Download My CV' aria-label="Download My CV">
                    <i className="bx bx-envelope mr-2"></i>Download My CV</button>
                </div>
                <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                    <i className="bx bx-bar-chart-alt text-base"></i>Quick Stats:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 text-sm text-gray-800 dark:text-white gap-6 mt-2 " data-aos-delay="600" data-aos="fade-up">
                        <div className="flex items-center gap-2 bg-gray-800 dark:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg  p-2 rounded-3xl">
                            <div className="text-base text-white dark:text-gray-800">
                                <i className="bx bx-briefcase"></i>
                            </div>
                            <div>
                                <p className="font-bold text-white dark:text-gray-800">2+ Years</p>
                                <p className="text-xs text-white dark:text-gray-800">Experience</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-800 dark:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg p-2 rounded-3xl">
                            <div className="text-base text-white dark:text-gray-800">
                                <i className="bx bxl-javascript"></i>
                            </div>
                            <div>
                                <p className="font-bold text-white dark:text-gray-800">JavaScript</p>
                                <p className="text-xs text-white dark:text-gray-800">Main Language</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-800 dark:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg p-2 rounded-3xl">
                            <div className="text-base text-white dark:text-gray-800">
                                <i className="bx bx-code-alt"></i>
                            </div>
                            <div>
                                <p className="font-bold text-white dark:text-gray-800">4 Projects</p>
                                <p className="text-xs text-white dark:text-gray-800">Total Projects</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 bg-gray-800 dark:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg p-2 rounded-3xl">
                            <div className="text-base text-white dark:text-gray-800">
                                <i className="bx bx-award"></i>
                            </div>
                            <div>
                                <p className="font-bold text-white dark:text-gray-800">10+</p>
                                <p className="text-xs text-white dark:text-gray-800">Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center items-center " data-aos-delay="600" data-aos="fade-up">
                    <div className="relative z-10">
                        <img alt="Ramla Aminu Profile" className="w-full h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl dark:shadow-gray-800 border-8 border-gray-700 dark:border-gray-800 hover:shadow-3xl hover:-translate-y-2 transition-all duration-300" src={Profile}/>
                    </div>
                    <div className="absolute top-0 left-16 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 text-white dark:bg-white dark:text-gray-800 dark:border  rounded-full drop-shadow-2xl shadow-lg dark:shadow-gray-800 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-float cursor-pointer" >
                        <i className="bx bxl-html5 text-xl sm:text-2xl"></i>
                    </div>
                    <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 text-white dark:bg-white dark:text-gray-800 dark:border  rounded-full drop-shadow-2xl shadow-lg dark:shadow-gray-800 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-float cursor-pointer" style={{ animationDelay: '0.5s' }}>
                        <i className="bx bxl-css3 text-xl sm:text-2xl"></i>
                    </div>
                    <div className="absolute bottom-0 left-8 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 text-white dark:bg-white dark:text-gray-800 dark:border  rounded-full drop-shadow-2xl shadow-lg dark:shadow-gray-800 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-float cursor-pointer" style={{ animationDelay: '1s' }}>
                        <i className="bx bxl-javascript text-xl sm:text-2xl"></i>
                    </div>
                    <div className="absolute bottom-8 sm:bottom-10 right-10 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800 text-white dark:bg-white dark:text-gray-800 dark:border  rounded-full drop-shadow-2xl shadow-lg dark:shadow-gray-800 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-float cursor-pointer" style={{ animationDelay: '1.5s' }}>
                        <i className="bx bxl-react text-xl sm:text-2xl"></i>
                    </div>
                </div>
            </div>
    </div>
</section>



              {/* About */}
                <section id="about" className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden" data-aos="fade-down" data-aos-duration="600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-800 dark:text-white mb-12">
            <h2 className="text-5xl font-bold mb-2">About Me</h2>
            <p className="text-lg text-gray-800 dark:text-white">Discover my journey, passions, and the story behind my work</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center py-12 min-h-[calc(100vh-5rem)]"><div className="w-full flex justify-center lg:justify-start" data-aos-delay="600" data-aos="fade-right">
            <img alt="About Me" className="w-full max-w-md rounded-xl shadow-lg object-cover 
             border-8 border-gray-700 dark:border-gray-800 
             hover:shadow-3xl hover:-translate-y-2 
             transition-all duration-300" src={Profile}/>
         </div>
         <div className="w-full text-gray-800 dark:text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 " data-aos-delay="600" data-aos="fade-down">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-12 h-12 p-4 flex items-center justify-center rounded-lg shadow-lg bg-gray-800 dark:bg-white dark:text-gray-800 text-white">
                            <i className="bx bx-info-circle text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Who Am I</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">I'm a passionate web developer with a love for creating digital experiences that make a difference. I specialize in building responsive, user-friendly websites and applications that combine beautiful design with powerful functionality.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800 p-4 dark:bg-white dark:text-gray-800 shadow-lg text-white">
                            <i className="bx bx-bulb text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">My Approach</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">I focus on user-centered design, performance, and accessibility   always evolving with modern tech to deliver seamless digital experiences.</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mb-4 " data-aos-delay="600" data-aos="fade-down">
                <i className="bx bx-info-circle text-2xl text-gray-800 dark:text-white" ></i>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Personal Info</h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0 " data-aos-delay="600" data-aos="fade-down">
                <li className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 p-4 rounded-lg bg-gray-800 dark:bg-white dark:text-gray-800 shadow-lg text-white">
                        <i className="bx bx-id-card text-xl" ></i>
                    </div>
                    <div>
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Name:</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300"> Ramla Aminu</span>
                    </div>
                </li>
                <li className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 p-4 rounded-lg bg-gray-800 dark:bg-white dark:text-gray-800 shadow-lg text-white">
                        <i className="bx bx-calendar text-xl" ></i>
                    </div>
                    <div>
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Date of Birth:</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300"> June,23-20**</span>
                    </div>
                </li>
                <li className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 p-4 rounded-lg bg-gray-800 dark:bg-white dark:text-gray-800 shadow-lg text-white">
                        <i className="bx bx-map text-xl" ></i>
                    </div>
                    <div>
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Place of Birth:</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300"> Plateau, Nigeria</span>
                    </div>
                </li>
                <li className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 p-4 rounded-lg bg-gray-800 dark:bg-white dark:text-gray-800 shadow-lg text-white">
                        <i className="bx bx-envelope text-xl" ></i>
                    </div>
                    <div>
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Email:</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300"> aminuramlah001@gmail.com</span>
                    </div>
                </li>
                <li className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 p-4 rounded-lg bg-gray-800 dark:bg-white dark:text-gray-800 shadow-lg text-white">
                        <i className="bx bx-phone text-xl" ></i>
                    </div>
                    <div>
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Phone:</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300"> +234 9160094080</span>
                    </div>
                </li>
                <li className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 p-4 rounded-lg bg-gray-800 dark:bg-white dark:text-gray-800 shadow-lg text-white">
                        <i className="bx bx-book text-xl" aria-hidden="true"></i>
                    </div>
                    <div>
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">Education:</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300"> University of Jos</span>
                    </div>
                </li>
                <li className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 p-4 rounded-lg bg-gray-800 dark:bg-white dark:text-gray-800 shadow-lg text-white">
                        <i className="bx bx-award text-xl" aria-hidden="true"></i>
                    </div>
                    <div>
                        <span className="font-semibold text-sm text-gray-800 dark:text-white">GPA:</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300"> 4.55 / 5.00</span>
                    </div>
                </li>
            </ul>
            <button className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-gray-800 dark:border-white text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800 " aria-label="Download Resume" data-aos-delay="600" data-aos="fade-down">
                <i className="bx bx-download text-lg mr-2" ></i>Download My Resume</button>
            </div>
        </div>
    </div>
</section>


            {/* Project */}
            <section data-aos="fade-down" data-aos-duration="1000">
                 <div id="projects" className="w-full h-auto py-10 px-[5%]">
            <div className="flex justify-center items-center flex-col gap-2 mb-8 md:mb-20">
                <h2 className="font-semibold text-xl md:text-3xl uppercase text-gray-700">Some Projects</h2>
                <div className="inline-block w-10 h-1 rounded-full bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 justify-center items-center mb-14 md:mb-32">
                <div className="h-auto rounded-md overflow-hidden hover:scale-105 duration-500 transition-all">
                    <img src={Project1} alt="Image" className="w-full h-full object-cover"/>
                </div>
                <div className="h-auto" data-aos-delay="600" data-aos="fade-up">
                    <h2 className="font-semibold text-lg mb-2 text-gray-700" >Recipes by Bluey</h2>
                    <p className="text-sm text-left text-gray-500">"Recipes by Bluey" is a fun and family-friendly recipe website inspired by the beloved Bluey TV show. It features simple, tasty, and playful recipes that kids and parents can enjoy making together. Whether you're recreating treats from the show or discovering new favorites, each recipe is designed to bring joy to the kitchen — Bluey-style!
                    </p>
                    <a className="inline-block py-2 px-6 bg-gray-700 text-white rounded-md hover:-translate-y-1 transition-all duration-200 ease-linear mt-8">More Info</a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 justify-center items-center mb-14 md:mb-32">
                <div className="h-auto order-2 md:order-1" data-aos-delay="600" data-aos="fade-up" >
                    <h2 className="font-semibold text-lg mb-2 text-gray-700">Heygaia</h2>
                    <p className="text-sm text-left text-gray-500">
                Heygaia is a wellness-focused massage service dedicated to helping you relax, restore, and reconnect. Blending modern techniques with a holistic approach, Heygaia offers personalized massage experiences designed to ease tension, reduce stress, and support overall well-being — all in a calming, nurturing environment.</p>
                <a className="inline-block py-2 px-6 bg-gray-700 text-white rounded-md hover:-translate-y-1 transition-all duration-200 ease-linear mt-8">More Info</a>
            </div>
            <div className="h-auto rounded-md overflow-hidden order-1 md:order-2 hover:scale-105 duration-500 transition-all">
                <img src={Project2} alt="Image" className="w-full h-full object-cover"/>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 justify-center items-center ">
            <div className="h-auto rounded-md overflow-hidden hover:scale-105 duration-500 transition-all">
                <img src={Project3} alt="Image" className="w-full h-full object-cover"/>
            </div>
            <div className="h-auto" data-aos-delay="600" data-aos="fade-up">
                <h2 className="font-semibold text-lg mb-2 text-gray-700">Bluey Glamour</h2>
                <p className="text-sm text-left text-gray-500">
                    Bluey Glamour is your go-to online destination for trendy fashion and stylish accessories. From everyday essentials to statement pieces, Bluey Glamour brings you curated collections that blend elegance, comfort, and a touch of boldness — all designed to help you shine with confidence.</p>
                    <a className="inline-block py-2 px-6 bg-gray-700 text-white rounded-md hover:-translate-y-1 transition-all duration-200 ease-linear mt-8">More Info</a>
                </div>
            </div>
        </div>
            </section>



            {/* Experiences */}
             <section id="experience" className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden " data-aos-duration="1000" data-aos="fade-down">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 text-gray-800 " data-aos-delay="600" data-aos="fade-down">
            <h2 className="text-5xl font-bold dark:text-white mb-2">Experience</h2>
            <p className="text-lg dark:text-gray-400">A glimpse of where I've been — from work experience to organizational life that shaped who I am.</p>
        </div>
        <div className="flex justify-center mb-8 gap-4 flex-wrap " data-aos-delay="600" data-aos="fade-down">
            <button className="flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all bg-gray-800 text-white dark:bg-white dark:text-gray-800"><i className="bx bx-briefcase"></i>Work</button>
            <button className="flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white"><i className="bx bx-group"></i>Organization</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 gap-6 " data-aos-delay="600" data-aos="fade-down">
            <div className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0">
                        <i className="bx bx bx-code-alt text-5xl"></i>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Frontend Developer Intern</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">ATAFOM university</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">June 2024 - Jan 2025 • Remote</p>
    </div>
</div>
<div className="mb-4">
    <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Responsibilities:</h4>
    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
        <li className="flex items-center gap-2">
            <i className="bx bx-check text-lg"></i>Build responsive UI with React &amp; Tailwind</li>
            <li className="flex items-center gap-2">
                <i className="bx bx-check text-lg"></i>Integrate REST APIs for dashboard</li>
                <li className="flex items-center gap-2">
                    <i className="bx bx-check text-lg"></i>Fix bugs &amp; optimize performance</li>
                </ul>
            </div>
            <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">React</span>
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">Tailwind</span>
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">Javascript</span>
                </div>
            </div>
            <div className="flex gap-2"></div>
        </div>
        <div className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-transform">
            <div className="flex items-start gap-4">
                <div className="w-16 h-16 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0">
                    <i className="bx bx bx-server text-5xl"></i>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Backend Developer</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Corestrem Ng</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Mar 2025 - Dec 2025 • Remote</p>
                </div>
            </div>
            <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Responsibilities:</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li className="flex items-center gap-2">
                        <i className="bx bx-check text-lg"></i>Create RESTful APIs using Express.js</li>
                        <li className="flex items-center gap-2"><i className="bx bx-check text-lg"></i>Implement JWT auth &amp; rate limiter</li>
                        <li className="flex items-center gap-2"><i className="bx bx-check text-lg"></i>Write Swagger documentation</li>
                    </ul>
                </div>
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">Node.js</span>
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">Express</span>
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">MongoDB</span>
                    </div>
                </div>
                <div className="flex gap-2"></div>
            </div>
            <div className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0">
                        <i className="bx bx bx-briefcase-alt text-5xl"></i>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Freelance Web Developer</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Personal Projects</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">2025 - Present • Remote</p>
                    </div>
                </div>
                <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Responsibilities:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                        <li className="flex items-center gap-2">
                            <i className="bx bx-check text-lg"></i>Build custom websites for clients</li>
                            <li className="flex items-center gap-2">
                                <i className="bx bx-check text-lg"></i>Deploy with Vercel &amp; Netlify</li>
                                <li className="flex items-center gap-2"><i className="bx bx-check text-lg"></i>Deliver mobile-first UIs</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">React</span>
                                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">Javasript</span>
                                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">CSS</span>
                            </div>
                        </div>
                        <div className="flex gap-2"></div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-transform">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0">
                                <i className="bx bx bx-paint text-5xl"></i>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">UI Designer</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">UI Freelance</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Jan 2026 - Dec 2026 • Remote</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Responsibilities:</h4>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                                <li className="flex items-center gap-2"><i className="bx bx-check text-lg"></i>Design landing pages in Figma</li>
                                <li className="flex items-center gap-2"><i className="bx bx-check text-lg"></i>Create reusable components</li>
                                <li className="flex items-center gap-2"><i className="bx bx-check text-lg"></i>Work closely with frontend devs</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Tech Stack:</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">Figma</span>
                                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">Balsamiq</span>
                                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-gray-200">Canva</span>
                            </div>
                        </div>
                        <div className="flex gap-2"></div>
                    </div>
                </div>
            </div>
        </section>


            {/* Skills */}
                    <section id="skills" className="min-h-screen bg-white dark:bg-gray-800 pt-20 overflow-hidden " data-aos-duration="1000" data-aos="fade-down">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 text-gray-800 " data-aos-delay="600" data-aos="fade-down">
            <h2 className="text-5xl font-bold dark:text-white mb-2">Skills</h2>
            <p className="text-lg dark:text-gray-400">Tools and technologies I’ve mastered or currently exploring.</p>
        </div>
        <div className="flex justify-center mb-8 gap-4 flex-wrap" data-aos-delay="600" data-aos="fade-down">
            <button className="flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all bg-gray-800 text-white dark:bg-white dark:text-gray-800">
                <i className="bx bx bx-code-alt"></i>Frontend</button>
                <button className="flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white"><i className="bx bx bx-server"></i>Backend</button>
                <button className="flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white"><i className="bx bx bx-wrench"></i>Other Tools</button>
                <button className="flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white"><i className="bx bx bx-brain"></i>AI/ML &amp; Tools</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 gap-6" data-aos-delay="600" data-aos="fade-down">
                <div className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-transform flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 mb-4">
                        <i className="bx bx bxl-html5 text-5xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">HTML</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center"><span className="inline-block">Advanced</span></p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-transform flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 mb-4"><i className="bx bx bxl-css3 text-5xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">CSS</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center"><span className="inline-block">Advanced</span></p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-transform flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 mb-4">
                        <i className="bx bx bxl-javascript text-5xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">JavaScript</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center"><span className="inline-block">Advanced</span></p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-transform flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 mb-4">
                        <i className="bx bx bxl-react text-5xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">React</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center"><span className="inline-block">Advanced</span></p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-transform flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 mb-4">
                        <i className="bx bx bxl-tailwind-css text-5xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">Tailwind CSS</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center"><span className="inline-block">Advanced</span></p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg p-6 hover:-translate-y-1 transition-transform flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 mb-4">
                        <i className="bx bx bx-bolt-circle text-5xl"></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">Vite</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center"><span className="inline-block">Intermediate</span></p>
                </div>
            </div>
        </div>
    </section>   


    {/* Contact     */}
      <section className='min-h-screen pb-20 bg-white dark:bg-gray-800 pt-20' id="contact" data-aos-duration="1000" data-aos="fade-down">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
             <div className="text-center mb-12 text-gray-800" data-aos-delay="600" data-aos="fade-down">
                <h2 className="text-5xl font-bold dark:text-white mb-2">Contact Me</h2>
                <p className="text-lg dark:text-gray-400">Reach out via form, social media, or support platforms.</p>
            </div>
            <div className="flex justify-center mb-8 gap-4 flex-wrap" data-aos-delay="600" data-aos="fade-down">
                <button className="flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all bg-gray-800 text-white dark:bg-white dark:text-gray-800"><i className="bx bx-envelope"></i>Contact Me</button>
                <button className="flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white"><i class="bx bx-heart"></i>Support Me</button>
            </div> 
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 " data-aos-delay="600" data-aos="fade-down">
                 <div className="grid gap-4 max-w-xl mx-auto lg:mx-0">
                        <a href="https://github.com/Ramlah22" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 px-7 w-full  py-7 border border-white rounded-lg shadow-lg dark:bg-gray-800 text-gray-800 dark:text-white hover:shadow-lg hover:-translate-y-1 transition-all" title='GitHub' aria-label="GitHub">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0">
                                    <i className="bx bxl-github text-xl"></i>
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="font-semibold text-2xl leading-tight">GitHub</span>
                                    <span className="text-sm text-gray-800 dark:text-white leading-snug">Explore my code &amp; projects</span>
                                </div>
                            </div>
                            <i className="bx bx-chevron-right text-2xl text-gray-800 dark:text-white"></i>
                        </a>
                        <a href="https://www.tiktok.com/@urfav_lerh?_t=ZM-8yHI5ZyydWs&_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 px-7 w-full  py-7 border border-white rounded-lg shadow-lg dark:bg-gray-800 text-gray-800 dark:text-white hover:shadow-lg hover:-translate-y-1 transition-all" title='tiktok' aria-label="tiktok">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0">
                                    <i className="bx bxl-tiktok text-lg"></i>
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="font-semibold text-2xl leading-tight">Tiktok</span>
                                    <span className="text-sm text-gray-800 dark:text-white leading-snug">My visual life updates</span>
                                </div>
                            </div>
                            <i className="bx bx-chevron-right text-2xl text-gray-800 dark:text-white"></i>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 px-7 w-full  py-7 border border-white rounded-lg shadow-lg dark:bg-gray-800 text-gray-800 dark:text-white hover:shadow-lg hover:-translate-y-1 transition-all" title='Instagram' aria-label="Instagram">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0">
                                    <i className="bx bxl-instagram text-xl"></i>
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="font-semibold text-2xl leading-tight">Instagram</span>
                                    <span className="text-sm text-gray-800 dark:text-white leading-snug">My visual journal &amp; life updates</span>
                                </div>
                            </div>
                            <i className="bx bx-chevron-right text-2xl text-gray-800 dark:text-white"></i>
                        </a>
                        <a href="https://x.com/ramlaami?s=21" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 px-7 w-full  py-7 border border-white rounded-lg shadow-lg dark:bg-gray-800 text-gray-800 dark:text-white hover:shadow-lg hover:-translate-y-1 transition-all" title='Twitter' aria-label="Twitter">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0">
                                    <i className="bx bxl-twitter text-xl"></i>
                                </div>
                                <div className="flex flex-col overflow-hidden">
                                    <span className="font-semibold text-2xl leading-tight">Twitter</span>
                                    <span className="text-sm text-gray-800 dark:text-white leading-snug">Random thoughts &amp; dev tweets</span>
                                </div>
                            </div>
                            <i className="bx bx-chevron-right text-2xl text-gray-800 dark:text-white"></i>
                        </a>
                    </div>

                    {/* Form */}
                      <div className="rounded-lg py-12 px-7 shadow-lg border h-fit border-white max-w-xl w-full mx-auto lg:mx-0">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
                            <i className="bx bx-envelope text-lg"></i>Send Me a Message</h3>

                            <form className="grid gap-4">
                                <input placeholder="Your Name" className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800" type="text"/>
                                <input placeholder="Your Email" className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800" type="email"/>
                                <textarea placeholder="Your Message" className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800" rows="5"></textarea>
                                <button type="button" className="px-4 py-3 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1">Send<i className="bx bx-send text-[1.2rem] translate-y-[1px]"></i></button>
                            </form>
                        </div>
            </div>
        </div>
      </section>

      {/* Footer */}
           <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div>
                <h3 className="flex items-center text-2xl font-bold mb-2 gap-2"><i className="bx bx-code-alt text-gray-800 dark:text-white text-xl"></i>Ramla Aminu</h3>
                <p className="text-sm text-gray-800 dark:text-white">I create beautiful, functional, and user-friendly digital experiences. Passionate about turning ideas into reality through clean code and innovative design.</p>
            </div>
            <div>
                <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
                    <i className="bx bx-navigation text-base"></i>Navigation</h4>
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a></li>
                        <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="flex items-center gap-2 text-lg font-semibold mb-3"><i className="bx bx-share-alt text-base"></i>Find Me Online</h4>
                    <ul className="flex flex-wrap gap-3">
                        <li><a href="https://github.com/Ramlah22" target="_blank" rel="noopener noreferrer" title='GitHub' aria-label="GitHub">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-800 shadow-md hover:scale-110 transition-all">
                                <i className="bx bxl-github text-xl"></i>
                            </div>
                        </a>
                    </li>
                    <li><a href="https://www.tiktok.com/@urfav_lerh?_t=ZM-8yHI5ZyydWs&_r=1" target="_blank" rel="noopener noreferrer" title='Tiktok' aria-label="Tiktok">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-800 shadow-md hover:scale-110 transition-all">
                              <i className="bx bxl-tiktok text-lg"></i>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noopener noreferrer" title='Instagram' aria-label="Instagram"><div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-800 shadow-md hover:scale-110 transition-all">
                        <i className="bx bxl-instagram text-xl"></i>
                    </div>
                </a>
            </li>
            <li>
                <a href="https://x.com/ramlaami?s=21" target="_blank" rel="noopener noreferrer" title='Twitter' aria-label="Twitter">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-800 shadow-md hover:scale-110 transition-all">
                        <i className="bx bxl-twitter text-xl"></i>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <div>
        <h4 className="flex items-center gap-2 text-lg font-semibold mb-3"><i className="bx bx-mail-send text-base"></i>Subscribe to Newsletter</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Stay updated with my latest projects and articles.</p>
        <form className="flex flex-col gap-2">
            <input placeholder="Enter your email" className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white" type="email"/>
            <button type="button" className="px-4 py-3 bg-gray-800 shadow-lg text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 leading-none text-base">Subscribe<i className="bx bx-send text-[1.2rem] translate-y-[1px]"></i></button>
        </form>
    </div>
    </div>
    <hr className="my-8 border-gray-800 dark:border-gray-700"/>
    <div className="mt-8 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-800 dark:text-white gap-4">
        <div className="flex gap-4 flex-wrap">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Terms of Use</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Sitemap</a>
        </div>
        <div className="text-center md:text-right">© 2025 Ramla Aminu. All rights reserved.</div>
    </div>
    </footer>

        </body>
          

        {/* BackToTop Button */}

      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        class="fixed bottom-6 right-6 z-50 w-15 h-15 flex items-center drop-shadow-2xl justify-center rounded-full bg-gray-800 text-white dark:bg-white dark:text-gray-800 shadow-lg  transition-all hover:scale-103"
          aria-label="Back to top"
        >
          <i class="bx bx-chevron-up text-2xl"></i>
        </button>
      )}

      
        </>
    )
}  