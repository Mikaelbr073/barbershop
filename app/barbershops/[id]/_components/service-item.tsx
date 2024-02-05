import { Service } from "@prisma/client";

interface ServiceItemProps {
    service: Service
}

const ServiceItem = ({service}: ServiceItemProps) => {
    return (
        <div>
            <h1>{service.name}</h1>
        </div>
    );
}
 
export default ServiceItem;