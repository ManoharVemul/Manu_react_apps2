

import axios from 'axios'
import React, { Component } from 'react'
import './card.css'
import ImageComponent from '../ImageComponent'

export default class UserData extends Component {
    state = {
        arr: []
    }
    handeler = async () => {
        try {
            const d = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(d.data);
            this.setState({
                arr: d.data

            })
        } catch (error) {
            console.log(error)
        }
    }

    image=[
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg'
      ]

    render() {
        return (
        <>
            <button onClick={this.handeler}>click</button>
            <h2>ALUMNI COLLEGE OF ARTS</h2>
            < div className='user'>
               
                {this.state.arr.map((each, index) => {
                    return (
                        <div key={each.id} className='card'>
                            <p>name : {each.name}</p>
                            <ImageComponent path={this.image[index]}/>
                            <p> username : {each.username}</p>
                            <p> email :  {each.email}</p>
                            <h3>address : </h3>
                            <p>  suite : {each.address.street}</p>
                            <p> suite : {each.address.suite}</p>
                            <p> city : {each.address.city}</p>
                            <p>zipcode : {each.address.zipcode}</p>
                            <p> phone : {each.phone}</p>
                            <p> website : {each.website}</p>
                            <h3> company : </h3>
                            <p> company name : {each.company.name}</p>
                            <p> company catchphrase : {each.company.catchphrase}</p>
                            <p> company bs : {each.company.bs}</p>

                        </div>
                    )
                })}
            </div>
        
        </>)
    }
}

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }