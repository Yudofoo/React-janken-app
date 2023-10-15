import { Button } from './Button'
import { Result } from './Result'
import { useStore } from './store'

export const Game = () => {
    const { userSelect, enemySelect } = useStore()
    const result = userSelect - enemySelect
  return (
    <div>
        <Result result={result}/>
        <Button />
    </div>
    )
}
