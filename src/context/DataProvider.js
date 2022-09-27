import { createContext, useState } from "react";


import React from "react";
const DataContext = createContext({});


export const DataProvider = ({children}) => {
    const [slotData,setSlotData] = useState([]);
    return(
        <DataContext.Provider value={{slotData, setSlotData}}>
            {children}
        </DataContext.Provider>
    )
}



export default DataContext;
