export default function Panel({del , New }){

return(
<div className="flex w-9/12 h-12 justify-between items-center pl-2 pr-2">
    <button className="w-20 h-8 bg-blue-600 hover:bg-blue-800  text-white text-sm font-boldo rounded-md"  onClick={New}>+ New Date</button>
    <button className="w-20 h-8 bg-blue-600 hover:bg-blue-800  text-white text-sm font-boldo rounded-md" onClick={del}>× Delete All</button>
</div>
)
}