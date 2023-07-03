import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { contracts } from "../mock_data";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const Contracts = () => {
  const data = useMemo(() => contracts, []);

  const [sorting, setSorting] = useState([]);

  // {
  //   ref: "FAR_124",
  //   firstname: "Abdinasir",
  //   secondname: "Abdullahi",
  //   commodity: "Soya Beans",
  //   yield: 400,
  //   offered: 500.0,
  //   planting_date: "01/04/2023",
  //   harvest_date: "31/07/2023",
  //   expected_sale_date: "05/07/2023",
  //   status: "Active",
  //   agent: "Mike Mundu",
  // },

  const columns = [
    {
      header: "#Ref",
      accessorKey: "ref",
    },

    {
      header: "Farmer",
      accessorFn: (row) => `${row.firstname} ${row.secondname}`,
    },
    {
      header: "Commodity",
      accessorKey: "commodity",
    },
    {
      header: "Yield",
      accessorKey: "yield",
    },
    {
      header: "Offered",
      accessorKey: "offered",
    },
    {
      header: "Planting Date",
      accessorKey: "planting_date",
    },
    {
      header: "Harvest Date",
      accessorKey: "harvest_date",
    },
    {
      header: "Expected Sale Date",
      accessorKey: "expected_sale_date",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Agent",
      accessorKey: "agent",
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
            <h4 className="page-title">Contracts</h4>
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
                <table className="table">
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

export default Contracts;
