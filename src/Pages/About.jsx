import Header from "../Header"
import ProfileCard from "../ProfileCard"
import TextWithHeader from "../TextWithHeader"

function About() {
  return (
  <>
  <Header variant="blue" title="About us" subtitle="Meet the team" />

      <div className="grid grid-cols-2 gap-4">
        <ProfileCard
          cardEmoji="🥰🥰"
          cardHeader="Sara"
          cardSubtitle="President of Ketcham Inc."
          cardBlurb="I am always interested in finding systems to make life run smoother. Am I just procrastinating by iterating? Maybe! But I like to think that we can continue to make our lives easier when we have the right tools to help us save brain power"
        />
        <ProfileCard
          cardEmoji="👶👶"
          cardHeader="Darcie"
          cardSubtitle="Head of making messes"
          cardBlurb="Being that I am not yet 2 years old, things like executive function, impulse control, and general awareness of both body and space are hard for me. But I like hanging out with mama and if she wants to clean I guess I can dump out this bin of socks so she has something to do "
        />
      </div>
        <TextWithHeader
          mySubtitle="Our mission"
          myText="The purpose of this app is to help prioritize tasks, and to cut out the unnecessary step of re-creating the wheel i mean todo list every week. The idea behind this app is that enough things repeat to create a kind of routine. However, each day is it's own day, so the previous tasks are still viewable for reference, but you get a clean slate each day to decide what you actually want to do from the options!"
        />
     
  </>
)}

export default About