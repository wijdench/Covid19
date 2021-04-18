import { FETCH_PARANS_GET, UrlCovid19 }  from '../constants';
import CountryCases from '../models/CountryCases';
import { responseToSummary, SummaryResponse } from '../transfer/CountryCasesAssembler';

const Covid19Api = {
     getCases(): Promise<CountryCases[]> {
         return fetch(UrlCovid19, FETCH_PARANS_GET)
            .then(response => response.json())
            .then(responseToSummary)
     }

}

export default Covid19Api;
