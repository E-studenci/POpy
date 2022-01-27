import { useLocation } from "react-router";

const RoutePage = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const data = {
        "color": "3",
        "distance": 32,
        "id": 1,
        "is_official": true,
        "points": 2,
        "segments": [],
        "status": "1",
        "waypoint_a": {
          "description": "asdf",
          "elevation": 123,
          "id": 1,
          "latitude": "123",
          "longtitude": "321",
          "mountain_range": {
            "id": 1,
            "name": "tatry",
            "waypoints": []
          },
          "name": "pkt_1",
          "path_starts": []
        },
        "waypoint_b": {
          "description": "asdasd",
          "elevation": 321,
          "id": 2,
          "latitude": "321",
          "longtitude": "123",
          "mountain_range": {
            "id": 1,
            "name": "tatry",
            "waypoints": []
          },
          "name": "pkt_2",
          "path_starts": []
        }
      }

    return ( 
        <div>
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
                                <p class="ml-5">{`Kolor: ${data.color}`}</p>
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
                            <button class="mt-2 ml-2 bg-red-500 border rounded-2xl py-1 px-24 w-2/3">
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