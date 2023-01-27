import React from "react";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Box, Text, Input, Flex, useFocusEffect } from "@chakra-ui/react";
const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);

  const initialSort = searchParams.getAll("sort");

  const [sort, setSortBy] = useState(initialSort[0] || "");

  const handleFilterCheckbox = (e) => {
    const newCategories = [...category];
    if (newCategories.includes(e.target.value)) {
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
    } else {
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    let params = {};
    params.category = category;
    sort && (params.sort = sort);
    setSearchParams(params);
  }, [category, setSearchParams, sort]);

  return (
    <Box textAlign="left">
      <Text fontWeight="bold" mt="2" letterSpacing="2px">
        FILTERS
      </Text>
      <Flex>
        <input
          type="checkbox"
          value="Body_Lotion"
          checked={category.includes("Body_Lotion")}
          onChange={handleFilterCheckbox}
        />
        <Text color="grey" ml="1" letterSpacing="2px">
          Body Lotion
        </Text>
      </Flex>

      <Flex>
        <input
          type="checkbox"
          value="Body_Cream"
          checked={category.includes("Body_Cream")}
          onChange={handleFilterCheckbox}
        />
        <Text color="grey" ml="1" letterSpacing="2px">
          Cream
        </Text>
      </Flex>
      <Flex>
        <input
          type="checkbox"
          value="Body_Spray_and_Mist"
          checked={category.includes("Body_Spray_and_Mist")}
          onChange={handleFilterCheckbox}
        />
        <Text color="grey" ml="1" letterSpacing="2px">
          Spray & Mist
        </Text>
      </Flex>
      <Flex>
        <input
          type="checkbox"
          value="Body_Wash_and_Shower+Gel"
          checked={category.includes("Body_Wash_and_Shower+Gel")}
          onChange={handleFilterCheckbox}
        />
        <Text color="grey" ml="1" letterSpacing="2px">
          Shower Gel
        </Text>
      </Flex>
      <Flex>
        <input
          type="checkbox"
          value="Shapeable_Soap"
          checked={category.includes("Shapeable_Soap")}
          onChange={handleFilterCheckbox}
        />
        <Text color="grey" ml="1" letterSpacing="2px">
          Soaps
        </Text>
      </Flex>
      <Box>
        <Text fontWeight="bold" mt="2" fontSize="20" letterSpacing="2px">
          Sort Products
        </Text>
        <Flex>
          <input
            type="radio"
            onChange={handleSort}
            defaultChecked={sort === "asc"}
            value="asc"
            name="sortBy"
          />
          <Text ml="2">Ascending</Text>
        </Flex>

        <Flex>
          {" "}
          <input
            type="radio"
            onChange={handleSort}
            defaultChecked={sort === "desc"}
            value="desc"
            name="sortBy"
          />
          <Text ml="2">Descending</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default FilterComp;
