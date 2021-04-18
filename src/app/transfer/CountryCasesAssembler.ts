import dayjs from 'dayjs';
import CountryCases from '../models/CountryCases';

export interface SummaryResponse {
    Countries: CountryCases[]
}

export const responseToCountryCases = (countryCases: CountryCases): CountryCases => new CountryCases({
    Country: countryCases.Country,
    CountryCode: countryCases.CountryCode,
    Slug: countryCases.Slug,
    NewConfirmed: countryCases.NewConfirmed,
    TotalConfirmed: countryCases.TotalConfirmed,
    NewDeaths: countryCases.NewDeaths,
    TotalDeaths: countryCases.TotalDeaths,
    NewRecovered: countryCases.NewRecovered,
    TotalRecovered: countryCases.TotalRecovered,
    Date: countryCases.Date !== null ? dayjs(countryCases.Date).format('YYYY-MM-DD') : null,
});

export const responseToSummary = ( summary : SummaryResponse) : Array<CountryCases> => summary.Countries.map(responseToCountryCases)