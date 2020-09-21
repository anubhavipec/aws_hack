import React,{Component} from 'react'
import MapComponent from './MapComponent';

class BasePage extends Component{
    state={locations:{},locg:[]}
    static xy
    componentDidMount(){
      
            fetch('https://lzf9tn3ww9.execute-api.us-east-1.amazonaws.com/Dev').then(
                response=>response.json()).then
                (json=>this.setState({locations:json.body}));
            console.log('Locations1',this.state.locations)

           /* fetch('https://maps.googleapis.com/maps/api/geocode/json?address=Rave 3,Kanpur&key=AIzaSyAKgPS3Rc_LneKfgRhk7NE2bR08uvKtNCU').then(
                response=>response.json()).then
                (json=>this.state.locg=json);
                */
                
          /*  if(this.state.locations!==undefined & this.state.locations!==''){
                this.callingGoogleApi('Rave 3,Kanpur')
            }
*/
    }
   
  /*  callingGoogleApi(area){
            console.log('Area',area)
            var xy1
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+(area)+'&key=AIzaSyAKgPS3Rc_LneKfgRhk7NE2bR08uvKtNCU').then(
            response=>response.json()).then
            (json=>xy1=json);
            console.log('line 31',this.xy1)
            if(((xy1))!==undefined & xy1!=='')
            {
                
                this.xy=(xy1).results[0].geometry.location
                console.log((this.xy).results[0].geometry.location)
            }

            return this.xy


         

    }*/

    render(){
        
        console.log('Locations',(this.state.locations))
        
        
       const lo=this.state.locations
       
        
        return(
            <div>
            <h1>Data Sent</h1>
            <MapComponent finloc={lo}/>
                           </div>
        )
    }





}

export default BasePage;