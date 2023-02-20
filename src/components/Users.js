import  { React,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_getAll_user } from '../redux/actions'
export default function Users() {
    const dispatch = useDispatch()
    // bắn actions để lấy tất cả danh sách user ở server để lưu trữ ở reducer
    useEffect(() => {
        dispatch(act_getAll_user())
    }, [])
    const listUser = useSelector(state => state.users)
    return (
        <div>
            <h3>List Users</h3>
            <table border={'1'}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th colSpan={2}>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser.map((user, index) => {
                            return <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td><button>Update</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
