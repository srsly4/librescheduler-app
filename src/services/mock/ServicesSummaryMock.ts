import ServicesSummary, {ServiceWithProviderAvailabilities} from "../ServicesSummary";

const ServicesSummaryMock: ServicesSummary = {
    getAvailableServices(): Promise<Array<ServiceWithProviderAvailabilities>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        name: 'Some service',
                        createdAt: '2019-01-01',
                        updatedAt: '2019-01-01',
                        providers: [],
                    },
                    {
                        id: 2,
                        name: 'Some service 2',
                        createdAt: '2019-01-01',
                        updatedAt: '2019-01-01',
                        providers: [],
                    }
                ]);
            }, 1000);
        })
    }
}

export default ServicesSummaryMock;