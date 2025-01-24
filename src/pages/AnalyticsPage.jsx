import React from "react";
import { useCustomer } from "../hooks/useCustomer";
import Sidebar from "../components/Sidebar";

const AnalyticsPage = () => {
  const [customerData, saveCustomerDetails, clearCustomerDetails] =
    useCustomer();
  const totalRevenue = customerData?.reduce(
    (acc, order) => acc + order.bill,
    0
  );

  const totalCustomers = customerData?.length;

  const serviceCount = {};
  customerData?.forEach((order) => {
    order.orderinfo.forEach((item) => {
      serviceCount[item.name] = (serviceCount[item.name] || 0) + item.quantity;
    });
  });

  const popularServices = Object.entries(serviceCount)
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));

  const totalOrders = customerData?.length;

  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  const recentOrders = customerData
    .sort(
      (a, b) =>
        new Date(b.TimeandDate).getTime() - new Date(a.TimeandDate).getTime()
    )
    .slice(0, 5);

  return (
    <Sidebar>
      {/* <div className="min-h-screen p-2 sm:p-4"> */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className="p-4 bg-white rounded-lg shadow-md border">
          <h2 className="text-lg md:text-xl font-semibold mb-2 ">
            Total Revenue
          </h2>
          <p className="text-xl md:text-2xl font-bold text-customblack">
            ${totalRevenue}
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md border">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Total Customers
          </h2>
          <p className="text-xl md:text-2xl font-bold text-customblack0">
            {totalCustomers}
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md border">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Total Orders
          </h2>
          <p className="text-xl md:text-2xl font-bold text-customblack">
            {totalOrders}
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md border">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Average Order Value
          </h2>
          <p className="text-xl md:text-2xl font-bold text-customblack">
            ${averageOrderValue?.toFixed(2)}
          </p>
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md col-span-1 sm:col-span-2 lg:col-span-3 border">
          <h2 className="text-lg md:text-xl font-semibold mb-4 ">
            Most Popular Services
          </h2>
          <ul className="space-y-2">
            {popularServices?.map((service, index) => (
              <li
                key={index}
                className="flex justify-between border-b pb-2 text-sm md:text-base"
              >
                <span>{service.name}</span>
                <span className="font-bold">{service.count} orders</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white rounded-lg shadow-md border">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse text-sm md:text-base">
            <thead>
              <tr>
                <th className="border-b px-4 py-2">Customer</th>
                <th className="border-b px-4 py-2">Date</th>
                <th className="border-b px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td className="border-b px-4 py-2">
                    {order?.customerinfo.name}
                  </td>
                  <td className="border-b px-4 py-2">
                    {new Date(order?.TimeandDate).toLocaleString()}
                  </td>
                  <td className="border-b px-4 py-2">${order.bill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* </div> */}
    </Sidebar>
  );
};

export default AnalyticsPage;
