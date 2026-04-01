import Darcie from "../assets/darcie.png"
import ProfilePic from "../ProfilePic"
import Header from "../Header"
import TextWithHeader from "../TextWithHeader"
import MyButton from "../Button"
import MyList from "../MyList"

function Profile() {
  return (
  <>
    <div className="grid grid-cols-2 gap-4">
        <ProfilePic myPic={Darcie} />
    
        <div>
         <Header title="My profile" subtitle="The procrasti-cleaner" />
         <MyList 
        title="My stats"
        thing1 = "5 tasks completed today"
        thing2 = "10 tasks completed this week"
        thing3 = " 3 recurring tasks already done"
      />

      </div>

</div>
     
 

      <TextWithHeader
        mySubtitle="my goals"
        myText="i want to feel good in my space and feel successful" />

      <MyButton myText="customize your profile!" />
   
    
  </>
)}

export default Profile