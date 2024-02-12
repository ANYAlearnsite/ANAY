import React from 'react'

const ScoreLevel = ({score,level}) => {
  return (
    <div className='border-4 border-blue-900 bg-blue-300 text-blue-900  mr-60 ml-60'>
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Your Level</h1>
        <h2 className="text-lg">{level}</h2>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Your Score</h1>
        <h2 className="text-lg">{score}</h2>
      </div>
    </div>
  )
}

export default ScoreLevel
