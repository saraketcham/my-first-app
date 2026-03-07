import './App.css'
import practicePhoto from './assets/vite1.png'
import Card from './Card'
import ProfileCard from './ProfileCard'
import Blockquote from './blockquote'
import TaskCard from './TaskCard'
import BasicText from "./BasicText"
import Header from './Header'
import ProfilePic from './ProfilePic'
import TextWithHeader from './TextWithHeader'
import CreateForm from './CreateForm'

function App() {

  const yourName = "sara";
  const favColor = "floral print";

  const currentYear = 2026;


  return (
    <div>
      <Blockquote quote="making progress and getting better every day" />

      <div className="grid grid-cols-3 gap-4">
        <TaskCard task="do the laundry"></TaskCard>
        <TaskCard task="take out the trash"></TaskCard>
        <TaskCard task="add a new task" />
      </div>

      <BasicText myText="Youve completed 15 task this week!" />

      <hr />

      <Header title="About us" subtitle="Meet the team" />

      <div className="grid grid-cols-2 gap-4">
        <ProfileCard
          cardEmoji="🥰🥰"
          cardHeader="Sara"
          cardSubtitle="President of Ketcham Inc."
          cardBlurb="I like sleeping and eating"
        />
        <ProfileCard
          cardEmoji="👶👶"
          cardHeader="Darcie"
          cardSubtitle="The actual boss"
          cardBlurb="I like dancing and eating waffles"
        />
      </div>
        <TextWithHeader
          mySubtitle="Our mission"
          myText="Our mission statement is to Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio voluptate ea saepe obcaecati eius laudantium pariatur impedit quas iste mollitia tenetur laborum exercitationem doloribus, soluta dicta magni eligendi corrupti!"
        />
     

      <hr />

      <div className="grid grid-cols-2 gap-4">
        <ProfilePic picEmoji="👶" />
        <Header title="My profile" subtitle="The procrasti-cleaner" />
      </div>

      <TextWithHeader
        mySubtitle="my stats"
        myText="10 completed recently! 5 to go"
      />
      <TextWithHeader
        mySubtitle="my goals"
        myText="i want to feel good in my space and feel successful"
      />

      <hr />

      <Header title="Add a task" />
      <CreateForm />
      <TextWithHeader mySubtitle="Or" myText="Revisit an old task" />
      <BasicText myText="click here to filter by category 'BUTTON'" />
      <div className="grid grid-cols-4 gap-4">
        <TaskCard task="do the laundry"></TaskCard>
        <TaskCard task="take out the trash"></TaskCard>
        <TaskCard task="do the laundry"></TaskCard>
        <TaskCard task="take out the trash"></TaskCard>
      </div>
    </div>
  );

}


export default App;
