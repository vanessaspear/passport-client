// Generate a list of trip notes added by the user

import { useState, useEffect } from "react"
import { getPackingListByTrip, addItem, deleteItem, getItem, updateItem } from "../managers/PackingListManager"

export const PackingList = ({ tripId }) => {

    const [packingList, setPackingList] = useState([])
    const [newItem, setNewItem] = useState("")

    useEffect(
        () => {
            getPackingListByTrip(tripId)
            .then( packingListArray => {
                setPackingList(packingListArray)
            })
        },
        []
    ) 

    async function updateCurrentItem (evt) {
        let item = await getItem(parseInt(evt.target.id))
        item["packed"] = !(item.packed)
        await updateItem(item.id, item)
    }

    async function createNewItem () {
        
        const itemToPost = {
            trip_id: tripId,
            item: newItem,
            packed: false
        }

        setNewItem("")

        await addItem(itemToPost)

        await getPackingListByTrip(tripId)
                .then( packingListArray => {
                    setPackingList(packingListArray)
                })
    }

    async function deleteCurrentItem(event) {
        await deleteItem(parseInt(event.target.id))

        await getPackingListByTrip(tripId)
            .then( packingListArray => {
                setPackingList(packingListArray)
            })
    }

    return <>
    <div className='container tripDetails--item'>
        <div className='row'>
            <h5 style={{textAlign: 'center'}}>Packing List</h5>
        </div>
        <div className="row col-11 mx-auto my-2 form-group">
            <textarea className="form-control" rows="4" name="item" value={newItem} onChange={(evt) => setNewItem(evt.target.value)}/>
        </div>
        <div className='row col-6 mx-auto my-2'>
            <button type="button" className="btn btn-primary my-2" onClick={createNewItem}
            >Add Item</button>
        </div>
            <div className="card my-5 mx-5">
                <ul className="list-group list-group-flush">
                    {
                        packingList.map( item => (
                            <div className='row' key={`item--${item.id}`}>
                                <li className="list-group-item">

                                    <input type="checkbox" name={item.item} id={item.id}
                                        defaultChecked={item.packed}
                                        onClick={(evt) =>  updateCurrentItem(evt)} />
                                    <label htmlFor={item.item}>{item?.item}</label><br/>

                                <button type="button" style={{float: "right"}} id={item.id} className="btn btn-primary btn-sm" onClick={(event) => 
                                    {deleteCurrentItem(event)}}
                                >Delete</button>
                                </li>
                            </div>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    </>
}