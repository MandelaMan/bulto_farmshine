import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { purchases } from "../mock_data";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const Reports = () => {
  const data = useMemo(() => purchases, []);

  const [sorting, setSorting] = useState([]);

  // {
  //   purchased_on: "02/06/2023",
  //   bag_no: "Abdinasir",
  //   invoice_no: "Abdullahi",
  //   commodity: "Soya Beans",
  //   farmer: "Jackson Mwaura",
  //   agent_name: "Fidelis Gichuhi",
  //   weight: "123.00",
  //   price: 245,
  //   total: 3900,
  // },

  const columns = [
    {
      header: "Purchased On",
      accessorKey: "purchased_on",
    },
    {
      header: "Bag #",
      accessorKey: "bag_no",
    },
    {
      header: "Invoice #",
      accessorKey: "invoice_no",
    },
    {
      header: "Commodity ",
      accessorKey: "commodity",
    },
    {
      header: "Farmer",
      accessorKey: "farmer",
    },
    {
      header: "Agent Name",
      accessorKey: "agent_name",
    },
    {
      header: "Weight (Kgs)",
      accessorKey: "weight",
    },
    {
      header: "Price (Ksh)",
      accessorKey: "price",
    },
    {
      header: "Total (Ksh)",
      accessorKey: "total",
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
            <h4 className="page-title">Purchases Report</h4>
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
              <h4 className="card-title">Purchases</h4>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
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
                      <tr key={row.id}>
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

export default Reports;
