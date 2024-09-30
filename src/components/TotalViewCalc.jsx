import CalcMarco from "./CalcMarco"
import Chart from './Chart'
function  TotalViewCalc(){
    return (
        <div className="w-[1000px] mx-auto p-5 bg-[#F2F5FA] mt-5 rounded-2 flex justify-between">
            <CalcMarco/>
            <Chart/>
        </div>
    )
}


export default TotalViewCalc
