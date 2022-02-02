import {useState} from "react";
import { useNavigate } from "react-router";

const LogInPanel = () => {

    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");
    const [bad, setBad] = useState(false);
    var response = {}
    let navigate = useNavigate();

    async function log(){  // es, ess
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Basic ' + btoa(login + ":" + pass));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
            credentials: 'include',
            };
    
        await fetch("http://localhost:5000/login", requestOptions)
            .then(response => response.text())
            .then(result => response = JSON.parse(result))
            .catch(error => console.log('error', error));

        if (response.status !== "success"){
            setLogin("")
            setPass("")
            setBad(true)
        }
        else{
            console.log("logged");
            navigate("/menu");
        }

        


    }
    


    return ( 
        <div>
            <div class="w-full h-48">

            </div>
            <div class="w-full flex items-center justify-center ">
                <div class="w-1/4 border border-black flex rounded-2xl bg-slate-200 flex-col ">
                    <p class="mt-5 w-full flex justify-start ml-10">Login</p>
                    <input class="mt-2 justify-start w-5/6 ml-10 rounded-full py-1 px-2 border border-black" type="text"  onInput={e => setLogin(e.target.value)} value={login}/>
                    <p class="mt-5 w-full flex justify-start ml-10">Hasło</p>
                    <input class="mt-2 justify-start w-5/6 ml-10 rounded-full py-1 px-2 border border-black" type="password"  onInput={e => setPass(e.target.value)} value={pass}/>
                    <button class="bg-green-600 mt-6 rounded-full ml-10 w-5/6 py-4 mb-5"><p class="text-white" onClick={log}>Zaloguj się</p></button>
                </div>
            </div>

            <div class="flex flex-row mt-10">
                <div class="w-1/3 "></div>
                <div class="bg-red-500 w-1/3 rounded-full justify-center">
                { bad ? <p class="center text-white size-xl">Nieprawidłowe dane logowania!</p> : null}
                </div>
                
            </div>
        </div>
     );
}
 
export default LogInPanel;