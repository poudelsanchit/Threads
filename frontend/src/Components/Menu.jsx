import React, { useState } from 'react'

const Menu = ({ Data }) => {
    const copyUrlLink=()=>{
        const currentUrl= window.location.href;
        navigator.clipboard.writeText(currentUrl).then(()=>{
            console.log('url is copied')
        });

    }
    return (
        <>
            <div className=' h-auto text-light w-40 top-10 right-0  absolute rounded-md bg-[#201f1f]  flex flex-col text-base '>

                {Data.map(({ id, name }) =>
                    <>
                        <div className='h-full flex items-center p-2 hover:bg-[#1e1e1e] rounded-md cursor-pointer' onClick={copyUrlLink}>{name}</div>

                    </>
                )}
            </div></>

    )
}

export default Menu