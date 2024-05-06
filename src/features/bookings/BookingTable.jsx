import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import { useBookings } from "./useBookings";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";
// import { useSearchParams } from "react-router-dom";

function BookingTable() {
  const { isLoading, bookings, count } = useBookings();
  // const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="bookings" />;

  // const sortBy = searchParams.get("sortBy") || "startDate-asc";

  // const [field, direction] = sortBy.split("-");

  // const modifier = direction === "asc" ? 1 : -1;
  // const sortedBookings = filteredBooking.sort(
  //   (a, b) => (a[field] - b[field]) * modifier
  // );
  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
