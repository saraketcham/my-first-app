import Blockquote from "../blockquote"
import TaskCard from "../TaskCard"
import BasicText from "../BasicText"

function Home() {
  return (
  <>
     <Blockquote quote="making progress and getting better every day!!!!!" />

      <div className="grid grid-cols-3 gap-4">
        <TaskCard myTask="do the laundry"></TaskCard>
        <TaskCard myTask="change poopy diaper"></TaskCard>
        <TaskCard myTask="add a new task" />
      </div>

      <BasicText myText="You've completed 15 tasks this week!" />
</>
)}

export default Home