import Head from 'next/head'
import styles from '../styles/HomePage.module.css'
import { useState } from 'react';

export default function HomePage() {
    const [data,setData] = useState(`${styles.container} ${styles.rightPanelActive}`)
        
    return (


        <>
        <Head>
            <title>Login</title>
        </Head>
        <div className={`${styles.dataContainer}`}>
            
        <div className={data}>
            <div className={`${styles.containerForm} ${styles.containerSignup}`}>
                <form action="#" className={`${styles.form}`} id="form1">
                    <h2 className={`${styles.formTitle}`}>Sign Up</h2>
                    <input type="text" placeholder="User" className={`${styles.input}`} />
                    <input type="email" placeholder="Email" className={`${styles.input}`} />
                    <input type="password" placeholder="Password" className={`${styles.input}`} />
                    <button className={`${styles.btn}`}>Sign Up</button>
                </form>
            </div>
        
            <div className={`${styles.containerForm} ${styles.containerSignin}`}>
                <form action="#" className={`${styles.form}`} id="form2">
                    <h2 className={`${styles.formTitle}`}>Sign In</h2>
                    <input type="email" placeholder="Email" className={`${styles.input}`} />
                    <input type="password" placeholder="Password" className={`${styles.input}`} />
                    <a href="#" className={`${styles.link}`}>Forgot your password?</a>
                    <button className={`${styles.btn}`}>Sign In</button>
                </form>
            </div>
        
            <div className={`${styles.containerOverlay}`}>
                <div className={`${styles.overlay}`}>
                    <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                        <button className={`${styles.btn}`} id="signIn" onClick={()=>{setData(`${styles.container}`)}}>Sign In</button>
                    </div>
                    <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                        <button className={`${styles.btn}`} id="signUp" onClick={()=>{setData(`${styles.container} ${styles.rightPanelActive}`)}}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        <script src="../../../script.js"></script>
        </div>
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
  