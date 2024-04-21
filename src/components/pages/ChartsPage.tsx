import BarChart from '../atoms/Charts/BarChart';
import CombinedChart from '../atoms/Charts/CombinedChart';
import LineChart from '../atoms/Charts/LineChart';
import PieChart from '../atoms/Charts/PieChart';
import RadarChart from '../atoms/Charts/RadarChart';
import ScatterPlot from '../atoms/Charts/ScatterPlot';
import Sidebar from '../atoms/UI/Sidebar';

const ChartsPage = () => {
  return (
    <>
      <Sidebar>
        <LineChart />
        <BarChart />
        <PieChart />
        <ScatterPlot />
        <RadarChart />
        <CombinedChart />
      </Sidebar>
    </>
  );
};

export default ChartsPage;
