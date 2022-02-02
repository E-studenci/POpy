
import React, {useState, useEffect} from 'react'

const AddPointPage = () => {

    const [dfetch, setdfetch] = useState(true)

    const [pointsArray, setPointsArray] = useState({
        "data": [
        ]
      });

    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const [mountainRangeArray, setMountainRangeArray] = useState([{name: "Wszystkie punkty", id: 0}, {name: "tatry", id: 1}, {name: "tatry2", id: 2}]); // tutaj wszystkie możliwe wybory
    //let points = pointsArray.data

    const [points, setPoints] = useState([
        {
            "description": "asdf",
            "elevation": 432,
            "id": 5,
            "latitude": "32",
            "longtitude": "23",
            "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
            },
            "name": "pkt_4fdrtrjd",
            "path_starts": []
        }])

    const [nState, setNState] = useState(true);
    const [eState, setEState] = useState(true);
    const [lol, setLol] = useState(-1)
    const [currentRange, setCurrentRange] = useState(0)

    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newElevation, setNewElevation] = useState("");
    const [newLatitude1, setNewLatitude1] = useState("");
    const [newLatitude2, setNewLatitude2] = useState("");
    const [newLatitude3, setNewLatitude3] = useState("");
    const [newLongtitude1, setNewLongtitude1] = useState("");
    const [newLongtitude2, setNewLongtitude2] = useState("");
    const [newLongtitude3, setNewLongtitude3] = useState("");

    const [latelyAdded, setLatelyAdded] = useState([]);


    function handleNSClick(){
        setNState(!nState);
    }

    function handleEWClick(){
        setEState(!eState);
    }

    async function changeMountainRange(n){
        await setCurrentRange(n)
    }
    

    function clearAll(){
        setNewName("");
        setNewDescription("");
        setNewElevation("");
        setNewLatitude1("");
        setNewLatitude2("");
        setNewLatitude3("");
        setNewLongtitude1("");
        setNewLongtitude2("");
        setNewLongtitude3("");
    }

    async function addPoint(){


        if(newName === "" || newElevation === "" || newLatitude1 === "" || newLatitude2 === "" || newLatitude3 === "" || newLongtitude1 === "" || 
        newLatitude2 === "" || newLongtitude3 === "" || currentRange === 0){
            setError(true)
            setErrorMessage("Wprowadź wszystkie informacje o punkcie")
            return
        }

        var myHeaders = new Headers();
        myHeaders.append('Content-Type',"application/json");

        var ctj1 = "S";
        if(nState){
            ctj1 = "N";
        }
        var ctj2 = "W";
        if(eState){
            ctj2 = "E";
        }

        var body = JSON.stringify({
            name: newName,
            elevation: parseInt(newElevation),
            longtitude: newLongtitude1+":"+newLongtitude2+"'"+newLongtitude3+"''"+ctj1,
            latitude: newLatitude1+":"+newLatitude2+"'"+newLatitude3+"''"+ctj2,
            description: newDescription,
            mountain_range_id: parseInt(currentRange)
        })


        // tutaj wysłanie punktu
        // ciało tego czegoś eloo
        //ify czy coś trzeba czy nie 
        var requestOptions = {
            method: 'POST',
            headers: myHeaders, 
            redirect: 'follow',
            credentials: 'include',
            body: body
            };
            let tmpr = {}
            await fetch("http://localhost:5000/waypoint", requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmpr = JSON.parse(result)) //zrobić coś z resultem 
            .catch(error => console.log('error', error));
        
        if(tmpr.status == "success"){
            const tmp = latelyAdded;
            latelyAdded.push(newName);
            setLatelyAdded(tmp);
            clearAll();
            getPoints();
        }
        else{
            setError(true)
            setErrorMessage(tmpr.error.description)
        }
        
    }

    async function getPoints(){
        //wszystkie punkty 
        let tmp = {}
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            credentials: 'include',
            };
    
            await fetch("http://localhost:5000/waypoint", requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmp = JSON.parse(result)) //ustawić ten syf
            .catch(error => console.log('error', error));

            //setPointsArray(tmp)
            setPoints(tmp.data)
    }

    async function getMountainRanges(){

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        credentials: 'include',
        };

    let tmp = {}
    await fetch("http://localhost:5000/waypoint/mountain_ranges", requestOptions) //tutaj do zmiany 
    .then(response => response.text())
    .then(result => tmp = JSON.parse(result)) //ustawić ten syf
    .catch(error => console.log('error', error));
    
    let tmp_data = []
    tmp_data.push({name: "Wszystkie punkty", id:0})
    tmp.data.forEach(element => {
        console.log(element)
        tmp_data.push({
            name: element.name,
            id:  parseInt(element.id)})
    });

    setMountainRangeArray(tmp_data)
    console.log(mountainRangeArray)
    }

    useEffect(() => {
        

        getPoints()
        getMountainRanges()
    }, [])


    return ( 
        <div>
            { 
                error ? 
                <div class="absolute w-full flex flex-row top-1/3">
                    <div class="w-1/4">

                    </div>
                    <div class="bg-red-600 w-1/2">
                        <p class="text-white mt-5 mb-3">{errorMessage}</p>
                        <button class="mb-4 rounded-full bg-green-600 text-white px-10 text-xl" onClick={() => setError(false)}>Rozumiem</button>

                    </div>
                </div>
                : null
            }
            <div class="mt-2"><p class="text-xxl">Dodaj punkt</p></div>
            <div class="mt-5 flex flex-row  w-full">
                <div class="w-1/12"></div>
                <div class=" w-1/6">
                    <p class="mt-2 text-xl font-semibold">Ostatnio dodane punkty</p>
                    <div class="grid justify-items-start">
                        {latelyAdded.map((v) => (
                            <p class="ml-10 mt-3">{v}</p>
                        ))}
                    </div>
                </div>
                <div class="flex flex-col w-3/6">
                    <div class="w-full flex flex-row">
                        <div class="w-1/3 grid justify-end">
                            <p class="mr-10">Pasmo Górskie</p>
                        </div>
                        <div class="w-1/2 grid justify-start">
                        <select class="w-96 border border-black" onChange={(e) => changeMountainRange(e.target.value)}>
                            {mountainRangeArray.map((v, i) => 
                            (
                                <option key={i} value={i}>{v.name}</option>
                            )
                            )}
                        </select>
                        </div>
                    </div>
                    <div class="flex flex-row w-full">
                    <div class="w-full flex flex-row mt-5">
                        <div class="w-1/3 grid justify-end">
                            <p class="mr-10">Nazwa</p>
                        </div>
                        <div class="w-1/2 grid justify-start">
                            <input class="border border-black w-96" type="text" onInput={e => setNewName(e.target.value)} value={newName}/>
                        </div>
                    </div>
                    </div>

                    <div class="w-full flex flex-row mt-5">
                        <div class="w-1/3 grid justify-end">
                            <p class="mr-10">Opis</p>
                        </div>
                        <div class="w-1/2 grid justify-start">
                            <input height="48" width="111" class="border border-black" type="text" onInput={e => setNewDescription(e.target.value)} value={newDescription}/>
                        </div>
                    </div>

                    <div class="w-full flex flex-row mt-5">
                        <div class="w-1/3 grid justify-end">
                            <p class="mr-10">Wysokość</p>
                        </div>
                        <div class="w-1/2 flex flex-row">
                            <input class="border border-black focus:content-end" type="number" onInput={e => setNewElevation(e.target.value)} value={newElevation}/>
                            <p class="ml-2">m n.p.m.</p>
                        </div>
                    </div>

                    <div class="w-full flex flex-row mt-5">
                        <div class="w-1/3 grid justify-end">
                            <p class="mr-10">Szerokość geograficzna</p>
                        </div>
                        <div class="w-1/2 flex flex-row">
                            <input class="border border-black focus:content-end w-1/6" type="number" onInput={e => setNewLatitude1(e.target.value)} value={newLatitude1}/>
                            <p class="ml-2">°</p>
                            <input class="ml-5 border border-black focus:content-end w-1/6" type="number" onInput={e => setNewLatitude2(e.target.value)} value={newLatitude2}/>
                            <p class="ml-2">'</p>
                            <input class="ml-5 border border-black focus:content-end w-1/6" type="number" onInput={e => setNewLatitude3(e.target.value)} value={newLatitude3}/>
                            <p class="ml-2">''</p>
                            {
                               nState ? <button onClick={handleNSClick} class="ml-5">N</button> : <button onClick={handleNSClick} class="ml-5">S</button>
                            }
                        </div>
                    </div>

                    <div class="w-full flex flex-row mt-5">
                        <div class="w-1/3 grid justify-end">
                            <p class="mr-10">Długość geograficzna</p>
                        </div>
                        <div class="w-1/2 flex flex-row">
                            <input class="border border-black focus:content-end w-1/6" type="number" onInput={e => setNewLongtitude1(e.target.value)} value={newLongtitude1}/>
                            <p class="ml-2">°</p>
                            <input class="ml-5 border border-black focus:content-end w-1/6" type="number" onInput={e => setNewLongtitude2(e.target.value)} value={newLongtitude2}/>
                            <p class="ml-2">'</p>
                            <input class="ml-5 border border-black focus:content-end w-1/6" type="number" onInput={e => setNewLongtitude3(e.target.value)} value={newLongtitude3}/>
                            <p class="ml-2">''</p>
                            {
                               eState ? <button onClick={handleEWClick} class="ml-5">E</button> : <button onClick={handleEWClick} class="ml-5">W</button>
                            }
                        </div>
                    </div>

                    <div class="mt-10  w-full h-32 flex flex-row items-center">
                        <div class="grid justify-end center  w-1/2 h-1/2">
                            <button class="mr-10 rounded-full bg-red-600 text-white px-10 text-xl" onClick={clearAll}>Wyczyść</button>
                        </div>
                        <div class="grid justify-start center  w-1/2 h-1/2">
                            <button class="ml-10 rounded-full bg-green-600 text-white px-10 text-xl" onClick={addPoint}>Dodaj punkt</button>
                        </div>
                    </div>


                </div>
                <div class="w-1/6">
                        <p class="mt-2 text-xl font-semibold">{mountainRangeArray[currentRange].name}</p>
                    <div class="grid justify-items-start">
                        {
                            currentRange == 0 ? 
                            points.map((v) => (
                                <p class="ml-10 mt-3">{v.name} - {v.elevation}m. n.p.m.</p>
                            )) :
                            points.filter((v) => v.mountain_range.name === mountainRangeArray[currentRange].name).map((v) => (
                                newName === v.name ? 
                                <p class="ml-10 mt-3 text-red-500">{v.name}  - {v.elevation}m. n.p.m.</p> : 
                                <p class="ml-10 mt-3">{v.name}  - {v.elevation}m. n.p.m.</p>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default AddPointPage;