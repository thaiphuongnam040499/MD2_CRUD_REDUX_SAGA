import  { React,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { act_student } from '../redux/actions'
export default function Students() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(act_student())
    },[])
    const listStudent = useSelector(state=>state.students)
    console.log(listStudent);
  return (
    <div>
        <h3>Students</h3>
        <table border={'1'}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>AGE</th>
                        <th colSpan={2}>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listStudent.map((student, index) => {
                            return <tr key={student.id}>
                                <td>{index + 1}</td>
                                <td>{student.id}</td>
                                <td>{student.studentName}</td>
                                <td>{student.email}</td>
                                <td>{student.password}</td>
                                <td>{student.age}</td>
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
