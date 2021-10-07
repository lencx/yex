import * as vue from 'vue';
import { App } from 'vue';

declare type EventShim = {
    new (...args: any[]): {
        $props: {
            onClick?: (...args: any[]) => void;
        };
    };
};
declare type WithInstall<T> = T & {
    install(app: App): void;
} & EventShim;

declare const ScrollProgressBar: WithInstall<vue.DefineComponent<{
    root: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    height: {
        type: StringConstructor;
        default: string;
        required: false;
    };
    theme: {
        type: StringConstructor;
        default: string;
        required: false;
        validator: (color: string) => boolean;
    };
    placement: {
        type: StringConstructor;
        default: string;
        required: false;
        validator: (v: string) => boolean;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
        required: false;
        validator: (v: string) => boolean;
    };
}, JSX.Element, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<{
    root?: unknown;
    height?: unknown;
    theme?: unknown;
    placement?: unknown;
    zIndex?: unknown;
} & {
    root: string;
    height: string;
    theme: string;
    placement: string;
    zIndex: number;
} & {}>, {
    root: string;
    height: string;
    theme: string;
    placement: string;
    zIndex: number;
}>>;

export { ScrollProgressBar, ScrollProgressBar as default };
