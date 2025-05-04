import { useEffect, useState, useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";

const AdminOverview = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axiosSecure.get("/user");
        const apartmentRes = await axiosSecure.get("/apartment");

        const totalRooms = apartmentRes.data.length;
        const availableRooms = apartmentRes.data.filter(room => room.status === "checked").length;
        const unavailableRooms = totalRooms - availableRooms;
        const totalUsers = userRes.data.length;
        const totalMembers = apartmentRes.data.filter(room => room.status === "pending").length;

        setStats({
          totalRooms,
          availableRooms,
          unavailableRooms,
          availablePercentage: totalRooms ? ((availableRooms / totalRooms) * 100).toFixed(2) : 0,
          unavailablePercentage: totalRooms ? ((unavailableRooms / totalRooms) * 100).toFixed(2) : 0,
          totalUsers,
          totalMembers
        });

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosSecure]);

  const pieData = [
    { name: "Available Rooms", value: stats?.availableRooms || 0, color: "#4CAF50" },
    { name: "Unavailable Rooms", value: stats?.unavailableRooms || 0, color: "#F44336" }
  ];

  const barData = [
    { name: "Total Users", value: stats?.totalUsers || 0, color: "#2196F3" },
    { name: "Total Members", value: stats?.totalMembers || 0, color: "#FF9800" }
  ];

  return (
    <div className="p-6 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Admin Overview</h2>

      {stats ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pie Chart for Available vs Unavailable Rooms */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold text-center dark:text-black">Room Availability</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart for Total Users & Members */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold text-center">User Statistics</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#2196F3" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default AdminOverview;
