"use client";

import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Show(): JSX.Element {
  const now = performance.now();
  return <>{`Show component now=${now.toFixed(2)}`}</>;
}

function TableRow({
  index,
  data,
}: Readonly<{
  index: number;
  data: { data1: string; data2: string };
}>): JSX.Element {
  const now = performance.now();
  return (
    <tr key={index}>
      <td>{data.data1}</td>
      <td>{data.data2}</td>
      <td>{now.toFixed(2)}</td>
    </tr>
  );
}

const MemoTableRow = React.memo(TableRow);

let index = 1;
const master_dataset = [
  { id: index++, data1: "data1-1", data2: "data1-2" },
  { id: index++, data1: "data2-1", data2: "data2-2" },
  { id: index++, data1: "data3-1", data2: "data3-2" },
  { id: index++, data1: "data4-1", data2: "data4-2" },
  { id: index++, data1: "data5-1", data2: "data5-2" },
];

export default function TablePage() {
  const [update, setUpdate] = useState<number>(0);
  const [dataset, setDataset] = useState<
    { id: number; data1: string; data2: string }[]
  >([...master_dataset]);

  return (
    <>
      <p>
        更新ボタン押下でレンダリング
        <br />
        (Showがレンダリングされた場合は時間が更新)
        <br />
        挿入ボタン押下で行挿入
        <br />
        (行を挿入しても、既存のTableRowのtimeは更新されない(レンダリングされない))
      </p>
      <Button className="mx-1" onClick={() => setUpdate(update + 1)}>
        更新
      </Button>
      <Button
        className="mx-1"
        onClick={() => {
          const id = index++;
          dataset.push({ id: id, data1: `data${id}-1`, data2: `data${id}-2` });
          setDataset([...dataset]);
        }}
      >
        挿入
      </Button>
      <Button className="mx-1" onClick={() => setDataset([...master_dataset])}>
        クリア
      </Button>
      <Button
        className="mx-1"
        onClick={() => {
          // 更新を反映するにはid(key)を変更する
          dataset[0].id = index++;
          dataset[0].data1 = "data1-changed";
          setDataset([...dataset]);
        }}
      >
        一行目変更
      </Button>
      <hr />
      <Show />
      <hr />
      <Table bordered hover>
        <thead>
          <tr>
            <th>data1</th>
            <th>data2</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          {dataset.map((data, index) => (
            <MemoTableRow key={data.id} index={index} data={data} />
          ))}
        </tbody>
      </Table>
    </>
  );
}
