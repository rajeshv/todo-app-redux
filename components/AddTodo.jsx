import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
   render() {
      return (
         <div>
            <input type = 'text' ref = 'input' />
				
            <button onClick = {(e) => this.handleClick(e)}>
               Add
            </button>
				
         </div>
      )
   }

   handleClick(e) {
      const node = this.refs.input
      const text = node.value.trim()
      if (text.length > 0){
         this.props.onAddClick(text)
         node.value = ''
      }
   }
}