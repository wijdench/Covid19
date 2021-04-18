import { FETCH_PARANS_GET, UrlCovid19 }  from '../../app/constants';
import CountryCases from '../../app/models/CountryCases';
import { SummaryResponse } from '../../app/transfer/CountryCasesAssembler';
import Covid19Api from '../../app/api/Covid19Api';

const fetchMock = jest.fn();
global.fetch = fetchMock;

const countryCases = new CountryCases({
    Country: "ALA Aland Islands",
    CountryCode: "AX",
    Slug: "ala-aland-islands",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: "2021-01-01"
});

const anotherCountryCases = new CountryCases({
    Country: "Brazil",
    CountryCode: "BR",
    Slug: "brazil",
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
    Date: "2021-04-04"
});

const JSON_RESPONSE: SummaryResponse = {
    Countries: [countryCases, anotherCountryCases]
};

afterEach(() => {
    jest.clearAllMocks();
});

describe('COVID19 api', () => {
    let getPromise: Promise<Array<CountryCases>>;

    describe('When fetch countries cases', () => {
        beforeEach(() =>{
            const json = jest.fn().mockResolvedValue(JSON_RESPONSE);
            fetchMock.mockResolvedValue({ json });
            getPromise = Covid19Api.getCases();
        });

        it('then the request call the correct endpoint', () => {
            expect(fetch).toHaveBeenCalledWith(expect.anything(), FETCH_PARANS_GET);
        });

        it('then the request use GET', () => {
            expect(fetch).toHaveBeenCalledWith(UrlCovid19, expect.anything());
        });

        it('then the result is countries cases', async () => {
            await expect(getPromise).resolves.toStrictEqual([countryCases, anotherCountryCases]);
        });
    });
});