import axios from "axios";
import { Component } from "react";
import ImageComponent from "../ImageComponent";
import CustomList from "../customList";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
// https://restcountries.com/v3.1/all

class TableApi extends Component {
  state = {
    recipes: [],
    bul:false
  }
  handler = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/recipes');
      console.log(res)
      this.setState({
        recipes: res.data.recipes,
        bul:true

      }, () => { });
    } catch (error) {
      console.log("huhuhu")
      this.setState({recipes:[]}, () => { });

    } finally {

    }
  }

  render() {
    return (
      <>
        <button onClick={this.handler} >click</button>
        {this.state.bul 
        ?  
          (<Table striped bordered hover >
            <thead  >
                <tr>
                    <th>Name</th>
                    <th>image</th>
                    <th>ingredients</th>
                    <th>instructions</th>
                </tr>
            </thead>
            <tbody>{
          this.state.recipes.map((each) => {
            return (<tr key={each.id}>
              <td>{each.name}</td>
              <td>
                <ImageComponent path={each.image} />
              </td>
              <td>
                <CustomList list={each.ingredients} />
              </td>
              <CustomList list={each.instructions} />
            </tr>)
          })
        }
          </tbody>
        </Table>) 
         : 
         <h1> click here to see dish table  ......</h1>}
      </>
    )
  }
}
export default TableApi