declare module "*.css" {
  const mapping: Record<string, string>;
  export default mapping;
}

declare module "*.less" {
  const resource: { [key: string]: string };
  export = resource;
}
