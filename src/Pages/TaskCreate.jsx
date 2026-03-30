import Header from "../Header";
import CreateForm from "../CreateForm";
import TaskCard from "../TaskCard";
import TextWithHeader from "../TextWithHeader";
import BasicText from "../BasicText";
import MyButton from "../Button";

import { useState } from "react";


function TaskCreate(){


const [taskName, setTaskName] = useState ("");
const [taskImp, setTaskImp] = useState (false);
const [taskUrg, setTaskUrg] = useState (false);
const [tasks, setTasks] = useState([]);

function handleSubmit (event){
    event.preventDefault();

    const newTask = {
        id: Date.now(),
        name: taskName,
        urg: taskUrg,
        imp: taskImp
    };

    setTasks([...tasks, newTask]);
    setTaskName("");
    setTaskUrg(false);
    setTaskImp(false);
}

    return (
        <>
         <Header title="Add a task" />

         <CreateForm 
         taskName={taskName}
         taskImp={taskImp}
         taskUrg={taskUrg}
         setTaskName = {setTaskName}
         setTaskImp={setTaskImp}
         setTaskUrg={setTaskUrg}
         handleSubmit = {handleSubmit}
          />


        <h2>my tasks</h2>
        <div className="grid grid-cols-3 gap-4">

            {tasks.map((task) =>(
                <TaskCard 
                key={task.id} 
                myTask={task.name} 
                myUrg={task.urg} 
                myImp={task.imp} />
            
     
        ))}
           </div>

 <TextWithHeader mySubtitle="Or" myText="Revisit an old task" />
            <BasicText myText="click here to filter by category" />
               <MyButton myText="filter^" />

        <div className="grid grid-cols-4 gap-4">
            <TaskCard myTask="do the laundry"></TaskCard>
            <TaskCard myTask="take out the trash"></TaskCard>
            <TaskCard myTask="do the laundry"></TaskCard>
            <TaskCard myTask="take out the trash"></TaskCard>
      </div>
      
      </>
    )
};

export default TaskCreate;