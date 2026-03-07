import './App.css'
import practicePhoto from './assets/vite1.png'
import Card from './Card'
import ProfileCard from './ProfileCard'
import Blockquote from './blockquote'
import TaskCard from './TaskCard'
import BasicText from "./BasicText"
import Header from './Header'

function App() {

  const yourName = "sara";
  const favColor = "floral print";

  const currentYear = 2026;


  return (

    <div>

    <Blockquote quote="making progress and getting better every day"/>

    <div className="grid grid-cols-3 gap-4">
      <TaskCard task="do the laundry"></TaskCard>
      <TaskCard task="take out the trash"></TaskCard>
      <TaskCard task="add a new task" />
    </div>

    <BasicText myText="Youve completed 15 task this week!" />
    
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

    <BasicText myText="Our mission statement is to Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio voluptate ea saepe obcaecati eius laudantium pariatur impedit quas iste mollitia tenetur laborum exercitationem doloribus, soluta dicta magni eligendi corrupti!
" />


<h1 className="text-4xl font-bold text-blue-600
	bg-yellow-100 p-8 rounded-xl">
  Tailwind is working!
</h1>


      <h1 className="bg-white hover:bg-blue-50 text-2xl font-bold border rounded-xl shadow-xl">Hello, React!</h1>

      <h2>My name is {yourName}</h2>

      <p>I’m learning React in {currentYear}.</p>

      <p>My fav color is {favColor}</p>

      <p>This is my first React component!</p>

      <img src={practicePhoto} alt="req" width="100px"/>

    </div>

  );

}


export default App;
