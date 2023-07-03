import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { AiFillFastBackward } from "react-icons/ai";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { farmers } from "../../mock_data";

const Agent = () => {
  const data = useMemo(() => farmers, []);

  const [sorting, setSorting] = useState([]);

  const columns = [
    {
      header: "Farmer",
      accessorFn: (row) => `${row.firstname} ${row.secondname}`,
    },
    {
      header: "Phone Number",
      accessorKey: "phone_number",
    },
    {
      header: "County of Origin",
      accessorKey: "farmer_county",
    },
    {
      header: "Acreage",
      accessorKey: "acreage",
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
            <Link to="/farmers">
              <AiFillFastBackward size={20} />
              &nbsp;Back to Agent List
            </Link>
            <div className="quick-link-wrapper w-10 d-md-flex flex-md-wrap">
              <ul className="quick-links ml-auto">
                <li>
                  <a href="!#" onClick={(evt) => evt.preventDefault()}>
                    Edit details
                  </a>
                </li>
                <li>
                  <a href="!#" onClick={(evt) => evt.preventDefault()}>
                    Generate Report
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 grid-margin">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src={require("../../../assets/images/farmer-default.jpg")}
                        alt="user icon"
                      />
                    </div>
                    <div className="col-md-9">
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <span className="card-title">Name</span>
                          &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;Abdinasir Abdullahi
                        </li>
                        <li>
                          <span className="card-title">Gender</span>
                          &nbsp;:&nbsp;&nbsp;Male
                        </li>
                        <li>
                          <span className="card-title">Mobile</span>
                          &nbsp;&nbsp;:&nbsp;&nbsp;+254 701 567455
                        </li>

                        <li>
                          <span className="card-title">County</span>
                          &nbsp;:&nbsp;&nbsp;Kisii
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper">
                    <h5 className="mb-2 font-weight-medium text-primary">
                      Total Registered Farmers
                    </h5>
                    <h3 className="mb-0 font-weight-semibold">136</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper">
                    <h5 className="mb-2 font-weight-medium text-primary">
                      Acreas Registered
                    </h5>
                    <h3 className="mb-0 font-weight-semibold">
                      40{" "}
                      <span style={{ color: "#58d8a3", fontSize: "0.5em" }}>
                        <BiSolidUpArrow
                          size={12}
                          style={{ marginTop: "-1%" }}
                        />
                        &nbsp;+0.50%
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper">
                    <h5 className="mb-2 font-weight-medium text-primary">
                      Farmer Traded
                    </h5>
                    <h3 className="mb-0 font-weight-semibold">
                      3,136{" "}
                      <span style={{ color: "#F95F53", fontSize: "0.5em" }}>
                        <BiSolidDownArrow
                          size={12}
                          style={{ marginTop: "-1%" }}
                        />
                        &nbsp;+0.90%
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper">
                    <h5 className="mb-2 font-weight-medium text-primary">
                      Purchased Volume (T)
                    </h5>
                    <h3 className="mb-0 font-weight-semibold">
                      199 Kgs{" "}
                      <span style={{ color: "#F95F53", fontSize: "0.5em" }}>
                        <BiSolidDownArrow
                          size={12}
                          style={{ marginTop: "-1%" }}
                        />
                        &nbsp;+0.90%
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper">
                    <h5 className="mb-2 font-weight-medium text-primary">
                      Inventory Volume (T)
                    </h5>
                    <h3 className="mb-0 font-weight-semibold">
                      130 kgs{" "}
                      <span style={{ color: "#F95F53", fontSize: "0.5em" }}>
                        <BiSolidDownArrow
                          size={12}
                          style={{ marginTop: "-1%" }}
                        />
                        &nbsp;+0.50%
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 grid-margin">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper">
                    <h3 className="card-title">Agent's Farmers list</h3>
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
                            <tr
                              key={row.id}
                              onClick={() =>
                                window.location.assign("/farmer/123")
                              }
                              style={{ cursor: "pointer" }}
                            >
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
                        onClick={() =>
                          table.setPageIndex(table.getPageCount() - 1)
                        }
                      >
                        Last page
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
