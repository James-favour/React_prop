function About(props){
    return(
        <div className="prop-main">
            <h2 className="prop-name">{props.name}</h2>
            <img className="prop-image" src ={props.img} />
            <p className="prop-feeling">{props.feeling}</p>
            <hr/>
        </div>
    )
}

export default About