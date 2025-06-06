import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const MemberProfile = () => {
    const { user } = useContext(AuthContext);
    const [agreements, setAgreements] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://12-assignment-server-smoky.vercel.app/members/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log("Received data:", data);
                    
                    if (Array.isArray(data)) {
                        setAgreements(data);
                    } else if (data && typeof data === "object") {
                        setAgreements([data]); 
                    } else {
                        setAgreements([]);
                    }
                })
                .catch((error) => console.error("Fetch error:", error));
        }
    }, [user]);
    

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
            <h2 className="text-center text-4xl font-bold my-10">Member Profile</h2>

            <div className="text-center mb-4">
                <img className="h-20 w-20 rounded-full mx-auto" src={user.photoURL || "default-avatar.jpg"} alt="User Avatar" />
                <h3 className="text-xl font-semibold">{user.displayName}</h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">Number: 01734548993</p>
                <p className="text-gray-600">Address: Dhaka,Bangladesh</p>
            </div>

            <h3 className="text-lg font-semibold mb-2">Agreement Details : </h3>
            {agreements.length > 0 ? (
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Agreement Date</th>
                            <th className="border p-2">Floor</th>
                            <th className="border p-2">Block</th>
                            <th className="border p-2">Apartment No</th>
                            <th className="border p-2">Rent (Tk)</th>
                            <th className="border p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agreements.map((agree) => (
                            <tr key={agree._id} className="text-center">
                                <td className="border p-2">{agree.agreementDate}</td>
                                <td className="border p-2">{agree.floor}</td>
                                <td className="border p-2">{agree.block}</td>
                                <td className="border p-2">{agree.apartment_no}</td>
                                <td className="border p-2">{agree.rent}</td>
                                <td className="border p-2">{agree.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-red-500">No agreements found.</p>
            )}
        </div>
    );
};

export default MemberProfile;
