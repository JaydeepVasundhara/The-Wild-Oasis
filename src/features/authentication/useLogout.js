import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LogOut as LogOutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate()
    const QueryClient = useQueryClient()

    const { mutate: logout, isLoading } = useMutation({
        mutationFn: LogOutApi,
        onSuccess: () => {
            QueryClient.removeQueries();
            navigate("/login", { replace: true })
        }
    })

    return { logout, isLoading }
}