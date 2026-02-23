// import "./App.css";
// import Title from "./Title";
// import { useEffect, useState } from "react";
// import CounterButton from "./CounterButtons";
// import { useRef } from "react";

// function App() {
//   const [count, SetCount] = useState(0);

//   const increase = () => {
//     SetCount((prev) => prev + 1);
//   };

//   const decrease = () => {
//     SetCount((prev) => Math.max(0, prev - 1));
//   };

//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus();
//   };

//   useEffect(() => {
//     document.title = `Count: ${count}`
//     console.log("已完成");
//   },[count]);

//   useEffect(() => {
//   const handleResize = () => {
//     console.log(window.innerWidth);
//   };

//   window.addEventListener("resize", handleResize);

//   return () => {
//     window.removeEventListener("resize", handleResize);
//   };
// }, []);

// useEffect(() => {
//   console.log("mounted");

//   return () => {
//     console.log("unmounted");
//   };
// }, []);

//   return (
//     <>
//       <Title text="React" color="red" />
//       <h1>{count}</h1>
//       <CounterButton onIncrease={increase} onDecrease={decrease} />
//       {/* prev為更新前的職 */}
//       {/* <button onClick={() => SetCount(prev => Math.max(0, prev - 1))
// }>
//         -1
//       </button>
//     <button onClick={() => SetCount(prev => prev + 1)}>
//     +1
//     </button> */}

//      <input ref={inputRef} />
//       <button onClick={focusInput}>Focus</button>
//     </>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./layout/Layout";
// import Home from "./pages/Home";
// import Clothing from "./pages/Clothing";
// import Pants from "./pages/Pants";
// import Socks from "./pages/Socks";

// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/clothing" element={<Clothing />} />
//           <Route path="/pants" element={<Pants />} />
//         <Route path="/socks" element={<Socks />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Clothing from "./pages/Clothing";
import Pants from "./pages/Pants";
import Socks from "./pages/Socks";
import { CartProvider } from "./context/CartProvider";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/socks" element={<Socks />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;