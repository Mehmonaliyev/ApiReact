import React from 'react'
import Loader from '../layots/Loader';

class CommentList extends React.Component {


    render() {
        return (
            <>
                          <h1>CommentList</h1>
            
            {
            this.props.comment.length ? this.props.comment.map((val, idx)=>{
                return(
                    <div className='contents' key={val.id}>
                        <h3>{val.body}</h3>
                        {/* <h4>{val.email}</h4> */}
                        <h3>{val.id}</h3>
                    </div>
                )
            }): <Loader/>
          }
            </>
        )
    }
}

export default CommentList