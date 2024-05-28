import React from 'react'
import './Programs.css'


const Programs = () => {
  return (
    <div className='programs' >
        <div className="program">
           <h2>WHAT IS SOLANA</h2> 
           <p>Solana's a fast blockchain for everyone, powering finance, payments, gaming and more. It's open, works with others, and runs without a central authority</p>
        </div>
        <div className="program">
          <h2>HOW TO ONBOARD</h2>
          <p>step 1: Create a wallet <br /> 
             step 2: Fund the wallet <br />
             step 3: Start interacting <br />with Dapps
          </p>
        </div>
        <div className="program">
            <h2>BUILD ON SOLANA</h2>
            <p>If you are a developer with a bit of coding experience you can begin by going through the solana docs and their <a href="https://solana.com/developers" target='_blan'>developer resources</a></p>

        </div>

    </div>
  )
}

export default Programs