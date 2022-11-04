import React from 'react'
import Loader from '../layots/Loader';

class TodosList extends React.Component {
   

    render() {
        return (
            <>
            <h1>TodoList</h1>
                  {
            this.props.dd.length ? this.props.dd.map((val, idx)=>{
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

export default TodosList