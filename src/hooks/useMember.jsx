import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useMember = () => {
    const { user, loading } = useContext(AuthContext); // Get `loading` from AuthProvider
    const axiosSecure = useAxiosSecure();

    const { data: isMember = false, isPending: isMemberLoading } = useQuery({
        queryKey: [user?.email, 'isMember'],
        queryFn: async () => {
            if (!user?.email) return false; // Ensure `user.email` exists before calling API
            const res = await axiosSecure.get(`/apartment/member/${user.email}`);
            console.log("Member Status:", res.data);
            return res.data?.member ?? false; // Ensures a default value
        },
        enabled: !!user?.email && !loading // Prevent API call if user is not ready
    });

    return [isMember, isMemberLoading];
};

export default useMember;
