import { useState } from 'react';
import { useEffect } from 'react';
import {Link, Navigate} from 'react-router-dom';

const AddPathPage = () => {

    const [pointPanel, setPointPanel] = useState(false)
    const [pointNumber, setPointNumber] = useState(0)
    const [startPoint, setStartPoint] = useState("Początek odcinka")
    const [endPoint, setEndPoint] = useState("Koniec odcinka")
    const [startPointId, setStartPointId] = useState(-1)
    const [endPointId, setEndPointId] = useState(-1)
    const [data, setData] = useState([])
    const [input, setInput] = useState("")
    
    const [newColor, setNewColor] = useState("")
    const [newDistance, setNewDistance] = useState("")
    const [oneWay, setOneWay] = useState(false)
    const [official, setOfficial] = useState(false)
    const [newPointsValue, setNewPointsValue] = useState("")

    const [errorMessage, setErrorMessage] = useState("Error Message")
    const [errorFlag, setErrorFlag] = useState(false)

    const [gitFlag, setGitFlag] = useState(false)

    function start(){
        setPointNumber(1)
        setPointPanel(true)
    }

    function end(){
        setPointNumber(2)
        setPointPanel(true)
    }

    // function setStart/END NWM JAK I CO JESZCZE

    function setStart(id, name, flag){
        if(flag === 1){
            setStartPoint(name)
            setStartPointId(id)
        }
        else{
            setEndPoint(name)
            setEndPointId(id)
        }
        
        setPointPanel(false)
    }

    function create(){
        
    }

    async function fetchData(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            credentials: 'include',
            };
        let tmp = {}
            await fetch("http://localhost:5000/waypoint", requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmp = JSON.parse(result)) //ustawić ten syf
            .catch(error => console.log('error', error));

        console.log(tmp.data)
        setData(tmp.data)

        


    }

    async function addNewPoint(){

        let p1 = 0
        let p2 = 0
        if(oneWay){
            p1 = parseInt(newPointsValue)
        }
        else{
            let tmp = newPointsValue.split("/")
            p1 = parseInt(tmp[0])
            p2 = parseInt(tmp[1])
        }

        var body = JSON.stringify({
            color: color,
            is_official: official,
            status: "open",
            points: p1,
            waypoint_a_id: startPointId,
            waypoint_b_id: endPointId,
            distance: parseInt(newDistance)
        })
        var myHeaders = new Headers();
        myHeaders.append('Content-Type',"application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            credentials: 'include',
            body: body,
            };
        let tmp = {}
            await fetch("http://localhost:5000/path", requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmp = JSON.parse(result)) //ustawić ten syf
            .catch(error => console.log('error', error));

        console.log(tmp)

        if(!oneWay){
            body = JSON.stringify({
                color: color,
                is_official: official,
                status: "open",
                points: p2,
                waypoint_a_id: endPointId,
                waypoint_b_id: startPointId,
                distance: parseInt(newDistance)
            })

            requestOptions = {
                method: 'POST',
                headers: myHeaders,
                redirect: 'follow',
                credentials: 'include',
                body: body,
                };
            
                await fetch("http://localhost:5000/path", requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmp = JSON.parse(result)) //ustawić ten syf
            .catch(error => console.log('error', error));
            

        }

        if(tmp.status !== "success"){
            setErrorFlag(true)
            setErrorMessage(tmp.error.description)
        }
        else{
            setGitFlag(true)
        }

    }


    useEffect(() => {
      fetchData() 
    }, [])

    const [color, setColor] = useState("green")



    return ( 
        <div>
        {
            errorFlag ? 
            <div class="absolute w-full top-1/3 flex flex-row">
                <div class="w-1/4"></div>
                <div class="w-1/2 bg-white border-2 rounded border-black">
                <p class="mt-5">{errorMessage}</p>
                <button class="mb-5 mt-5 rounded-full bg-red-600 text-white px-10 text-xl" onClick={() => setErrorFlag(false)}>Wyczyść</button>
                </div>
            </div>
                : null
        }

{
            gitFlag ? 
            <div class="absolute w-full top-1/3 flex flex-row">
                <div class="w-1/4"></div>
                <div class="w-1/2 bg-white border-2 rounded border-black">
                <p class="mt-5">Zapisano!</p>
                <Link to="/routes" class="mb-5 mt-5 rounded-full bg-red-600 text-white px-10 text-xl">Powrót</Link>
                </div>
            </div>
                : null
        }

        {pointPanel ? 
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
                </div>

                {
                    data.filter((v) => input === v.name.substring(0, input.length)).map((v) =>(
                        <button onClick={() => setStart(v.id, v.name, pointNumber)}>
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
                        </div>
                        </button>
                    ))
                }

                

                <div class="w-full border border-black rounded-2xl h-20 mt-5 items-center justify-center flex">
                    <button class="bg-red-600 rounded-full px-20 py-2" onClick={() => setPointPanel(false)}><p class="text-white" >Anuluj</p></button>
                </div>

            </div>
        </div></div> : null}


            <div class="mt-10 flex flex-row">
                <div class="w-1/2 justify-center">
                    <button class="bg-green-700 rounded-full px-20 py-2" onClick={start}><p class="text-white" >{startPoint}</p></button>
                </div>
                <div class="w-1/2 justify-center">
                    <button class="bg-red-700 rounded-full px-20 py-2" onClick={end}><p class="text-white" >{endPoint}</p></button>
                </div>
            </div>
            <div class="flex flex-row mt-5">
                <div className="w-3/12" />
                <div class="w-1/2 border-black rounded-xl border-2">
                    <div class="flex flex-col mt-3">

                        <div class="flex flex-row mt-3">
                            <div class="w-1/6">
                                <p>Kolor:</p>
                            </div>
                            <select class="w-96 border border-black" onChange={(e) => setColor(e.target.value)}>
                                <option key="1" value="green">Zielony</option>
                                <option key="2" value="red">Czerwony</option>
                                <option key="3" value="black">Czarny</option>
                                <option key="4" value="blue">Niebieski</option>
                                <option key="4" value="yellow">Żółty</option>
                            )
                        </select>
                            {/* <div>
                                <input class="justify-start ml-10 rounded-full px-20 border border-black" type="text" value={newColor} onInput={e => setNewColor(e.target.value)}/>
                            </div> */}
                        </div>

                        <div class="flex flex-row mt-3">
                            <div class="w-1/6">
                                <p>Długość:</p>
                            </div>
                            <div>
                                <input class="justify-start ml-10 rounded-full px-20 border border-black" type="text" value={newDistance} onInput={e => setNewDistance(e.target.value)}/>
                            </div>
                        </div>

                        <div class="flex flex-row mt-3">
                            <div class="w-1/6">
                                <p>Jednokierunkowy?:</p>
                            </div>
                            <div class="ml-10">
                            <input class="h-6 w-6 center" type="checkbox" onClick={() => setOneWay(!oneWay)} />
                            </div>
                        </div>


                        <div class="flex flex-row mt-3">
                            <div class="w-1/6">
                                <p>Punkty:</p>
                            </div>
                            <div>
                                <input class="justify-start ml-10 rounded-full px-20 border border-black" type="text"value={newPointsValue} onInput={e => setNewPointsValue(e.target.value)} />
                            </div>
                        </div>

                        <div class="flex flex-row mt-3 mb-5">
                            <div class="w-1/6">
                                <p>Oficjalny?:</p>
                            </div>
                            <div class="ml-10">
                            <input class="h-6 w-6 center" type="checkbox" onClick={() => setOfficial(!official)} />
                            </div>
                        </div>

                        <div className="flex flex-row">
                            <div class=" w-2/3">
                            </div>
                            <div class="w-1/3 flex flex-col">
                                <button class="bg-green-600 mt-2 rounded-full mb-1 px-10 py-2 mr-3"><p class="text-white" onClick={addNewPoint}>Zapisz</p></button>
                                <Link to="/routes" class="bg-red-600 mt-2 rounded-full mb-1 px-10 py-2 mr-3"><p class="text-white">Zrezygnuj</p></Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AddPathPage;