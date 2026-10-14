import { useState } from "react"

const SearchBar = ({onSearch}) => {
    const [inputCity, setinputCity] = useState('')
      
  return (
    <div> 
    <div className='flex justify-between gap-8 '>
        <input type="text" name="" id="" placeholder='search for city'
        className='rounded-md min-w-1 flex-1 bg-slate-800 px-3 py-2'
        value={inputCity}
        onChange={(e)=>{
            setinputCity(e.target.value)
        }}/>
        {/* flex-1 min-w-0 — lets the input use the remaining space and shrink on smaller screens. */}
      <button className='bg-slate-800 px-5 py-2 rounded-md shrink-0 active:scale-80 transition-transform'
      onClick={()=>{
        if (inputCity.trim() === '') {
            alert("please enter City")
        } else {
            onSearch(inputCity.trim())
        }
      }}
      >Search</button>
    </div> 
    </div>
  )
}

export default SearchBar
