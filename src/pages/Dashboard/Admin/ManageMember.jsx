import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ManageMembers = () => {
    const [members, setMembers] = useState([]);
    const axiosSecure = useAxiosSecure();
    
    useEffect(() => {
        fetch("https://12-assignment-server-smoky.vercel.app/members")
            .then((res) => res.json())
            .then((data) => setMembers(data));
    }, []);


    // const { data: users = [], refetch } = useQuery({
    //     queryKey: ["user"],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get("/user");
    //         return res.data;
    //     }
    // });

    const handleRemoveMember = (id) => {
        axiosSecure.patch(`/members/${id}`, { role: "user" })
            .then((response) => {
                const data = response.data;
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'You have become a user',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setMembers(members.filter((member) => member._id !== id));
                }
            })
            .catch((error) => {
               
                console.error("Error removing member:", error);
               
            });
    };
    

    // const handleMakeAdmin = (id) => {
    //     fetch(`https://12-assignment-server-smoky.vercel.app/user/admin/${id}`, {
    //         method: "PATCH",
    //         headers: { "Content-Type": "application/json" },
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.modifiedCount > 0) {
    //                 Swal.fire({
    //                     position: "top-end",
    //                     icon: "success",
    //                     title: "User is now an Admin!",
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 });
    
    //                 refetch();
    //             }
    //         });
    // };


    return (
        <div className="p-6 max-w-4xl mx-auto bg-white ">
           <div className="flex justify-evenly my-4">
                <h2 className="text-3xl text-cyan-800 font-bold mt-5 mb-10">All Members</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.length > 0 ? (
                            members.map((member, index) => (
                                <tr key={member._id}>
                                    <td>{index + 1}</td>
                                    <td>{member.userName}</td>
                                    <td>{member.userEmail}</td>
                                    <td>
                                        <button
                                            onClick={() => handleRemoveMember(member._id)}
                                            className="btn text-white bg-gradient-to-r from-cyan-700 to-cyan-500 hover:bg-red-700"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                    
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center p-4">
                                    No Members Found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageMembers;
