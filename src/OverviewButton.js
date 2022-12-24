import React from "react";
import {MdPlayArrow} from "react-icons/md";
import {CiTextAlignJustify} from "react-icons/ci";
import {BsPlusSquare} from "react-icons/bs";
import {BsFillPatchCheckFill} from "react-icons/bs";
export default function OverviewButton() {
  return (
    <div>
     <button 
onClick={}
style={{width:'100%',height:'55px',justifyContent:'space-between',
   display:'flex',
   padding:'18px',
   flexdirection:'row-reverse',color:'black',
   backgroundColor:'white',
   border:'1px solid lightgray',
   
   borderRadius:'8px',
   boxShadow:''
   }}><div style={{display:'flex'}}><div>Overview</div></div><div style={{color:'rgb(127,0,255)'}}><MdPlayArrow/></div></button>
    </div>
  );
}
