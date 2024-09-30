import { createContext, useContext, useReducer } from "react";

const MacroContext = createContext()
const dietType=[
    {id:1,type:'High Carb (60:25:15)',protienPercentage:25,carboHydrate:60,fatsPercentage:15},
    {id:2,type:'Moderate Carb (50:30:20)',protienPercentage:30,carboHydrate:50,fatsPercentage:20},
    {id:3,type:'Zone Diet (40:30:30)',protienPercentage:30,carboHydrate:40,fatsPercentage:30}
]
const parameters = {
   itemChanged:null,
   activeSlide:true,
   TDEE:0

}
function reducer(snState,action){
    switch (action.type){
    case "change":{
        console.log(action.payload)
        return {...snState,itemChanged:action.payload}
    }
    case 'getValTdee':{
        return {...snState,TDEE:action.payload}
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
   
    return <MacroContext.Provider value={{dietType,getItem,itemChanged,activeSlide,getTdee,TDEE}}>{children}</MacroContext.Provider>
}


function UseMacroContext(){
    const context = useContext(MacroContext)
    if(context==undefined){
        throw new Error ('Context used outside')
    }
       
    return context
}

export {MacroContextProvider,UseMacroContext}