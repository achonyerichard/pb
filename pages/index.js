import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/Navbar";
import HeroBg from "../assets/images/hero.png";
import Layout from "../assets/images/layout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/images/logo2.png";
import Blog from "../assets/images/blog.png";
import Script from "next/script";
import Farmless from "../assets/images/farmless.png"
import { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

   const [navbar, setNavbar] = useState(false);
   const changeBackground = () => {
     console.log(window.scrollY);
     if (window.scrollY >= 66) {
       setNavbar(true);
     } else {
       setNavbar(false);
     }
   };

   useEffect(() => {
     changeBackground();
     // adding the event when scroll change background
     window.addEventListener("scroll", changeBackground);
   });

   useEffect(() => {
     AOS.init();
     AOS.refresh();
   }, []);
  return (
    <>
      <div className="">
        <Navbar navbar={navbar} />
        <div className="bg-cover bg-no-repeat bg-center pt-20  bg-my_bg_image md:h-screen pb-5 ">
          <Head>
            <title>Plugbay</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
            />
          </Head>

          <main className="pt-5 md:pt-40 md:px-40 px-5 pb-10">
            <div className="flex">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="flex flex-col mr-8 pt-12 space-y-3"
              >
                <div>
                  <span className="w-5">
                    <svg
                      className="fill-primary font-bold"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </span>
                </div>
                <div>
                  <span className="w-5">
                    <svg
                      className="fill-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </span>
                </div>
                <div className="w-3">
                  <span>
                    <svg
                      className="fill-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </span>
                </div>
                <div className="w-5">
                  <span>
                    <svg
                      className="fill-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <p className="text-primary text-xl font-semibold pb-2">
                  Let’s help show the world how valuable you are! ______
                </p>
                <h1 className="w-2/3 text-8xl text-primary font-bold pb-6">
                  Get Started with Us
                </h1>
                <button
                  type="text"
                  className=" text-xl bg-secondary text-primary rounded-lg px-5 py-3 font-semibold"
                >
                  Register now
                </button>
              </div>
            </div>
          </main>
        </div>
        <section className="bg-body_bg pt-10 px-10 ">
          <div className="md:flex px-10 justify-center md:px-40">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="flex flex-col  mb-4 pb-2  md:pr-32 border-b-2 md:border-b-0 md:border-r-2 border-primary"
            >
              <p className="text-primary">Total Users</p>
              <h1 className="text-2xl font-bold text-primary">178,705</h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex flex-col  mb-4 pb-2 md:pr-32 md:pl-32 border-b-2 md:border-b-0 md:border-r-2 border-primary"
            >
              <p className="text-primary">Total Advert</p>
              <h1 className="text-2xl font-bold text-primary">61,455</h1>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="flex flex-col  mb-4 pb-2 md:pr-32 md:pl-32 border-b-2 md:border-b-0 md:border-r-2 border-primary"
            >
              <p className="text-primary">Total EVP Agents</p>
              <h1 className="text-2xl font-bold text-primary">62,637</h1>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="flex flex-col  mb-4 pb-2  md:pl-32 border-b-2 md:border-none   border-primary"
            >
              <p className="text-primary">Total Requests</p>
              <h1 className="text-2xl font-bold text-primary">504,892</h1>
            </div>
          </div>
          <div className="mt-10 md:p-10 md:px-40  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="rounded overflow-hidden shadow-lg border border-secondary"
            >
              <div className="pt-10 pb-20 px-20">
                <div className="font-bold text-xl mb-2 flex justify-center">
                  <div className="w-20 h-20 mb-5 bg-secondary rounded-full flex justify-center items-center">
                    <span className="w-10 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="fill-primary"
                      >
                        <path d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336zM464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <p className="text-sm text-primary text-center">
                    Built with love for you. A PlugBay membership gives you
                    immense opportunities to showcase your skills
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="rounded overflow-hidden shadow-lg border border-secondary"
            >
              <div className="pt-10 pb-20 px-20">
                <div className="font-bold text-xl mb-2 flex justify-center">
                  <div className="w-20 h-20 mb-5 bg-secondary rounded-full flex justify-center items-center">
                    <span className="w-10 text-primary">
                      <svg
                        className="fill-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <p className="text-sm text-primary text-center">
                    Looking for more workers or service providers? Use plugbay
                    to bring workers
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="rounded overflow-hidden shadow-lg border border-secondary"
            >
              <div className="pt-10 pb-20 px-20">
                <div className="font-bold text-xl mb-2 flex justify-center">
                  <div className="w-20 h-20 mb-5 bg-secondary rounded-full flex justify-center items-center">
                    <span className="w-10 text-primary">
                      <svg
                        className="fill-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <p className="text-sm text-primary text-center">
                    Built with love for you. A PlugBay membership gives you
                    immense opportunities to showcase your skills
                  </p>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="rounded overflow-hidden shadow-lg border border-secondary"
            >
              <div className="pt-10 pb-20 px-20">
                <div className="font-bold text-xl mb-2 flex justify-center">
                  <div className="w-20 h-20 mb-5 bg-secondary rounded-full flex justify-center items-center">
                    <span className="w-10 text-primary">
                      <svg
                        className="fill-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M480 179.6C498.6 188.4 512 212.1 512 240C512 267.9 498.6 291.6 480 300.4V448C480 460.9 472.2 472.6 460.2 477.6C448.3 482.5 434.5 479.8 425.4 470.6L381.7 426.1C333.7 378.1 268.6 352 200.7 352H192V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V352C28.65 352 0 323.3 0 288V192C0 156.7 28.65 128 64 128H200.7C268.6 128 333.7 101 381.7 53.02L425.4 9.373C434.5 .2215 448.3-2.516 460.2 2.437C472.2 7.39 480 19.06 480 32V179.6zM200.7 192H192V288H200.7C280.5 288 357.2 317.8 416 371.3V108.7C357.2 162.2 280.5 192 200.7 192V192z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="flex justify-center ">
                  <p className="text-sm text-primary text-center">
                    Advertise with freedom at last…no Internet, smart phone or
                    sms credit needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mx-2 ">
            <div className="flex justify-center ">
              <h1 className=" text-primary text-4xl font-bold border-b-4   border-secondary mb-5   pb-2">
                Adverts
              </h1>
            </div>
            <div
              id="carouselDarkVariant"
              class="carousel slide carousel-fade carousel-dark relative"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  data-bs-target="#carouselDarkVariant"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  data-bs-target="#carouselDarkVariant"
                  data-bs-slide-to="1"
                  aria-label="Slide 1"
                ></button>
                <button
                  data-bs-target="#carouselDarkVariant"
                  data-bs-slide-to="2"
                  aria-label="Slide 1"
                ></button>
              </div>

              <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
                    class="block w-full"
                    alt="Motorbike Smoke"
                  />
                  <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>

                <div class="carousel-item relative float-left w-full bg-[#1E1E1E] h-auto">
                  <div className="md:flex mt-5  md:mx-20 pb-10 md:my-20">
                    <div className="w-full md:w-1/2 sm:hidden px-10 md:px-0 md:flex md:pl-40  md:pt-0">
                      <Image src={Farmless} height={100} alt="" fill="" />
                    </div>
                    <div className="pt-10 md:pt-10 px-12 pb-5 md:px-0 md:w-1/2">
                      <h1 className="text-primary text-3xl md:text-6xl font-bold w-full md:w-2/3">
                        An App for Farmers
                      </h1>
                      <p className="pt-5 text-primary text-lg font-normal md:w-2/3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ipsum molestie morbi ornare enim fermentum viverra sit
                        faucibus velit. Pharetra elit pellentesque ac nunc arcu.
                        Sit sed amet duis turpis quam cras nisl diam tellus
                        ultrices vitae.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="carousel-item relative float-left w-full ">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                    class="block w-full"
                    alt="Woman Reading a Book"
                  />
                  <div class="carousel-caption hidden md:block absolute text-center">
                    <h5 class="text-xl">Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>

              <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon  inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselDarkVariant"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="pt-20 px-5 pb-5 md:pb-20 md:px-40 ">
            <div className="flex justify-center ">
              <h1 className=" text-primary text-4xl font-bold border-b-4  border-secondary   pb-2 text-center">
                Join our Newsletter
              </h1>
            </div>
            <div className="md:flex mt-5 md:mt-20 md:space-x-20">
              <div
                data-aos="fade-right"
                data-aos-duration="3000"
                className="pt-5 md:pt-20 md:w-1/2"
              >
                <h1 className="text-primary text-3xl md:text-6xl font-bold w-full md:w-2/3">
                  The New World of Tech
                </h1>
                <p className="pt-5 text-primary text-lg font-semibold ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ip.
                  Pharetra elit pellentesque ac nunc arcu. Sit sed amet duis
                  turpis quam cras nisl diam tellus ultrices vitae.
                </p>
                <button
                  type="text"
                  className=" text-lg bg-secondary text-primary rounded-lg px-5 py-2 mt-10 font-semibold"
                >
                  Read more
                </button>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="3000"
                className="w-full md:w-1/2 sm:hidden md:flex pt-10 md:pt-0"
              >
                <Image src={Blog} alt="" fill="" />
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full shadow-5xl">
          <div className="bg-footer_bg h-75 ">
            <div className="container grid grid-flow-row-dense gap-2 grid-cols-2 md:grid-cols-4 justify-between w-full px-5 pb-2 mx-auto">
              <div className="pt-5 flex flex-col col-span-2">
                <div>
                  <a href="£1" className="flex items-center">
                    <Image src={Logo} width={200} height={80} alt="" />
                  </a>
                  <p
                    className="text-1.5xl font-extrabold text-primary"
                    style={{}}
                  >
                    www.emplug.com
                  </p>
                  <p className="text-sm font-serif text-primary">
                    info@plugbay.com
                  </p>
                </div>
                <div className="flex space-x-4 mt-3">
                  <div>
                    <span className="w-8 pr-5">
                      <svg
                        className="fill-primary font-bold"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <span className="w-8 pr-5">
                      <svg
                        className="fill-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </span>
                  </div>
                  <div className="w-3 ">
                    <span>
                      <svg
                        className="fill-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                      </svg>
                    </span>
                  </div>
                  <div className="w-5">
                    <span>
                      <svg
                        className="fill-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className="grid grid-flow-row-dense lg:grid-cols-3 gap-8 md:gap-2 justify-between w-full px-5 pt-5 pb-2 mx-auto grid-cols-2">
                  <div className="font-inter font-medium text-0.6xl">
                    <p className="text-xl mb-5 font-san font-bold text-primary">
                      Company
                    </p>
                    <a href="">
                      <p className="text-primary mt-1.5">About Plugbay</p>
                    </a>
                    <a href="">
                      <p className="text-primary mt-1.5">Press Releases</p>
                    </a>
                    <a href="">
                      <p className="text-primary mt-1.5">Blog</p>
                    </a>
                  </div>
                  <div className="font-inter font-medium text-0.6xl ">
                    <p className="text-xl mb-5 font-san font-bold text-primary">
                      Resources
                    </p>
                    <a href="">
                      <p className="text-primary mt-1.5">FAQ</p>
                    </a>
                    <a href="">
                      <p className="text-primary mt-1.5">Terms of use</p>
                    </a>

                    <a href="">
                      <p className="text-primary mt-1.5">Privacy Policy</p>
                    </a>
                    <a href="">
                      <p className="text-primary mt-1.5">Contact us</p>
                    </a>
                  </div>
                  <div className="font-inter font-medium text-0.2xl">
                    <p className="text-xl mb-5 font-san font-bold text-primary">
                      Learn About
                    </p>
                    <a href="">
                      <p className="text-primary mt-1.5">Membership</p>
                    </a>
                    <a href="">
                      <p className="text-primary mt-1.5">What is EVP ?</p>
                    </a>
                    <a href="">
                      <p className="text-primary mt-1.5">Micro-Advertising</p>
                    </a>
                    <a href="">
                      <p className="text-primary mt-1.5">The Plugbay Center</p>
                    </a>
                    <a href="">
                      <p className="text-primary mt-1.5">Advertising options</p>
                    </a>
                  </div>
                </div>
                <div className="md:flex  justify-end ">
                  <div className="flex mt-3 mr-2  w-48 h-14 bg-[black] text-white rounded-xl items-center justify-center">
                    <div className="">
                      <svg viewBox="0 0 384 512" width="30">
                        <path
                          fill="white"
                          d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-primary">
                        Download on the
                      </div>
                      <div className="text-2xl font-semibold font-sans -mt-1 text-primary">
                        App Store
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-3 w-48 h-14 bg-[black] text-white rounded-lg items-center justify-center">
                    <div className="">
                      <svg viewBox="30 336.7 120.9 129.2" width="30">
                        <path
                          fill="#FFD400"
                          d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                        />
                        <path
                          fill="#FF3333"
                          d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                        />
                        <path
                          fill="#48FF48"
                          d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                        />
                        <path
                          fill="#3BCCFF"
                          d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-primary">GET IT ON</div>
                      <div className="text-xl font-semibold font-sans -mt-1 text-primary">
                        Google Play
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-5">
              <h1 className="text-primary text-sm md:text-lg font-semibold">
                Copyright© 2022|PlugBay by Emplug| All rights reserved
              </h1>
            </div>
          </div>
        </footer>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </>
  );
}
