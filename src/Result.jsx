export const Result = ({ enemySelect, result }) => {
  let finalResult = ""

if (result === 0) {
    finalResult = 'あいこ'
}
if (result === 1 || result === -2 ) {
        finalResult = 'まけ'
}    
if (result === -1 || result === 2) {
    finalResult = 'かち'
}
  return (
    <>
    {enemySelect ?
    <div className="m-4 border-8 border-red-500">
     {enemySelect === 1 && <img src="rdesign_14296.png" alt=""/>}
     {enemySelect === 2 && <img src="rdesign_14297.png" alt=""/>}
     {enemySelect === 3 && <img src="rdesign_14298.png" alt=""/>}
     <div className="flex justify-center text-3xl">Result: {finalResult}</div>
    </div> : <div></div>
    }
    </>
  )
}
