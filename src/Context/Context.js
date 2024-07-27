import React  , {createContext, useState} from "react"

const Main = createContext();
 
function MainProvider({children}){

const [Val , SET_Val] = useState({dates : JSON.parse(localStorage.getItem("dates")) ?? ""})

return(
<Main.Provider value={{Val , SET_Val}}>
                {children}
</Main.Provider>
)
}


export {Main , MainProvider}