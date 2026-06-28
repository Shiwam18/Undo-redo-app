import React, { memo } from 'react'
import Headers from './components/Headers'
import ActionsExe from './components/ActionsExe'



function Page() {

    

    return (
        <div className='container bg-black text-white mx-auto p-4 flex flex-col gap-4'>
            <Headers />
            <div>
                <ActionsExe/>
            </div>
        </div>
    )
}

export default memo(Page)
