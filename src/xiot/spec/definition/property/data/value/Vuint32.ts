import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';
import {Vuint16} from './Vuint16';

export class Vuint32 implements DataValue<number> {

    private value: number = 0;

    static create(value: Object): Vuint32 {
      if (typeof(value) === 'number') {
        const v = new Vuint32();
        v.value = <number>value;
        return v;
      }

      throw new Error('invalid value: ' + value);
    }

    static fromString(value: string): Vuint32 {
        const v = new Vuint32();
        v.value = Number.parseInt(value);
        return v;
    }

    lessEquals(max: DataValue<number>): boolean {
      if (!(max instanceof Vuint32)) {
        return false;
      }

      return this.value < (<Vuint32> max).value;
    }

    validate(min: DataValue<number>, max: DataValue<number>): boolean {
      if (!(min instanceof Vuint32) || !(max instanceof Vuint32)) {
        return false;
      }

      if (this.value < (<Vuint32> min).value || this.value > (<Vuint32> max).value) {
        return false;
      }

      return false;
    }

    validateStep(min: DataValue<number>, max: DataValue<number>, step: DataValue<number> | null): boolean {
      if (!(min instanceof Vuint32) || !(max instanceof Vuint32) || !(step instanceof Vuint32)) {
        return false;
      }

      const minValue = (<Vuint32> min).value;
      const maxValue = (<Vuint32> max).value;
      const stepValue = (<Vuint32> step).value;

      for (let v = minValue; v < maxValue; v += stepValue) {
        if (v === this.value) {
          return true;
        }
      }

      return false;
    }

    getObjectValue(): number {
      return this.value;
    }

    getFormat(): DataFormat {
      return DataFormat.UINT32;
    }
  }
