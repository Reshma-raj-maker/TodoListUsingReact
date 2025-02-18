/* This is a To Do List Application In  which user can enter items /tasks as list . 
entered item is shown as list having checkbox also, when ticks the check box the item is strikesoff, indicating it is done, 
also user can remove the item using a remove icon. 
if user enter an empty item shows a modal having warning..
*/

import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './TodoStyle.css'
function TodoListUsingReact() {
    let [item, setItem] = useState([])
    const [eachItem, setEachItem] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='container Todo-box'>
                <h3 className='header text-center'>ToDo List</h3>
                <div className='Todo-body d-flex'>
                    <input type='text' className='form-control mx-2 mb-4' value={eachItem} placeholder='Enter Item' onChange={(e) => { fetchValue(e) }}></input>
                    <button className='btn btn-primary w-30 btn-style' onClick={(e) => AddToArray(e)}>Add Item</button>
                </div>
                {console.log(item)}
                {item.length !== 0
                    && item.some(val => val.text.trim() !== '') && (
                        <div className='container mt-2 w-75'>
                            <h4 className='text-center head-style'>Your Priorities</h4>
                            <div className='showList'>
                                <ul>

                                    {
                                        item.map((val, ind) => (
                                            <div className='checkbox-btn'>
                                                <div>
                                                    <li key={ind}>
                                                        <input type='checkbox'
                                                            checked={val.isChecked}
                                                            onChange={() => { handleCheck(ind) }}
                                                        />
                                                        <span style={{ textDecoration: val.isChecked ? 'line-through' : 'none' }}>
                                                            {val.text}
                                                        </span>
                                                    </li>
                                                </div>
                                                <div>
                                                    <button className='remove-btn' onClick={() => removeItem(ind)}><i class="bi bi-x"></i></button>
                                                </div>


                                            </div>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                    )}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>No Item!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are not added any item for the list...</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
    function fetchValue(e) {
        setEachItem(e.target.value)
    }
    function AddToArray(e) {
        if (eachItem.trim() === '') {
            handleShow()
            return;
        }
        setItem([...item, { text: eachItem, isChecked: false }])
        console.log(item)
        setEachItem('')
    }
    function removeItem(index) {
        setItem(item.filter((_, i) =>
            i !== index
        ))
    }
    function handleCheck(index) {
        const updatedItem = [...item]
        updatedItem[index].isChecked = !updatedItem[index].isChecked
        setItem(updatedItem)
    }
}

export default TodoListUsingReact