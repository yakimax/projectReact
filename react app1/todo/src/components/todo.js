import React, { Component } from 'react'

export class Todo extends Component {
  
  constructor(){
    super()

    this.state = {
      tasks : [],
      currTask : ""
    }
  }

  handleChange = (e) =>{
    this.setState({
      currTask : e.target.value 
    })
  }

  handleAddtask = () =>{
    this.setState({
      tasks : [...this.state.tasks,{task : this.state.currTask , id : this.state.tasks.length + 1 }],
      currTask : "" 
    })
  }

  handleDelete= (id) =>{
    let narr = this.state.tasks.filter((obj)=>{
      return obj.id !=id ;
    })
    this.setState({
       tasks : [...narr] 
    })
  }

  render() {
    return (
      <div>
         <input type= 'text' value = {this.state.currTask} onChange = {this.handleChange}/>
         <button onClick={this.handleAddtask}>Add task</button>
         <ul>
          {this.state.tasks.map((obj) =>(
            <li>
            <p>{obj.task}</p>
            <p>{obj.id}</p>
            <button onClick={() => {this.handleDelete(obj.id)}} >Delete</button>
            </li>
          ))}
         </ul>
      </div>
    )
  }
}

export default Todo