import React from 'react';
import { Waveform } from '@uiball/loaders'

function Pageloader() {
    return (
        <div className='bg-black bg-opacity-30   absolute h-full w-full top-0 text-white flex justify-center items-center  z-20'>
            <div>
                <Waveform
                    size={50}
                    lineWeight={3.5}
                    speed={1}
                    color="white"
                />
            </div>
        </div>
    )
}

export default Pageloader