import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyAppointments() {
    const {appointments, cancelAppointment} = useContext(AppContext)

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    const handleCancel = (index) => {
        cancelAppointment(index)
        toast.info('Appointment cancelled', {
            position: 'bottom-right',
            autoClose: 3000
        })
    }

    return (
        <div>
            <ToastContainer />
            <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
            <div>
                {appointments.length === 0 ? (
                    <p className='text-gray-500 mt-4'>No appointments booked yet</p>
                ) : (
                    appointments.map((appointment, index) => (
                        <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
                            <div>
                                <img className='w-32 bg-indigo-50' src={appointment.doctor.image} alt="" />
                            </div>
                            <div className='flex-1 text-sm text-zinc-600'>
                                <p className='text-neutral-800 font-semibold'>{appointment.doctor.name}</p>
                                <p>{appointment.doctor.speciality}</p>
                                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                                <p className='text-xs'>{appointment.doctor.address.line1}</p>
                                <p className='text-xs'>{appointment.doctor.address.line2}</p>
                                <p className='text-xs mt-1'>
                                    <span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>
                                    {formatDate(appointment.date)} | {appointment.time}
                                </p>
                            </div>

                            <div className='flex flex-col gap-2 justify-end'>
                                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-[#5f6fff] hover:text-white transition-all duration-300 pointer cursor'>Pay Online</button>
                                <button onClick={() => handleCancel(index)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-[#FB4141] hover:text-white transition-all duration-300 pointer cursor'>Cancel appointment</button>
                                                         </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default MyAppointment;