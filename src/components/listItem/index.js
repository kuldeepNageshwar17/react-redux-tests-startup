import React from 'react'
import PropTypes from "prop-types"

export default function ListItem({title,desc}) {
    if(!title){
        return null;
    }
    return (
        <div data-test="listItem">
            <h1 data-test="listTitle">{title}</h1>
            <p data-test="listDesc">{desc}</p>
            
        </div>
    )
}
ListItem.propTypes={
    title:PropTypes.string,
    desc:PropTypes.string
}