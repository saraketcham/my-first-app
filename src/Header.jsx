function Header({title,subtitle}){


    return (
        <div >
            <div className="m-6 p-3 bg-linear-to-r from-blue-500 via-cyan-500 to-emerald-500 p-3 rounded-xl">   


            <h1 className=" text-4xl font-bold font-serif border shadow-xl mb-2 rounded-xl" > {title}</h1>
            <h3 className=" text-xl font-semi-bold font-serif " > {subtitle}</h3>
            </div>
      
        </div>
    )
};

export default Header;


