import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import { addItem } from './../store' 
import { useDispatch } from "react-redux";




function Detail(props){
    let [warn, setWarn] = useState(true)
    let [alert, setAlert] = useState(false)
    let [tab, setTab] = useState(0)
    let [fade, setFade] = useState('')
    let {id} = useParams();
    let 찾은상품 = props.shoes.find((e)=>{return e.id == id})
    let [content, setContent] = useState(0)


    let dispatch = useDispatch()

    useEffect(()=>{
        setFade('end')
        let a = setTimeout(()=>{ setWarn(false) },2000)
        return()=>{ 
            clearTimeout(a)
        }//기존 타이머 제거
    },[fade, warn])

    useEffect(()=>{
        let 꺼낸거 = localStorage.getItem('watched')
        꺼낸거 = JSON.parse(꺼낸거)
        꺼낸거.push(찾은상품.id)
        꺼낸거 = [...new Set(꺼낸거)]
        localStorage.setItem('watched', JSON.stringify(꺼낸거))
    },[])
    

   
    let 꺼낸거 = localStorage.getItem('watched')
        꺼낸거 = JSON.parse(꺼낸거)



    if(isNaN(id)==true){//id에 숫자가 아닌게 들어가면 true반환
        return(
            <div>숫자만입력하시오</div>
        )
    }else{
        return(
            <div className={"container start " + fade}>
                {
                    warn == true ? 
                    <div className="alert alert-warning">
                        2초내 구매시 할인
                    </div> : null
                }
                <div className="row">

                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(찾은상품.id+1)+".jpg"} width="100%" />
                </div>

                
                <div>
                    <div className="col-md-6" >
                        <h4>{찾은상품.title}</h4>
                        <p>{찾은상품.content}</p>
                        <p>{찾은상품.price}</p>
                        {
                            alert == true ? 
                            <div className="alert alert-warning">
                                숫자만 쓰시오
                            </div> : null
                        }
                        {/* <input onChange={(e)=>{
                            setContent(e.target.value) 
                            if(isNaN(content)){
                                setAlert(true)
                            }else{
                                setAlert(false)
                            }
                        }}/><br/><br/> */}
                        <button className="btn btn-danger" onClick={()=>{
                            dispatch(addItem(찾은상품))
                        }}>주문하기</button> 
                    </div>
                    
                    
                </div>
                </div>


                <br></br>
                <div style={{ width : '100%', border : '1px solid black'}}>
                    최근 본 상품{
                        꺼낸거.map((a, i)=>{
                            return(
                                <div>{props.shoes[a].title}</div>
                            )
                        })
                    }
                </div>
                <br></br>

                <Nav variant="tabs"  defaultActiveKey="link0">
                    <Nav.Item>
                        <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* {tab == 0 ? <div>내용0</div> : null}
                {tab == 1 ? <div>내용1</div> : null}
                {tab == 2 ? <div>내용2</div> : null} */}
                <TabContent tab={tab}/>
                
                
                

            </div> 
        )
    }
    
}

function TabContent(props){

    let [fade, setfade] = useState('')

    useEffect(()=>{
        setTimeout(()=>{setfade('end')}, 70)
        
        return ()=>{
            setfade('')
        }
    },[props.tab])

    return (<div className={'start ' + fade }>
        { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]} 
        </div>)
}



export {Detail}