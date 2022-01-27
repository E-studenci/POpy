import { useEffect } from "react";
import { useState } from "react";
import { traverseTwoPhase } from "react-dom/cjs/react-dom-test-utils.production.min";
import {Link} from 'react-router-dom';

const ApprovalPage = () => {

    const [details, setDetails] = useState(false);

    const trip = 
          {
            "date": "Sun, 23 Jan 2022 00:00:00 GMT",
            "description": "trip",
            "guides": [],
            "id": 1,
            "is_public": true,
            "name": "trip1",
            "organizer": null,
            "participations": [
              {
                "badge_acquirement": {
                  "badge": null,
                  "got_book": {
                    "badge_acquirements": [],
                    "id": 1,
                    "issue_date": "Sat, 01 Jan 2022 00:00:00 GMT",
                    "owner": {
                      "badge_acquirement_reviews": [],
                      "got_book": null,
                      "guided_trips": [],
                      "id": 3,
                      "login": "es",
                      "name": "Jack",
                      "organized_trips": [],
                      "participation_reviews": [],
                      "password": "ess",
                      "roles": [],
                      "surname": "Sparrow",
                      "trip_plans": []
                    }
                  },
                  "id": 1,
                  "participations": [],
                  "reviews": [],
                  "status": "Collecting_points"
                },
                "id": 1,
                "participation_reviews": [],
                "status": "Acquired",
                "trip": null
              },
              {
                "badge_acquirement": {
                  "badge": null,
                  "got_book": {
                    "badge_acquirements": [],
                    "id": 2,
                    "issue_date": "Wed, 02 Feb 2022 00:00:00 GMT",
                    "owner": {
                      "badge_acquirement_reviews": [],
                      "got_book": null,
                      "guided_trips": [],
                      "id": 6,
                      "login": "esss",
                      "name": "Jack",
                      "organized_trips": [],
                      "participation_reviews": [],
                      "password": "ess",
                      "roles": [],
                      "surname": "Sparrow",
                      "trip_plans": []
                    }
                  },
                  "id": 2,
                  "participations": [],
                  "reviews": [],
                  "status": "Acquired"
                },
                "id": 2,
                "participation_reviews": [],
                "status": "Acquired",
                "trip": null
              }
            ],
            "trip_plan": {
              "creator": null,
              "description": "asdf",
              "difficulty": "Easy",
              "distance": 123,
              "id": 1,
              "is_public": true,
              "name": "plan1",
              "segments": [
                {
                  "index": 1,
                  "path": {
                    "color": "Blue",
                    "distance": 32,
                    "id": 1,
                    "is_official": true,
                    "points": 2,
                    "segments": [],
                    "status": "Open",
                    "waypoint_a": {
                      "description": "asdf",
                      "elevation": 123,
                      "id": 1,
                      "latitude": "123",
                      "longtitude": "321",
                      "mountain_range": null,
                      "name": "pkt_1",
                      "path_starts": []
                    },
                    "waypoint_b": {
                      "description": "asdasd",
                      "elevation": 321,
                      "id": 2,
                      "latitude": "321",
                      "longtitude": "123",
                      "mountain_range": null,
                      "name": "pkt_2",
                      "path_starts": []
                    }
                  },
                  "trip_plan": null
                },
                {
                  "index": 2,
                  "path": {
                    "color": "Blue",
                    "distance": 123,
                    "id": 2,
                    "is_official": true,
                    "points": 3,
                    "segments": [],
                    "status": "Open",
                    "waypoint_a": {
                      "description": "asdasd",
                      "elevation": 321,
                      "id": 2,
                      "latitude": "321",
                      "longtitude": "123",
                      "mountain_range": null,
                      "name": "pkt_2",
                      "path_starts": []
                    },
                    "waypoint_b": {
                      "description": "asdf",
                      "elevation": 123,
                      "id": 1,
                      "latitude": "123",
                      "longtitude": "321",
                      "mountain_range": null,
                      "name": "pkt_1",
                      "path_starts": []
                    }
                  },
                  "trip_plan": null
                }
              ],
              "trips": []
            }
          }

        //let points = 0;

        const calculatePoints = () => {
            let tmp = 0;
            trip.trip_plan.segments.map((v) => (
                tmp += parseInt(v.path.points)
            ));
            return tmp;
        }
        const [points, setPoints] = useState(calculatePoints);

        const getParticipants = () => {
            let tmp = [];
            trip.participations.map((v) => (
                tmp.push([v.badge_acquirement.got_book.owner, points])
            ));
            console.log(tmp);
            return tmp;
        }

        const [participants, setParticipants] = useState(getParticipants);

        const [newPoints, setNewPoints] = useState(0);

        // let points = function () {
        //     let tmp = 0;
        //      trip.trip_plan.segments.array.forEach(element => {
        //          tmp += parseInt(element.path.points);
        //      });
        //      return tmp;
        // }()

    const [editID, setEditID] = useState(0);

    function showDetails(n){
        setDetails(!details);
        setEditID(n);

    }

    function checkboxChecked(i, e){
        const checked = e.target.checked;
        if (checked){
            setNewPoints(newPoints + i);
        }
        else{
            setNewPoints(newPoints - i);
        }
    }

    function saveChange(){
        let tmp = participants;
        tmp[editID][1] = newPoints;
        setNewPoints(0);
        setParticipants(tmp);
        showDetails();
    }

    return ( 
        <div>
            {details ? 
             <div class="w-1/2 absolute left-1/4 bg-white mt-5 border-2 border-black h-5/6">
             <p>{participants[editID][0].name + " " + participants[editID][0].surname}</p>
             <div class="flex flex-row border-white border-b-2 border-b-slate-300 ml-5 mr-5">
                 <div class="w-1/2">
                     <p>Trasa</p>
                 </div>
                 <div class="w-1/4">
                     <p>Punkty</p>
                 </div>
                 <div class="w-1/4">
                     <p>Obecność</p>
                 </div>
             </div>

             {
                 trip.trip_plan.segments.map((v, i) => (
                    <div class="flex flex-row  ml-5 mr-5">
                    <div class="w-1/2">{v.path.waypoint_a.name + " - " + v.path.waypoint_b.name }</div>
                
                    <div class="w-1/4">
                        {v.path.points}
                    </div>
                    <div class="w-1/4">
                    <input class="h-8 w-8 " type="checkbox" name="group1[]" onClick={(e) => checkboxChecked(parseInt(v.path.points), e)} />
                    </div>
                    </div>
                ))
             }

 
             <div class="flex flex-row">
                 <div class="w-1/2">
 
                 </div>
                 <div class="w-1/2 border-white border-t-2 border-t-black mr-5">
                     <p>{`Suma punktów: ${newPoints}`}</p>
                 </div>
             </div>
 
             <div class="flex flex-row mt-10">
                 <div class="w-1/2">
                     <button class="bg-red-500 px-8 py-3 rounded-full text-white" onClick={showDetails}>Anuluj</button>
                 </div>
                 <div class="w-1/2">
                     <button class="bg-green-500 px-8 py-3 rounded-full text-white" onClick={saveChange}>Potwierdź</button>
                 </div>
             </div>
 
 
 
         </div>
             : null}
            <div>
                <p class="mt-10 text-2xl mb-10">Potwierdzenie uczestnictwa turystów w wycieczce</p>
            </div>
            <div class="flex flex-row">
                <div class="w-1/2">
                    <div className="w-full border border-white border-b-black flex flex-row ml-5">
                        <div class="w-1/12"></div>
                        <div class="w-6/12 grid justify-start">
                            <p>Uczestnicy wycieczki</p>
                        </div>
                        <div class="w-1/6 grid justify-center mb-1">
                            <p>Obecność</p>
                        </div>
                        <div class="w-3/12 grid justify-end">
                            <p>Ilość punktów</p>
                        </div>
                    </div>

                    {
                        trip.participations.map((v, i) => (
                            <div className="mt-3 w-full border border-white border-b-gray-300 flex flex-row ml-5">
                            <div class="w-1/12"></div>
                            <div class="w-6/12 grid justify-start">
                                <p>{v.badge_acquirement.got_book.owner.name + " " + v.badge_acquirement.got_book.owner.surname}</p>
                            </div>
                            <div class="w-1/6 grid justify-center">
                                <input type="checkbox" class="form-checkbox h-8 w-8"/>
                            </div>
                            <div class="w-3/12 grid justify-end mb-3">
                                <button class="bg-red-500 w-full px-4" value={i} onClick={() => showDetails(i)}>{participants[i][1]}</button> 
                            </div>
                        </div>
                            
                        ))
                    }

                    <div class="mt-10 w-full grid justify-end">
                        <Link to="/menu" class="bg-green-500 px-8 py-3 rounded-full text-white">Zatwierdź</Link>
                    </div>

                </div>
                <div class="w-1/2 flex flex-col">
                    <div class="border border-black ml-10 mr-10 mt-3 flex flex-col">
                        <div class="flex flex-row">
                            <div class="grid justify-start w-3/4 ml-5">
                                {trip.name}
                            </div>
                            <div class="grid justify-end w-1/4 mr-5">
                                {trip.date}
                            </div>
                        </div>
                        <div class="grid justify-start ml-5 mt-5 mr-5 mb-5">
                            {trip.description}
                        </div>
                    </div>
                    <div class="mt-5 flex flex-col">
                        <div class="ml-10 mr-10 grid justify-start border border-white border-b-black">
                            <p class="">Trasa wycieczki</p>
                        </div>
                        <div class="ml-10 mr-10 grid justify-start">
                            {
                                trip.trip_plan.segments.map((v, i) => (
                                    <p class="">{v.path.waypoint_a.name + " - " + v.path.waypoint_b.name + " (" + v.path.points + " pkt)"}</p>
                                ))}
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="grid justify-end mr-10">
                            <div class="border border-white border-t-black">
                                <p>{`Suma punktów: ${points}`}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default ApprovalPage;