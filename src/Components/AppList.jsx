import React from 'react'
import Loader from '../layots/Loader'

class AppList extends React.Component {


    render() {
        return (
          <>
          <h1>AppList</h1>
          {
            this.props.posts.length ? this.props.posts.map((val, idx)=>{
                console.log(val);
                return(
                    <div className='contents' key={val.id}>
                        <h3>{val.title}</h3>
                    </div>
                )
            }): <Loader/>
          }
          </>
        )
    }
}

export default AppList