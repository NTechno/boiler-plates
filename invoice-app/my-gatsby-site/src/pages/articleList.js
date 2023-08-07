import React, { useEffect, useState } from "react";
import Header from "../components/layout/header";
import Layout from "../components/layout/layout";
import { TableEle } from "../components/table-ele/table";
import { articleList } from "../service/articleService";

export default function ArticleList() {
  const [TableRows, setTableRows] = useState([]);
  const [TableCols, setTableCols] = useState([]);

  useEffect(() => {
    articleList(null, async (articleData) => {
      console.log("into the list user..", articleData);
      let data = await articleData;
      const col = [
        { title: "Id", name: "id" },
        { title: "Type", name: "type" },
        { title: "Email", name: "email" },
        { title: "CreatedBy", name: "author" },
        { title: "Subject", name: "subject" },
        { title: "Active", name: "active" },
        { title: "Action", name: "edit | delete" },
      ];
      setTableCols(col);
      setTableRows(data);
    });
  }, []);

  return (
    <div className="min-h-full">
      <Header />
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Article
          </h1>
        </div>
      </header>
      <main>
        {TableRows.length > 0 ? (
          <TableEle TableData={{ rows: TableRows, cols: TableCols }} />
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
