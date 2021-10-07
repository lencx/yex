import { App } from 'vue';

declare const camelize: (str: string) => string;

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
declare function withInstall<T>(options: T): WithInstall<T>;

export { WithInstall, camelize, withInstall };
