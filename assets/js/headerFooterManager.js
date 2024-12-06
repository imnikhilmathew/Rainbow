class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer-main">
      <div
        class="footer flex justify-center items-center bg-[#1A1A1A] sm:py-32 py-20 relative"
      >
        <div
          class="footer-container w-[90%] lg:w-[75%] 2xl:w-[60%] flex justify-evenly items-center flex-row flex-wrap"
        >
          <div class="foot-l sm:w-[60%] sm-[90%] relative">
            <img src="./assets/images/footer-logo.png" alt="Rainbow Logo" />
            <h2 class="text-white  sm:text-xl text-base my-5 w-[90%] pb-2 border-b-2  border-[#ffffff8a]">
              End-To-End Property Management
            </h2>

            <p class="text-[#888888] mb-5 text-sm sm:text-lg w-[90%]">
              Our expertise, as well as our passion for web design, sets us
              apart from other agencies.
            </p>
            <div
              class="socials flex justify-between sm:w-[20%] w-[70%] mx-auto sm:mx-0"
            >
              <a href=""><i class="fa-brands fa-twitter text-white"></i></a>
              <a href=""><i class="fa-brands fa-facebook-f text-white"></i></a>
              <a href=""><i class="fa-brands fa-linkedin-in text-white"></i></a>
              <a href=""><i class="fa-brands fa-instagram text-white"></i></a>
            </div>
          </div>
          <div class="foot-m pt-7 sm:pt-0">
            <h2
              class="text-white mb-5 sm:mb-6 sm:text-lg text-sm font-semibold"
            >
              Useful Links
            </h2>
            <a href="./"
              ><p class="text-[#c4c4c4] text-xs sm:text-base hover:underline">
                Home
              </p></a
            >
            <a href="./about.html"
              ><p
                class="text-[#c4c4c4] my-4 text-xs sm:text-base hover:underline"
              >
                About
              </p></a
            >
            <a href="./services.html"
              ><p class="text-[#c4c4c4] text-xs sm:text-base hover:underline">
                Services
              </p></a
            >
            <a href="./property.html"
              ><p
                class="text-[#c4c4c4] mt-4 text-xs sm:text-base hover:underline"
              >
                Property
              </p></a
            >
            
          </div>
          <div class="foot-r pt-7 sm:pt-0">
            <h2
              class="text-white mb-5 sm:mb-8 sm:text-lg font-semibold text-xs"
            >
              Karnataka
            </h2>
            <p class="text-[#c4c4c4] underline text-xs sm:text-base">
              1(800)123-456-789
            </p>
            <p class="text-[#c4c4c4] my-5 underline text-xs sm:text-base">
              2nd Floor, Diamond <br />Building, Bangalure
            </p>
            <p class="text-[#c4c4c4] underline text-xs sm:text-base">
              rainbow@mail.com
            </p>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 flex p-5 items-center">
          <p class="text-white sm:text-sm text-xs">Powered By</p>
          <a href="https://spyder.asia/"
            ><img
              class="sm:h-6 h-5 w-auto pl-3"
              src="./assets/icons/spydernet-logo.svg"
              alt=""
          /></a>
        </div>
      </div>
      <img
        src="./assets/images/footerimg.jpg"
        class="w-[100%] object-contain"
        alt="footer image"
      />
    </div>
    `;
  }
}


customElements.define('my-footer', myFooter);


// customElements.define('my-footer',myFooter)
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <div
      class="nav-bar flex items-center h-16 2xl:h-[90px] w-[100%] justify-between px-0 pl-[10px] fixed top-0 left-0 z-50 bg-[#ffffffdd]"
    >
      <div class="logo">
        <a href="./"
          ><img
            src="./assets/images/logo.png"
            alt="Rainbow Logo"
            class="w-32 sm:w-auto"
        /></a>
      </div>
      <div class="nav-links items-center text hidden md:flex">
        <ul class="flex items-center w-[500px] justify-between">
          <li><a href="./" class="nav-link">Home</a></li>
          <li>/</li>
          <li><a href="./about.html" class="nav-link">About</a></li>
          <li>/</li>
          <li><a href="./services.html" class="nav-link">Services</a></li>
          <li>/</li>
          <li><a href="./property.html" class="nav-link">Property</a></li>
          <li>/</li>
          <li><a href="./contact.html" class="nav-link">Contact Us</a></li>
        </ul>
      </div>
      <!--HAMBURGER -->
      <div
        class="hamburger-menu bg-[#232323] w-16 h-16 2xl:w-[90px] 2xl:h-[90px]   flex items-center justify-center cursor-pointer"
        onclick="openmenu()"
      >
        <img src="./assets/icons/menu-icon.svg" alt="hamburger icon" class="" />
      </div>

      <!-- MENU STARTS HERE -->

      <div
        id="menu"
        class="nav-menu h-screen w-full bg-[#000000e8] fixed top-[-100vh] left-0 flex justify-center items-center transition-all duration-700 ease-in-out z-50"
      >
        <i
          class="fa-solid fa-x absolute top-7 right-7 text-2xl sm:text-5xl cursor-pointer"
          onclick="closemenu()"
          style="color: #e8e8e8"
        ></i>
        <div
          class="menu-container sm:w-[60%] flex flex-col sm:flex-row sm:justify-between sm:items-center p-10 sm:p-0  h-full"
        >
          <div
            class="menu-links sm:hidden flex flex-col items-stretch text-center h-[50%]  justify-evenly mb-10"
          >
            <a href="./">
              <h2 class="text-white text-lg font-semibold">Home</h2>
            </a>
            <a href="./about.html"
              ><h2 class="text-white text-xl font-semibold">About Us</h2>
            </a>
            <a href="./services.html"
              ><h2 class="text-white text-xl font-semibold">Services</h2>
            </a>
            <a href="./property.html"
              ><h2 class="text-white text-xl font-semibold">Property</h2>
            </a>
            <a href="./contact.html"
              ><h2 class="text-white text-xl font-semibold">Contact Us</h2></a
            >
          </div>
          <div class="menu-left sm:flex justify-center items-center sm:w-[40%] h-fit">
            <div class="sm:w-[80%]">
              <img src="./assets/images/logo.png" class="sm:h-28 sm:mb-10 mb-5 h-16 " alt="" />
              <p class="text-white text-left sm:text-lg text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
              </p>
            </div>
          </div>
          <div class="menu-right w-[60%] text-left p-10 hidden h-fit sm:block">
            <h2 class="text-white text-4xl font-bold mb-3">
              Post Your Requirements Here.
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="bg-transparent text-white border-b-2 border-white p-2 focus:outline-none focus:border-s-gray-500 w-[100%] my-5"
            />
            <input
              type="text"
              name="name"
              placeholder="Email Address"
              class="bg-transparent text-white border-b-2 border-white p-2 focus:outline-none focus:border-s-gray-500 w-[100%]"
            />

            <input
              type="text"
              name="name"
              placeholder="Phone Number"
              class="bg-transparent text-white border-b-2 border-white p-2 focus:outline-none focus:border-s-gray-500 w-[100%] my-5"
            />
            <textarea
              id="myTextarea"
              rows="7"
              cols="50"
              placeholder="What are you looking for?"
              class="bg-transparent text-white p-2 focus:outline-none border-b-2 border-white w-[100%]"
            ></textarea>
            <a href="" class="w-fit"
              ><button
                class="bg-transparent mt-5 text-white w-56 h-14 border-2 border-white hover:bg-white hover:text-black transition-all duration-500 rounded-full text-xl font-semibold"
              >
                Submit
              </button></a
            >
          </div>
        </div>
      </div>
    </div>
    <hr class="h-[2px]" />
    <div class="lg:h-24 h-20  w-full"></div>
    <div onclick="scrollToTop()" class="scrollTop view">
      <i class="fa-solid fa-arrow-up text-2xl" style="color: #ffffff"></i>
    </div>

            
        `;
    }
}

customElements.define('my-header', MyHeader);



const navLinks=document.querySelectorAll('.nav-link');
const windowPathname=window.location.pathname;

navLinks.forEach(navLink=>{
  const navLinkPathname=new URL(navLink.href).pathname
  if(windowPathname===navLinkPathname){
    navLink.classList.add('active')
  }
})


var menu = document.getElementById("menu");

function openmenu() {
  menu.style.top = "0";
}
function closemenu(){
  menu.style.top="-100vh"
}





function scrollToTop() {
  window.scrollTo({ top: 0, behaviour: "smooth" });
  closemenu();
}
window.addEventListener("scroll", (e) => {
  document.querySelector(".view").style.display =
    window.scrollY > 100 ? "display" : "flex";

  document.querySelector(".view").style.display =
    window.scrollY > 0 ? "display" : "none";
});