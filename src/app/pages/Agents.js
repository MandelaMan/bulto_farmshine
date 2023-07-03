import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { agents } from "../mock_data";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const Agents = () => {
  const data = useMemo(() => agents, []);

  const [sorting, setSorting] = useState([]);

  //  {
  //   id: "1",
  //   firstname: "Abdinasir",
  //   secondname: "Abdullahi",
  //   phone_number: "Soya Beans",
  //   total_farmers: 12,
  //   acreas_registered: "-",
  //   farmer_traded: "-",
  //   purchased_volume: "199.00 kgs",
  //   inventory_volume: "130.00 kgs",
  // },

  const columns = [
    {
      header: "Agent Name",
      accessorFn: (row) => `${row.firstname} ${row.secondname}`,
    },
    {
      header: "Phone Number",
      accessorKey: "phone_number",
    },
    {
      header: "Total Farmers",
      accessorKey: "total_farmers",
    },
    {
      header: "Acreas Registered ",
      accessorKey: "acreas_registered",
    },
    {
      header: "Farmer Traded",
      accessorKey: "farmer_traded",
    },
    {
      header: "Purchased Volume (T)",
      accessorKey: "purchased_volume",
    },
    {
      header: "Inventory Volume (T)",
      accessorKey: "inventory_volume",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <div>
      <div className="row page-title-header">
        <div className="col-12">
          <div className="page-header">
            <h4 className="page-title">Agents</h4>
            <div className="quick-link-wrapper w-10 d-md-flex flex-md-wrap">
              <ul className="quick-links ml-auto">
                <li>
                  <a href="!#" onClick={(evt) => evt.preventDefault()}>
                    Settings
                  </a>
                </li>
                <li>
                  <a href="!#" onClick={(evt) => evt.preventDefault()}>
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="!#" onClick={(evt) => evt.preventDefault()}>
                    Watchlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        <th>#</th>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            &nbsp;
                            {
                              {
                                asc: (
                                  <BiSolidUpArrow
                                    size={10}
                                    style={{ marginTop: "-2%" }}
                                  />
                                ),
                                desc: (
                                  <BiSolidDownArrow
                                    size={10}
                                    style={{ marginTop: "-2%" }}
                                  />
                                ),
                              }[header.column.getIsSorted() ?? null]
                            }
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map((row) => (
                      <tr
                        key={row.id}
                        onClick={() => console.log("redirect to page")}
                      >
                        <td className="py-1">
                          <img
                            src={require("../../assets/images/faces/face1.jpg")}
                            alt="user icon"
                          />
                        </td>
                        {row.getVisibleCells().map((cell) => (
                          <td key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <br />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => table.setPageIndex(0)}
                >
                  First page
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  Prev page
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  Next page
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                >
                  Last page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
