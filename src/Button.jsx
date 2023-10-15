import { useDispatch } from "react-redux";
import { rock, scissors, paper } from "./userSelectSlice";
import { select } from "./enemySelectSlice";

export const Button = () => {
const dispatch = useDispatch();

const rJudge = () => {
  dispatch(rock());
  dispatch(select())
}
const sJudge = () => {
  dispatch(scissors());
  dispatch(select())
}
const pJudge = () => {
  dispatch(paper());
  dispatch(select())
}

  return (
    <div>
        <p className="flex justify-center text-3xl">
        What's your select ???
        </p>
        <div className="flex justify-center">
        <input type="image" src="rdesign_14296.png" alt="" className="h-20" onClick={() => rJudge()} />
        <input type="image" src="rdesign_14297.png" alt="" className="h-20" onClick={() => sJudge()} />
        <input type="image" src="rdesign_14298.png" alt="" className="h-20" onClick={() => pJudge()} />
        </div>
    </div>
  )
}
