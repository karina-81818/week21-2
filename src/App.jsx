
import './App.css'
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 6],
  ["Дети", 12],
  ["Спорт", 1],
  ["Учеба", 6],
  ["Сон", 6],
];

export const options = {
  title: "Колесо баланса",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

  
 export default App