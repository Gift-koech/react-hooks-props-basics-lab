import React from 'react'
import user from '../data/user'
const Links = (props) => {
    props = user;
    console.log(props);
    return (
        
        <>
            <h3>Links</h3>
            <a href={props.Links.github}>{props.Links.github}</a>
             <a href={props.Links.Linkedin}>{props.Links.linkedin}</a>
            
        </>
 )};
export default Links;