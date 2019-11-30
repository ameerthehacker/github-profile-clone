import React, { useState, useEffect } from "react";
import { fetchUserOrgs } from "../services/api";
import { Flex, Image, Text, Spinner } from "@chakra-ui/core";
import OrgsLoader from './loaders/orgs-loader';

export default function Org({ username, delay }) {
  const [orgs, setOrgs] = useState(null);

  useEffect(() => {
    fetchUserOrgs(username, delay)
    .then(orgs => setOrgs(orgs))
    .catch(err => console.error(err));
  }, [username, delay]);

  return (
    <>
      <Flex marginTop={"5px"}>
        {orgs? 
          orgs.map(
            org => <Image key={org.id} padding={"3px"} width={"25px"} src={org.avatar_url} />
          )
          :
          null
        }
      </Flex>
    </>
  );
}
