import {DeviceType} from '../../../../..';
import {ServiceTemplate} from './ServiceTemplate';

/**
 * ouyang
 */
export class DeviceTemplate {

    type: DeviceType;
    description: Map<string, string> = new Map<string, string>();
    services: Map<number, ServiceTemplate> = new Map<number, ServiceTemplate>();

    constructor(type: DeviceType,
                description: Map<string, string>,
                services: ServiceTemplate[]) {
        this.type = type;

        if (description != null) {
            this.description = description;
        }

        services.forEach(x => this.services.set(x.iid, x));
    }
}
