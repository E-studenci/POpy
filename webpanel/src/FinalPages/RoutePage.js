import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Navigate, useLocation, Link } from "react-router-dom";

const RoutePage = () => {

    const [deletePanel, setDeletePanel] = useState(false);
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    let navigate = useNavigate()
    const [data, setData] = useState({
        "color": "",
        "distance": 0,
        "id": 0,
        "is_official": true,
        "points": 0,
        "segments": [],
        "status": "",
        "waypoint_a": {
          "description": "",
          "elevation": 0,
          "id": 0,
          "latitude": "",
          "longtitude": "",
          "mountain_range": {
            "id": 1,
            "name": "tatry",
            "waypoints": []
          },
          "name": "",
          "path_starts": []
        },
        "waypoint_b": {
          "description": "",
          "elevation": 0,
          "id": 0,
          "latitude": "",
          "longtitude": "",
          "mountain_range": {
            "id": 1,
            "name": "tatry",
            "waypoints": []
          },
          "name": "",
          "path_starts": []
        }
      })

      async function fetchData(){
              //get punkt po id
        let tmp = {}

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            credentials: 'include',
            };
    
            await fetch("http://localhost:5000/path/"+id, requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmp = JSON.parse(result)) //zrobić coś z resultem 
            .catch(error => console.log('error', error));

            console.log(tmp.data)
            setData(tmp.data)
      }

      useEffect(() => {
            fetchData();
      }, [])

    async  function deleteRoute(){
          //delete ten punkt
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow',
            credentials: 'include', // ??????
            };
    
            await fetch("http://localhost:5000/path/"+id, requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => console.log(result)) //zrobić coś z resultem 
            .catch(error => console.log('error', error));

        navigate("/routes");

      }

    return ( 
        <div>
            {deletePanel ? 
            <div class="absolute w-full top-1/3">
            <div class="flex justify-center items-center ">
            <div class="w-1/2 border border-black flex flex-col bg-white">
                <p>Czy na pewno chcesz usunąć ten odcinek? Po tym nie ma już odwrotu</p>
                <div class = "mt-10 ml-5 mr-5">
                <button class=" bg-green-500 border rounded-2xl py-2 w-1/2 mb-5 text-white" onClick={() => setDeletePanel(false)}>Powrót</button>
                <button class=" bg-red-500 border rounded-2xl py-2 w-1/2 text-white" onClick={deleteRoute}>Usuń odcinek</button>
                </div>
                

            </div>
        </div></div> : null}

            <div class="w-full flex flex-row mt-10">
                <div class="w-1/3 border border-black flex flex-col ml-10 h-min">
                    <p class="mt-2 text-xl">Punkt od</p>
                    <div class="border border-black ml-10 mr-10 grid justify-start pb-1">
                        <p class="ml-2">{`Nazwa: ${data.waypoint_a.name}`}</p>
                        <p class="ml-2">{`Wysokość: ${data.waypoint_a.elevation}`}</p>
                        <p class="ml-2">{`Szerokość geograficzna: ${data.waypoint_a.latitude}`}</p>
                        <p class="ml-2">{`Długość geograficzna: ${data.waypoint_a.longtitude}`}</p>
                        <p class="ml-2">{`Opis: ${data.waypoint_a.description}`}</p>
                    </div>
                    <p class="mt-2 text-xl">Punkt do</p>
                    <div class="border border-black ml-10 mr-10 grid justify-start pb-1 mb-8">
                    <p class="ml-2">{`Nazwa: ${data.waypoint_a.name}`}</p>
                        <p class="ml-2">{`Wysokość: ${data.waypoint_b.elevation}`}</p>
                        <p class="ml-2">{`Szerokość geograficzna: ${data.waypoint_b.latitude}`}</p>
                        <p class="ml-2">{`Długość geograficzna: ${data.waypoint_b.longtitude}`}</p>
                        <p class="ml-2">{`Opis: ${data.waypoint_b.description}`}</p>
                    </div>

                </div>
                <div class="w-2/3">
                    <div class="border border-black mr-10 ml-20 rounded-xl">
                        <div class="flex flex-row">
                            <div class="w-1/2 items-start flex">
                                <p class="ml-5">Kolor: {data.color === "red" ? "Czerwony" :data.color === "blue" ? "Niebieski" : data.color === "green" ? "Zielony" : data.color === "yellow" ? "Żółty" : "Czarny"}</p>
                            </div>
                            <div class="w-1/2 flex items-start">
                                <p class="ml-5">Kierunek: 2</p>
                            </div>
                        </div>
                        <div class="flex flex-row mt-20">
                            <div class="w-1/2 items-start flex">
                                <p class="ml-5">{`Długość: ${data.distance} km`}</p>
                            </div>
                            <div class="w-1/2 flex items-start">
                                <p class="ml-5">{
                                    data.is_official ? "Oficjalny: Tak" : "Oficjalny: Nie"
                                }</p>
                            </div>
                        </div>
                        <div class="flex flex-row mt-20 h-48">
                            <div class="w-1/2 items-start flex">
                                <p class="ml-5">{`Punkty: ${data.points}`}</p>
                            </div>
                            <div class="w-1/2 flex items-start">
                                <p class="ml-5">{
                                    data.status="1" ? "Status: Czynny" : "Status: Nieczynny"
                                }</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-row">
                        <div class="w-1/2 flex justify-end">
                            <button class="mt-2 mr-2 bg-yellow-500 border rounded-2xl py-1 px-24 w-2/3">
                                <p class="text-white">Edytuj odcinek</p>
                            </button>
                        </div>
                        <div class="w-1/2 flex justify-start">
                            <button class="mt-2 ml-2 bg-red-500 border rounded-2xl py-1 px-24 w-2/3" onClick={() => setDeletePanel(true)}>
                                <p class="text-white">Usuń odcinek</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default RoutePage;