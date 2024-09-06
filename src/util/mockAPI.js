import { useState } from "react";
import { useNavigate } from "react-router-dom";

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;

  return () => (s = (s * a) % m) / m;
};

const fetch = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }

  return result;
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (to, data) => {
    setLoading(true);
    await wait(1000);
    setLoading(false);
    navigate(to);
  };

  return { isLoading, submit };
};

export { fetch, useSubmit };
