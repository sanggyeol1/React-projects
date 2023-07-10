import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { changeCount, addItem, deleteItem } from '../store.js';
import { changeName, addAge } from '../store/userSlice.js';
import { useEffect, useState, memo } from 'react';

let Child = memo( function (props){
    console.log('재랜더링됨')
    //굳이 재랜더링 안해도 되는 컴포넌트는 memo로 막으면 
    //memo의 원리 : 특정 상황에서만 재랜더링을 시켜주는 것임 (props가 변할 때)그래서 props로 count를 보내면 재랜더링 됨
    //props가 복잡하면 비교작업이 더 오래걸려서 안쓰는게 나을 수 있다.
    return <div>자식임</div>
})



function Cart(){

    let state = useSelector((state)=>state)
    let dispatch = useDispatch()
    let [count, setCount] = useState(0)

    return(
        <div>
            
            <Child count={count}></Child>
            <button onClick={()=>{setCount(count+1)}}>+</button>
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