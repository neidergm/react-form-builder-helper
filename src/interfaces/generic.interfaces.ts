export type JSXComponent = (args: I_JsonObject) => JSX.Element;

export interface I_JsonObject {
    [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}
