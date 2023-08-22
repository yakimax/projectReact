import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks : [{value : "aalu lena hai",id: 0}] ,
            currTask: "" 
        }
    }
  
    handleChange = (e)=>{
        this.setState({
            currTask : e.target.value 
        })
    }

    handleSubmit = () =>{
        this.setState({
            tasks : [...this.state.tasks,{value : this.state.currTask , id : this.state.tasks.length+1}],
            currTask : "" 
        })
    }

    render() {
    return (
    <>
        <div>Todo List </div>
        <input type="text" value={this.state.currTask} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Add Task</button>
        <ul>
            {
                this.state.tasks.map((Obj)=>(
                    <li key={Obj.id}>
                        <>
                        <p>{Obj.value}</p>
                        <button onChange={this.handleDelete}>Delete task</button>
                        </>
                    </li>
                ))
            }
        </ul>
    </>
    )
  }
}
