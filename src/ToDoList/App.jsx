import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleHalfStroke, faCoffee, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Step = ({el, index, setDone, removeStep, editStep}) => {
  return (
    <tr className={`${el.done ? 'done' : ''}`}>
      <th scope="row">{index + 1}</th>
      <td>{el.title}</td>
      <td>{el.content}</td>
      <td>
        <button onClick={() => setDone(index)} type="button" className={`btn ${el.done ? 'btn-info' : 'btn-secondary'}`}>
          <FontAwesomeIcon icon={faCheck}/>
        </button>
      </td>
      <td>
        <button onClick={()=>editStep(index)} type="button" className={"btn btn-secondary"}>
          <FontAwesomeIcon icon={faPenToSquare}/>
        </button>
      </td>
      <td>
        <button onClick={()=>removeStep(index)} type="button" className={"btn btn-warning"}>
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </td>
    </tr>
  );
}

const App = () => {

  const [steps, setSteps] = useState([
    {done: 0, title: "Określenie celu lub zadania", content: "Jasne zdefiniowanie celu, który chcesz osiągnąć lub zadania, które chcesz zrealizować." },
    {done: 0, title: "Rozbicie zadania na mniejsze  steps", content: "Podzielenie głównego zadania na mniejsze etapy lub czynności, które ułatwią jego realizację." },
    {done: 0, title: "Zapewnienie niezbędnych zasobów i informacji", content: "Upewnienie się, że masz wszystkie niezbędne narzędzia, wiedzę i zasoby, aby wykonać zadanie." },
    {done: 0, title: "Rozpoczęcie wkonywania", content: "Rozpoczęcie pracy od pierwszego etapu zgodnie z zaplanowanym działaniem." },
    {done: 0, title: "Kontynuacja wykonywania kolejnych etapów", content: "Wykonywanie kolejnych etapów zgodnie z planem, aby zbliżyć się do osiągnięcia celu." },
    {done: 0, title: "Monitorowanie postępów i dostosowywanie planu", content: "Regularne sprawdzanie postępów i ewentualne dostosowywanie planu w razie potrzeby, aby utrzymać skuteczność." },
    {done: 0, title: "Analiza wyników i wprowadzanie poprawek", content: "Po zakończeniu wszystkich kroków, ocena wyników i wprowadzenie ewentualnych korekt, aby poprawić efektywność w przyszłości." }
  ]);

  const setDone = (index) => {
    setSteps(prevSteps => {
      const updatedSteps = [...prevSteps];
      updatedSteps[index] = {...updatedSteps[index], done: !updatedSteps[index].done};
      return updatedSteps;
    });
  }
  const removeStep = (index) => {
    setSteps(prevSteps => {
      const updatedSteps = [...prevSteps];
      updatedSteps.splice(index, 1);
      return updatedSteps;
    });
  };
  const addStep = (title, content) => {
    setSteps(prevSteps => [
      ...prevSteps,
      { done: 0, title: title, content: content }
    ]);
    
    setTitleValue('');
    setContentValue('');
  };

  const [titleValue, setTitleValue] = useState('');
  const [contentValue, setContentValue] = useState('');

  const [edit, setEdit] = useState(0);
  
  
  const editStep = (index) =>{
    setEdit(index+1);
    setTitleValue(steps[index].title);
    setContentValue(steps[index].content);
  }

  const [dark, setDark] = useState(0);

  const updateStepValues = (index, newTitle, newContent) => {
    setEdit(0);
    setTitleValue('');
    setContentValue('');

    setSteps(prevSteps => {
      const updatedSteps = [...prevSteps];
      if (index >= 0 && index < updatedSteps.length) {
        updatedSteps[index] = {
          ...updatedSteps[index],
          title: newTitle,
          content: newContent
        };
      }
      return updatedSteps;
    });
  };

  
  const Darken = () => {
    setDark(!dark);
  };

  const Close = ({dark, toDo}) =>{
    return(
      <div onClick={toDo} className={`close stepIcon d-flex justify-content-center align-items-center h2 ${dark? 'active' : ''}`}><FontAwesomeIcon icon={faCircleHalfStroke}/></div>
    );
  } 

  return (
    <div className={`app ${dark? "dark" : ""}`}>
      <Close dark={dark} toDo={Darken}/>
      <header className={`d-flex justify-content-center align-items-center py-2 app-header ${dark? "light" : "dark"} `}>
        <h1>ToDo List</h1>
      </header>
      <div className="container-md">
        <div className='d-flex justify-content-center align-items-center mt-4'>
          <div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Tytuł" aria-label="title" aria-describedby="button-addon2" value={titleValue} onChange={(e)=>setTitleValue(e.target.value)}/>
              <input type="text" className="form-control" placeholder="Treść" aria-label="content" aria-describedby="button-addon2" value={contentValue} onChange={(e)=>setContentValue(e.target.value)}/>
              {edit? 
              <button className={`btn ${dark? "btn-outline-light" : "btn-outline-secondary"}`} type="button" id="button-addon2" onClick={()=>updateStepValues(edit-1, titleValue, contentValue)}>Zapisz</button>:
              <button className={`btn ${dark? "btn-outline-light" : "btn-outline-secondary"}`} type="button" id="button-addon2" onClick={()=>addStep(titleValue, contentValue)}>Dodaj</button>}
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center mt-4'>
          <table className={`table align-middle ${dark? "dark" : ""} `}>
            <thead>
              <tr>
                <th className='tableIndex' scope="col"></th>
                <th scope="col">Tytuł</th>
                <th scope="col">Treść</th>
                <th className='tableButton' scope="col"></th>
                <th className='tableButton' scope="col"></th>
                <th className='tableButton' scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {steps.map((item, index) => (
                <Step key={index} index={index} el={item} setDone={setDone} removeStep={removeStep} editStep={editStep}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;