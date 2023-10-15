import { useState } from 'react'
import { Button } from './Button'
import { Result } from './Result'

export const Game = () => {
    const [ userSelect, setUserSelect ] = useState("")
    const [ enemySelect, setEnemySelect ] = useState("")
    const result = userSelect - enemySelect
  return (
    <div>
        <Result enemySelect={enemySelect} result={result}/>
        <Button setUserSelect={setUserSelect} setEnemySelect={setEnemySelect} />
    </div>
    )
}
