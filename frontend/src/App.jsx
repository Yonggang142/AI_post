import { useState } from 'react'
import './App.css'
import Popup from './Components/Popup.jsx'
import Card from './Components/Card.jsx'



function App() {
  const [count, setCount] = useState(0)
  const [uploadOpen, setUploadOpen] = useState(false)
  const [fileInfoArr, setFileInfoArr] = useState([])
  const [filterLikes, setFilterLikes] = useState(false)

  let arr_to_display = []

  function add_likes(targetid) {

    const updated_arr = fileInfoArr.map((item, index) => {
      if (item.id == targetid) {
        return {...item, likes: item.likes + 1}
      } else {
        return item
      }
    })
    
    setFileInfoArr(updated_arr)
  }

  if (filterLikes) {
    arr_to_display = [...fileInfoArr].sort((a, b) => b.likes - a.likes)
  } else {
    arr_to_display = fileInfoArr;
  }

  return (
    <>
      <div>
        <div> NavBar </div>
        <button onClick={() => setUploadOpen(!uploadOpen)}> Upload </button>
        <button onClick={() => setFilterLikes(!filterLikes)}> {filterLikes ? "Filter by recency" : "Filter by likes"}</button>


        
        {uploadOpen && (
          <Popup 
            setUploadOpen={setUploadOpen} 
            setFileInfoArr={setFileInfoArr}
            fileInfoArr={fileInfoArr}>
          </Popup>
        )}
        

        <div className='grid'>
            {arr_to_display.map((item, index) => (
            <Card key={item.id} item={item} add_likes={() => add_likes(item.id)}/>
            ))}
        </div>
          
        
        


        
        
      </div>
    </>
  )
}

export default App
