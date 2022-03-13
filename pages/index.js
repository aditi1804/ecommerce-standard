import Head from 'next/head'
// import clientPromise from '../lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <>
    <div className="container">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Behind the Close Doors</title>
      </Head>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Behind the Closed Doors</span>
          </a>
          <nav
            className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Categories</a>
            <a className="mr-5 hover:text-gray-900">Products</a>
          </nav>
          <button
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Cart
          </button>
        </div>
      </header>

      <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src= "https://i.ibb.co/jf432HZ/pexels-rodnae-productions-7686293.jpg" width="500" height="500"/>
      </div>
      <div
        className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">INDIGENOUS INDEED
          <br className="hidden lg:inline-block" />The Real India!
        </h1>
        <p className="mb-8 leading-relaxed"> Born out of love for traditional handicrafts and apparel, handcrafted exclusively for you from every part of our India, Dicover the Indigenous India</p>
        <div className="flex justify-center">
          <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Explore
            All</button>
        </div>
      </div>
    </div>
  </section>
  <hr width="80%" />
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest" >Clothing</h1>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/2">
          <div
            className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              src="https://i.ibb.co/Q8s3KjD/images-4.jpg" />
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">Baluchari Saree</h2>
              <h3 className="text-gray-500 mb-3">5700/-</h3>
              <p className="mb-4">Baluchari saree is known for its pallu design which has mythological scenes woven onto it. Finishing one saree takes more than a week.</p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                </a>
                <a className="ml-2 text-gray-500">  
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2">
          <div
            className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              src="https://i.ibb.co/RT4V5mj/download.jpg"/>
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">Kanchipuram Saree</h2>
              <h3 className="text-gray-500 mb-3">6800/-</h3>
              <p className="mb-4">Kancheepuram silk sarees are one of the most desired sarees in India as the handwoven Kancheepuram silk has a quality and feel like no other fabric in India</p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                </a>
                <a className="ml-2 text-gray-500">  
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2">
          <div
            className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              src="https://i.ibb.co/zVY9ThM/download-1.jpg" />
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">Banarasi Saree</h2>
              <h3 className="text-gray-500 mb-3">5500/-</h3>
              <p className="mb-4">The saris are among the finest saris in India and are known for their gold and silver brocade or zari, fine silk and opulent embroidery.</p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                </a>
                <a className="ml-2 text-gray-500">  
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2">
          <div
            className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              src="https://i.ibb.co/VDNv22y/download-2.jpg"/>
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">Pashmina Shawl</h2>
              <h3 className="text-gray-500 mb-3">2500/-</h3>
              <p className="mb-4">Discover the finest pashminas handmade by gifted artisans from Kashmir. Certified by Govt. of India. Pashmina Shawl, crafted from cashmere an utmost luxury.</p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                </a>
                <a className="ml-2 text-gray-500">  
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2">
          <div
            className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src="https://i.ibb.co/Sw5FTwn/7460fac20cc7454a406f28b837f7c865.jpg"/>
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">Kashmiri Woolen Kurta</h2>
              <h3 className="text-gray-500 mb-3">3500/-</h3>
              <p className="mb-4">Buy 100% authentic Kashmiri cotton Kurtis online in India. Cotton Aari work kurtas, Silk Kurtis and multicolor embroidered Kurti.</p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                </a>
                <a className="ml-2 text-gray-500">  
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/2">
          <div
            className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
              src= "https://i.ibb.co/p02YPn7/4e8e403c845ec46ecbfe0d51d3e1a583.jpg"/>
            <div className="flex-grow sm:pl-8">
              <h2 className="title-font font-medium text-lg text-gray-900">Kashmiri Embroidered Kurta</h2>
              <h3 className="text-gray-500 mb-3">1500/-</h3>
              <p className="mb-4">Buy 100% authentic Kashmiri cotton Kurtis online in India. Cotton Aari work kurtas, Silk Kurtis and multicolor embroidered Kurti.</p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                </a>
                <a className="ml-2 text-gray-500">  
                </a>
              </span>
            </div>
          </div>
        </div>
        </div>

     
      </div>
      </section>
      <hr width="80%" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest" >Nurturing Ayurveda</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div
                className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://i.ibb.co/bFBXbkY/f083d1fa0aff8d40f9faba4f5c7f0abd.jpg"/>
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">Pure Senna Leaves Tea Powder</h2>
                  <h3 className="text-gray-500 mb-3">250/- for 75 g</h3>
                  <p className="mb-4">Senna tea is a popular herbal remedy that's often marketed as a laxative, weight loss aid, and detox method.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                    </a>
                    <a className="ml-2 text-gray-500">  
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div
                className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://i.ibb.co/yWsDBty/b5eb3e88cd74cd5e027ce75af5f30b1d.jpg"/>
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">KAMA Swarna Haldi Chandan Brightening Face Pack</h2>
                  <h3 className="text-gray-500 mb-3">300/- for 150g</h3>
                  <p className="mb-4">A 100% Natural, skin-illuminating face pack with purifying, antibacterial Haldi (Turmeric) and soothing, anti-ageing Chandan(Sandalwood). Regular use helps in brightening skin and reducing darkspots.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                    </a>
                    <a className="ml-2 text-gray-500">  
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div
                className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://i.ibb.co/JmCktyP/7506a8231c052337e561e25afbe1418a.jpg" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">The Ultimate Skin Care Essentials</h2>
                  <h3 className="text-gray-500 mb-3">1500/-</h3>
                  <p className="mb-4">Make sure to grab an alcohol-free toner. Serum. Serums, or treatments, hydrate and protect your skin.Witness the healing touch of nature through Kama Ultimate Skin Care Products.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                    </a>
                    <a className="ml-2 text-gray-500">  
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div
                className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                  src="https://i.ibb.co/r3KXhSj/5bda5a3465f12b128a98b5bcb7068b2b.jpg"/>
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">Dharti Shea Butter Hand Creme</h2>
                  <h3 className="text-gray-500 mb-3">150/- for 75g</h3>
                  <p className="mb-4">Enriched with 20% Shea Butter, this super-creamy balm penetrates quickly to help protect, nourish and moisturize hands. Honey, almond extracts, and coconut oil nourishes skin from within.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                    </a>
                    <a className="ml-2 text-gray-500">  
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div
                className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src="https://i.ibb.co/YTdxs58/349503fc6cbc210d26c6f5fa27ff3509.jpg" alt="349503fc6cbc210d26c6f5fa27ff3509"/>
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">KAMA Refershing Body Mists</h2>
                  <h3 className="text-gray-500 mb-3">300/- for 45 ml</h3>
                  <p className="mb-4">Shop from a wide range of long lasting luxury natural perfumes and organic beauty products for men and women online at a discounted price.</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                    </a>
                    <a className="ml-2 text-gray-500">  
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div
                className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
               src="https://i.ibb.co/86Q3rdb/a18252acc516d0f05724a1d7d3efe83a.jpg" />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium text-lg text-gray-900">Water Resistant Sun Resistant Creme</h2>
                  <h3 className="text-gray-500 mb-3">450/ for 30g-</h3>
                  <p className="mb-4">THE NATURAL WASH Sun Defence Sunscreen SPF 50 PA++ UVA/UVB Clinically Approved | Lightweight Quick Absorb Sun Protection Cream/Made with Natural Ingredients</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                    </a>
                    <a className="ml-2 text-gray-500">  
                    </a>
                  </span>
                </div>
              </div>
            </div>
            </div>
    
         
          </div>
          <hr width="80%" />
          </section>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest" >Adoring Accessories</h1>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/2">
                  <div
                    className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                   src="https://i.ibb.co/WpyBvtD/images-9.jpg" />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-gray-900">Hnadcrafted Wooden Earrings</h2>
                      <h3 className="text-gray-500 mb-3">150/- </h3>
                      <p className="mb-4">Deep dive into the beauty of India's handcrafted accessories.</p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                        </a>
                        <a className="ml-2 text-gray-500">  
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2">
                  <div
                    className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://i.ibb.co/Q65BpWX/images-7.jpg"/>
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-gray-900">Morni Earrings</h2>
                      <h3 className="text-gray-500 mb-3">100/-</h3>
                      <p className= "mb-4"> Deep dive into the beauty of the beautiful handcrafted accessories.</p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                        </a>
                        <a className="ml-2 text-gray-500">  
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2">
                  <div
                    className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://i.ibb.co/vLc5xPY/il-794x-N-3110099103-7adw.jpg"/>
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-gray-900">Multicoloured Stole</h2>
                      <h3 className="text-gray-500 mb-3">250/-</h3>
                      <p className="mb-4">Style every look with these multicolored stole and ace your look everytime!.</p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                        </a>
                        <a className="ml-2 text-gray-500">  
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2">
                  <div
                    className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://i.ibb.co/HCDb0Lg/iap-640x640-2435087302-ic6d164a.jpg"/>
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-gray-900">Friendship Bands</h2>
                      <h3 className="text-gray-500 mb-3">50/- for 3</h3>
                      <p className="mb-4">This August, gift them these beuatiful friendship bands nad strenthen the bond even more!</p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                        </a>
                        <a className="ml-2 text-gray-500">  
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2">
                  <div
                    className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://i.ibb.co/1f4sQBw/2056f65b361f82dacee3a2b62e6ebc58.jpg" />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-gray-900">Jaipuri Jhumke</h2>
                      <h3 className="text-gray-500 mb-3">150/-</h3>
                      <p className="mb-4">Missing something in your look? Get ready wearing these traditional jaipuri jhumke and feel like you own the world!</p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                        </a>
                        <a className="ml-2 text-gray-500">  
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/2">
                  <div
                    className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://i.ibb.co/kSjjRZm/il-794x-N-3190984642-c0cx.jpg"/>
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium text-lg text-gray-900">Glittery Bangles</h2>
                      <h3 className="text-gray-500 mb-3">200/- for 7 pieces</h3>
                      <p className="mb-4">Get the traditional feel with these glittery bangles made specially by the women artisans of Udaipur. You deserve the best!</p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                        </a>
                        <a className="ml-2 text-gray-500">  
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                </div>
        
             
              </div>
              <hr width="80%" />
              </section>
              <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest" >Decor Needs</h1>
                  </div>
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2">
                      <div
                        className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                         src="https://i.ibb.co/5kbtzMW/34c6b5f1ef2abc896b685006c252c65a.jpg"/>
                        <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-medium text-lg text-gray-900">Handwoven Carpet</h2>
                          <h3 className="text-gray-500 mb-3">3500/-</h3>
                          <p className="mb-4">You could not miss the royal feel of these handcrafted carpets and definitely bring them to you house. How can you resist?</p>
                          <span className="inline-flex">
                            <a className="text-gray-500">
                              <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                            </a>
                            <a className="ml-2 text-gray-500">  
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                      <div
                        className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                        src="https://i.ibb.co/cbMY9DV/a3d56ae4b5cedf1a056632b9789c0d4f.jpg"/>
                        <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-medium text-lg text-gray-900">Handcrafted Carpets</h2>
                          <h3 className="text-gray-500 mb-3">4800/-</h3>
                          <p className="mb-4">You could not miss the royal feel of these handcrafted carpets and definitely bring them to you house. How could you resist?.</p>
                          <span className="inline-flex">
                            <a className="text-gray-500">
                              <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                            </a>
                            <a className="ml-2 text-gray-500">  
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                      <div
                        className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                        src="https://i.ibb.co/X4D6hGH/37b4e308b704b882890bdbdfa881fa4f.jpg" />
                        <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-medium text-lg text-gray-900">Sheetals's Cotton Bedsheets</h2>
                          <h3 className="text-gray-500 mb-3">500/-</h3>
                          <p className="mb-4">Feel like home when lay down on the ebst in quality cotton bedsheets</p>
                          <span className="inline-flex">
                            <a className="text-gray-500">
                              <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                            </a>
                            <a className="ml-2 text-gray-500">  
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                      <div
                        className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                        src="https://i.ibb.co/87Xsj5h/ab8ddf68b4ad3dafd713295f1afa5dd8.jpg"/>
                        <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-medium text-lg text-gray-900">Sheetals's Cotton Bedsheets</h2>
                          <h3 className="text-gray-500 mb-3">500/- </h3>
                          <p className="mb-4">Feel like home when lay down on the ebst in quality cotton bedsheets.</p>
                          <span className="inline-flex">
                            <a className="text-gray-500">
                              <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                            </a>
                            <a className="ml-2 text-gray-500">  
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                      <div
                        className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                         src="https://i.ibb.co/S0XJvyF/c64a502c1e414e1bfab0d80c045987ff.jpg"/>
                        <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-medium text-lg text-gray-900">Best in Qulaity Light Lamps</h2>
                          <h3 className="text-gray-500 mb-3"> 650/-</h3>
                          <p className="mb-4">These indigenous beautigful light lamps would light up the world around you. Lets spread light and positivity!.</p>
                          <span className="inline-flex">
                            <a className="text-gray-500">
                              <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                            </a>
                            <a className="ml-2 text-gray-500">  
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 lg:w-1/2">
                      <div
                        className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                        src="https://i.ibb.co/tpwqDm5/61300b7c6bf58a01a0977307be8d3d08.jpg" />
                        <div className="flex-grow sm:pl-8">
                          <h2 className="title-font font-medium text-lg text-gray-900">Traditional Embroidered Couch</h2>
                          <h3 className="text-gray-500 mb-3">2500/-</h3>
                          <p className="mb-4">Say No to Ouch while Laying on the Couch. The Best in class comfort handcrafted from the skilled Rural India. </p>
                          <span className="inline-flex">
                            <a className="text-gray-500">
                              <img src="https://i.ibb.co/3hny1nF/shopping-cart-racing.png" width="20" height="20"/>
                            </a>
                            <a className="ml-2 text-gray-500">  
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                    </div>
                 
                  </div>
                  <hr />
                  <footer className="text-gray-600 body-font">
                    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">Behind the Closed Doors</span>
                      </a>
                      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 BTCD —
                        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@indigenousIndia</a>
                      </p>
                      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </footer>
       
  </section>
    </div>  
    </>
  )
}

// export async function getServerSideProps(context) {
//   try {
//     // client.db() will be the default database passed in the MONGODB_URI
//     // You can change the database by calling the client.db() function and specifying a database like:
//     // const db = client.db("myDatabase");
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands
//     await clientPromise
//     return {
//       props: { isConnected: true },
//     }
//   } catch (e) {
//     console.error(e)
//     return {
//       props: { isConnected: false },
//     }
//   }
// }
