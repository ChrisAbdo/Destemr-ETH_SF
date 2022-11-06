import Triangle from "triangle";
import { useEffect } from "react";

const testing = () => {
  async function fetchNFTs() {
    const triangle = new Triangle(
      "secret_3oAZk3S0ZHjRMXbmO5JDnbdN7YNDli3SqYABaiRS9iE"
    );

    const nfts = await triangle.addresses.nfts(
      "addr_01844a698bd97fb99d617e20c8a726a4"
    );

    console.log(nfts);
  }

  useEffect(() => {
    fetchNFTs();
  }, []);

  return <div>testing</div>;
};

export default testing;
