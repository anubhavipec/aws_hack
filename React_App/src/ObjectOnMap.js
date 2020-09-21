import React,{Component} from 'react'
import GoogleMapReact from 'google-map-react';
class ObjectOnMap extends Component{
    state={lati:''}
componentDidMount(){
    var area=this.props.text
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address='+(area)+'&key=AIzaSyAKgPS3Rc_LneKfgRhk7NE2bR08uvKtNCU').then(
        response=>response.json()).then
        (json=>this.setState({lati:json}));
        if(this.state.lati.results!=='' & this.state.lati.results!==undefined)
        {
          var  l=((this.state.lati.results)[0]).geometry.location
                    console.log("Inside Object On Map",l)
                    this.lat=l.lat
                    this.lng=l.lng

        }
}

    render(){
        
        return( 

            <div style={{color: this.props.temp<20 ?'blue':'Yellow', border: '50px outset '+(this.props.temp<20 ? 'Green':'Red')+'',textAlign: 'center',opacity: '0.5'}}>{this.area}</div>
        )

    }

}

export default ObjectOnMap