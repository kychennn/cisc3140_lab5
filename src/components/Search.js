import React from "react"

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [{}],
            results2: [{}],
            carID: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            carID:event.target.carID.value
        })
        
         fetch('http://localhost:3001/api/car/'+event.target.carID.value)
             .then(response=>{
                 return response.json();
             })
             .then(data =>{
                 this.setState({
                    results: data.data
                 })                
             })
             .catch(error=>{
                 console.log("error",error)
             })
             .
             then(()=>console.log(this.state.results)); 
             
             
        fetch('http://localhost:3001/api/owner/'+event.target.carID.value)
        .then(response=>{
            return response.json();
        })
        .then(data =>{
            this.setState({
            results2: data.data
            })                
        })
        .catch(error=>{
            console.log("error",error)
        })
        .
        then(()=>console.log(this.state.results));  
    }

    render() {
        console.log("render")
        return (
            
            <div> 
                            
                <h1>Search Car and Owner Information</h1>                       
                <form onSubmit={this.handleChange}>
                    <h2> Enter Car ID:</h2>
                    <input type="number" placeholder="Car_ID" name="carID"></input>
                    <input type="submit" placeholder="Search"></input>
                </form>                       
                
                <div>
                    <h2>Car Information</h2>
                <ul>
                <li>Car_ID = {this.state.results.Car_ID}</li>
                <li>Year = {this.state.results.Year}</li> 
                <li>Make = {this.state.results.Make} </li>    
                <li>Model = {this.state.results.Model}</li>
                <li>Judge_ID = {this.state.results.Judge_ID}</li>  
                <li>Judge_Name = {this.state.results.Judge_Name}</li>
                    {/* {this.state.results.map((item,i)=>
                        <li key={i}>
                        Car_ID ={item.Car_ID},
                        Year = {item.Year}, 
                        Make = {item.Make}, 
                        Model = {item.Model},
                        Judge_ID = {item.Judge_ID},
                        Judge_Name = {item.Judge_Name}
                        </li>
                    )} */}
                </ul>
                </div> 

                <div>
                <h2>Owner Information</h2>
                <ul>
                <li>Car_ID = {this.state.results2.Car_ID}</li>
                <li>Year = {this.state.results2.Name}</li> 
                <li>Make = {this.state.results2.Email} </li>    
                </ul>
                </div>                        
            </div>
        );
    }
}
export default Search;









// import React, { Component } from "react";
// import {Link} from "react-router-dom";

// class Search extends Component {
//     state = {
//         data: [{}]
//     };

//     async componentDidMount() {
//     try{
//         const response = await fetch('http://localhost:3001/api/car/'+e)
//         const data = await response.json()
//         console.log(data)
//         this.setState({data: data.data});
//     }catch(err){
//         console.log(err)
//     }
//     }

//   changeCarid = (e) => {
//     this.setState({ carid: e.target.value });
//   };


//   handleSubmit = (e) => {
//     e.preventDefault();
//     let obj = {
//       id: Number(this.state.carid),
//     };
//   };

//   render() {
//     const {data} = this.state
//     return (
//       <div>
//           <h2>Search</h2>
//             <Link to="/">Home</Link>
//             <br></br><br></br><br></br>
            
//           <div>
//             <form onSubmit={this.handleSubmit}>
//                 <label>Car ID:</label>
//                 <input type="text" name="id" onChange={this.changeCarid} value={this.carid}/>
//               <button>Search</button>
//             </form>
//             <br></br>
//             <div>
//             {data.map((item, index) => (
//               <ul key={index}>
//                 <li>Car_ID = {item.Car_ID}</li>
//                 <li>Year = {item.Year}</li>
//                 <li>Make = {item.Make}</li>
//                 <li>Model = {item.Model}</li>
//                 <li>Judge_ID = {item.Judge_ID}</li>
//                 <li>Judge_Name = {item.Judge_Name}</li>    
//               </ul>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Search;