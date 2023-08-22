import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks : [{value : "aalu lena hai",id: 0}] ;
            currTask: "" ;
        }
    }
  
    render() {
    return (
    <>
      <div>Todo List </div> <br>
      <input type="text" value={this.state.currTask} onChange={handleChange}></input>
      <button onClick={this.handleSubmit}>Add Task</button><br>
      <ul>
        {
            this.state.tasks.map((Obj)=>(
                <li key={Obj.id}>
                    <p>{Obj.value}</p>
                    <button onChange={this.handleDelete}>Delete task</button>
                </li><br>
            ))
        }
      </ul>
    </>
    )
  }
}
