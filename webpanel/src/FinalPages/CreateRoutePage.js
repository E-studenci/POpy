import { useEffect } from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router";

const CreateRoutePage = () => {

    let navigate = useNavigate()

    const [tripInfo, setTripInfo] = useState(false);
    const [addPointPanel, setAddPointPanel] = useState(false);

    const [pathId, setPathId] = useState([])
    const [pathName, setPathName] = useState([])

    const [path, setPath] = useState([])

    const [data, setData] = useState({})

    const [statDistance, setStatDistance] = useState(0)
    const [statSumUp, setStatSumUp] = useState(0)
    const [statSumDown, setStatSumDown] = useState(0)
    const [statGOTPoints, setStatGOTPoints] = useState(0)
    const [statHighestPoint, setHighestPoint] = useState(0)

    const [confirmTrip, setConfirmTrip] = useState(false)

    const [tripName, setTripName] = useState("")

    async function fetchData(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            credentials: 'include',
            };
            let tmp = {}
            await fetch("http://localhost:5000/waypoint", requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmp = JSON.parse(result)) //zrobić coś z resultem 
            .catch(error => console.log('error', error));

            setData(tmp.data)
            console.log(tmp.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    async function addToTrip(v){
        setInput("")
        let tmp = pathId;
        tmp.push(v.pathID);
        setPathId(tmp);
        let tmp2 = pathName;
        tmp2.push(v.name);
        setPathName(tmp2);
        if(v.distance) setStatDistance(statDistance + parseInt(v.distance));
        if(v.points) setStatGOTPoints(statGOTPoints + v.points);
        if(v.last_point_elevation){
            if(v.last_point_elevation > v.elevation){
                setStatSumDown(statSumDown + (v.last_point_elevation - v.elevation))
            }
            else{
                setStatSumUp(statSumUp + (v.elevation - v.last_point_elevation))
            }
        }
        if(v.elevation > statHighestPoint) setHighestPoint(v.elevation)
        if(v.last_point_elevation > statHighestPoint) setHighestPoint(v.last_point_elevation)
        if(v.got_points){
            setStatGOTPoints(statGOTPoints + v.got_points)
        }

        setAddPointPanel(false)

        
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            credentials: 'include',
            };
            let tmp3 = {}
            await fetch("http://localhost:5000/path/from_waypoint/"+v.id, requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmp3 = JSON.parse(result)) //zrobić coś z resultem 
            .catch(error => console.log('error', error));

            

            console.log(tmp3.data)

            let prepare_data = []

            tmp3.data.forEach(element => {
                prepare_data.push({
                    distance: element.distance,
                    id: element.waypoint_b.id,
                    name: element.waypoint_b.name,
                    elevation: element.waypoint_b.elevation,
                    mountain_range: {name: element.waypoint_b.mountain_range.name},
                    got_points: element.points,
                    last_point_elevation: v.elevation,
                    pathID: element.id,
                })
            });

            console.log(prepare_data)

            setData(prepare_data);
            

    }

    const [input, setInput] = useState("")

    async function saveTrip(){
        if (tripName === "") return
        var myHeaders = new Headers();
        myHeaders.append('Content-Type',"application/json");
        var finalID = pathId
        finalID.shift()
        var body = JSON.stringify({
            name: tripName,
            description: "",
            is_public: true,
            difficulty: "easy",
            creator_id: 8,
            distance: statDistance,
            path_ids: finalID
        })
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            credentials: 'include',
            body: body,
            };
        let tmp = {}
            await fetch("http://localhost:5000//trip/create_trip_plan", requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmp = JSON.parse(result)) //ustawić ten syf
            .catch(error => console.log('error', error));

        console.log(tmp)
        navigate("/menu")
    }

    function trySave(){
        if(pathId.length >= 2)
        setConfirmTrip(true)
    }

    return ( 
        <div>
            {
                confirmTrip ? 
                <div class="absolute w-full flex flex-row top-1/3">
                    <div class="w-1/4"></div>
                    <div class="bg-white border-2 border-black rounded">
                        <div class="flex flex-row m-5">
                        <p>Wpisz nazwę: </p>
                        <input class="ml-2 border border-black w-96" type="text" onInput={e => setTripName(e.target.value)} value={tripName}/>
                        </div>
                        <button class="mr-5 rounded-full bg-green-600 text-white px-10 py-2 text-xl" onClick={saveTrip}>Zapisz</button>
                        <button class="ml-5 mb-5 rounded-full bg-red-600 text-white px-10 py-2 text-xl" onClick={() => setConfirmTrip(false)}>Anuluj</button>

                    </div>
                    </div>
                    : null
            }
            {addPointPanel ? 
            <div class="absolute w-full">
            <div class="flex justify-center items-center ">
            <div class="w-1/2 border border-black rounded-2xl flex flex-col bg-white">
                <div class="w-full mt-5">
                    <input class="border border-black rounded-2xl py-1 px-4" type="text" value={input} onInput={e => setInput(e.target.value)}/>
                </div>

                <div class="flex flex-row mt-2">
                    <div class="w-1/4 grid justify-start">
                        <p class="ml-5">Nazwa</p>
                    </div>
                    <div class="w-1/4 grid justify-start">
                        <p>Pasmo górskie</p>
                    </div>
                    <div class="w-1/4 grid justify-start">
                        <p>Wysokość n.p.m.</p>
                    </div>
                    <div class="w-1/4 grid justify-start">
                        <p>Dystans</p>
                    </div>
                </div>

                {
                    data.filter((v) => input === v.name.substring(0, input.length)).map((v) => (
                        <button onClick={() => addToTrip(v)}>
                        <div class="mt-1 w-full border border-black rounded-2xl flex flex-row h-11">
                        <div class="w-1/4 grid justify-start content-center">
                                <p class="ml-5">{v.name}</p>
                            </div>
                            <div class="w-1/4 grid justify-start content-center">
                                <p>{v.mountain_range.name}</p>
                            </div>
                            <div class="w-1/4 grid justify-start content-center">
                                <p>{v.elevation}</p>
                            </div>
                            <div class="w-1/4 grid justify-start content-center">
                                <p>{pathId.length === 0 ? 'Punkt początkowy' : v.distance}</p>
                            </div>
                        </div>
                        </button>
                    ))
                }

                <div class="w-full border border-black rounded-2xl h-20 mt-5 items-center justify-center flex">
                    <button class="bg-red-600 rounded-full px-20 py-2" onClick={() => setAddPointPanel(false)}><p class="text-white">Anuluj</p></button>
                </div>

            </div>
        </div></div> : null}



            <div class="w-full flex flex-row">
                <div class="w-2/3 flex flex-col ml-10">
                    {
                        pathName.map((v) => (
                            <div class="grid">
                            <button class="bg-green-500 px-20 py-2 rounded-full mt-10 border border-black w-1/3">
                                <p>{v}</p>
                            </button>
                            </div>
                        ))
                    }
                    <div class="grid">
                    <button class="bg-green-500 px-20 py-2 rounded-full mt-10 border border-black w-1/3" onClick={() => setAddPointPanel(true)}>
                        <p>Dodaj punkt</p>
                    </button>
                    </div>
                </div>
                
                {pathId.length >= 2 ? <div class="mt-10 w-1/3 mr-10 border border-black rounded-xl flex flex-col">


                    <div class="flex flex-row mt-10">
                        <div class="w-1/2 grid justify-start ml-10">
                            <p>Dystans</p>
                        </div>
                        <div class="w-1/2 grid justify-center border border-black rounded-xl py-1 mr-5">
                            <p>{statDistance} m</p>
                        </div>
                    </div>

                    <div class="flex flex-row mt-4">
                        <div class="w-1/2 grid justify-start ml-10">
                            <p>Suma Podejść</p>
                        </div>
                        <div class="w-1/2 grid justify-center border border-black rounded-xl py-1 mr-5">
                            <p>{statSumUp} m</p>
                        </div>
                    </div>

                    <div class="flex flex-row mt-4">
                        <div class="w-1/2 grid justify-start ml-10">
                            <p>Suma Zejść</p>
                        </div>
                        <div class="w-1/2 grid justify-center border border-black rounded-xl py-1 mr-5">
                            <p>{statSumDown} m</p>
                        </div>
                    </div>

                    <div class="flex flex-row mt-4">
                        <div class="w-1/2 grid justify-start ml-10">
                            <p>Punkty GOT</p>
                        </div>
                        <div class="w-1/2 grid justify-center border border-black rounded-xl py-1 mr-5">
                            <p>{statGOTPoints}</p>
                        </div>
                    </div>

                    <div class="flex flex-row mt-4">
                        <div class="w-1/2 grid justify-start ml-10">
                            <p>Najwyższy Punkt</p>
                        </div>
                        <div class="w-1/2 grid justify-center border border-black rounded-xl py-1 mr-5 mb-5">
                            <p>{statHighestPoint} m</p>
                        </div>
                    </div>

                </div> : null}

            </div>
            <div class="w-full mt-10">
                {pathId.length >= 2 ? <button class="bg-green-500 text-white rounded-full px-24 py-4" onClick={trySave}>Zapisz</button> : null }
                <Link to="/menu" class="bg-red-500 text-white rounded-full px-24 py-4 ml-5">Zrezygnuj</Link>
            </div>
        </div>
     );
}
 
export default CreateRoutePage;