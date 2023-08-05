import '@/css/Welcome.css' 
import { Link } from 'react-router-dom';

function Welcome(){
 
    return (
        <>
        
        <div className="wrapper">
            <h1>Selamat Datang</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus aperiam consectetur similique esse eum voluptatum saepe quo excepturi unde autem vero veritatis dicta eveniet, magni quidem odit inventore explicabo quasi laborum facere voluptas reprehenderit dolorem! Laudantium, at expedita. Et reprehenderit sequi deleniti ea quos aut officiis, vero dolorem nihil consectetur, dignissimos soluta facilis? Aspernatur, a ab? Vero fugiat excepturi id veritatis cumque impedit voluptas repellendus illum. Doloremque reiciendis dolores eum quis quaerat laboriosam ad minus iusto doloribus quidem deleniti debitis praesentium placeat voluptatem nobis eligendi alias nam voluptatum aut rem ea voluptate, at explicabo? Molestias voluptates ullam eos nam nobis!</p>
            <Link to='/about' className='link-about'>About</Link><br />
            <Link to='/usestate' className='link-about'>Less useState</Link>
        </div>


        </>
    );
}


export default Welcome