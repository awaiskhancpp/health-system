import React from 'react'
import { InfoButton } from '@repo/ui/infoButton';
import { Input } from '@repo/ui/input';
import { Modal } from '@repo/ui/modal';
export const RequestAppointment=()=>{
    return (
        <>
            <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Request Appointment</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium">Doctor's Name</label>
                        <Input type="text" placeholder='' value={""} onChange={(e)=>{console.log(e.target.value)}} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium">Date</label>
                        <Input type="text" placeholder='DD-MM-YYYY' value={""} onChange={(e)=>{console.log(e.target.value)}} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium">Reason for Appointment</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                      </div>
                      <InfoButton onClick={()=>console.log('hel')} >Submit Request</InfoButton>
                    </form>
              </div>
        </>
    )
}
