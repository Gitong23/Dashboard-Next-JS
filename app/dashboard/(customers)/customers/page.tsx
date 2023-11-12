import { fetchCustomers } from "@/app/lib/data";

export default async function Page() {

  const customer = await fetchCustomers()

    return <p>Customers Page</p>;
  }