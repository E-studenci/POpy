import { useState } from "react";

const CreateRoutePage = () => {

    const [tripInfo, setTripInfo] = useState(true);
    const [addPointPanel, setAddPointPanel] = useState(true);

    return ( 
        <div>

            {addPointPanel ? 
            <div class="absolute w-full">
            <div class="flex justify-center items-center ">
            <div class="w-1/2 border border-black rounded-2xl flex flex-col bg-white">
                <div class="w-full mt-5">
                    <input class="border border-black rounded-2xl py-1 px-4" type="text" />
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

                <a href="#sasa">
                <div class="mt-1 w-full border border-black rounded-2xl flex flex-row h-11">
                <div class="w-1/4 grid justify-start content-center">
                        <p class="ml-5">Nazwa</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Pasmo górskie</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Wysokość n.p.m.</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Dystans</p>
                    </div>
                </div>
                </a>

                <a href="#sasa">
                <div class="mt-1 w-full border border-black rounded-2xl flex flex-row h-11">
                <div href="#ss" class="w-1/4 grid justify-start content-center">
                        <p class="ml-5">Nazwa</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Pasmo górskie</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Wysokość n.p.m.</p>
                    </div>
                    <div class="w-1/4 grid justify-start content-center">
                        <p>Dystans</p>
                    </div>
                </div>
                </a>

                <div class="w-full border border-black rounded-2xl h-20 mt-5 items-center justify-center flex">
                    <button class="bg-red-600 rounded-full px-20 py-2"><p class="text-white">Anuluj</p></button>
                </div>

            </div>
        </div></div> : null}



            <div class="w-full flex flex-row">
                <div class="w-2/3 flex flex-col ml-10">
                    <div class="grid">
                    <button class="bg-green-500 px-20 py-2 rounded-full mt-10 border border-black w-1/3">
                        <p>Iwaniacka Przełęcz</p>
                    </button>
                    </div>
                    <div class="grid">
                    <button class="bg-green-500 px-20 py-2 rounded-full mt-5 border border-black w-1/3">
                        <p>Iwaniacka Przełęcz</p>
                    </button>
                    </div>
                    <div class="grid">
                    <button class="bg-green-500 px-20 py-2 rounded-full mt-5 border border-black w-1/3">
                        <p>Dodaj punkt</p>
                    </button>
                    </div>
                    <div class="grid">
                    <button class="bg-red-500 px-20 py-2 rounded-full mt-5 border border-black w-1/3">
                        <p>Zakończ</p>
                    </button>
                    </div>
                </div>
                
                {tripInfo ? <div class="mt-10 w-1/3 mr-10 border border-black rounded-xl flex flex-col">
                    <div class="flex flex-row mt-10">
                        <div class="w-1/2 grid justify-start ml-10">
                            <p>Czas</p>
                        </div>
                        <div class="w-1/2 grid justify-center border border-black rounded-xl py-1 mr-5">
                            <p>0:40h</p>
                        </div>
                    </div>

                    <div class="flex flex-row mt-4">
                        <div class="w-1/2 grid justify-start ml-10">
                            <p>Dystans</p>
                        </div>
                        <div class="w-1/2 grid justify-center border border-black rounded-xl py-1 mr-5">
                            <p>0:40h</p>
                        </div>
                    </div>

                    <div class="flex flex-row mt-4">
                        <div class="w-1/2 grid justify-start ml-10">
                            <p>Suma Podejść</p>
                        </div>
                        <div class="w-1/2 grid justify-center border border-black rounded-xl py-1 mr-5">
                            <p>0:40h</p>
                        </div>
                    </div>

                    <div class="flex flex-row mt-4">
                        <div class="w-1/2 grid justify-start ml-10">
                            <p>Suma Zejść</p>
                        </div>
                        <div class="w-1/2 grid justify-center border border-black rounded-xl py-1 mr-5">
                            <p>0:40h</p>
                        </div>
                    </div>

                    <div class="flex flex-row mt-4">
                        <div class="w-1/2 grid justify-start ml-10">
                            <p>Punkty GOT</p>
                        </div>
                        <div class="w-1/2 grid justify-center border border-black rounded-xl py-1 mr-5">
                            <p>0:40h</p>
                        </div>
                    </div>

                    <div class="flex flex-row mt-4">
                        <div class="w-1/2 grid justify-start ml-10">
                            <p>Najwyższy Punkt</p>
                        </div>
                        <div class="w-1/2 grid justify-center border border-black rounded-xl py-1 mr-5 mb-5">
                            <p>0:40h</p>
                        </div>
                    </div>

                </div> : null}

            </div>
            <div class="w-full mt-10">
                <button class="bg-green-500 text-white rounded-full px-24 py-4">Zapisz</button>
                <button class="bg-red-500 text-white rounded-full px-24 py-4 ml-5">Zrezygnuj</button>
            </div>
        </div>
     );
}
 
export default CreateRoutePage;