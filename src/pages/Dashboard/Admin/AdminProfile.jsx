import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";


const AdminProfile = () => {
    const { user } = useContext(AuthContext); 
  const [admin, setAdmin] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalRooms, setTotalRooms] = useState(0);
  const [availableRooms, setAvailableRooms] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);

  const axiosSecure = useAxiosSecure(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const userRes = await axiosSecure.get("/user"); 
        const adminData = userRes.data.find(u => u.email === user.email);
        setAdmin(adminData);

        
        setTotalUsers(userRes.data.length);

        const apartmentRes = await axiosSecure.get("/apartment");
        const apartments = apartmentRes.data;

        const total = apartments.length;
        const available = apartments.filter(room => room.status === "checked").length;
        const agreementRooms = total - available;

        setTotalRooms(total);
        setAvailableRooms(available);
        setTotalMembers(apartments.filter(room => room.status === "pending").length);

      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    fetchData();
  }, [axiosSecure]);

  // Calculate percentages
  const availablePercentage = totalRooms ? ((availableRooms / totalRooms) * 100).toFixed(2) : 0;
  const agreementPercentage = totalRooms ? (100 - availablePercentage) : 0;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      {admin ? (
        <div className="flex flex-col items-center text-center">
          <img className="w-32 h-32 rounded-full" src={user.photoURL} alt="Admin" />
          <h2 className="text-2xl font-bold mt-3">{admin.name}</h2>
          <p className="text-gray-600">{admin.email}</p>
          <p className="text-gray-600">Number: 01734548993</p>
          <p className="text-gray-600">Address: Dhaka,Bangladesh</p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-blue-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Total Rooms</h3>
              <p className="text-lg">{totalRooms}</p>
            </div>
            <div className="bg-green-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Available Rooms (%)</h3>
              <p className="text-lg">{availablePercentage}%</p>
            </div>
            <div className="bg-red-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Unavailable Rooms (%)</h3>
              <p className="text-lg">{agreementPercentage}%</p>
            </div>
            <div className="bg-yellow-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Total Users</h3>
              <p className="text-lg">{totalUsers}</p>
            </div>
            <div className="bg-purple-200 p-4 rounded-lg">
              <h3 className="text-xl font-semibold">Total Members</h3>
              <p className="text-lg">{totalMembers}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default AdminProfile;
