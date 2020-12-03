import React, {useContext} from "react";
import ServicesSummary from "./ServicesSummary";
import ServicesSummaryMock from "./mock/ServicesSummaryMock";

interface InjectedServices {
    servicesSummary: ServicesSummary,
}

const services: InjectedServices = {
    servicesSummary: ServicesSummaryMock,
}


const ServiceContext = React.createContext<InjectedServices>(services)

const useService = <T>(name: string): T => {
    const services: {[key: string]: any} = useContext(ServiceContext);

    return services[name];
}


export {
    ServiceContext,
    useService,
}