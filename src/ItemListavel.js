import React from 'react';
import "./ItemListavel.css";

function ItemListavel({title, place, date}){

  return(
    <div className ="batListItem">
        <div className ="batListItemName">{title}</div>
        <div className ="batListItemPlace">{place}</div>
        <div className ="batListItemDate">{date}</div>
    </div>
  );
}

export default ItemListavel;