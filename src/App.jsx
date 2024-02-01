import React, { useState } from 'react'
import Select from './select/Select'


function App() {

const items = ["apple","banana","mango","guava","pineapple","orange","watermelon","lichi","kiwi","jnvjnfdbnfjbnfjbnfjbrnbjfbnfjbnfjbnfjbfnbjfnbfjnbfjbnfjbnfjbnfbjfnbfj"];
const [currItem,setCurrItem] = useState("apple");


  return (
    <>
    <div>
       my fruit {currItem}
    </div>
    <Select items={items} onChange={(val)=>{
        setCurrItem(val);
    }}/>
   
    </>
    
  )
}

export default App
