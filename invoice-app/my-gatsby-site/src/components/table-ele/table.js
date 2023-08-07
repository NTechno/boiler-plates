import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function TableEle({ TableData }) {
  const Colums = TableData.cols;
  const Rows = TableData.rows;
  console.log("Colum", Colums);
  console.log("Colum", Rows);

  return (
    <>
      <div class="w-fullscreen m-4">
        <table class="mx-8 border-collapse border border-slate-800 ...">
          <thead>
            <tr>
              {Colums.map((element, index) => {
                return (
                  <th class="border border-slate-300 ..." id={index}>
                    {element.title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {Rows.map((element, index) => {
              return (
                <tr key={index}>
                  {Colums.map((col, id) => {
                    if (col.title == "Action") {
                      return (
                        <td class="border border-slate-300 ..." id={id}>
                          {element[col.name]}
                        </td>
                      );
                    } else {
                      return (
                        <td class="border border-slate-300 ..." id={id}>
                          {element[col.name]}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* </div> */}
      </div>
    </>
  );
}
