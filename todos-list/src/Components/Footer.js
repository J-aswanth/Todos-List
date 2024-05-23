import React from 'react'

function Footer() {

  let footerstyle ={
    position: "relative",
    top: "100vh",
    width: "100%",
    backgroundColor: "Black",
  }

  return (
    <footer className=" text-light py-3" style={footerstyle}>
      <p className="text-center">
        Copyright &copy; MyTodosList.com
      </p>

    </footer>
  )
}

export default Footer
