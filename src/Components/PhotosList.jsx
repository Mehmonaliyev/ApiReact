import React from 'react'
import Loader from '../layots/Loader';

class PhotosList extends React.Component {


    render() {
        return (
            <>
           <h1> PhotoList</h1>
            {
            this.props.app.length ? this.props.app.map((val, idx)=>{
                console.log(val);
                return(
                    <div className='contents' key={val.id}>
                        <h3>{val.title}</h3>
                        <img src={val.url} alt="" style={{width:"120px", height:"120px"}} />
                    </div>
                )
            }): <Loader/>
          }
            </>
        )
    }
}

export default PhotosList