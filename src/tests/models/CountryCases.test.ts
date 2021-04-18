import CountryCases from '../../app/models/CountryCases';

const country = "Country";
const countryCode = "XX";
const slug = "country";
const newConfirmed = 10;
const totalConfirmed = 100;
const newDeaths = 0;
const totalDeaths = 5;
const newRecovered = 1000;
const totalRecovered = 2000;
const date = "2021-01-01";

const emptyCountryCases = new CountryCases();

const countryCases = new CountryCases({
    Country: country,
    CountryCode: countryCode,
    Slug: slug,
    NewConfirmed: newConfirmed,
    TotalConfirmed: totalConfirmed,
    NewDeaths: newDeaths,
    TotalDeaths: totalDeaths,
    NewRecovered: newRecovered,
    TotalRecovered: totalRecovered,
    Date: date
});

describe('Un empty country cases', () => {
    it('then country is empty', () => {
        expect(emptyCountryCases.Country).toBe('');
    });
    it('then countryCode is empty', () => {
        expect(emptyCountryCases.CountryCode).toBe('');
    });
    it('then slug is empty', () => {
        expect(emptyCountryCases.Slug).toBe('');
    });
    it('then new confirmed cases is zero', () => {
        expect(emptyCountryCases.NewConfirmed).toBe(0);
    });
    it('then total confirmed cases is zero', () => {
        expect(emptyCountryCases.TotalConfirmed).toBe(0);
    });
    it('then new deaths is zero', () => {
        expect(emptyCountryCases.NewDeaths).toBe(0);
    });
    it('then total deaths is zero', () => {
        expect(emptyCountryCases.TotalDeaths).toBe(0);
    });
    it('then new recovered is zero', () => {
        expect(emptyCountryCases.NewRecovered).toBe(0);
    });
    it('then country total recovered is zero', () => {
        expect(emptyCountryCases.TotalRecovered).toBe(0);
    });
    it('then date is empty', () => {
        expect(emptyCountryCases.Date).toBe('');
    });
});

describe('Filled country cases', () => {
    it('then country is not empty', () => {
        expect(countryCases.Country).toBe(country);
    });
    it('then countryCode is not empty', () => {
        expect(countryCases.CountryCode).toBe(countryCode);
    });
    it('then slug is not empty', () => {
        expect(countryCases.Slug).toBe(slug);
    });
    it('then new confirmed cases is not zero', () => {
        expect(countryCases.NewConfirmed).toBe(newConfirmed);
    });
    it('then total confirmed cases is not zero', () => {
        expect(countryCases.TotalConfirmed).toBe(totalConfirmed);
    });
    it('then new deaths is not zero', () => {
        expect(countryCases.NewDeaths).toBe(newDeaths);
    });
    it('then total deaths is not zero', () => {
        expect(countryCases.TotalDeaths).toBe(totalDeaths);
    });
    it('then new recovered is not zero', () => {
        expect(countryCases.NewRecovered).toBe(newRecovered);
    });
    it('then country total recovered is not zero', () => {
        expect(countryCases.TotalRecovered).toBe(totalRecovered);
    });
    it('then date is not empty', () => {
        expect(countryCases.Date).toBe(date);
    });
});