import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router"

const BadgeDetailsPage = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [earnedPoints, setEarnedPoints] = useState(0)

    let navigate = useNavigate()

    async function fetchData(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            credentials: 'include',
            };
            
            let tmp = {}
            await fetch("http://localhost:5000/review/pending_badge_acquirements/"+id, requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmp = JSON.parse(result)) //ustawić ten syf
            .catch(error => console.log('error', error));

        setData(tmp.data)

        let p = 0
        tmp.data.participations.map((v) => (
            p = p + v.participation_reviews[0].earned_points
        ))
        setEarnedPoints(p)




    }

    async function sendReview(result){
        console.log('xD')
        let review = ""
        if(result) {review = "accepted"}
        else {
            review = "rejected"
            console.log("elo")
        }

        var myHeaders = new Headers();
        myHeaders.append('Content-Type',"application/json");

        let earned_points = 0

        data.participations.map((v) => (
            earned_points = earned_points + v.participation_reviews.earned_points
        ))

        let ep = 0
        if (earned_points) ep = parseInt(earned_points)

        var body = JSON.stringify({
            badge_acquirement_id: parseInt(id),
            reviewer_id: 6,
            review: review,
            required_points: parseInt(data.badge.required_points),
            earned_points: ep
        })


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            credentials: 'include',
            body: body,
            };
            
            let tmp = {}
            await fetch("http://localhost:5000/review/review_badge_acquirement", requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmp = JSON.parse(result)) //ustawić ten syf
            .catch(error => console.log('error', error));

            console.log(tmp)
            navigate("/menu")

    }

    useEffect(() => {
        fetchData()
        
    }, [])

    const [data, setData] = useState( 
          {
            "badge": {
              "acquirements": [],
              "id": 1,
              "name": "",
              "required_age": 8,
              "required_points": 122
            },
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
                "name": "",
                "organized_trips": [],
                "participation_reviews": [],
                "password": "ess",
                "roles": [],
                "surname": "",
                "trip_plans": []
              }
            },
            "id": 1,
            "participations": [
              {
                "badge_acquirement": null,
                "id": 1,
                "participation_reviews": [
                  {
                    "earned_points": 0,
                    "id": 3,
                    "participation": null,
                    "review": "Accepted",
                    "review_date": "",
                    "reviewer": {
                      "badge_acquirement_reviews": [],
                      "got_book": null,
                      "guided_trips": [],
                      "id": 3,
                      "login": "es",
                      "name": "",
                      "organized_trips": [],
                      "participation_reviews": [],
                      "password": "ess",
                      "roles": [],
                      "surname": "",
                      "trip_plans": []
                    }
                  }
                ],
                "status": "Acquired",
                "trip": null
              }
            ],
            "reviews": [],
            "status": "Waiting_for_review"
          })



    return ( 
        <div>
            <div class="flex flex-row ml-5">
                <div class="w-1/3 flex flex-col mt-5">
                    <p>Ogólne informacje</p>
                    <div class="flex flex-col border-black border-2 rounded mt-5">
                        <div class="flex flex-row w-full mt-2">
                            <div class="w-1/2">
                                Imię
                            </div> 
                            <div class="justify-end w-1/2">
                                {data.got_book.owner.name}
                            </div>                        
                        </div>
                        <div class="flex flex-row w-full mt-2">
                            <div class="w-1/2">
                                Nazwisko:
                            </div> 
                            <div class="justify-end w-1/2">
                            {data.got_book.owner.surname}
                            </div>                        
                        </div>
                        <div class="flex flex-row w-full mt-2">
                            <div class="w-1/2">
                                Kategoria:
                            </div> 
                            <div class="justify-end w-1/2">
                                {data.badge.name.split(":")[0]}
                            </div>                        
                        </div>
                        <div class="flex flex-row w-full mt-2 mb-2">
                            <div class="w-1/2">
                                Stopień:
                            </div> 
                            <div class="justify-end w-1/2">
                            {data.badge.name.split(":")[1]}
                            </div>                       
                        </div>
                        <div class="flex flex-row w-full mt-2 mb-2">
                            <div class="w-1/2">
                                Wymagane punkty:
                            </div> 
                            <div class="justify-end w-1/2">
                            {data.badge.required_points}
                            </div>                       
                        </div>
                        <div class="flex flex-row w-full mt-2 mb-2">
                            <div class="w-1/2">
                                Suma zdobytych punktów:
                            </div> 
                            <div class="justify-end w-1/2">
                            {earnedPoints}
                            </div>                       
                        </div>


                    </div>

                    <button class="bg-green-500 px-2 py-3 rounded-full text-white mt-10" onClick={() => sendReview(true)}>Zaakceptuj</button>
                    <Link to="/pending_badges" class="bg-yellow-500 px-2 py-3 rounded-full text-white mt-10">Anuluj</Link>
                    <button class="bg-red-500 px-2 py-3 rounded-full text-white mt-10" onClick={() => sendReview(false)}>Odrzuć</button>
                </div>

                <div className="flex flex-col w-2/3 mt-5 border-2 border-black rounded ml-5 mr-5">
                    <p class="justify-center">Wycieczki</p>
                    <div class="flex flex-row ">
                        <div class="w-1/2">
                            <p>Osoba potwierdzająca</p>
                        </div>
                        <div class="w-1/4">
                            <p>Data</p>
                        </div>
                        <div class="w-1/4">
                            <p>Punkty</p>
                        </div>
                    </div>


                    {
                        data.participations.map((v) => (
                            <div class="flex flex-row border-2 border-slate-400 py-2 rounded-xl mt-2">
                            <div class="w-1/2">
                                <p>{v.participation_reviews[0].reviewer.name + " " + v.participation_reviews[0].reviewer.surname}</p>
                            </div>
                            <div class="w-1/4">
                                <p>{v.participation_reviews[0].review_date}</p>
                            </div>
                            <div class="w-1/4">
                                <p>{v.participation_reviews[0].earned_points}</p>
                            </div>
                        </div>
                        ))
                    }


                    
                </div>


            </div>
            <div>
            </div>
        </div>
     );
}
 
export default BadgeDetailsPage;