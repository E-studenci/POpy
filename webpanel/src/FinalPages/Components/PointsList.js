import { useEffect, useState } from 'react';
import {Link, Navigate} from 'react-router-dom';

const PointsList = () => {

    

    const [data, setData] = useState([])

          const [input, setInput] = useState("");

    async function fetchData(){
      let tmp = {}
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        credentials: 'include',
        };
        await fetch("http://localhost:5000/path", requestOptions) //tutaj do zmiany 
        .then(response => response.text())
        .then(result => tmp = JSON.parse(result)) //zrobić coś z resultem 
        .catch(error => console.log('error', error));

      console.log(tmp.data)
      setData(tmp.data)
    }

    useEffect(() => {
      fetchData()
    }, [])


    return ( 
        <div>
            <div class="w-full flex flex-row border border-black pb-2">
                <div class="w-1/2 flex justify-start">
                    <input class="mt-2 ml-2 border border-black rounded-2xl py-1 px-4 w-2/3" type="text" value={input} onInput={e => setInput(e.target.value)}/>
                </div>
                <div class="w-1/2 flex justify-end">
                    <Link to="/add_route" class="mt-2 mr-2 bg-green-500 border border-black rounded-2xl py-1 px-4 w-1/3"><p class="text-white">Dodaj odcinek</p></Link>
                </div>
            </div>

            <div class="w-full border border-black flex flex-row pt-2 pb-2">
                <div class="w-3/12 flex justify-start pl-5">
                    <p>Od</p>
                </div>
                <div class="w-3/12 flex justify-start pl-5">
                    <p>Do</p>
                </div>
                <div class="w-1/12 flex justify-start pl-5">
                    <p>Kolor</p>
                </div>
                <div class="w-1/12 flex justify-start pl-5">
                    <p>Długość</p>
                </div>
                <div class="w-1/12 flex justify-start pl-5">
                    <p>Oficjalny</p>
                </div>
                <div class="w-1/12 flex justify-start pl-5">
                    <p>Punkty</p>
                </div>
                <div class="w-1/12 flex justify-start pl-5">
                    <p>Status</p>
                </div>
            </div>


            {
                data.filter((v) => input === v.waypoint_a.name.substring(0, input.length)).map((v, i) => (
                    <Link to={`/route_details/${v.id}`}>
                    <div class="w-full border border-black rounded-full flex flex-row mt-1 pt-2 pb-2">
                        <div class="w-3/12 flex justify-start pl-5">
                            <p>{v.waypoint_a.name}</p>
                        </div>
                        <div class="w-3/12 flex justify-start pl-5">
                            <p>{v.waypoint_b.name}</p>
                        </div>
                        <div class="w-1/12 flex justify-start pl-5">
                            <p>{v.color === "red" ? "Czerwony" : v.color === "blue" ? "Niebieski" : v.color === "green" ? "Zielony" : v.color === "yellow" ? "Żółty" : "Czarny"}</p>
                        </div>
                        <div class="w-1/12 flex justify-start pl-5">
                            <p>{`${v.distance} m`}</p>
                        </div>
                        <div class="w-1/12 flex justify-start pl-5">
                            <p>{v.is_official ? `Tak` : `Nie`}</p>
                        </div>
                        <div class="w-1/12 flex justify-start pl-5">
                            <p>{v.points}</p>
                        </div>
                        <div class="w-1/12 flex justify-start pl-5">
                            <p>{v.status === "open" ? `Czynny` : `Zamknięty`}</p>
                        </div>
                    </div>
                    </Link>
                ))
            }


        </div>
     );
}
 
export default PointsList;