import Chart from 'react-google-charts';

export type TableProps = {
    data: any;
}

const TableChart = ({ data } : TableProps): JSX.Element => {
    return (

        <Chart
            width = '100%'
            height = '100%'
            chartType="Table"
            data = {data}
        />

    );
}

export default TableChart;
