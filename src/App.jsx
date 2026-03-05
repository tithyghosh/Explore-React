
import { useDebugValue } from 'react';
import './App.css'
// import ToDO from './to-do';
import Actor from './Actor';
import Singer from './Singer';
function App() {
  const actors = ['Nani','Ram Charan', 'Samantha', 'Allu Arjun'];
  const singers = [
    {id: 1, name: 'Shreya Ghosal', song:'Dholna'},
    {id: 2, name: 'Arijit Sing', song:'Ishq'},
    {id: 3, name: 'Anupom', song:'Amake Amar moto thakte dao'}
  ]
  return (
    <>
      
      <h1>React Core Concept</h1>
      {/* Array */}
     {
      actors.map(actor => <Actor actor ={actor}></Actor>)
     }
      {/* Object */}
     {
      singers.map(singer => <Singer singer={singer}></Singer>)
     }
     
     {/* <Student></Student>
     <Person></Person>
     <Developer name='Tithy' tech='JS'></Developer>
     <Developer name='Anwita' tech='Phython'></Developer>
     <Developer name='Rumaisa' tech='Typescript'></Developer>
     <Player name='Pele' goals='150' ></Player>
     <Player name='Ronaldo' goals='120' ></Player>
     <Pronami ocassion='Bijoya' kitnePaysa='2k'></Pronami> */}
    </> 
  )
}
// function Pronami({ocassion, kitnePaysa = 0}){
//   return(
//     <div className='student'>
//       <p>Pronami for: {ocassion}</p>
//       <p>Amount: {kitnePaysa}</p>
//     </div>
//   )
// }
// function Player({name, goals}){
//   return(
//     <div className="student">
//       <h3>Name: {name}</h3>
//       <p>Goals: {goals}</p>
//     </div>
//   )
// }
// // const{name, tech} = {name: 'Tithy' , tech: 'JS'}
// function Developer(props){
//   return(
//     <div style={{
//       border: '2px solid salmon',
//       borderRadius: '20px'
//     }}>
//       <h3>Developer: {props.name}</h3>
//       <p>Technology: {props.tech}</p>
//     </div>
//   )
// }
// function Student(){
//   return(
//     <div className='student'>
//       <p id='' title='tooltip'>Name: Shrabony Ghosh Tithy </p>
//       <p>Dept: CSE</p>
//     </div>

//   )
// }
// function Person (){
//   const name = 'Shrabony Ghosh Tithy'
//   const age = 20;
//   const personStyle = {
//     color: 'red',
//     textAlign: 'left',
//   }
//   return(
//     <p style={personStyle}>My Name is {name} and Now I'm {age} years old. </p>
//   )
// }
// function Sports (){
//   return(
//     <div>
//       <h3>I love badminton</h3>
//       <p>Playing and losing</p>
//     </div>
//   )
// }
export default App
