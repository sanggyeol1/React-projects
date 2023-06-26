import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCount } from '../store.js';

function Cart(){

    let state = useSelector((state)=>state)

    let dispatch = useDispatch()

    return(
        <div>
            {state.user}의 장바구니
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i)=>
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td>
                                <button onClick={()=>{
                                    dispatch(changeCount({index : 0, count : 1}))
                                }}> + </button>
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