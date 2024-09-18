declare module "*.js";

declare module "*.jpg" {
  const content: string;
  export default content;
}
