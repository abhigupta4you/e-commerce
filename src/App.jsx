import React from 'react'
import axios from "axios";
import { BsSearch, BsTwitter, BsFacebook, BsInstagram, BsGlobe, BsLinkedin, BsCart4, BsArrow90DegRight } from "react-icons/bs";
import { FaHorse } from "react-icons/fa";
import { RiSecurePaymentFill, RiCustomerService2Line } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb"

function App() {
  const [post, setPost] = React.useState([]);


  const getApi = () => {
    axios.get("https://dummyjson.com/products/category/furniture")
      .then((response) => {
        // console.log(response.data.products);
        setPost(response.data.products);
      })
  }
  React.useEffect(() => {
    getApi();
  }, []);

  /*NOTE :-     NOT WORKING DUE TO API MALFUNCTION  
  
  const addCart = () => {
    axios.get("https://dummyjson.com/docs/carts")
    .then((res) => {
      console.log(res.pot);
    })
  }
  React.useEffect(() => {
    addCart();
  },[]); */



  return (
    <div className='m-0 p-0'>
      <div className='w-full  bg-gray-300 p-3 rounded-b-2xl h-auto'>
        <header className='w-full flex'>
          <div className='basis-[20%] w-full'>
            <p className='text-center  flex text-green-800 text-2xl font-serif '><FaHorse />INWOOD</p>
          </div>
          <div className='basis-[80%] flex  w-full text-center'>
            <nav className=''>
              <ul className='flex w-full gap-20 text-green-900 justify-around'>
                <li className='text-center hover:underline font-semibold  text-2xl'>Home</li>
                <li className='text-start hover:underline font-semibold  text-2xl'>Product </li>
                <li className='text-start hover:underline font-semibold  text-2xl'>Categories</li>
                <li className='text-start hover:underline font-semibold  text-2xl'>About</li>
                <li className='text-start hover:underline font-semibold  text-2xl'>Contact</li>
              </ul>
            </nav>
          </div>
          <div className='basis-[20%] text-2xl cursor-pointer text-green-900 w-full mt-4 flex space-x-6'>
            <div ><BsSearch /></div>
            <div><BsCart4 /></div>
          </div>
        </header>
        <main>
          <div className='px-7 text-green-900 py-11 mb-28 mt-32'>
            <h1 className='text-6xl font-bold'>Exclusive Deals on <br />
              furniture collections</h1> <br />
            <p className='text-4xl font-medium'>Explore different categories. Find the best deals</p>
            <br />
            <p><button className='bg-green-900 p-4 text-white rounded-xl hover:bg-green-800 hover:p-5'>Shop Now</button></p>
          </div>
        </main>
      </div>
      <div>
        <h1 className='p-11 text-green-900 text-5xl font-mono text-center'>Explore by Categories</h1>
        <div className='flex max-h-screen'>
          <div className='basis-[30%] w-full border-r-4 border-stone-700'>
            <nav className='ml-16 p-5 space-y-8'>
              <ul className='p-8 gap-3 flex'><p className='mt-3'><BsSearch /></p>  <input type="text" className='p-2  border-white  rounded-xl duration-200' placeholder='Search' /></ul>
              <ul className=' space-y-10 border-stone-700'>
                <li className='text-green-900'>Bedroom</li>
                <li className='text-green-900'>Drawing Room</li>
                <li className='text-green-900'>Main Room</li>
                <li className='text-green-900'>Living Room</li>
                <li className='text-green-900'>Kitchen</li>
                <li className='text-green-900'>Living Space</li>
                <li className='text-green-900'>Work Space</li>
                <button className='bg-gray-400 text-green-900 font-semibold inline-flex gap-4 p-3 rounded-xl'>Explore more  <BsArrow90DegRight /></button>
              </ul>
            </nav>
          </div>
          <div className='basis-[70%] w-full '>
            <div className='p-4 m-4   gap-4 h-auto '>
              <div className='flex  justify-evenly'>
                <div className='bg-gray-500 m-4 text-center rounded-xl flex h-40 w-72 p-5'>
                  <div className='text-center p-7 pl-16'>
                    <h1 className='text-centre font-semibold justify-center text-2xl '>Bedroom</h1> <br />
                    <button className=' text-green-900 rounded-xl p-2 bg-gray-200 text-center'>Explore</button></div>
                </div>
                <div className='bg-gray-400  m-4 rounded-xl h-40 w-72 p-5'></div>


              </div>
              <div className=' flex  justify-evenly'>
                <div className='bg-gray-400 m-4 rounded-xl flex h-40 w-72 p-5'></div>
                <div className='bg-gray-400  m-4 rounded-xl h-40 w-72 p-5'></div>


              </div>
              <div className=' flex  justify-evenly'>
                <div className='bg-gray-400 m-4 rounded-xl flex h-40 w-72 p-5'></div>
                <div className='bg-gray-400  m-4 rounded-xl h-40 w-72 p-5'></div>


              </div>

            </div>

          </div>

        </div>
      </div>
      <div className='bg-gray-200'>
        <h1 className='p-11 text-green-900 text-5xl font-mono text-center'>Popular Products</h1>
        <div className='flex border-b-4 border-gray-800 p-6'>
          <img src="images/bgchair.png" className='-ml-96' alt="" />
          <div className='p-5 mt-10 flex '>



            <div className='flex -ml-7 mt-11 w-screen flex-shrink-0 overflow-x-hidden gap-6'>
              {
                post.slice(0, 4).map((value) => {
                  return (
                    <div >
                      <div className='h-96 text-green-900 rounded-xl p-6  bg-green-200 w-64' >
                        <img src={value.thumbnail} alt="" />
                        <div className=''>
                          <h1 className='mt-9 text-2xl'>{value.brand}</h1>
                          <h2>Rating - {value.rating}</h2>
                          <p className='font-semibold'>Price - ${value.price}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <br />

              <div className='border-b-4 border-gray-500 p-4'></div>
            </div>


          </div>
        </div>
      </div>
      <div className='bg-blue-200 h-auto m-8'>
        <h1 className='p-11 text-green-900 text-4xl font-mono text-center'>Benefits for Your Expediency</h1>
        <div className='flex justify-evenly  '>
          <div className='text-center h-auto bg-lime-300 p-11 w-1/3'>
            <p className=' ml-28 text-4xl text-center mx-auto  '><RiSecurePaymentFill /></p>
            <h1 className='text-2xl'>Payment Method</h1>
            <p>We offer flexible payment options, to make easier</p>
          </div>
          <div className='text-center h-auto bg-lime-300 p-11 w-1/3'>
            <p className=' ml-32 text-4xl text-center mx-auto  '><TbTruckReturn /></p>
            <h1 className='text-2xl'>Return Policy</h1>
            <p>We offer flexible payment options, to make easier</p>

          </div>
          <div className='text-center h-auto bg-lime-300 p-11 w-1/3'>
            <p className=' ml-28 text-4xl text-center mx-auto  '><RiCustomerService2Line /></p>
            <h1 className='text-2xl'>Customer Service</h1>
            <p>We offer flexible payment options, to make easier</p>
          </div>
        </div>

      </div>
      <div className=' px-8 py-11 h-auto '>
        <p className='text-center text-5xl text-green-900 p-5 font-serif'>Testimonial</p>
        <div className='flex'>
          <div className='basis-[30%] bg-gray-200 h-72'></div>
          <div className='basis-[70%]  bg-white p-6 text-start h-72'>
            <h1 className='text-green-900 text-2xl '>Over 15,000 happy customer</h1>
            <p className=' text-green-900'>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quam ratione nesciunt, amet dolor asperiores perspiciatis. Minima magni dolore dicta, veritatis nemo harum perspiciatis similique officiis beatae et non quo. Adipisci nemo nostrum aliquid modi, recusandae nihil distinctio quaerat, iste quod voluptate debitis ut laborum placeat ex amet! Deleniti, delectus. "</p>
            <br />  <h1 className='text-green-900 font-bold text-2xl '>Lorem kumar</h1>
            <p className='text-green-900'>CEO </p>
          </div>
        </div>
      </div>
      <div className='h-auto flex'>
        <div className='w-1/2 bg-gray-200' ></div>
        <div className='p-14 w-1/2 bg-green-200 text-start'>
          <h1 className='text-green-900 text-4xl p-4 font-semibold'>Join <br /> <span className='font-serif'> Our NewsLetter</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p><br />
          <input className='p-4 bg-inherit border-collapse' type="text" placeholder='Enter your mail!' /><br /><br />
          <button className='bg-green-900 p-3 text-white  rounded-xl' type="reset">Subscribe</button>
        </div>
      </div>
      <footer>
        <div className='flex justify-evenly text-green-900  my-20'>
          <div className='mr-16'>
            <h1 className='text-2xl flex font-serif'><FaHorse />INWOOD</h1><br />
            <div className='flex justify-between'>
              <div><BsFacebook /></div>
              <div><BsInstagram /></div>
              <div><BsLinkedin /></div>
              <div><BsGlobe /></div>
              <div><BsTwitter /></div>
            </div>
            <br />
            <p className='font-semibold'>Address</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            <p>123456789</p>
          </div>
          <div>
            <h1 className='text-xl font-serif'>My Account</h1>
            <nav>
              <ul>sign in</ul>
              <ul>register</ul>
              <ul>order status</ul>
            </nav>
          </div>
          <div>
            <h1 className='text-xl font-serif'>Help</h1>
            <nav>
              <ul>shipping</ul>
              <ul>returns</ul>
              <ul>sizing</ul>
            </nav>
          </div>
          <div>
            <h1 className='text-xl font-serif'>Shop</h1>
            <nav>
              <ul>all products</ul>
              <ul>bedroom</ul>
              <ul>dinning room</ul>  </nav>
          </div>
          <div>
            <h1 className='text-xl font-serif'>Legal stuff</h1>
            <nav>
              <ul>shipping & delivery</ul>
              <ul>terms & conditions</ul>
              <ul>privacy & policy</ul>
            </nav>
          </div>
        </div>

        <p className='text-green-900 text-start'>Copyright @2023 INWOOD. All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App