import React, {useState, useEffect} from 'react'

import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {originalItems} from "../data/data";

import ace from '../assets/images/ace.jpg'
import belt from '../assets/images/belt.jpg'
import boxer from '../assets/images/boxer.jpg'
import dumbbell from '../assets/images/dumbbell.jpg'
import greengloves from '../assets/images/greengloves.jpg'
import jocker from '../assets/images/jocker.jpg'
import king from '../assets/images/king.jpg'
import queen from '../assets/images/queen.jpg'
import redgloves from '../assets/images/redgloves.jpg'
import round from '../assets/images/round.jpg'

const ItemsViewer = () => {

    const [items, setItems] = useState([]);
    const [images, setImages] = useState([]);
    const [showDialog, setShowDialog] = useState(false);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
            setItems(originalItems);
            setImages([ace, belt, boxer, dumbbell, greengloves, jocker, king, queen, redgloves, round]);
        },
       []
    )

    const onDetails = (rowData) => {
        setShowDialog(true);
        setId(rowData.id);
        setName(rowData.name);
        setColor(rowData.color);
    }

    const onDelete = (rowData) => {

        let newItems = items.filter(item => item.id !== rowData.id);
        setItems(newItems);

        let newImages = images.filter(item => item.name !== rowData.name);
        setImages(newImages);
    }

    const actions = (rowData) => {

        return <div>
            <Button type="button" icon="pi pi-search"
                    style={{backgroundColor: 'green'}}
                    onClick={() => onDetails(rowData)}
            >
            </Button>

            <Button type="button" icon="pi pi-trash"
                    style={{backgroundColor: 'red'}}
                    onClick={() => onDelete(rowData)}>
            </Button>
        </div>;
    }

    const onHide = () => {
        setShowDialog(false);
    }

    return(
        <div>
            <DataTable value={items}>
                <Column field="id" header="id"/>
                <Column field="name" header="name"/>
                <Column field="color" header="color" sortable={true}/>
                <Column body={actions}/>
            </DataTable>
           <Dialog visible={showDialog} modal={true} onHide={onHide}>
                <h3>name {name}</h3>
                <h3>color {color}</h3>
                <img src={images[id - 1]}/>
            </Dialog>
        </div>
    )
}

export default ItemsViewer;