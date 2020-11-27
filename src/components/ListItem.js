import React, { useState } from "react";
import "./../styles/App.css";

function ListItem(props) {
    const [editedItem,stEditedItem]=useState(props.item);
    const [editMode,setEditMode]=useState(false);
    const editedItemchanged=(evt)=>{
		seteditedItem(evt.target.value)
    }

    const saveEditedItem=()=>{
        props.editHandler(editedItem, props.idx);
        setEditMode(false);
    }
	return (
        <div className="list">
            {editMode? (
            <>
            <textarea 
            className="editTask" 
            onChange={editedItemChanged} 
            placeholder="Edit Task"
            value={editedItem}
            ></textarea>
            <button 
                className="saveTask" 
                onClick={()=>setEditMode(true)} 
                disabled={editedItem.trim().length===0}>
                save Task
            </button></>
            ): (<>{props.item}
            <button className="edit" onClick={()=>setEditMode(true)}>edit</button>
            <button 
                className="delete" 
                onClick={() => props.deleteHandler(props.idx)}
            >
                delete
            </button>
            </>
            )}
        </div>
	);
}


export default ListItem;