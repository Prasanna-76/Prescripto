import { createContext, useState } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext()

const AppcontextProvider = (props) => {
    
    const currencySymbol = '₹'
    const [appointments, setAppointments] = useState([])
    
    const addAppointment = (appointment) => {
        setAppointments(prev => [...prev, appointment])
    }

    const cancelAppointment = (index) => {
        setAppointments(prev => prev.filter((_, i) => i !== index))
    }
    
    const value = {
        doctors,
        currencySymbol,
        appointments,
        addAppointment,
        cancelAppointment
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppcontextProvider