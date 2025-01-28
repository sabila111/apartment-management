import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

const MemberAnnouncement = () => {
    const announcement = useLoaderData()
    return (
        <div>
            <h2 className='text-4xl text-center text-cyan-800 font-bold pb-10'>All Announcements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-12 ml-24 mx-5 ">
            {
                announcement.map(announcements => <Card key={announcements._id}  announcements={announcements}></Card>)
            }
            </div>
        </div>
    );
};

export default MemberAnnouncement;