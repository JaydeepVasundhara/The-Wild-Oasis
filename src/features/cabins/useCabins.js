import { useQuery } from "@tanstack/react-query";
import { getcabins } from "../../services/apiCabins";

export function useCabins() {
    const { isLoading, data: cabins, error } = useQuery({
        queryKey: ["cabin"],
        queryFn: getcabins,
    });

    return { isLoading, cabins, error }
}

