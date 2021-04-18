import Chart from 'react-google-charts';

export type PieChartProps = {
    data: any;
}
const PieChart = ({ data } : PieChartProps): JSX.Element => {

    return (
        <Chart
            width="100%"
            height="500px"
            chartType="PieChart"
            data={data}
            legendToggle
            options={{
                title: 'COVID-19: 10 most affected countries with the highest cases',
                tooltip: { trigger: 'selection' }
            }}
            
        />
    );
};

PieChart.displayName = 'PieChart';

export default PieChart;