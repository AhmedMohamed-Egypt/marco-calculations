import { useEffect, useReducer, useState } from "react"
import { UseMacroContext } from "../Context/MacroContext"
import InputText from "../UI-Componnets/InputText"
import SelectBox from "../UI-Componnets/SelectBox"
import SliderInput from '../UI-Componnets/SliderInput';
const initialState = {
    values:{valuePortien:0,valueCarbs:0,valueFats:0},
    valueTDEE:0
}

function reducer(snState,action){
    
    switch(action.type){
        case'change':{
            const protien = action.payload.valuePortien
            const carbs = action.payload.valueCarbs
            const fats = action.payload.valueFats
            

            return {...snState,values:{...snState.values,valuePortien:protien,valueCarbs:carbs,valueFats:fats}}
        }
        case 'changeTdee':{
            if(isNaN(action.payload)) {
                return {...snState,valueTDEE:""}
            }else {
                return {...snState,valueTDEE:Math.abs(action.payload)}
            }
            
        }
        case 'changeValues':{
            
            return {...snState,values:{valuePortien:0,valueCarbs:0,valueFats:0}}
        }
        default:{
            throw new Error ('Action not known')
        }
    }
}
function CalcMarco() {
    const {dietType,getItem,itemChanged,activeSlide,getTdee,TDEE,updateItemChangeCustom} = UseMacroContext()
    const [{values,valueTDEE},dispatch] = useReducer(reducer,initialState)
    const handleChange=(val)=>{
       dispatch({type:'changeTdee',payload:val})
       getTdee(val)
    }
    useEffect(()=>{
        ()=>{
            return TDEE = valueTDEE
        }
        if(activeSlide){
            dispatch({type:'changeValues'})
        }
    },[valueTDEE,activeSlide])
    const handleUpdte=(val)=>{
     dispatch({type:'change',payload:{valuePortien:val.valuePortien,valueCarbs:val.valueCarbs,valueFats:val.valueFats}})
     updateItemChangeCustom(val)
    }
    return (
      
            <div className="w-[60%]">
            <p>Marco Calculator</p>
            <div className='flex items-center justify-between'>
         <InputText label='Enter your TDEE' value={valueTDEE} onChange={(e)=>handleChange(+e.target.value)}  labelEnd="Kcal"/>
         <SelectBox/>
            </div>
            <div className="mb-[20px]">
                <p>I don’t know my total calories per day</p>
            </div>
            <div className="flex items-center mb-[20px] justify-between">
            <InputText disabled label='Protien' value={itemChanged!=null?itemChanged.protienPercentage:values.valuePortien} labelEnd="%"/>   
            <SliderInput  disabled={activeSlide} value={itemChanged!=null?itemChanged.protienPercentage:values.valuePortien} onChange={(e)=>{handleUpdte({...values,valuePortien:e.target.value})}} color="primary"/>
            </div>
            <div className="flex items-center mb-[20px] justify-between">
            <InputText disabled label='Carbohydrates' value={itemChanged!=null?itemChanged.carboHydrate:values.valueCarbs} labelEnd="%"/>  
            <SliderInput disabled={activeSlide} value={itemChanged!=null?itemChanged.carboHydrate:values.valueCarbs} onChange={(e)=>{handleUpdte({...values,valueCarbs:e.target.value})}}/>
            </div>
            <div className="flex items-center mb-[20px] justify-between">
            <InputText label='Fats' disabled value={itemChanged!=null?itemChanged.fatsPercentage:values.valueFats} labelEnd="%"/>  
            <SliderInput disabled={activeSlide} value={itemChanged!=null?itemChanged.fatsPercentage:values.valueFats} onChange={(e)=>{handleUpdte({...values,valueFats:e.target.value})}}/>
            </div>
            </div>
       
    )
}

export default CalcMarco
