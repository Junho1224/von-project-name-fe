import { Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { BoardColumn } from "../model/board-column";
import { PG } from "@/app/components/common/enums/PG";
import { MyTypography } from "../../common/style/cell";
import Link from "next/link";



interface CellType{
    row : BoardColumn
}


export default function BoardColumns(): GridColDef[]{

    return [
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: 'No.',
            renderCell: ({row}:CellType) => MyTypography(row.id, "1.2rem")
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'boardName',
            headerName: '게시판명',
            renderCell: ({row}:CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>
                <Link href={`${PG.BOARD}/detail/${row.id}`} className="underline" > {row.boardName} </Link>
                </Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'boardType',
            headerName: '게시판 종류',
            renderCell: ({row}:CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.boardType}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'regDate',
            headerName: '등록일',
            renderCell: ({row}:CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.regDate}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'modDate',
            headerName: '수정일',
            renderCell: ({row}:CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.modDate}</Typography>
        },
    ]

}