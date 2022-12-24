import React from "react";
import {MdPlayArrow} from "react-icons/md";
import {CiTextAlignJustify} from "react-icons/ci";
import {BsPlusSquare} from "react-icons/bs";
import {BsFillPatchCheckFill} from "react-icons/bs";
import {CiTextAlignJustify} from "react-icons/ci";
export default function Button3() {
  return (
    <div style={{backgroundColor:'white',border:'1px solid rgb(127,0,255)',
   
    borderRadius:'8px',
    boxShadow: '1px 2px 9px gray'}}>
     <button 
onClick={}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:'1px solid white',
   
   borderRadius:'8px',
   boxShadow:''
   }}><div style={{display:'flex'}}><div>Schedule</div></div><div style={{color:'gray'}}><MdPlayArrow/></div></button>
   <br/>
   <div style={{
   display:'flex',
   
   flexdirection:'row-reverse'}}>
   <div style={{width:'10px'}}></div><button 
onClick={}
style={{width:'90%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:'1px solid lightgray',
   
   borderRadius:'20px',
   boxShadow:''
   }}><div style={{display:'flex'}}><CiTextAlignJustify/>&nbsp;&nbsp;<div>Curated Resources</div></div></button></div>
   <br/>
   <div style={{
   display:'flex',
   
   flexdirection:'row-reverse'}}>
   <div style={{width:'10px'}}></div><button 
onClick={}
style={{width:'90%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:'1px solid lightgray',
   
   borderRadius:'20px',
   boxShadow:''
   }}><div style={{display:'flex'}}><CiTextAlignJustify/>&nbsp;&nbsp;<div>Events</div></div></button></div>
   <br/>
   <div style={{
   display:'flex',
   
   flexdirection:'row-reverse'}}>
   <div style={{width:'10px'}}></div>
   <button  style={{width:'90%',height:'55px',
   padding:'18px',
  color:'rgb(127,0,255)',
   backgroundColor:'white',
   border:'2px solid pink',
   borderStyle:'dashed',
   borderRadius:'20px',borderColor:'rgb(127,0,255)'}}><BsPlusSquare/>&nbsp;&nbsp;&nbsp;Add More</button></div>
   <br/>
   <br/>
  
    </div>
  );
}
