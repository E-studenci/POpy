const BadgeDetailsPage = () => {

    const data = 
          {
            "badge": {
              "acquirements": [],
              "id": 1,
              "name": "mala",
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
            "participations": [
              {
                "badge_acquirement": null,
                "id": 1,
                "participation_reviews": [
                  {
                    "earned_points": 12,
                    "id": 3,
                    "participation": null,
                    "review": "Accepted",
                    "review_date": "Mon, 24 Jan 2022 10:51:34 GMT",
                    "reviewer": {
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
                  }
                ],
                "status": "Acquired",
                "trip": null
              }
            ],
            "reviews": [],
            "status": "Waiting_for_review"
          }

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
                                {data.badge.name}
                            </div>                        
                        </div>
                        <div class="flex flex-row w-full mt-2 mb-2">
                            <div class="w-1/2">
                                Stopień:
                            </div> 
                            <div class="justify-end w-1/2">
                                Srebrny
                            </div>                        
                        </div>


                    </div>

                    <button class="bg-green-500 px-2 py-3 rounded-full text-white mt-10">Zaakceptuj</button>
                    <button class="bg-yellow-500 px-2 py-3 rounded-full text-white mt-10">Anuluj</button>
                    <button class="bg-red-500 px-2 py-3 rounded-full text-white mt-10">Odrzuć</button>
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
        </div>
     );
}
 
export default BadgeDetailsPage;