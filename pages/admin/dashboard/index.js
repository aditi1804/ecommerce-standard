import Head from 'next/head'
import { useState } from 'react';
import clientPromise from '../../../lib/mongodb'




export default function Dashboard({data}) {

    const [addItem, setAddItem] = useState({display:"none"}) 
    const [addCategory, setAddCategory] = useState({display:"none"}) 
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
 

    function sendItemData(){
        var jsonData = {
            "image":image.toString,
            "name":name.toString,
            "price":price.toString,
            "category":category.toString,
            "description":description.toString
        }
        
            
        fetch('https://ecommerce-standard.vercel.app/api/product', {  // Enter your IP address here
    
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
    
        })
    
    }

    function sendCategoryData() {
        var jsonData = {
            "image":image.toString,
            "name":name.toString
        }
        
            
        fetch('https://ecommerce-standard.vercel.app/api/product', {  // Enter your IP address here
    
        method: 'POST', 
        mode: 'cors', 
        body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
    
        })
    
    }

    return (
        <>
        <Head>
            <title>Admin Dashboard</title>
        </Head>
        {/* <p>{JSON.stringify(data)}</p> */}
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Behind The Closed Doors</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout</button>
        </div>
        </header>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {
                data.products.map((item)=>{
                    return (
                        <a className="mr-5 hover:text-gray-900"><img width="10" height="10" src={item.image} />{item.name}</a>
                    )
                })
            
            }
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={()=>{setAddCategory({})}}> + Add Category</button>
        </nav>
        <div className="container top-0 px-5 py-10 mx-auto flex justify-center bg-transparent fixed" style={addCategory}>
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Add Category</h2>
            <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                <input onChange={event => setName(event.target.value)} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="image" className="leading-7 text-sm text-gray-600">Image</label>
                <input onChange={event => setImage(event.target.value)} type="text" id="image" name="image" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{sendCategoryData()}}>Submit</button>
            <br />
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{setAddCategory({display:"none"})}}>Close</button>
            </div>
        </div>
        <div className="container top-0 px-5 py-10 mx-auto flex justify-center bg-transparent fixed" style={addItem}>
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Add Item</h2>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Name</label>
                <input onChange={event => setName(event.target.value)} type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Image</label>
                <input onChange={event => setImage(event.target.value)} type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Price</label>
                <input onChange={event => setPrice(event.target.value)} type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Category</label>
                <input onChange={event => setCategory(event.target.value)} type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Description</label>
                <input onChange={event => setDescription(event.target.value)} type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{sendItemData()}}>Submit</button>
            <br />
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={()=>{setAddItem({display:"none"})}}>Close</button>
            </div>
        </div>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
            </div>
            <div className="flex flex-wrap -m-2">
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
                    <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
                    <p className="text-gray-500">System</p>
                    </div>
                </div>
                </div>
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" onClick={()=>{setAddItem({})}}>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/plus-solid.svg" />
                        <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">Add Item</h2>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span className="ml-3 text-xl">Behind The Closed Doors</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Behind The Closed Doors —
                <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
            </p>
            </div>
        </footer>
    
        </>
    )

}


export async function getServerSideProps(context) {
    var id = "newCategory";
    const client = await clientPromise;
    id = String(id)
    const db = client.db("Ecommerce");
    
    let categories = await db.collection("Products").find({"category":id}).toArray();
    categories = JSON.parse(JSON.stringify(categories));
    let products = await db.collection("Category").find({}).toArray();
    products = JSON.parse(JSON.stringify(products));
  
    return {
      props: { 
            data:{
                categories,
                products
            }
        },
    };
  }