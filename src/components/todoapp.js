import React, { Component } from 'react'
import "./todoapp.css"

export default class todoapp extends Component {
    state = {
        input:"",
        items:[]
    };

    handleChange = (event) =>{
        this.setState({
            input: event.target.value
        });
        

    };   
    storeItems = (event) =>{

        event.preventDefault();
        const {input} = this.state;
        //const allItems =this.state.items;
        //allItems.push(input);
        this.setState({
            //items:allItems
            items:[...this.state.items,input],
            input:""
        })
    }
    deleteItem = key =>{
        const allItems =this.state.items;

        allItems.splice(key,1);

        this.setState({
            items:allItems
        })
    }

    render() {
        const {input,items} = this.state
        console.log(items)
        return (
            <div className="todo-container">
                <h1>Todo App</h1>
                <form action="" onSubmit={this.storeItems}>
                    <input type="text" 
                    value={input}
                    onChange={this.handleChange} placeholder="Enter the list" />
                </form>

                <div className="output">
                    <ul>
                        {
                            items.map((data,index)=>(
                                <li key={index}>{data}<i class="fas fa-trash-alt" onClick={()=> this.deleteItem(index)}></i></li>
                            ))
                        }
                        
                       
                       
                    </ul>
                </div>
                
            </div>
        )
    }
}
