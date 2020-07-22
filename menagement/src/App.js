import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '920924',
  'gender': '여자',
  'job': '취준생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '김딸기',
  'birthday': '950454',
  'gender': '중성',
  'job': '토끼'
},{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '김뿌꾸',
  'birthday': '777777',
  'gender': '남자',
  'job': '강아지'
}]
class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c =>{
            return (
              <Customer
                kye={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />)
          })
        }
      </div>
    );
  } 
}
export default App;
