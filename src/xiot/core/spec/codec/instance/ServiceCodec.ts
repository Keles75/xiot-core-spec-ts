import {Spec} from '../../typedef/constant/Spec';
import {Service} from '../../typedef/instance/Service';
import {ServiceType} from '../../typedef/definition/urn/ServiceType';
import {PropertyCodec} from './PropertyCodec';
import {ActionCodec} from './ActionCodec';
import {EventCodec} from './EventCodec';
import {DescriptionCodec} from '../definition/DescriptionCodec';

export class ServiceCodec {

    static decodeArray(array: any[]): Service[] {
        const list: Service[] = [];

        if (array != null) {
            for (const o of array) {
               list.push(ServiceCodec.decode(o));
            }
        }

        return list;
    }

    static decode(o: any): Service {
        const iid = o[Spec.IID];
        const type = new ServiceType(o[Spec.TYPE]);
        const description = DescriptionCodec.decode(o[Spec.DESCRIPTION]);
        const properties = PropertyCodec.decodeArray(o[Spec.PROPERTIES]);
        const actions = ActionCodec.decodeArray(o[Spec.ACTIONS]);
        const events = EventCodec.decodeArray(o[Spec.EVENTS]);

        // if (o[Spec.X_OPTIONAL] != null) {
        //     type._optional = o[Spec.X_OPTIONAL];
        // }
        //
        // if (o[Spec.X_PROPERTY_ADDABLE] != null) {
        //     type._property_addable = o[Spec.X_PROPERTY_ADDABLE];
        // }
        //
        // if (o[Spec.X_ACTION_ADDABLE] != null) {
        //     type._action_addable = o[Spec.X_ACTION_ADDABLE];
        // }
        //
        // if (o[Spec.X_EVENT_ADDABLE] != null) {
        //     type._event_addable = o[Spec.X_EVENT_ADDABLE];
        // }

        return new Service(iid, type, description, properties, actions, events);
    }

    static encode(service: Service): any {
        const o: any = {
            iid: service.iid,
            type: service.type.toString(),
            description: DescriptionCodec.encode(service.description),
        };

        if (service.properties.size > 0) {
            o[Spec.PROPERTIES] = PropertyCodec.encodeArray(service.properties);
        }

        if (service.actions.size > 0) {
            o[Spec.ACTIONS] = ActionCodec.encodeArray(service.actions);
        }

        if (service.events.size > 0) {
            o[Spec.EVENTS] = EventCodec.encodeArray(service.events);
        }

        // if (service.type._optional) {
        //     o[Spec.X_OPTIONAL] = true;
        // }
        //
        // if (service.type._property_addable) {
        //     o[Spec.X_PROPERTY_ADDABLE] = true;
        // }
        //
        // if (service.type._action_addable) {
        //     o[Spec.X_ACTION_ADDABLE] = true;
        // }
        //
        // if (service.type._event_addable) {
        //     o[Spec.X_EVENT_ADDABLE] = true;
        // }

        return o;
    }

    static encodeArray(services: Map<Number, Service>): any[] {
        const array: any[] = [];

        services.forEach((service) => {
            array.push(ServiceCodec.encode(service));
        });

        return array;
    }
}
