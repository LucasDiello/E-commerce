import { ToastContainer } from 'react-toastify'


export default function Toastfy() {
  return (
    <ToastContainer
    position="top-left"
     autoClose={5000}
     hideProgressBar={true}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
    />
  )
}
