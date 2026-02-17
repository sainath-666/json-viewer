declare module "jsoneditor-react" {
  import { Component } from "react";

  /* eslint-disable @typescript-eslint/no-explicit-any */
  export interface JsonEditorProps {
    value?: any;
    mode?: "tree" | "view" | "form" | "code" | "text";
    name?: string;
    schema?: object;
    schemaRefs?: object;
    onChange?: (value: any) => void;
    onChangeJSON?: (value: any) => void;
    onChangeText?: (value: string) => void;
    onModeChange?: (newMode: string, oldMode: string) => void;
    onValidate?: (json: any) => any;
    onError?: (err: Error) => void;
    ace?: object;
    ajv?: object;
    theme?: string;
    history?: boolean;
    navigationBar?: boolean;
    statusBar?: boolean;
    search?: boolean;
    allowedModes?: string[];
    tag?: string;
    htmlElementProps?: object | React.HTMLAttributes<HTMLElement>;
    innerRef?: (instance: any) => void;
    sortObjectKeys?: boolean;
    mainMenuBar?: boolean;
  }

  export class JsonEditor extends Component<JsonEditorProps> {}
}
