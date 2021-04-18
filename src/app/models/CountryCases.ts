import Immutable from './Immutable';

interface ICountryCases {
    Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string | null;
}

export default class CountryCases
    extends Immutable<ICountryCases>
    implements ICountryCases {
        readonly Country: string;
        readonly CountryCode: string;
        readonly Slug: string;
        readonly NewConfirmed: number;
        readonly TotalConfirmed: number;
        readonly NewDeaths: number;
        readonly TotalDeaths: number;
        readonly NewRecovered: number;
        readonly TotalRecovered: number;
        readonly Date: string | null;

        constructor({
            Country = '',
            CountryCode = '',
            Slug = '',
            NewConfirmed = 0,
            TotalConfirmed = 0,
            NewDeaths = 0,
            TotalDeaths = 0,
            NewRecovered = 0,
            TotalRecovered = 0,
            Date = '',
        }: Partial<ICountryCases> = {}) {
            super();

            this.Country = Country;
            this.CountryCode = CountryCode;
            this.Slug = Slug;
            this.NewConfirmed = NewConfirmed;
            this.TotalConfirmed = TotalConfirmed;
            this.NewDeaths = NewDeaths;
            this.TotalDeaths = TotalDeaths;
            this.NewRecovered = NewRecovered;
            this.TotalRecovered = TotalRecovered;
            this.Date = Date;
        }
             
       
    }