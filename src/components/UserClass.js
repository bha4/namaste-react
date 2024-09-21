import React from "react";
class UserClass extends React.Component {
    
    constructor(){
        super()
        this.state = {
          user: {
            name: "Bhasha",
            location: "erode",
            avatar_url: "",
          },
        };
    }   
    async componentDidMount(){
       const api=await fetch("https://api.github.com/users/bha4");
       const json =await api.json();
          this.setState({
            user :json,
          })
    } 
    
    render(){
    const { name, location, avatar_url } = this.state.user;
    return (
      <div>
        <img src={avatar_url} height="200" width="200"></img>
        <h1>name: {name}</h1>
        <h1>Location: {location}</h1>
      </div>
    );
    } 
}
export default UserClass;