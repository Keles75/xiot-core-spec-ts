import {ShortcutIcon} from './ShortcutIcon';

export class Shortcut {

    index: number;
    siid: number;
    piid: number;
    value: any;
    icon: ShortcutIcon;
    description: Map<string, string>;

    constructor(index: number,
                siid: number,
                piid: number,
                value: any,
                icon: ShortcutIcon,
                description: Map<string, string>) {
        this.index = index;
        this.siid = siid;
        this.piid = piid;
        this.value = value;
        this.icon = icon;
        this.description = description;
    }
}
