import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
    const navigate = useNavigate()
    const QueryClient = useQueryClient()

    const { mutate: login, isLoading } = useMutation({
        mutationFn: loginApi,
        onSuccess: (user) => {
            QueryClient.setQueryData(["user"], user.user)
            navigate("/dashboard", { replace: true })
        },
        onError: (err) => {
            console.log(err);
            toast.error(err.message)
        }
    })

    return { isLoading, login }
}

