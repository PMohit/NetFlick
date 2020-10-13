import React, { useEffect, useState } from "react";
import {makeStyles} from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) =>({
    topTop:{
        zIndex:2,
        position:'fixed',
        bottom:'2vh',
        backgroundColor:'#DCDCDC',
        color:'black',
        "&:hover,&.Mui-focusVisible":{
            transition:'0.3s',
            color:'#397BA6',
            backgroundColor:'#DCDCDC',
        },
        right:'6%',
    }
}))

const Scroll = (showBelow ) => {

    const classes=useStyles();

    const [show,setShow]=useState(showBelow ? false : true)
     const handleScroll = ()=>{
         if (window.pageYOffset > showBelow){
             if (!show) setShow(true)
         }else {
            if ( show) setShow(false)
         }
     }
 
    const handleClick =()=>{
        window['scrollTo']({
            top:0,
            behavior:'smooth'
        })
    }
    useEffect(()=>{
        if(showBelow){
            window.addEventListener(`scroll`,handleScroll)
            return ()=>window.removeEventListener(`scroll`,handleScroll)
        }
    })

    return (
        <div>
        {
            show &&
      
        <IconButton onclick={handleClick} className={classes.toTop}>
            <ExpandLessIcon></ExpandLessIcon>
        </IconButton>      
    }   
        </div>
    )
}

export default Scroll;