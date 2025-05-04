import { useEffect, useState, useContext } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";

const UserOverview = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the user's bookings
        const bookingRes = await axiosSecure.get(`/bookings?email=${user.email}`);
        const bookings = bookingRes.data;

        const totalBookings = bookings.length;
        const activeBookings = bookings.filter(b => b.status === "active").length;
        const pendingBookings = bookings.filter(b => b.status === "pending").length;

        setStats({
          totalBookings,
          activeBookings,
          pendingBookings,
          activePercentage: totalBookings ? ((activeBookings / totalBookings) * 100).toFixed(2) : 0,
          pendingPercentage: totalBookings ? ((pendingBookings / totalBookings) * 100).toFixed(2) : 0
        });

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosSecure, user.email]);

  const pieData = [
    { name: "Active Bookings", value: stats?.activeBookings || 0, color: "#4CAF50" },
    { name: "Pending Bookings", value: stats?.pendingBookings || 0, color: "#FF9800" }
  ];

  const barData = [
    { name: "Total Bookings", value: stats?.totalBookings || 0, color: "#2196F3" },
    { name: "Active Bookings", value: stats?.activeBookings || 0, color: "#4CAF50" }
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">User Overview</h2>

      {stats ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pie Chart for Active vs Pending Bookings */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold text-center">Booking Status</h3>
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

          {/* Bar Chart for Total Bookings & Active Bookings */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold text-center">Booking Statistics</h3>
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

export default UserOverview;
