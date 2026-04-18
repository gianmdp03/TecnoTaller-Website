import { useQuery } from "@tanstack/react-query";
import type { Service } from "../types/Service";

const query = (): Promise<Service[]> =>
  fetch(
    "https://gist.githubusercontent.com/gianmdp03/62b140ab90b44dd4ed28b7a9328b32e9/raw/dee7b4ae1af7b1c69b22e41f6fc683b5a1243987/services.json",
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    return response.json();
  });

function useService() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: query,
  });

  return { data, error, isLoading };
}
export default useService;
