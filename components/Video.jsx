import React from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
    const [IsVideo, SetIsVideoChange] = useState('https://www.youtube.com/watch?v=7sDY4m8KNLc')

    return (
        <>
            <h1>Video Player..</h1>
            <div className='Main'>
                <div>
                    <ReactPlayer controls url={IsVideo} />
                    <div className='Btn-Play'>
                        <button title='DEMO_THUMBNAIL_1' onClick={() => { SetIsVideoChange('https://www.youtube.com/watch?v=Rq5SEhs9lws') }}></button>
                        <button title='DEMO_THUMBNAIL_2' onClick={() => { SetIsVideoChange('https://www.youtube.com/watch?v=Y-OLcnr8eNo') }}></button>
                        <button title='DEMO_THUMBNAIL_3' onClick={() => { SetIsVideoChange('https://www.youtube.com/watch?v=r6qWEteVMyM') }}></button>
                        <button title='DEMO_THUMBNAIL_4' onClick={() => { SetIsVideoChange('https://www.youtube.com/watch?v=7nafaH9SddU') }}></button>
                        <button title='DEMO_THUMBNAIL_5' onClick={() => { SetIsVideoChange('https://www.youtube.com/watch?v=2jqok-WgelI') }}></button>
                        <button title='DEMO_THUMBNAIL_6' onClick={() => { SetIsVideoChange('https://www.youtube.com/watch?v=7Q17ubqLfaM') }}></button>
                        <button title='DEMO_THUMBNAIL_7' onClick={() => { SetIsVideoChange('https://www.youtube.com/watch?v=Rq5SEhs9lws') }}></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video