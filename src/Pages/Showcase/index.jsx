import Notes from "../../components/Notes"
import UserInfo from "../../components/UserInfo"
import Weather from "../../components/Weather"



function Showcase(){
    return(
        <div>
            <h1>Showcase</h1>
            <UserInfo/>
            <Weather/>
            <Notes/>
        </div>
    )
}

export default Showcase