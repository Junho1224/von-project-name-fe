import { Typography } from '@mui/material'
import { GridRowId, GridColDef } from '@mui/x-data-grid'
import { User } from '../model/user'

interface CellType{
    row : User
}


export default function UsersColumns(): GridColDef[] {

    return [

        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id',
            headerName: "No.",
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"3rm"}}>  {row.id}</Typography>,
                

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'username',
            headerName: "유저네임",
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"3rm"}}>  {row.username}</Typography>,

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
            sortable: false,
            field: 'name',
            headerName: "이름",
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"3rm"}}>  {row.name}</Typography>,


        },{
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'phone',
            headerName: "전화번호",
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"3rm"}}>  {row.phone}</Typography>,

        },
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'job',
            headerName: "직업",
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"3rm"}}>  {row.job}</Typography>,

        },
    
    ]
}