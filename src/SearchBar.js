import React from "react";
import './style.css'
class SearchBar extends React.Component {
    
    state={ digit: " "}
    
    //metodo che prende i value digitati dall'user e aggiorna lo state
    onEnteredChange = (event) => {
        console.log(event.target.value);
        this.setState( () => {
            return { digit: event.target.value}
        })
    }
    
    onSubmitHandler = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.digit.trim())
    }
    
    
    
    render() {
       
        return (
            <>
                <h3>SearchBar</h3>

                <form onSubmit={this.onSubmitHandler} >
                    <input type="text" value={this.state.digit } onChange={this.onEnteredChange} />
                    <button > Cerca </button>
                </form>
            </>
        )
    }
}

export default SearchBar;