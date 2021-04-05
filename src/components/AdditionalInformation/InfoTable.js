import React from "react";
import { Table, TableHeader, TableRow, TableItem } from "./InfoTableElement";

const InformationTable = () => {
  const STORIES = [
    `ReactJS Pagination Tutorial: Building from Scratch by @codebucks`,
    `60fps: Powerful Tricks & Tools To Stop TypeScript and Javascript Jank by @whydoidoit`,
    `Important Differences Between Cloud-Based, Cloud-Enabled, And Cloud-Native Apps by @eugenia-kuzmenko`,
    `5 Important Things We Should Stop Neglecting When Hiring by @alizakr`,
    `Reviewing the Font: Playfair Display by @huashu`,
    `Balancing Cybersecurity Risk with Technological Innovation: Using Policy as Code by @drewzola`,
  ];
  const SUBJECTS = [
    `#reactjs`,
    `#javascript`,
    `#cloud-computing`,
    `#future-of-work`,
    `#digital-marketing-design`,
    `#security`,
  ];
  return (
    <Table>
      <TableHeader>
        <TableItem>
          <div>Related Stories</div>
        </TableItem>
        <TableItem>
          <div
            style={{
              textAlign: "center",
              lineHeight: "2rem",
              textDecoration: "underline",
            }}
          >
            Subject Matter
            <div
              style={{
                fontWeight: "lighter",
                fontSize: "1.0rem",
                color: "green",
                textDecoration: "underline",
              }}
            >
              #promoted
            </div>
          </div>
        </TableItem>
      </TableHeader>
      {STORIES.map((val, index) => (
        <TableRow>
          <TableItem>
            <div style={{ fontSize: "1.0rem" }}>{val}</div>
          </TableItem>
          <TableItem>
            <div style={{ textAlign: "center", fontSize: "1.0rem" }}>
              {SUBJECTS[index]}
            </div>
          </TableItem>
        </TableRow>
      ))}
    </Table>
  );
};
export default InformationTable;
