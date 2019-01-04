import {DeviceType} from '../definitions/urn/DeviceType';

export class DeviceSummary {
  public did: string = '';
  public type: DeviceType | null = null;
  public name: string = '';
  public category: string = '';
}
