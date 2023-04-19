import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-secondary bg-opacity-25 p-2 my-4'>
            <h4 className='mb-3'>Q-Zone</h4>
            <img className='w-100 mb-3' src={qzone1} alt="" />
            <img className='w-100 mb-3' src={qzone2} alt="" />
            <img className='w-100 mb-3' src={qzone3} alt="" />
        </div>
    );
};

export default QZone;