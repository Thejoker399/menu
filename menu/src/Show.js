import React, { Component } from 'react';

class Show extends Component {
    render() {
        return (
            <div>
                  <ul>
          
          {
          this.props.list.map((value, index) => <li key={`menu-${index}`}> {value.name}{value.price} <button onClick={() =>this.props.deleteMenu(index)}> ลบ </button></li>)

          }
      </ul>
            </div>
        );
    }
}

export default Show;