import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeCount, addItem, deleteItem } from '../store.js';
import { changeName, addAge } from '../store/userSlice.js';

function Cart(){

    let state = useSelector((state)=>state)

    let dispatch = useDispatch()

    return(
        <div>
            {state.user.name} 의 장바구니 age : {state.user.age}<br></br>
            <button onClick={()=>{
                dispatch(changeName())
            }}>이름변경</button>
            <button onClick={()=>{
                dispatch(addAge(10))//화물도 같이 보냄
            }}>나이 증가</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {

                        state.cart.map((a, i)=>
                        <tr key={i}>
                            <td>{state.cart[i].id}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td>
                                <button onClick={()=>{
                                    dispatch(changeCount(state.cart[i].id))
                                }}> + </button>
                            </td>
                            <td>
                                <button onClick={()=>{
                                    dispatch(deleteItem(state.cart[i].id))
                                }}> 삭제 </button>
                            </td>
                           
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;