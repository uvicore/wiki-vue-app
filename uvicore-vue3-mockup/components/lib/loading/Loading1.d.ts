import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
declare const _default: DefineComponent<{
    msg: {
        type: StringConstructor;
        default: string;
    };
    animation: {
        type: StringConstructor;
        default: string;
    };
    spinColor: {
        type: StringConstructor;
        default: string;
    };
    msgColor: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    spinClass(): string;
}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    animation: string;
    msg: string;
    spinColor: string;
    msgColor: string;
} & {}>, {
    animation: string;
    msg: string;
    spinColor: string;
    msgColor: string;
}>;
export default _default;
