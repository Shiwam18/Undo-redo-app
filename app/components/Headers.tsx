import React, { memo } from 'react'


function Headers() {
    return (
     <div className='flex justify-between p-4'>
        <div>S.Yadav</div>
        <div className=''>
            <ul className='flex justify-between gap-4'>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
     </div>   
    )
}

export default memo(Headers)
