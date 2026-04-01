function MyList (props){

    return (
<>
<div className="m-6 p-3 border">
        <h1 className=" text-3xl font-bold ">{props.title}</h1>
        <ul className=" text-l" >
            <li>{props.thing1}</li>
            <li>{props.thing2}</li>
            <li>{props.thing3}</li>

        </ul>
        </div>
</>
    )
}

export default MyList;

