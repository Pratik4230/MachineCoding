import { useState } from "react";
import codingQuestions from "./mockdata";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelection , setMultiSelection ] = useState(false);

  const [multiple , setMultiple] = useState([]);

 

  function handleSelection(currentId) {
    

     if (!multiSelection) {
        setSelected(selected === currentId ? null : currentId);
     } else{
        
        let copyArr = [...multiple]
        let findIndex = copyArr.indexOf(currentId);
   
        if (findIndex === -1) {
           copyArr.push(currentId)
        }else{
           copyArr.splice(findIndex , 1)
        }
   
        setMultiple(copyArr)
     }
   
  }




  return (
    
    <main className="flex border-2 border-black w-6/12 mx-auto">
      {codingQuestions && codingQuestions.length > 0 ? (
       
        <div className="border-2px border-black rounded-lg bg-slate-300 p-5 w-full text-center" >
             <button onClick={ () => setMultiSelection(!multiSelection)}  className="bg-blue-500 rounded-lg p-2 text-white" > {multiSelection ? "Disable " : "Enable "} Multi Selecton</button>
          {codingQuestions.map((dataItem) => (
            <div key={dataItem.id}  className="m-5 bg-slate-50 p-5 text-center  shadow-lg" >
              <section onClick={ () => handleSelection(dataItem.id)  }
               
                  className="shadow-lg cursor-pointer">
                <h1>{dataItem.question}</h1> <span className="p-5" >+</span>
              </section  >


                 {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1 ? (
                     <section  className="flex flex-wrap bg-gray-50" >{dataItem.answer}</section> )
                      : null}

            </div>
          ))}
        </div>
      ) : (
        <div>Data not found</div>
      )}
    </main>
  );
};

export default Accordian;
