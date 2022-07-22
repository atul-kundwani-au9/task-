import React from "react";
import './App.css';
import UserDetails from "./UsersDetails";


class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            users: [],
            DataisLoaded: false,
        };
        
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    users: json,
                    DataisLoaded: true
                });
            })
    }        
    
    clickMe(userDetails){
      console.log(userDetails);
       
    }
    render() {
        const { DataisLoaded, users } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> USERS LIST </h1>  {
                users.map((user, index) => ( 
                <ol key = { user.id } >
                    <h3 onClick={this.clickMe.bind(this, user)} > 
                      {user.profile.firstName}   {user.profile.lastName}
                    </h3> 
                    <p>
                      Job Title: {user.jobTitle}
                    </p>
                    <p>
                      Email: {user.profile.email}
                    </p>
                    
                    </ol>
                ))
            }
        <UserDetails  />
            
        </div>
        
        
    );

    
}
}


   
export default App;




