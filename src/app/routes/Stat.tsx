import { useEffect, useState } from 'react';
import CountryCases from '../models/CountryCases';
import ChartContainer from '../containers/ChartContainer';
import Covid19Api from '../api/Covid19Api';

const Stat = (): JSX.Element => {
    const [countriesCases, setCountriesCases] = useState<CountryCases[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        Covid19Api.getCases()
            .then(cases => cases.sort((a,b) => b.TotalConfirmed - a.TotalConfirmed).slice(0, 10))
            .then(setCountriesCases)
            .then(() => setLoading(false));
    }, []);

    return (
        <>
            {!loading && <ChartContainer countriesCases={countriesCases} />}
        </>
    );
}

Stat.displayName = 'Stat';

export default Stat;
