import About from "./About";
import Vacation from "./Vacation";


function Vaca(){
    const VacationEl = Vacation.map(schedule => {
        return <About 
        name={schedule.name}
        img={schedule.img}
        feeling={schedule.feeling}
        />
    })

    return (
        <div>
            {VacationEl}
        </div>
    )
}

export default Vaca