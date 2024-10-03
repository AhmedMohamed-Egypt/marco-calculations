import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { UseMacroContext } from "../Context/MacroContext"

function Chart() {
    const {itemChanged,TDEE} = UseMacroContext()
    
    const  totalCalories = Math.ceil(itemChanged!=null && TDEE > 0 ? Object.values(itemChanged).filter((item,index) =>index>1).map((item)=>(+item/100)*TDEE).reduce((a,b)=>{
        return a + b
    },0):0)



    const {protein,carbs,fats} = itemChanged!=null?{protein:(((itemChanged.protienPercentage/100)*TDEE)/4),carbs:(((itemChanged.carboHydrate/100)*TDEE)/4),fats:(((itemChanged.fatsPercentage/100)*TDEE)/9)}:{
        protein:0,carbs:0,fats:0
    }
    const data = [
        { value: protein,color:"#EB7C7C",label: 'Protien'},
        { value: carbs,color:"#58AC5F",label: 'Carbs'},
        { value: fats,color:"#FFE16A",label: 'Fats'},
       
      ];
      
      const size = {
        width: 300,
        height: 200,
      };
      
      const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
      }));
      
      function PieCenterLabel({ children }) {
        const { width, height, left, top } = useDrawingArea();
        return (
          <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
          </StyledText>
        );
      }
    
    
    return (
        <div className="flex flex-col items-center">
          <PieChart series={[{ data, innerRadius: 85,color: '#fdb462' }]} {...size}>
    
      <PieCenterLabel>
      {totalCalories}
      </PieCenterLabel>
      
    </PieChart>
  <div className="">
            
            
            <p>Protien : {Math.floor(protein)} gm</p>
            <p>Carbs : {Math.floor(carbs)} gm</p>
            <p>Fats : {Math.floor(fats)} gm</p>

        </div>
        </div>
      
    )
}

export default Chart
