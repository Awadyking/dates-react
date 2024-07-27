import OneDate from "./OneDate"
import { Main } from "../Context/Context";
import { useContext } from "react";

export default function DS(){

let {Val} = useContext(Main)


if(2 === 1){
return(
<table>
<thead className="w-9/12 sticky top-0 h-6 bg-slate-800 text-white text-bold text-lg">
    <tr>
        <td className="w-1/12 border-l-2 border-slate-400 text-center">#ID</td>
        <td className="w-3/12 border-l-2 border-slate-400 text-center">Title</td>
        <td className="w-3/12 border-l-2 border-slate-400 text-center">Date</td>
        <td className="w-2/12 border-l-2 border-slate-400 text-center">Time</td>
    </tr>
</thead>
<tbody>
    {Val.dates.map((i , index)=>{
        return <OneDate title={i.title} id={i.id} key={index} date={i.date} time={i.time}/>
    })}
</tbody>
</table>
)

}else{

return(
<div className="flex w-full h-72 text-center items-center justify-center" >
    <div className="text-2xl font-bold"> No Dates yet !</div>
</div>
)
}





}