import { useContext, useEffect, useState } from "react";
import Cont from "./components/Cont";
import { Main } from "./Context/Context";
import Panel from "./components/Panel";
import Modal from "./components/Modal";


function App() {
  let {Val , SET_Val} = useContext(Main)


const [AllDates , SET_AllDates]  = useState(Val.dates)
const [isModal , SETisModal ] = useState(false)
const [Modal_Head , SET_Modal_Head ] = useState("")
const [Modal_Body , SET_Modal_Body] = useState("")
const [Modal_B1 , SET_Modal_B1 ]= useState("")
const [Modal_B2 , SET_Modal_B2 ]= useState("")


useEffect(()=>{} , [AllDates])

function ModalBody(){
 
if(Modal_Body === "rm_all"){
return(<p className="text-lg text-red-500 text-left">Are You Sure ? You Will Delete All Your Dates</p>)
}else if(Modal_Body === "new"){

return(
<div className="flex flex-col justify-evenly w-full h-full items-center">
  <div className="mt-3 flex justify-evenly items-center w-48">
    <label>ID : </label>
    <input className="w-36 h-10 border-2 opacity-25 pl-2 border-black " type="text"  disabled value={AllDates.length} />
  </div>

  <div className="mt-3 flex justify-evenly items-center w-48">
    <label>Title :</label>
    <input className="w-36 h-10 border-2 pl-2 border-gray-500 " type="text"  placeholder="Title"   />
  </div>

    <div className="mt-3 flex justify-evenly items-center w-48">
    <label>Date : </label>
    <input className="w-36 h-10 border-2 border-gray-500" type="date" />
  </div>

  <div className="mt-3 flex justify-evenly items-center w-48 mb-3">
    <label>Time : </label>
    <input className="w-36 h-10 border-2 border-gray-500" type="time"/>
  </div>
</div>
)

}
else{return(<p className="text-lg text-green-500 text-left">{Modal_Body}</p>)}
}



function RemoveAll(){
  SET_Modal_B1("Yes" )
  SET_Modal_B2("No")
  SET_Modal_Body("rm_all")
  SET_Modal_Head("Remove All")  
  SETisModal(true)
}

function NewDate(){
  SET_Modal_B1("Save")
  SET_Modal_B2("Close")
  SET_Modal_Body("new")
  SET_Modal_Head("New Date")  
  SETisModal(true)
}


function B1F_OP(){
  if(Modal_Body === "rm_all"){
    localStorage.removeItem("dates")
    SET_Modal_B1("Save")
    SET_Modal_B2("Close")
    SET_Modal_Body("Deleted Succssefully !")
    SET_Modal_Head("Remove All")  
    SETisModal(true)
    SET_AllDates([])
}
  else if(Modal_Body === "new"){
      SET_Modal_B1("Save")
      SET_Modal_B2("Close")
      SET_Modal_Body("Added Succssefully !")
      SET_Modal_Head("New Date")  
      SETisModal(true)
  }
  else{SETisModal(false)}
}

  return (
    <div className="App">
        <p className="w-9/12 text-left text-sm font-bold text-white h-fit mt-12">You have {AllDates.length} Dates</p>
        <Cont />
        <Panel del={()=>{RemoveAll()}} New={()=>{NewDate()}}/>
        <Modal show={isModal} head={Modal_Head}  body={<ModalBody/>}  b1={Modal_B1} b2={Modal_B2} b2f={()=>{SETisModal(false)}} b1f={B1F_OP}/>
    </div>
  );

}
export default App
