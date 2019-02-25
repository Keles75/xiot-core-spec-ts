import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {DeviceCodec} from "../../../../../../src/xiot/core/spec/codec/instance/DeviceCodec";

describe('DeviceCodec', async () => {

    let folder = './resources/spec/xiot/instance/';
    let dir = await fs.readdir(folder);

    it('reading devices instance, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('  check: ' + file, async () => {
            let a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const device = DeviceCodec.decode(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(DeviceCodec.encode(device)));
        });
    }
});