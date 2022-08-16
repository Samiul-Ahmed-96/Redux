import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserView = () => {
    const {users,isLoading,error} = useSelector(state => state.users)

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

  return (
    <div>
        {
            isLoading && <p>Loading...</p>
        }
        {
            users.map(singleUser => <div>{singleUser.name}</div> )
        }
                
    </div>
   
  )
}

export default UserView