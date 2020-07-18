export interface testConfig {
  ignore?: boolean;
  expect(): Promise<any> | any;
  toBe(): Promise<any> | any;
  strict?: boolean;
  message?: string;
  Ops?: boolean;
  Resources?: boolean;
  only?: boolean;
}

export interface Test extends testConfig {
  label: string;
}

export interface Config {
  ignore?: boolean;
  value(): Promise<any> | any;
  message?: string;
  Ops?: boolean;
  Resources?: boolean;
  only?: boolean;
}

export interface Fetch_equal {
  url: string;
  type: "text" | "json";
  toBe(): Promise<any> | any;
  message?: string;
  ignore?: boolean;
  Ops?: boolean;
  Resources?: boolean;
  only?: boolean;
}

export interface ArrayContains {
  ignore?: boolean;
  value(): Promise<any[]> | any[];
  Contains(): Promise<any> | any;
  message?: string;
  Ops?: boolean;
  Resources?: boolean;
  only?: boolean;
}

export interface StringContains {
  ignore?: boolean;
  value(): Promise<string> | string;
  Contains(): Promise<string> | string;
  message?: string;
  Ops?: boolean;
  Resources?: boolean;
  only?: boolean;
}

export interface NotEqual {
  expect(): Promise<any> | any;
  notBe(): Promise<any> | any;
  ignore?: boolean;
  message?: string;
  Ops?: boolean;
  Resources?: boolean;
  only?: boolean;
}

export interface Length {
  ignore?: boolean;
  expect(): Promise<any[]> | any[];
  toBe(): Promise<any[]> | any[];
  message?: string;
  Ops?: boolean;
  Resources?: boolean;
  only?: boolean;
}

export type Tests = Array<Test>;
