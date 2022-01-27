
import React, {useState} from 'react'

const AddPointPage = () => {

    const [pointsArray, setPointsArray] = useState({
        "results": [
          {
            "description": "dsa",
            "elevation": 321,
            "id": 2,
            "latitude": "dsa",
            "longtitude": "dsa",
            "mountain_range": {
              "id": 1,
              "name": "tatry",
              "waypoints": []
            },
            "name": "dsa",
            "path_starts": []
          },
          {
            "description": "asd",
            "elevation": 123,
            "id": 1,
            "latitude": "asd",
            "longtitude": "asd",
            "mountain_range": {
              "id": 1,
              "name": "tatry2",
              "waypoints": []
            },
            "name": "asssssssd",
            "path_starts": []
          }
        ]
      });
    const [mountainRangeArray, setMountainRangeArray] = useState(["tatry", "tatry2"]); // tutaj wszystkie możliwe wybory
    const points = pointsArray.results
    const [nState, setNState] = useState(true);
    const [eState, setEState] = useState(true);
    const [currentRange, setCurrentRange] = useState("-1");

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

    function changeMountainRange(n){
        setCurrentRange(n);
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

    function addPoint(){
        // tutaj wysłanie punktu
        const tmp = latelyAdded;
        latelyAdded.push(newName);
        setLatelyAdded(tmp);
        clearAll();
    }


    return ( 
        <div>
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
                            <option key="-1" value="-1"> </option>
                            {mountainRangeArray.map((v, i) => 
                            (
                                <option key={i} value={i}>{v}</option>
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
                <p class="mt-2 text-xl font-semibold">{currentRange == "-1" ? "Wszystkie punkty" : mountainRangeArray[currentRange]}</p>
                    <div class="grid justify-items-start">
                        {
                            currentRange === "-1" ? 
                            points.map((v) => (
                                <p class="ml-10 mt-3">{v.name}</p>
                            )) :
                            points.filter((v) => v.mountain_range.name === mountainRangeArray[currentRange]).map((v) => (
                                newName === v.name ? 
                                <p class="ml-10 mt-3 text-red-500">{v.name}</p> : 
                                <p class="ml-10 mt-3">{v.name}</p>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default AddPointPage;