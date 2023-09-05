import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUserStatus = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: status, isLoading: isStatusLoading } = useQuery({
    queryKey:['isStatus', user?.email],
    enabled: user !== null,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/status/${user?.email}`)
            return res.data;
        }
    })
   
    return [status, isStatusLoading]
};

export default useUserStatus;