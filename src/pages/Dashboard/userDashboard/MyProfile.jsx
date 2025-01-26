import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const MyProfile = () => {
    const { user } = useContext(AuthContext); // Assuming you have a user authentication hook

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-20">
            <div className="flex flex-col items-center">
                <img 
                    src={user?.photoURL} 
                    alt="" 
                    className="w-24 h-24 rounded-full border-2 border-gray-300"
                />
                <h2 className="text-xl font-semibold mt-4">{user?.displayName}</h2>
                <p className="text-gray-600">{user?.email}</p>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-bold">Apartment Info:</h3>
                <p className="text-gray-700"><strong>Agreement Accept Date:</strong> None</p>
                <p className="text-gray-700"><strong>Floor:</strong> None</p>
                <p className="text-gray-700"><strong>Block:</strong> None</p>
                <p className="text-gray-700"><strong>Apartment No:</strong> None</p>
            </div>
        </div>
    );
};

export default MyProfile;
