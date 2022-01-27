import { useState } from 'react';
import {Link} from 'react-router-dom';

const PointsList = () => {

    

    const data = [
          {
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
          },
          {
            "color": "3",
            "distance": 123,
            "id": 2,
            "is_official": true,
            "points": 3,
            "segments": [],
            "status": "1",
            "waypoint_a": {
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
            },
            "waypoint_b": {
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
            }
          },
          {
            "color": "5",
            "distance": 3213,
            "id": 5,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 500,
            "id": 6,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 323,
            "id": 7,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 32321,
            "id": 8,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 3232,
            "id": 9,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 3223,
            "id": 10,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 232,
            "id": 11,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 2131,
            "id": 12,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 232,
            "id": 13,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 1453,
            "id": 14,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 1234,
            "id": 15,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 6345,
            "id": 16,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "5",
            "distance": 4356,
            "id": 17,
            "is_official": false,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          },
          {
            "color": "4",
            "distance": 123,
            "id": 18,
            "is_official": true,
            "points": 3,
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
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            }
          },
          {
            "color": "4",
            "distance": 123,
            "id": 19,
            "is_official": true,
            "points": 3,
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
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            }
          },
          {
            "color": "4",
            "distance": 123,
            "id": 20,
            "is_official": true,
            "points": 3,
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
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            }
          },
          {
            "color": "4",
            "distance": 123,
            "id": 21,
            "is_official": true,
            "points": 3,
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
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            }
          },
          {
            "color": "4",
            "distance": 123,
            "id": 22,
            "is_official": true,
            "points": 3,
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
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            }
          },
          {
            "color": "4",
            "distance": 123,
            "id": 23,
            "is_official": true,
            "points": 3,
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
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            }
          },
          {
            "color": "4",
            "distance": 123,
            "id": 24,
            "is_official": true,
            "points": 3,
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
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            }
          },
          {
            "color": "4",
            "distance": 123,
            "id": 25,
            "is_official": true,
            "points": 3,
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
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            }
          },
          {
            "color": "4",
            "distance": 123,
            "id": 26,
            "is_official": true,
            "points": 3,
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
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            }
          },
          {
            "color": "4",
            "distance": 123,
            "id": 27,
            "is_official": true,
            "points": 3,
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
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            }
          },
          {
            "color": "4",
            "distance": 123,
            "id": 28,
            "is_official": true,
            "points": 3,
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
              "description": "asdf",
              "elevation": 432,
              "id": 7,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_6",
              "path_starts": []
            }
          },
          {
            "color": "3",
            "distance": 1234,
            "id": 4,
            "is_official": true,
            "points": 4,
            "segments": [],
            "status": "1",
            "waypoint_a": {
              "description": "asdf",
              "elevation": 432,
              "id": 4,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_3",
              "path_starts": []
            },
            "waypoint_b": {
              "description": "asdf",
              "elevation": 432,
              "id": 6,
              "latitude": "32",
              "longtitude": "23",
              "mountain_range": {
                "id": 1,
                "name": "tatry",
                "waypoints": []
              },
              "name": "pkt_5",
              "path_starts": []
            }
          }]

          const [input, setInput] = useState("");


    return ( 
        <div>
            <div class="w-full flex flex-row border border-black pb-2">
                <div class="w-1/2 flex justify-start">
                    <input class="mt-2 ml-2 border border-black rounded-2xl py-1 px-4 w-2/3" type="text" value={input} onInput={e => setInput(e.target.value)}/>
                </div>
                <div class="w-1/2 flex justify-end">
                    <button class="mt-2 mr-2 bg-green-500 border border-black rounded-2xl py-1 px-4 w-1/3"><p class="text-white">Dodaj odcinek</p></button>
                </div>
            </div>

            <div class="w-full border border-black flex flex-row pt-2 pb-2">
                <div class="w-3/12 flex justify-start pl-5">
                    <p>Od</p>
                </div>
                <div class="w-3/12 flex justify-start pl-5">
                    <p>Do</p>
                </div>
                <div class="w-1/12 flex justify-start pl-5">
                    <p>Kolor</p>
                </div>
                <div class="w-1/12 flex justify-start pl-5">
                    <p>Długość</p>
                </div>
                <div class="w-1/12 flex justify-start pl-5">
                    <p>Kierunek</p>
                </div>
                <div class="w-1/12 flex justify-start pl-5">
                    <p>Oficjalny</p>
                </div>
                <div class="w-1/12 flex justify-start pl-5">
                    <p>Punkty</p>
                </div>
                <div class="w-1/12 flex justify-start pl-5">
                    <p>Status</p>
                </div>
            </div>


            {
                data.filter((v) => input === v.waypoint_a.name.substring(0, input.length)).map((v, i) => (
                    <Link to={`/route_details/${v.id}`}>
                    <div class="w-full border border-black rounded-full flex flex-row mt-1 pt-2 pb-2">
                        <div class="w-3/12 flex justify-start pl-5">
                            <p>{v.waypoint_a.name}</p>
                        </div>
                        <div class="w-3/12 flex justify-start pl-5">
                            <p>{v.waypoint_b.name}</p>
                        </div>
                        <div class="w-1/12 flex justify-start pl-5">
                            <p>{v.color}</p>
                        </div>
                        <div class="w-1/12 flex justify-start pl-5">
                            <p>{`${v.distance} km`}</p>
                        </div>
                        <div class="w-1/12 flex justify-start pl-5">
                            <p>nie wiem</p>
                        </div>
                        <div class="w-1/12 flex justify-start pl-5">
                            <p>{v.is_official ? `Tak` : `Nie`}</p>
                        </div>
                        <div class="w-1/12 flex justify-start pl-5">
                            <p>{v.points}</p>
                        </div>
                        <div class="w-1/12 flex justify-start pl-5">
                            <p>{v.status == 1 ? `Czynny` : `Zamknięty`}</p>
                        </div>
                    </div>
                    </Link>
                ))
            }


        </div>
     );
}
 
export default PointsList;