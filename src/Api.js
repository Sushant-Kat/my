import React, { Component } from "react";

class App extends Component {
    state = {
        data: [],
    };

    componentDidMount(){

        const url = "https://ghibliapi.herokuapp.com/films";
        
        fetch(url)
        .then((result) => result.json())
        .then(result => {
            this.setState ({
                data: result
            })
        });
    }

    render(){
        const {data} = this.state;
        
        const result = data.map((entry, index) => {

            return <li key={index}>{entry.title}</li>
        })

        return <ul>{result}</ul>
    }
}

export default App; 