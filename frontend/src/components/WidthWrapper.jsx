import React from 'react'

const WidthWrapper = ({children}) => {
  return (
    <section className = "w-full px-4 py-4 lg:px-5 lg:py-5 mx-auto ">
        {children}
    </section>
  )
}

export default WidthWrapper