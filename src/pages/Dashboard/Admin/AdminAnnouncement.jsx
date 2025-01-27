import React from 'react';
import Swal from 'sweetalert2';

const AdminAnnouncement = () => {


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const addAnnouncement = {title, description}

        fetch('http://localhost:5000/announcement', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(addAnnouncement)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }

            })
            .catch(error => {
                console.error("catch error:", error);
            });

    }

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow mt-12">
            <h2 className="text-4xl font-bold mb-5 text-center text-cyan-800">Make an Announcement</h2>
             <form onSubmit={handleSubmit} className="mb-6">
                <div className="mb-4">
                    <label htmlFor="title" className="block font-medium mb-1">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder='title'
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder='description'
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                    />
                </div>

                <button
                    type="submit"
                    className="btn  text-white bg-gradient-to-r from-cyan-700 to-cyan-500 hover:bg-gradient-to-r from-cyan-700 to-cyan-500"
                >
                    Create Announcement
                </button>
            </form>
        </div>
    );
};

export default AdminAnnouncement;