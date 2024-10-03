import { createContext, useContext, useReducer } from "react";

const MacroContext = createContext()
const dietType=[
    {id:1,type:'High Carb (60:25:15)',protienPercentage:25,carboHydrate:60,fatsPercentage:15},
    {id:2,type:'Moderate Carb (50:30:20)',protienPercentage:30,carboHydrate:50,fatsPercentage:20},
    {id:3,type:'Zone Diet (40:30:30)',protienPercentage:30,carboHydrate:40,fatsPercentage:30},
    {id:4,type:'Low Carb (25:35:40)',protienPercentage:35,carboHydrate:25,fatsPercentage:40},
    {id:5,type:'Keto Diet Carb (05:35:60)',protienPercentage:35,carboHydrate:5,fatsPercentage:60},
    {id:6,type:'Custom',protienPercentage:0,carboHydrate:0,fatsPercentage:0}
]
const parameters = {
   itemChanged:null,
   activeSlide:true,
   TDEE:0,
   
}
function reducer(snState,action){
    switch (action.type){
    case "change":{
        if(action.payload.type==="Custom"){
            return {...snState,itemChanged:action.payload,activeSlide:false}
        }else {
            return {...snState,itemChanged:action.payload,activeSlide:true}
        }
        
    }
    case 'getValTdee':{
        return {...snState,TDEE:action.payload}
    }
    case 'updateCustom':{
        const protein = action.payload.valuePortien
        const carbs = action.payload.valueCarbs
        const fats = action.payload.valueFats
        return {...snState,itemChanged:{...snState.itemChanged,protienPercentage:protein,carboHydrate:carbs,fatsPercentage:fats}}
    }
    default :{
        throw new Error ('Action not Known')
    }
    }
}
function MacroContextProvider({children}){
    const [{itemChanged,activeSlide,TDEE},dispatch] = useReducer(reducer,parameters)
    function getItem(item){
        dispatch({type:'change',payload:item})
    }

    function getTdee(val){
        dispatch({type:'getValTdee',payload:val})
    }

    function updateItemChangeCustom(val){
        dispatch({type:'updateCustom',payload:val})
    }
    
   
    return <MacroContext.Provider value={{dietType,getItem,itemChanged,activeSlide,getTdee,TDEE,updateItemChangeCustom}}>{children}</MacroContext.Provider>
}


function UseMacroContext(){
    const context = useContext(MacroContext)
    if(context==undefined){
        throw new Error ('Context used outside')
    }
       
    return context
}

export {MacroContextProvider,UseMacroContext}