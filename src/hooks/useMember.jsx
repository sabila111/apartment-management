import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../provider/AuthProvider';

const useMember = () => {
    const { user } = useContext(AuthContext);
    const [isMember, setIsMember] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/apartment/members/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setIsMember(data?.isMember || false);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching member status:', error);
                    setLoading(false);
                });
        }
    }, [user]);

    return [isMember, loading];
};

export default useMember;
