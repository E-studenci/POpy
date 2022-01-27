import { useState } from "react";

const PendingBadgesPage = () => {

    const data = [
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
        ]

        const [input, setInput] = useState("");

    return ( 
        <div>
            <div class="w-full flex flex-row border border-black pb-2">
                <div class="w-1/2 flex justify-start">
                    <input class="mt-2 ml-2 border border-black rounded-2xl py-1 px-4 w-2/3" type="text" onChange={(e) => setInput(e.target.value)} value={input} />
                </div>
            </div>

            <div class="w-full border border-black flex flex-row pt-2 pb-2">
                <div class="w-1/4 flex justify-start pl-5">
                    <p>Imię</p>
                </div>
                <div class="w-1/4 flex justify-start pl-5">
                    <p>Nazwisko</p>
                </div>
                <div class="w-1/4 flex justify-start pl-5">
                    <p>Kategoria</p>
                </div>
                <div class="w-1/4 flex justify-start pl-5">
                    <p>Stopień</p>
                </div> 
            </div>

            {
                input === "" ? 
                data.map((v) => (
                    <a href="#dew">
                    <div class="w-full border border-black rounded-full flex flex-row mt-1 pt-2 pb-2">
                        <div class="w-1/4 flex justify-start pl-5">
                            <p>{v.got_book.owner.name}</p>
                        </div>
                        <div class="w-1/4 flex justify-start pl-5">
                            <p>{v.got_book.owner.surname}</p>
                        </div>
                        <div class="w-1/4 flex justify-start pl-5">
                            <p>{v.badge.name}</p>
                        </div>
                        <div class="w-1/4 flex justify-start pl-5">
                            <p>Srebrna</p>
                        </div>
                    </div>
                    </a>
                ))
                :
                data.filter((v) => input.toLowerCase == v.got_book.owner.surname.substring(0, input.length).toLowerCase).map((v) => (
                    <a href="#dew">
                    <div class="w-full border border-black rounded-full flex flex-row mt-1 pt-2 pb-2">
                        <div class="w-1/4 flex justify-start pl-5">
                            <p>{v.got_book.owner.name}</p>
                        </div>
                        <div class="w-1/4 flex justify-start pl-5">
                            <p>{v.got_book.owner.surname}</p>
                        </div>
                        <div class="w-1/4 flex justify-start pl-5">
                            <p>{v.badge.name}</p>
                        </div>
                        <div class="w-1/4 flex justify-start pl-5">
                            <p>Srebrna</p>
                        </div>
                    </div>
                    </a>
                ))
            }

        </div>
     );
}
 
export default PendingBadgesPage;