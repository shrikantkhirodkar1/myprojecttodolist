import React, { useState } from 'react'

function List() {
    const[activity,setactivity]=useState("")
    const [listdata,setlistdata]=useState([])
    function addactivity(){
        setlistdata((listdata)=>{
            const updatelist=[...listdata,activity]
            console.log(updatelist)
            setactivity("")
            return updatelist
        })
    }
    function removeactivity(i){
      const updatelistdata=listdata.filter((element,id)=>{
        return i!=id
      })
      setlistdata(updatelistdata)
    }
    function removeall(){
        setlistdata([])
    }
  return (
    <div>
    <div>to do list</div>
    <input type='text' placeholder='add activity' value={activity} onChange={(e)=>{setactivity(e.target.value)}}></input>
    <button onClick={addactivity}>add</button>
    <p>here is your list :{"):"}</p>
    {listdata!=[] && listdata.map((data,i)=>{
        return(
            <>
            <p key={i}>
            <div>{data}</div>
            <div>
            <button onClick={()=>removeactivity(i)}>remove-</button>
            </div>
            </p>
            </>
        )
    })}
    {listdata.length>=1 &&  <button  onClick={removeall}>remove all</button>}
    
    </div>
  )
}

export default List