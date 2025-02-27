import React from 'react'

const Contact = () => {
  return (
    <div className="h-[100vh] flex flex-col gap-4">
      <div>
        <h1 className="text-2xl p-4">Contactez nous par télephone : </h1>
        <p className="text-[#0000FF] text-lg p-8">+1 322 333 3222</p>
      </div>
      <div>
        <h1 className="text-2xl p-4">Contactez nous par couriel: </h1>
        <p className="text-[#0000FF] text-lg p-8">fitspace@gmail.com</p>
      </div>
    </div>
  );
}

export default Contact