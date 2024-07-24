import axios from "axios";

async function get() {
  const headers = {
    Authorization: `Basic 8452ec51c3661c3f428e2ce0ccad52ae5ecb4689`,
  };

  const data = {
    name: "JH",
    lastname: "jjj",
    date_of_birth: "2023-02-05",
    registration_date: "2024-03-12",
    email: "kjkjkj",
    password: "1234",
  };

  const re = await axios.post(
    "https://user-management-system-api-ez1z.onrender.com/api/users/register",
    data,
    { headers },
  );
  console.log(re);
}

get();
