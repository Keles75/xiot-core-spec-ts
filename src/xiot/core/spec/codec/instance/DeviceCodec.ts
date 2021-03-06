import {Spec} from '../../typedef/constant/Spec';
import {Device} from '../../typedef/instance/Device';
import {DeviceType} from '../../typedef/definition/urn/DeviceType';
import {ServiceCodec} from './ServiceCodec';
import {DescriptionCodec} from '../definition/DescriptionCodec';

export class DeviceCodec {

    static decode(o: any): Device {
        const type = new DeviceType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        const services = ServiceCodec.decodeArray(o[Spec.SERVICES]);
        return new Device(type, description, services);
    }

    static encode(device: Device): any {
        return {
            type: device.type.toString(),
            description: DescriptionCodec.encode(device.description),
            services: ServiceCodec.encodeArray(device.services)
        };
    }
}
