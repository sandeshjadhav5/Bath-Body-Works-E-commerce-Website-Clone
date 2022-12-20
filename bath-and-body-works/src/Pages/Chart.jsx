import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  ResponsiveContainer,
} from "recharts";
import { Box, Text, SimpleGrid } from "@chakra-ui/react";
const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
];
const data = [
  {
    id: 1,
    image:
      "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwcab0bc33/large/026335796.jpg",
    name: "Winter Candy Apple",
    category: "Body Spray and Mist",
    price: 599,
  },
  {
    id: 2,
    image:
      "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwc845679c/large/026338979.jpg",
    name: "Winter Candy Apple",
    category: "Body_Scrub",
    price: 1599,
  },
  {
    id: 3,
    image:
      "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dwe2e4b6e7/large/026338991.jpg",
    name: "Tis the Season",
    category: "Shapeable_Soap",
    price: 1999,
  },
  {
    id: 4,
    image:
      "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw3c1f14ab/large/026338412.jpg",
    name: "Winter Candy Apple",
    category: "Moisturizing_Body_Wash",
    price: 2599,
  },
  {
    id: 5,
    image:
      "https://www.bathandbodyworks.in/on/demandware.static/-/Sites-bathandbody_master_catalog/default/dw4a0e1e8f/large/026338987.jpg",
    name: "Vanilla Bean Noel",
    category: "Body_Lotion",
    price: 2609,
  },
];
function PureComponent() {
  return (
    <SimpleGrid minChildWidth="420px" spacing="40px">
      <Box w="100%">
        <LineChart width={400} height={200} data={data}>
          <Line
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
        <Text>Sales Growth</Text>
      </Box>
      <Box w="100%">
        <PieChart width={400} height={200}>
          <Pie
            data={data01}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </Box>
    </SimpleGrid>
  );
}

export default PureComponent;
