import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function LessUseState() {
    const [Car, setCar] = useState(0)
    const [siPerson, setPerson] = useState("")

    // NOTE: Car is a getter, and setCar is setter same like encapsulation
    
    useEffect(() => {
        setPerson("Jaki")
        if (Car > 99){
            alert("Di Jaki Sepuh Money Rilll....")
        }
    }, [Car])

    return (
        <>
        <h1>Belajar useState</h1>
        <p>si {siPerson} punya {Car} mobil</p>
        <button onClick={() => setCar((tambahMobil) => tambahMobil + 1  )}>Tambah Mobil Nya Si Jaki</button><br />
        <Link to="/" className='link-home'>Home</Link>

        </>
    )
}

export default LessUseState;