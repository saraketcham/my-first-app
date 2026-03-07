function ProfileCard({cardEmoji,cardHeader,cardSubtitle,cardBlurb}){


    return (
        <div className="m-6 border p-3 hover:shadow-xl hover:translate-y-2 hover:bg-emerald-200">
            <span className="text-5xl"> {cardEmoji} </span>
            <div>
            <div 
            className=" inline-block px-3 my-3  font-bold border rounded-3xl shadow-md bg-emerald-400">
            <h1 className="text-2xl" > {cardHeader}</h1>
            <h3 className="text-med"> {cardSubtitle}</h3>  
            </div>
            </div>
            <div className="border border-emerald-200 rounded-3xl p-5">
                
                <p>  {cardBlurb}</p>
   
            </div>
        </div>
    )
}

export default ProfileCard;