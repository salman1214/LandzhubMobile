import React, { useState } from 'react'
import LandContext from './LandContext'

const LandState = (props) => {

    const land = []
    // const land = [{
    //     id: 1,
    //     photo: 'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    //     name: 'Salman Land',
    //     price: '3,250,000',
    //     area: '256 Yds 120 M',
    //     address: 'Behria Town, Phase II',
    //     description: 'Great!'
    // },
    // {
    //     id: 2,
    //     photo: 'https://images.unsplash.com/photo-1545912452-8aea7e25a3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    //     name: 'Ali Raza Land',
    //     price: '6,520,000',
    //     area: '526 Yds 230 M',
    //     address: 'Behria Town, Phase XI',
    //     description: 'Nice!'
    // }]

    const forSale = []

    const removeItem = (item) => {
        const index = forSale.findIndex((element) => element === item)
        if(index === -1){
            forSale.splice(index, 1)
        }
    }

    return (
        <LandContext.Provider value={{land, forSale, removeItem}}>
            {props.children}
        </LandContext.Provider>
    )
}

export default LandState