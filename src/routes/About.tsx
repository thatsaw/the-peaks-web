import { Card } from "../components/Card";

const data = {
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  subtitle:
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
  image:
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14DAmV.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f",
};

export function About() {
  return (
    <>
      <h1>About</h1>
      <Card {...data} />
      <Card title={data.title} />
    </>
  );
}
