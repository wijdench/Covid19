import { RenderResult, act, cleanup, render } from '@testing-library/react';
import Stat from '../../app/routes/Stat';
import Covid19Api from '../../app/api/Covid19Api';
import CountryCase from '../../app/models/CountryCases';

const TEST_ID = 'ChartContainer';

jest.mock('../../app/containers/ChartContainer', () => () => <div data-testid="ChartContainer" />);
jest.mock('../../app/api/Covid19Api');

const Covid19ApiMock = Covid19Api as jest.Mocked<typeof Covid19Api>;

const renderStat = () => render(
    <Stat />,
);

let getByTestId: RenderResult['getByTestId'];


afterEach(() => {
    cleanup();
    jest.clearAllMocks();
});

describe('Given route Stat', () => {
    describe('When countries cases are not loaded', () => {
        beforeEach(() =>{
            act(() => {
                Covid19ApiMock.getCases.mockImplementationOnce(() => new Promise(() => {}));
                ({ getByTestId } = renderStat());
            });
        });

        it('then the chart container is not rendered', () => {
            expect(() => getByTestId(TEST_ID)).toThrow();
        });
    });

    describe('When countries cases are loaded', () => {
        beforeEach(() =>{
            act(() => {
                Covid19ApiMock.getCases.mockResolvedValueOnce([new CountryCase(), new CountryCase()]);
                ({ getByTestId } = renderStat());
            });
        });

        it('then the chart container is rendered', () => {
            expect(() => getByTestId(TEST_ID)).toBeTruthy();
        });
    });
});