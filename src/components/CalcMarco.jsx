import { useEffect, useReducer, useState } from "react"
import { UseMacroContext } from "../Context/MacroContext"
import InputText from "../UI-Componnets/InputText"
import SelectBox from "../UI-Componnets/SelectBox"
import SliderInput from '../UI-Componnets/SliderInput';
const initialState = {
    values:{valuePortien:0,valueCarbs:0,valueFats:0}
}
function reducer(snState,action){
    switch(action.type){
        case'change':{
            console.log(action.payload)
            return {...snState,values:{...snState.values,valuePortien:action.payload}}
        }
        default:{
            throw new Error ('Action not known')
        }
    }
}
function CalcMarco() {
    const {dietType,getItem,itemChanged,activeSlide,getTdee,TDEE} = UseMacroContext()
    const [{values},dispatch] = useReducer(reducer,initialState)
    
    return (
      
            <div className="w-[60%]">
            <p>Marco Calculator</p>
            <div className='flex items-center justify-between'>
         <InputText label='Enter your TDEE' value={TDEE} onChange={(e)=>getTdee(Math.abs(e.target.value))}  labelEnd="Kcal"/>
         <SelectBox/>
            </div>
            <div className="mb-[20px]">
                <p>I don’t know my total calories per day</p>
            </div>
            <div className="flex items-center mb-[20px] justify-between">
            <InputText disabled label='Protien' value={itemChanged!=null?itemChanged.protienPercentage:values.valuePortien} labelEnd="%"/>   
            <SliderInput  disabled={activeSlide} value={itemChanged!=null?itemChanged.protienPercentage:values.valuePortien} onChange={(e)=>dispatch({type:'change',payload:e.target.value})} color="primary"/>
            </div>
            <div className="flex items-center mb-[20px] justify-between">
            <InputText disabled label='Carbohydrates' value={itemChanged!=null?itemChanged.carboHydrate:values.valueCarbs} labelEnd="%"/>  
            <SliderInput disabled={activeSlide} value={itemChanged!=null?itemChanged.carboHydrate:values.valueCarbs}/>
            </div>
            <div className="flex items-center mb-[20px] justify-between">
            <InputText label='Fats' disabled value={itemChanged!=null?itemChanged.fatsPercentage:values.valueFats} labelEnd="%"/>  
            <SliderInput disabled={activeSlide} value={itemChanged!=null?itemChanged.fatsPercentage:values.valueFats}/>
            </div>
            </div>
       
    )
}

export default CalcMarco
