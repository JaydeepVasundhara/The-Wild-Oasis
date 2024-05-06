import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSettings() {
    const queryClient = useQueryClient();
    const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
        mutationFn: updateSettingApi,
        onSuccess: () => {
            toast.success("setting successfully updated!");
            queryClient.invalidateQueries({
                queryKey: ["setting"],
            });
        },
        onError: (err) => {
            toast.error(err.message);
        },
    });

    return { isUpdating, updateSetting };
}
