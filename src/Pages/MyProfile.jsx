import Darcie from "../assets/darcie.png"
import ProfilePic from "../ProfilePic"
import Header from "../Header"
import TextWithHeader from "../TextWithHeader"
import MyButton from "../Button"

function Profile() {
  return (
  <>
    <div className="grid grid-cols-2 gap-4">
        <ProfilePic myPic={Darcie} />
        <Header title="My profile" subtitle="The procrasti-cleaner" />
      </div>

      <TextWithHeader 
        mySubtitle="My stats"
        myText="Success looks like... "
      />
      <ul className="border rounded ">
        <li> 5 tasks completed today</li>
        <li> 10 tasks completed this week</li>
        <li> 3 recurring tasks already done</li>
      </ul>

      <TextWithHeader
        mySubtitle="my goals"
        myText="i want to feel good in my space and feel successful" />

      <MyButton myText="customize your profile!" />
   
    
  </>
)}

export default Profile