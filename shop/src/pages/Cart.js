import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, changeCount, changeAge, deleteItem } from './../store' 

function Cart(){
    
    let state = useSelector((state)=>{ return state })//redux store가져와줌 state는 store안에있는 모든 state들을 뜻한다. return state.user이런식으로 내가 쓸 state들을 제한하여서 가져올 수도 있다.
    let dispatch = useDispatch() //store.js로 요청 보냄

    return(
        <div>
            {state.user.name} 의 장바구니
            <Table>
                <thead style={{borderBottom : '3px solid black'}}>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (state.cart).map((a, i)=>{
                            return(
                                <tr key={i}>
                                    <td>{state.cart[i].id}</td>
                                    <td>{state.cart[i].title}</td>
                                    <td>{state.cart[i].count}</td>
                                    <td><button onClick={()=>{
                                        dispatch(changeCount(state.cart[i].id)) 
                                    }}> + </button>
                                    <button style={{marginLeft : '5px'}} onClick={()=>{
                                        dispatch(deleteItem(state.cart[i].id))
                                    }}> 삭제 </button>
                                    
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
            
        </div>
    )
}

export {Cart}