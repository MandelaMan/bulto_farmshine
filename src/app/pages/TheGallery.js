import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Gallery } from "react-grid-gallery";
import GalleryCarousel from "../popups/GalleryCarousel";

const TheGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const farmer_1 =
    "https://img.freepik.com/free-photo/countryside-workers-out-field_23-2148761770.jpg?w=1380&t=st=1687774556~exp=1687775156~hmac=31b5dd43fbdb013a2864667b4564cb382d8969bf5c9b275b61e6a4b51ff699b2";

  const farmer_2 =
    "https://img.freepik.com/free-photo/medium-shot-farmers-with-smartphone_23-2149142889.jpg?w=996&t=st=1687774668~exp=1687775268~hmac=edfa482d04b52415dca6949af868116cfb58b849205b573e8a46c10f5b960866";

  const images = [
    {
      src: farmer_1,
      width: 380,
      height: 210,
      tags: [
        // { value: "Ocean", title: "Ocean" },
        // { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: farmer_2,
      width: 320,
      height: 212,
      tags: [
        // { value: "Ocean", title: "Ocean" },
        // { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: farmer_1,
      width: 380,
      height: 210,
      tags: [
        // { value: "Ocean", title: "Ocean" },
        // { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: farmer_1,
      width: 380,
      height: 210,
      tags: [
        // { value: "Ocean", title: "Ocean" },
        // { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: farmer_1,
      width: 380,
      height: 210,
      tags: [
        // { value: "Ocean", title: "Ocean" },
        // { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: farmer_2,
      width: 320,
      height: 212,
      tags: [
        // { value: "Ocean", title: "Ocean" },
        // { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: farmer_1,
      width: 380,
      height: 210,
      tags: [
        // { value: "Ocean", title: "Ocean" },
        // { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: farmer_2,
      width: 320,
      height: 212,
      tags: [
        // { value: "Ocean", title: "Ocean" },
        // { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: farmer_1,
      width: 380,
      height: 210,
      tags: [
        // { value: "Ocean", title: "Ocean" },
        // { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: farmer_2,
      width: 320,
      height: 212,
      tags: [
        // { value: "Ocean", title: "Ocean" },
        // { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
  ];

  return (
    <div>
      <GalleryCarousel modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="row page-title-header">
        <div className="col-12">
          <div className="page-header">
            <h4 className="page-title">Gallery</h4>
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
        <div className="col-md-12">
          <div className="page-header-toolbar">
            <div className="filter-wrapper">
              <a
                href="!#"
                onClick={(evt) => evt.preventDefault()}
                className="advanced-link toolbar-item"
              >
                Filter Options
              </a>
              <div className="dropdown toolbar-item">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="btn btn-secondary dropdown-toggle"
                    id="dropdownMenuButton1"
                  >
                    By Album
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Farmers</Dropdown.Item>
                    <Dropdown.Item>Agents</Dropdown.Item>
                    <Dropdown.Item>Inventory</Dropdown.Item>
                    <Dropdown.Item>Partnerships</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Gallery images={images} />
          <button onClick={() => setModalOpen(!modalOpen)}>
            Open carousel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheGallery;
