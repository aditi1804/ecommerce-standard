import Head from 'next/head'



export default function HomePage() {

    return (

        <>
        <Head>
            <title>Login</title>
        </Head>

            
        <div className="container right-panel-active">
            <div className="container-form container-signup">
                <form action="#" className="form" id="form1">
                    <h2 className="form-title">Sign Up</h2>
                    <input type="text" placeholder="User" className="input" />
                    <input type="email" placeholder="Email" className="input" />
                    <input type="password" placeholder="Password" className="input" />
                    <button className="btn">Sign Up</button>
                </form>
            </div>
        
            <div className="container-form container-signin">
                <form action="#" className="form" id="form2">
                    <h2 className="form-title">Sign In</h2>
                    <input type="email" placeholder="Email" className="input" />
                    <input type="password" placeholder="Password" className="input" />
                    <a href="#" className="link">Forgot your password?</a>
                    <button className="btn">Sign In</button>
                </form>
            </div>
        
            <div className="container-overlay">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <button className="btn" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <button className="btn" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        <script src="../../../script.js"></script>
    </>
    )
  
}
  

// export async function getServerSideProps(context) {
//     try {
//       await clientPromise
//       return {
//         props: { isConnected: true },
//       }
//     } catch (e) {
//       console.error(e)
//       return {
//         props: { isConnected: false },
//       }
//     }
//   }
  