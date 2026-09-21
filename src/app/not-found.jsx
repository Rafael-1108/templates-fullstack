import { Result } from "antd";

export default function notFound() {
  return (
    <Result status="404" title="404" subTitle="A página não existe"></Result>
  );
}
