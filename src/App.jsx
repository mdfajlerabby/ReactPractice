// level 1 
// import { useState } from "react"

import { useState } from "react"

// import { useState } from "react";

// export default function App(){

// //   const [count,setCount] = useState(0);

// //   function handleIncrease(){
// //     setCount(count + 1);
// //   }
// //   function handleDecrease(){
// //     setCount(count - 1);
// //   }
// //   function handleReset(){
// //     setCount(count - count);
// //   }

// //   return(
// //     <div>
// //       <h2>Count = {count}</h2>
// //       <button onClick={handleIncrease}>Increase</button>
// //       <button onClick={handleDecrease}>Decrease</button>
// //       <button onClick={handleReset}>Decrease</button>
// //     </div>
// //   )
// // }

// // level 2
// // export default function (){
// //   const[show, setShow] = useState(false);
// //   function handelContent(){
// //     setShow(!show);
// //   }
// //   return(
// //     <div>
// //       <button onClick={handelContent}>Show Details</button>
// //       {show && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores itaque id repudiandae voluptas, dolorem officiis?</p>}
// //     </div>
// //   )
// // }

// // export default function App(){
// //   const [isLoggedIn,setIsLoggedIn] = useState(false)
// //   return(
// //     <div>
// //       {
// //         isLoggedIn ? (
// //           <h3>You are logged In.</h3>
// //         ):(
// //           <h3>You are logged out.</h3>
// //         )
// //       }
// //       <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?'Logout':'Login'}</button>
// //     </div>
// //   )
// // }

// // export default function App(){

// //   const[name,setName] = useState("");
// //   const[displayName, setDisplayName] = useState("");

// //   function handleShowName(){
// //     setDisplayName(name);
// //   }
// //   return(
// //     <div>
// //       <label>
// //         Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Type your name..." />
// //       </label>
// //       <button onClick={handleShowName}>Show Name</button>
// //       {displayName && (
// //         <h3>Hello {displayName}</h3>
// //       )}
// //     </div>
// //   )
// // }

// // export default function App(){
// //   return(
// //     <div>
// //       <Welcome name="Rabby"/>
// //     </div>
// //   )
// // }

// // function Welcome(props){
// //   return (
// //     <h3>Welcome {props.name}</h3>
// //   )
// // }

// // export default function App(){
// //   return(
// //     <div>
// //       <ProductCard 
// //       name="iPhone" 
// //       price={80000} 
// //       category="SmartPhone"/>
// //     </div>
// //   )
// // }

// // function ProductCard({name,price,category}){
// //   return(
// //     <div>
// //       <h3>Product : {name}</h3>
// //       <h3>Price : {price}</h3>
// //       <h3>Category : {category}</h3>
// //     </div>
// //   )
// // }

// // export default function App(){
// //   const [count,setCount] = useState(0);
// //   function handleCount(){
// //     setCount(count+1)
// //   }
// //   return (
// //     <div>
// //       <h2>Count = {count}</h2>
// //       <CounterButton count={count} onClick={handleCount} label="Button 1"/>
// //       <CounterButton count={count} onClick={handleCount} label="Button 2"/>
// //     </div>
// //   )
// // }

// // function CounterButton({onClick,label}){
// //   return(
// //     <div>
// //       <button onClick={onClick}>{label}</button>
// //     </div>
// //   )
// // }


// // export default function App(){

// //   const[selectedProduct,setSelectedProduct] = useState('None');

// //   const handleProductClick = (productName) => {
// //     setSelectedProduct(productName);
// //   }

// //   return(
// //     <div>
// //       <h3>Selected Product: {selectedProduct}</h3>
// //       <ProductButton product='Phone' onSelect={handleProductClick}/>
// //       <ProductButton product='Laptop' onSelect={handleProductClick}/>
// //       <ProductButton product='Tablet' onSelect={handleProductClick}/>
// //     </div>
// //   )
// // }

// // function ProductButton({product,onSelect}){
// //   return(
// //     <button onClick={()=>onSelect(product)}>{product}</button>
// //   )
// // }

// // export default function App() {

// //   const [cartCount, setCartCount] = useState(0);
// //   const [lastAdded, setLastAdded] = useState("None");

// //   const handleAddToCart = (productName) => {
// //     setCartCount(cartCount + 1);      
// //     setLastAdded(productName);       
// //   };

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h2>Products</h2>

// //       <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
// //         <ProductButton product="Phone" onAdd={handleAddToCart} />
// //         <ProductButton product="Laptop" onAdd={handleAddToCart} />
// //         <ProductButton product="Tablet" onAdd={handleAddToCart} />
// //       </div>

// //       <CartInfo count={cartCount} lastAdded={lastAdded} />
// //     </div>
// //   );
// // }


// // function ProductButton({ product, onAdd }) {
// //   return (
// //     <button onClick={() => onAdd(product)}>
// //       Add {product}
// //     </button>
// //   );
// // }

// // function CartInfo({ count, lastAdded }) {
// //   return (
// //     <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', maxWidth: '250px' }}>
// //       <p><strong>Cart Items:</strong> {count}</p>
// //       <p><strong>Last Added:</strong> {lastAdded}</p>
// //     </div>
// //   );
// // }

// // export default function App(){
// //   const[cartCount,setCartCount] = useState(0);
// //   const[lastAdded,setLastAdded]=useState('None');

// //   const handleAddToCart = (productName) => {
// //     setCartCount(cartCount+1);
// //     setLastAdded(productName)
// //   }

// //   return(
// //     <div>
// //       <h2>Products</h2>
// //       <div>
// //         <ProductButton product='Phone' onAdd={handleAddToCart}/>
// //         <ProductButton product='Laptop' onAdd={handleAddToCart}/>
// //         <ProductButton product='Tablet' onAdd={handleAddToCart}/>
// //       </div>
// //       <CartInfo count={cartCount} lastAdded={lastAdded}/>
// //     </div>
// //   )
// // }


// // function ProductButton({product,onAdd}){
// //   return(
// //     <div>
// //       <button onClick={()=>onAdd(product)}>Add {product}</button>
// //     </div>
// //   )
// // }

// // function CartInfo({count,lastAdded}){
// //   return(
// //     <div>
// //       <p><strong>Cart Items: </strong>{count}</p>
// //       <p><strong>Last Added: </strong>{lastAdded}</p>
// //     </div>
// //   )
// // }


// // export default function App(){
// //   const[count,setCount] = useState(0);
// //   function  handleIncrease(){
// //     setCount(count+1)
// //   }
// //   function  handleDecrease(){
// //     setCount(count-1)
// //   }
// //   function handleReset(){
// //     setCount(0)
// //   }
// //   return(
// //     <div>
// //       <h3>Clicked {count} times</h3>
// //       <button onClick={handleIncrease}>Increase</button>
// //       <button onClick={handleDecrease}>Decrease</button>
// //       <button onClick={handleReset}>Reset</button>
// //     </div>
// //   )
// // }

// // export default function App(){
// //   const[show,setShow] = useState(false)
// //   function handleShowButton(){
// //     setShow(!show)
// //   }
// //   return(
// //     <div>
// //       <button onClick={handleShowButton}>Show / Hide</button>
// //       {show && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia iste possimus repellat exercitationem sint, dolor fugiat odio porro. Officiis, repudiandae.</p>}
// //     </div>
// //   )
// // }

// // export default function App(){
// //   const[isLoggedIn,setIsLoggedIn] = useState(false);
// //   function handleLoggedIn(){
// //     setIsLoggedIn(!isLoggedIn)
// //   }
// //   return(
// //     <div>
// //       {
// //         isLoggedIn ? <h2>You are log In.</h2> : <h2>You are log Out.</h2>
// //       }
// //       <button onClick={handleLoggedIn}>
// //         {
// //           isLoggedIn ? 'Logout' : 'Login'
// //         }
// //       </button>
// //     </div>
// //   )
// }

// export default function App(){

//   const[name,setName] = useState('')

//   const[displayName,setDisplayName] = useState('')


//   function handleShowName(){
//     setDisplayName(name)
//   }
//   return(
//     <div>
//       <label>Name : <input type="text" onChange={(e)=>setName(e.target.value)}  placeholder="enter your name..." /></label>
//       <button onClick={handleShowName}>Show Name</button>
//       {
//         displayName && <h2>Hello {displayName}</h2>
//       }
//     </div>
//   )
// }

// export default function App(){
//   const[count,setCount] = useState(0);
//   function handleIncrease(){
//     setCount(count+1);
//   }
//   function handleDecrease(){
//     setCount(count-1);
//   }
//   function handleReset(){
//     setCount(0);
//   }
//   return(
//     <div>
//       <h2>Counter App</h2>
//       <h3>Count: {count}</h3>
//       <button onClick={handleIncrease}>Increase</button>
//       <button onClick={handleDecrease}>Decrease</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }

// export default function App(){
//   const[isOn,setIsOn] = useState(false);
//   function handleLight(){
//     setIsOn(!isOn)
//   }
//   return(
//     <div>
//       {isOn ? <h2>Light is Off</h2> : <h2>Light is on</h2>}
//       <button onClick={handleLight}>{isOn ? 'LightOn':'LightOf'}</button>
//     </div>
//   )
// }

// export default function App(){
//   const[name,setName]=useState('')
//   const[displayName,setDisplayName]=useState('');
//   function handleName(){
//     setDisplayName(name);
//   }
//   return(
//     <div>
//       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="enter your name : " />
//       <button onClick={handleName}>Show Name</button>
//       {displayName && <h2>Hello {displayName}</h2>}
//     </div>
//   )
// }

// export default function App(){
//   return(
//     <div>
//       <StudentInformation name='Fajle Rabby' university='University Of The People' department='Computer Science'/>
//     </div>
//   )
// }

// function StudentInformation({name,university,department}){
//   return(
//     <>
//       <h1>Student Information</h1><br /> 
//       <h2>Name : {name}</h2>
//       <h2>University : {university}</h2>
//       <h2>Department : {department}</h2>
//     </>
//   )
// }

// export default function App(){
//   return(
//     <>
//       <h2>Product</h2>
//       <p>--------------------</p>
//       <ProductCard name='Asus Vivobook' price={88000} category='laptop'/>
//       <ProductCard name='MaceBook' price={188000} category='laptop'/>
//     </>
//   )
// }

// function ProductCard({name,price,category}){
//   return(
//     <>
//       <h3>Name : {name}</h3>
//       <h3>Price : {price}</h3>
//       <h3>Category : {category}</h3>
//       <button>Add to cart</button>
//     </>
//   )
// }

// export default function App(){
//   const[count,setCount] = useState(0);
//   function handleCounter(){
//     setCount(count+1)
//   }
//   return(
//     <>
//     <h2>Shared Counter</h2>
//     <h2>Count : {count}</h2>
//     <CounterButton onClick={handleCounter} label='Button 1'/>
//     <CounterButton onClick={handleCounter} label='Button 2'/>
//     </>
//   )
// }

// function CounterButton({onClick,label}){
//   return(
//     <button onClick={onClick}>{label}</button>
//   )
// }

// export default function App(){
//   const[selectedProduct,setSelectedProduct] = useState('None');
//   function handleProductButton(productName){
//     setSelectedProduct(productName)
//   }
//   return(
//     <div>
//       <h2>Selected Product: {selectedProduct}</h2>
//       <ProductButton product='Laptop' onSelect={handleProductButton}/>
//       <ProductButton product='Mobile' onSelect={handleProductButton}/>
//       <ProductButton product='Watch' onSelect={handleProductButton}/>
//     </div>
//   )
// }

// function ProductButton({product,onSelect}){
//   return(
//     <>
//     <button onClick={()=>onSelect(product)} >{product}</button>
//     </>
//   )
// }

// export default function App(){
//   const[selectedProduct,setSelectedProduct]=useState('None');

//   function handleProduct(productName){
//     setSelectedProduct(productName)
//   }

//   return(
//     <>
//       <h2>Selected Product : {selectedProduct}</h2>
//       <ProductButton product='Laptop' onSelect={handleProduct}/>
//       <ProductButton product='Mobile' onSelect={handleProduct}/>
//       <ProductButton product='Desktop' onSelect={handleProduct}/>
//     </>
//   )
// }

// function ProductButton({product,onSelect}){
//   return(
//     <button onClick={()=>onSelect(product)}>{product}</button>
//   )
// }


// export default function App(){
//   const[selectedProduct,setSelecteProduct] = useState('None');
//   const [count,setCount]=useState(0);

//   function handleSelectedProduct(productName){
//     setSelecteProduct(productName);
//     setCount(count+1);
//   }
//   return(
//     <>
//     <ProductButton product='Laptop' onSelect={handleSelectedProduct}/>
//     <ProductButton product='Mobile' onSelect={handleSelectedProduct}/>
//     <ProductButton product='Tablet' onSelect={handleSelectedProduct}/>
//     <p>-----------------------------------------------</p>
//     <h2>Card Items : {count}</h2>
//     <h2>Last Update : {selectedProduct}</h2>
//     </>
//   )
// }

// function ProductButton({product,onSelect}){
//   return(
//     <>
//     <button onClick={()=>onSelect(product)}>{product}</button>
//     </>
//   )
// }

// export default function App(){
//   const[isLogin,setIsLogin]=useState(false);
//   function handleLogIn(){
//     setIsLogin(!isLogin)
//   }

//   return(
//     <>
//     {
//       isLogin ? <h2>Status : Logged In</h2> : <h2>Status : Logged Out</h2>
//     }
//     <button onClick={handleLogIn}>{isLogin ? 'Log Out' : 'Log In'}</button>
//     </>
//   )
// }

// export default function App(){
//   const[isLogin,setIsLogin] = useState();
//   function handleLogIn(){
//     setIsLogin(!isLogin);
//   }
//   return(
//     <>
//     <Status isLoggedIn={isLogin}/>
//     <LoginButton isLoggedIn={isLogin} onClick={handleLogIn}/>
//     </>
//   )
// }

// function Status({isLoggedIn}){
//   return(
//     <h2>
//       Status : {isLoggedIn ? 'Logged In' :'Logged Out'}
//     </h2>
//   )
// }

// function LoginButton({isLoggedIn,onClick}){
//   return(
//     <button onClick={onClick}>{isLoggedIn ? "Logout": "Login"}</button>
//   )
// }

export default function App(){

  const[product,setProduct]=useState('None');
  const[like,setLike]=useState(0);
  const[isLoggedIn,setIsLoggedIn]=useState(false);

  function handleProduct(productName){
    setProduct(productName);
  }
  function handleLike(){
    setLike(prevLike => prevLike + 1)
  }
  function handleLoggedIn(){
    setIsLoggedIn(prev => !prev)
  }

  return(
    <div>
      <Header name="Fajle "/>
      <h2>Selected Product: {product}</h2>
      <ProductButton productsName='Phone' onSelect={handleProduct}/>
      <ProductButton productsName='Laptop' onSelect={handleProduct}/>
      <ProductButton productsName='Tablet' onSelect={handleProduct}/>
      <h2>Likes: {like}</h2>
      <LikeButton onClick={handleLike}/>
      <Status isLoggedIn={isLoggedIn}/>
      <LoginButton isLoggedIn={isLoggedIn} onClick={handleLoggedIn}/>
      
      
    </div>
  )
}

function Header({name}){
  return(
    <div>
      <h2>Welcome, {name}</h2>
    </div>
  )
}
function ProductButton({productsName,onSelect}){
  return(
    <div>
      <button onClick={()=>onSelect(productsName)}>{productsName}</button>
    </div>
  )
}
function LikeButton({onClick}){
  return(
    <div>
      <button onClick={onClick}>Like</button>
    </div>
  )
}

function LoginButton({isLoggedIn,onClick}){
  return(
    <div>
      <button onClick={onClick}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
    </div>
  )
}

function Status({isLoggedIn}){
  return(
    <div>
      {
        isLoggedIn ? <h2>Status : Logged In</h2> : <h2>Status : Logged Out</h2>
      }
    </div>
  )
}