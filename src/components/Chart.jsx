import { UseMacroContext } from "../Context/MacroContext"

function Chart() {
    const {itemChanged,TDEE} = UseMacroContext()
    
    const  totalCalories =itemChanged!=null && TDEE > 0 ? Object.values(itemChanged).filter((item,index) =>index>1).map((item)=>(+item/100)*TDEE).reduce((a,b)=>{
        return a + b
    },0):0
    
    
    
    return (
        <div className="w-[30%]">
            Chart
            <p>total Calories is {totalCalories}</p>
        </div>
    )
}

export default Chart
