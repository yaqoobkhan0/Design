import Menu from "./Menu";
import Details from "./Details";
const Main = () =>{
    const yellow = "yellow";
    const orange = "orange";
    const green = "green";
    return(
        <div className = "box-shadow">
            
            
            <Menu />
            <br/>
          
            <h3  className="margin-left lft">Active Deposits <spar className= "circles">2</spar> <button className="float-right"><b>+</b></button></h3>
            <Details yl = {yellow} gr = {green}/>
            <br/>
            <br/>
            <br/>
            <h3 className="margin-left lft">Closed Deposits  <spar className= "circles">8</spar></h3>
            <Details yl = {green}  gr ={orange} />
        </div>
    )
}
export default Main;