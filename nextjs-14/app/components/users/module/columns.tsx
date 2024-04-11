import { Typography } from '@mui/material'
import { GridRowId, GridColDef } from '@mui/x-data-grid'
import { UserColumn } from '../model/user-columns'
import Link from 'next/link'
import { PG } from '../../common/enums/PG'

interface CellType{
    row : UserColumn
}


export default function UsersColumns(): GridColDef[] {

    return [

        {
            flex: 0.04,
            minWidth: 30,
            sortable: true,
            field: 'id',
            headerName: "No.",
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"3rm"}}>  {row.id}</Typography>,
                

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: true,
            field: 'username',
            headerName: "유저네임",
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"3rm"}}>
                <Link href={`${PG.USER}/detail/${row.id}`} className="underline" > {row.username} </Link>
            </Typography>,

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'password',
            headerName: "비밀번호",
            renderCell() { 
                return <>*******
                </>
            }

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: true,
            field: 'name',
            headerName: "이름",
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"3rm"}}>  {row.name}</Typography>,


        },{
            flex: 0.04,
            minWidth: 30,
            sortable: true,
            field: 'phone',
            headerName: "전화번호",
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"3rm"}}>  {row.phone}</Typography>,

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: true,
            field: 'job',
            headerName: "직업",
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"3rm"}}>  {row.job}</Typography>,

        },
    
    ]
}