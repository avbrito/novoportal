import React from "react";

interface BarChartProps {
  data: { month: string; height: string }[]; 
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  return (
    <div className="flex items-end space-x-4 h-40">
      {data.map((item, index) => (
        <div key={index} className="text-center">
          <div
            className={`bg-green-600 w-8 mx-auto ${item.height} rounded-t-lg`} 
          ></div>
          <p className="text-sm mt-2 text-gray-500">{item.month}</p>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
