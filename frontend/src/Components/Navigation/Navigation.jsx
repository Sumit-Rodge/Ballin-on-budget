import React from 'react'
import avatar from '../../images/avatar.png'
import { menuItems } from '../../Utils/menuItems'
import { signout } from '../../Utils/icons'

export const Navigation = ({active,setActive}) => {

    
  return (
    <div className='navigation py-8 px-6 w-1/5 h-full bg-slate-100 border-2 flex-col rounded-3xl flex justify-between gap-8 items-baseline min-w-80'>
        <div className="user-con h-24 flex items-center gap-4">
            <img src={avatar} alt="avatar" className='object-cover w-20 h-20 rounded-full border-2 border-cyan-100 shadow p-1' />
            <div className="text">
                <h2 className='text-gray-800'>Sumit</h2>
                <p className='text-gray-700'>Your Money</p>
            </div>
        </div>
        <ul className="menu-items flex-1 flex flex-col items-baseline ">
            {menuItems.map((item)=>{
                return <li className={`cursor-pointer flex my-3 font-medium text-gray-600 relative pl-4 items-center ${ active === item.id ? 'active' : "" }`} key={item.id} onClick={()=>{
                    setActive(item.id)
                }}>{item.icon} 
                <span>{item.title}</span>
                </li>
            })}
        </ul>

        <ul className="bottom-nav">
            <li>
                {signout} Sign out
            </li>
        </ul>
    </div>
  )
}
