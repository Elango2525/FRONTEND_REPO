import axios from "axios";
import react ,{useState}from "react";
import './Main.css'
function Del() {
    const [search,setSearch]=useState("");
    const [idData,setData]=useState([]);
    const searchid=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/deleteDetails/'+search)
            .catch(err=>console.log(err))
        }
    }
  return (
    <div><>
<div class="c">
                <h2 id="dels">Delete Project</h2>
                <div className="search" >
                    <input type="text" className='k' placeholder="Enter Id To Be Deleted"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchid}/>                    
                </div>
                
                 
            </div>      
        </></div>
  )
}

export default Del