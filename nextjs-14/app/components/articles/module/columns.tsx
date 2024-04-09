import { Link, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { ArticleColumn } from "../model/article-column";
import { PG } from "@/app/components/common/enums/PG";


interface CellType{
    row : ArticleColumn
}

export default function Columns(): GridColDef[]{
    return [
        {
            flex: 0.04,
            minWidth:30,
            sortable: false,
            field: 'id',
            headerName: "No.",
            renderCell: ({row}:CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.id}</Typography>
            

        },
        {
            flex: 0.04,
            minWidth:30,
            sortable: false,
            field: 'title',
            headerName: "제목",
            renderCell: ({row}:CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.title}</Typography>
            

        },
        {
            flex: 0.04,
            minWidth:30,
            sortable: false,
            field: 'content',
            headerName: "내용",
            renderCell: ({row}:CellType) =>  <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  {row.content}</Typography>
            

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

