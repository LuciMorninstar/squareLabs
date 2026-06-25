import React from 'react'

const WidthWrapper = ({children}) => {
  return (
    <section className = "w-full px-0 py-0 lg:px-5 lg:py-3 mx-auto ">
        {children}
    </section>
  )
}

export default WidthWrapper