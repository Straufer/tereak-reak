import Spring from '@/img/spring.png'
import { Link } from 'react-router-dom'
import '@/css/About.css'

function About() {
    return (
        <>
        
        <div className="section-1">
            <h1>About</h1>
            <br /><br />
            <pre>Name: Kell Mayam              Email: kellmayam.19@gmail.com</pre>
            <br />
            <img src={Spring} alt="Spring" width={120}/>
            <br />
            <Link to="/" className='link-home'>Home</Link>
        </div>

        </>
    )
}


export default About