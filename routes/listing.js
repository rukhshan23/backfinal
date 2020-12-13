import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Select from 'react-select';
import {NavLink} from 'react-router-dom';
import {UserContext} from './UserContext';
import {useContext} from 'react';
import {useHistory} from 'react-router-dom';


function BuyerHistory(){

	const [history,setHistory]=useState([]);
	const {user, setUser}=useContext(UserContext);
	let id="";
	let order=0;
	const back=useHistory();
	useEffect(() => {
	if(user==-1)
	{
		back.push('/');
	}
	else
	{
		console.log(user);
		id=user.seller_id.toString();
		async  function fetchData() {
			let url="http://localhost:4000/runtime/listproducts/" +id;
			const request = await axios.get(url);
			setHistory(request.data);
			console.log(request.data);
			return request
		}
		fetchData()
	}
	},[])
		

	const hist=history.map((obj,i)=>(
	<>
		<h2> Product# {order++} </h2>
		<div> {"product ID:"+ obj.product_id}</div>
		<div> {"Name :"+obj.name}</div>
		<div> {"Price: " +obj.price}</div>
		<div> {"Stock: " +obj.stock}</div>
		<div> {"Price: "+obj.price}</div>
		</>
	
	
	
	));


	return(
	<>
		<h1> Your Products </h1>
		<div> {hist}</div>



	</>
	);
}
export default BuyerHistory;







