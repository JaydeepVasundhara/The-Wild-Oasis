import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
        mutationFn: deleteBookingApi,
        onSuccess: () => {
            toast.success("Booking Successfully deleted!");

            queryClient.invalidateQueries({
                queryKey: ["booking"],
            });
        },
        onError: (err) => toast.error(err.message),
    });


    return { isDeleting, deleteBooking }
}

