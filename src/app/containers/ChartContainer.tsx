import PieChart from '../components/PieChart';
import TableChart from '../components/TableChart';
import CountryCases from '../models/CountryCases';

export type ChartContainerProps = {
    countriesCases: CountryCases[];
}
const ChartContainer = ({ countriesCases } : ChartContainerProps): JSX.Element => {
    const dataPieCases = [
        ['Country', 'Covid19 cases', 'Details'],
        ...countriesCases.map(({ Country, TotalConfirmed }) => ([Country, TotalConfirmed, "test" ]))
    ];

    const dataTableCases = [
        ['Country', 'CountryCode', 'Slug', 'NewConfirmed', 'TotalConfirmed', 'NewDeaths', 'TotalDeaths', 'NewRecovered','NewRecovered', 'Date'],
        ...countriesCases.map(obj => Object.values(obj))
    ];
    return (
        <>
            <PieChart data={dataPieCases}/>
            <TableChart data={dataTableCases}/>
        </>
    );
};

export default ChartContainer;