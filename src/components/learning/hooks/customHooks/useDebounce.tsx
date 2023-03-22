import React, { useDeferredValue, useState } from 'react'

const useDebounce= () => {
  const [name, setName] = useState<string>('')
  const deferredValue = useDeferredValue(name)
  
  return (
    <>
    <input type="text" value={name} />
    </>
  )
}

export default useDebounce;