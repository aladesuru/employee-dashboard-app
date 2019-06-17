import React , {Component} from 'react';
import employee from './EmployeeData.js'

//import components
import HeroArea from './components/HeroArea';
import SideBar from './components/SiderBar';
import EmployeeDetails from './components/EmployeeDetails';


class App extends Component{
 state = {
   data: employee,
   selectedEmp: {
  name: "Vito Corleone",
  popularity: 5,
  biography: "Vito Andolini's story starts in Corleone, Sicily. In 1901, the local mafia chieftain, Don Ciccio, murders Vito's father Antonio when he refuses to pay him tribute. Paolo, Vito's older brother, swears revenge, but Ciccio's men kill him too. Ciccio then sends his men to fetch nine-year old Vito. However, Vito's mother insists on going as well and begs Ciccio to spare Vito. Ciccio refuses, reasoning the boy will seek revenge as a grown man. Upon Ciccio's refusal, Vito's mother holds a knife to Ciccio's throat, allowing her son to escape while Ciccio's men kill her. Family friends smuggle Vito out of Sicily, putting him on a ship with immigrants traveling to America. Ellis Island immigration officials rename him Vito Corleone, using his village for his surname. He later uses Andolini as his middle name in acknowledgement of his family heritage.",
  image: "Vito Corleone.jpg",
  colleagues: ["Carlo Rizzi", "Luci Mancini"],
  id: 0
    },
 }
handleOnClickEmp = (employee) => {
this.state.data.filter((match , index) => {
    if(employee === match.name){
      return (
        this.setState({
         selectedEmp: {
           name: match.name,
           popularity: match.popularity,
           biography: match.biography,
           image: match.image,
           colleagues: [match.colleagues[0] , match.colleagues[1]],
           id: index
         }
        })
      )
    }
  })
};

  render(){
    return (
      <div className="app-container">
       <HeroArea />
       <SideBar employee={this.state.data} selectEmp={this.handleOnClickEmp}/>
       <EmployeeDetails selectedEmp={this.state.selectedEmp}/>
      </div>
    );
  }
}

export default App;
