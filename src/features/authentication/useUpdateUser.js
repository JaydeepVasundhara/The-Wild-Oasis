import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentuser } from "../../services/apiAuth";

export function useUpdateUser() {
    const queryClient = useQueryClient();
    const { isLoading: isUpdating, mutate: updateUser } = useMutation({
        mutationFn: updateCurrentuser,
        onSuccess: () => {
            toast.success("user account successfully updated!");
            queryClient.invalidateQueries({
                queryKey: ["user"],
            });
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { isUpdating, updateUser };
}
