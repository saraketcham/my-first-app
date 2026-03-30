

function CreateForm({handleSubmit,taskName,setTaskName,taskImp,setTaskImp, taskUrg,setTaskUrg}){
    return (
        <div>
        <div className="flex items-center justify-center">
            <div className="w-80 border p-3 m-6 rounded">




            <form  onSubmit={handleSubmit} className="text-left" >
            <label htmlFor="mytask">Task:  </label>
            <input 
                type="text" 
                value={taskName} 
                id="mytask" 
                name="mytask" 
                className="border border-gray-400 rounded px-2 py-1 bg-white" 
                onChange= {(event) => setTaskName (event.target.value)}
                placeholder="enter a task"/>
            <br/>
            <label htmlFor="isurgent">Is it urgent? </label>
            <input 
                type="checkbox" 
                name="urgent" 
                id="isurgent"
                checked={taskUrg}
                onChange= {(event) => setTaskUrg (event.target.checked)}
                 />
            <br/>
            <label htmlFor="isimportant">Is it important? </label>
            <input 
                type="checkbox" 
                name="important" 
                id="isimportant" 
                checked={taskImp}
                onChange= {(event) => setTaskImp (event.target.checked)}

                />
                <button className="border p-2 m-2 bg-neutral-200" type="submit">Add task</button>
            </form>
            </div>
        </div>
        </div>
)};

export default CreateForm;