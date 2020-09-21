import React,{Component} from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text,temp }) => <div style={{color: temp<37.3 ?'blue':'Yellow', border: '25px outset '+(temp<20 ? 'Green':'Red')+'',textAlign: 'center',opacity: '0.5'}}>{text}</div>;
class MapComponent extends Component{
    static defaultProps = {
        center: {
          lat: 26.4812435,
          lng: 80.3001405
        },
        zoom: 11
      };



    render(){
        
        const tagsonmap=this.props.finloc
        if(tagsonmap!==undefined)
        {
            console.log('Finloc',Object.keys(tagsonmap).map(y=>tagsonmap[y].temp))
           console.log(Object.keys(tagsonmap).map(y=>tagsonmap[y]))

           var y= Object.keys(tagsonmap).map(y=>(
            <AnyReactComponent
            lat={tagsonmap[y].lat}
            lng={tagsonmap[y].lang}
            text={tagsonmap[y].location}
            temp={tagsonmap[y].temp}
            />
            ) 
                )

                console.log('asasasas',y)


        }
       
        return(
            <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key:'xxx' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
                {y}
        <AnyReactComponent
            lat={26.4812435}
            lng={80.3001405}
            text="My Marker"
            temp={10}
          />
            </GoogleMapReact>
          </div>
        )
    }



}

export default MapComponent;