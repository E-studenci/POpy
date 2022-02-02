import { useState } from "react";
import { useNavigate } from "react-router";

const SingInPanel = () => {

    const [login, setLogin] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")

    const [flag, setFlag] = useState(false)
    const [error, setError] = useState("")
    
    let navigate = useNavigate()

    async function createAccount(){

        if(password1 !== password2){
            setFlag(true)
            setError("Wpisane hasła nie są identyczne!")
            return
        }

        var myHeaders = new Headers();
        myHeaders.append('Content-Type',"application/json");

        var body = JSON.stringify({
            login: login,
            password: password1,
            name: name,
            surname: surname,
            email: email,
            role: "Turysta",
            args:{
                is_handicapped: false,
                birth_date: "2000-01-12"
            }
        })


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            credentials: 'include',
            body: body,
            };
            
            let tmp = {}
            await fetch("http://localhost:5000/user", requestOptions) //tutaj do zmiany 
            .then(response => response.text())
            .then(result => tmp = JSON.parse(result)) //ustawić ten syf
            .catch(error => console.log('error', error));

        if(tmp.status !== "success"){
            setFlag(true)
            setError(tmp.error.description)
            return
        }
        else{
            navigate("/log_in")
        }

            



    }


    return ( 
        <div>
            <div class="w-full flex items-center justify-center flex-col mt-20">
                <div class="w-1/2 border border-black flex rounded-2xl bg-slate-200 flex-row">
                    <div class="w-1/2 flex flex-col ml-5">
                        <p class="mt-5 w-full flex justify-start">Login</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="text" value={login} onInput={e => setLogin(e.target.value)}/>
                        <p class="mt-5 w-full flex justify-start">Imię</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="text" value={name} onInput={e => setName(e.target.value)}/>
                        <p class="mt-5 w-full flex justify-start">Nazwisko</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="text" value={surname} onInput={e => setSurname(e.target.value)}/>
                    </div >
                        
                    <div class="w-1/2 flex flex-col ml-5 mr-5">
                        <p class="mt-5 w-full flex justify-start">E-mail</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="text" value={email} onInput={e => setEmail(e.target.value)}/>
                        <p class="mt-5 w-full flex justify-start">Hasło</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="password" value={password1} onInput={e => setPassword1(e.target.value)}/>
                        <p class="mt-5 w-full flex justify-start">Powtórz hasło</p>
                        <input class="mt-2 justify-start rounded-full py-1 px-2 border border-black" type="password" value={password2} onInput={e => setPassword2(e.target.value)}/>
                        <button class="bg-green-600 mt-6 rounded-full ml-10 w-5/6 py-3 mb-5" onClick={createAccount}><p class="text-white">Załóż konto</p></button>
                    </div>

                    
                </div>
            
            </div>

            { flag ? <div class="w-full flex items-center justify-center flex-col mt-10">
                <div class="w-1/4"></div>
                <div class="w-1/2 bg-red-500 rounded">
                <p class="mt-5 mb-5 text-white">{error}</p>
                </div>
            </div> : null }
        </div>
     );
}
 
export default SingInPanel;