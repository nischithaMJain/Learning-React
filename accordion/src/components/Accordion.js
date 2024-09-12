import { useState } from "react";
import projectDetails from "./data";
import './Accordion.scss';
const Accordion = () =>{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <h1> hello</h1>
            {projectDetails.map((data)=> <>
            <div className={`accordion-container-${data.id}`}>
                <div className={`accordion-title-${data.id}`}>
                <p>{data.company}<button onClick={()=>setIsOpen(!isOpen)}>+</button></p>
                </div>
                <div className={`accorion-description-${data.id}`}>{data.description}</div>
            </div>
            </>)}
            
        </>
    )
}
export default Accordion;