declare module "react-json-view" {
  import React from "react";

  export interface ReactJsonProps {
    src: object | null;
    name?: string | false | null;
    theme?: string;
    style?: object;
    iconStyle?: "circle" | "triangle" | "square";
    indentWidth?: number;
    collapsed?: boolean | number;
    collapseStringsAfterLength?: number | false;
    shouldCollapse?:
      | ((field: {
          name: string;
          src: object;
          type: string;
          namespace: Array<string | null>;
        }) => boolean)
      | false;
    sortKeys?: boolean;
    quotesOnKeys?: boolean;
    groupArraysAfterLength?: number | false;
    enableClipboard?:
      | boolean
      | ((copy: {
          src: object;
          name: string;
          namespace: Array<string | null>;
        }) => void);
    displayObjectSize?: boolean;
    displayDataTypes?: boolean;
    onEdit?:
      | ((edit: {
          updated_src: object;
          name: string;
          namespace: Array<string | null>;
          new_value?: any;
          existing_value?: any;
        }) => void)
      | false;
    onAdd?:
      | ((add: {
          updated_src: object;
          name: string;
          namespace: Array<string | null>;
          new_value?: any;
          existing_value?: any;
        }) => void)
      | false;
    onDelete?:
      | ((del: {
          updated_src: object;
          name: string;
          namespace: Array<string | null>;
          new_value?: any;
          existing_value?: any;
        }) => void)
      | false;
    onSelect?:
      | ((select: {
          name: string;
          value: any;
          namespace: Array<string | null>;
        }) => void)
      | false;
    validationMessage?: string;
    defaultValue?: object | null;
  }

  const ReactJson: React.FC<ReactJsonProps>;
  export default ReactJson;
}
