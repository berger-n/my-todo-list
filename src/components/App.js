
import React, { Component } from 'react';
//import logo from './logo.svg';
import { store } from '../index.js' ;
import Draggable from 'react-draggable'; 

// components

//containers
import FicLabel from '../containers/FicLabel';
import UndoRedo from '../containers/UndoRedo';

//reducers
import { changeFichier } from '../actions/' ;

//styles
import './App.less';

//modules
import './eNj0y.module.less';

//jQuery !!
import $ from 'jquery' ;


//function f(n : number) { console.log(n); } // flow ok




// --------------------------------------------------------------------- component
class TodoListApp extends Component
{
   
   constructor(props) 
   {
      super(props)
      //console.log(this);
      this.handleChange = this.handleChange.bind(this);
      
      
   }
   
   /*
   getInitialState() {
    return {
      activeDrags: 0,
      deltaPosition: {
        x: 0, y: 0
      },
      controlledPosition: {
        x: -400, y: 200
      }
    };
   }*/
   
   
   handleChange = (event) => 
   {
      // User cancelled ?
      if (!event.target.files[0]) { return ; }
      else
      {
         store.dispatch(changeFichier(event.target.files[0]))
      }
      
      //console.log      
      //console.log(event.target.files[0],this);
   };
   
   render() 
   {
      const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    
            //<Draggable cancel="button" {...dragHandlers}>
      return (
         <div className="TodoListApp">   
            <div id="main">
               <div id="fond"/>
               <Draggable handle=".menu" grid={[10, 10]} bounds="parent" {...dragHandlers}>
                  <div className="window alert">
                     <div className="icon"/>
                     <div className="coin"/>
                     <div className="info"/>
                     <div className="coin"/>
                     <div className="menu">Info</div>
                     <div className="coin"/>
                     <div className="scro"/>
                     <div className="coin"/>
                     <div className="content">
                        <p>Hello, World !</p>
                     </div>
                  </div>
               </Draggable>
            </div>
            <div id="icon" className="E">
               <button title="load" onClick={ function() { $("label[for=theFile]").click(); } }>{ 'lo\nad' }</button>
               <input type="file" id="theFile" onChange={ this.handleChange }/>  
               <button title="save" htmlFor="theFile" onClick={ function() { console.log($("label#theFile")) } }>{ 'sa\nve' }</button>
               <hr/>
               <UndoRedo/>
               <hr/>
               <button title="select" >{ 'sel\nect' }</button>
               <button title="cut" >{ 'cu\nt' }</button>
               <button title="copy" >{ 'co\npy' }</button>
               <button title="paste" >{ 'pa\nste'} </button>
               <hr/>
               <button title="fold" >{ 'fo\nld' }</button>
               <button title="unfold" >{ 'unf\nold' }</button>
               <hr/>
            </div>
            <div className="logo"/>
            <div id="info" className="S">
               <FicLabel/>                
            </div>            
            <div className="logo"/>
            <div id="menu" className="N">
               <ul>
                  <li>
                     <span>File</span>
                     <ul>
                        <li>New</li>
                        <li>Load</li>
                        <li>Save</li>                     
                     </ul>
                  </li>                  
                  <li>
                     <span>Edit</span>
                     <ul>
                        <li>Undo</li>
                        <li>Redo</li>
                        <li>Cut</li>
                        <li>Copy</li>
                        <li>Past</li>                     
                     </ul>
                  </li>
                  <li>
                     <span>View</span>
                     <ul>
                        <li>Fold</li>
                        <li>Unfold</li>                     
                     </ul>
                  </li>
               </ul>
            </div>            
            <div className="logo"/>
            <div id="scro" className="E">
            </div>            
            <div className="logo"/>
         
         </div>
      ); // <FicLabelConnec/>
   };
}

/*
 
                  <li>
                     <span></span>
                     <ul>
                        <li></li>
                        <li></li>                     
                     </ul>
                  </li>
                  <li>
                     <span></span>
                     <ul>
                        <li></li>
                        <li></li>                     
                     </ul>
                  </li>
                  */

export default TodoListApp;

