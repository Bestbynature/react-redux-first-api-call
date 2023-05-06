import { React, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/users/usersSlice';


const Fetchedusers = () => {

    const dispatch = useDispatch()

    const { users, isLoading, error } = useSelector((store) => store.users);

    useEffect(() => {

      dispatch(getUsers());

    }, [dispatch])
    

  return (
    <div className='users'>
        <h3> fetchedUsers</h3>
        <h3> {isLoading && <p>Loading...</p>}</h3>
        <p>{error && <p>{error}</p>}</p>
        <ul>
            {users.map((user) => {
               return <li key={user.id.value}>
                <div className="left">First Name:<strong>{user.name.first}</strong></div>
                <hr />
                <div className="right">Last Name: <strong>{user.name.last}</strong> </div>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Fetchedusers