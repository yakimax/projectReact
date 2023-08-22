import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks : [] ,
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

    handleDelete = (id)=>{
        let narr = this.state.tasks.filter((obj)=>{
            return obj.id !== id ;
        })
        this.setState({
            tasks : [...narr]
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
                        <button onClick={()=>this.handleDelete(Obj.id)}>Delete task</button>
                        </>
                    </li>
                ))
            }
        </ul>
    </>
    )
  }
}
