import { useMemo } from 'react';
import { LiaPlusSolid } from "react-icons/lia";
import { BsPencilFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import Button from '../../components/Button/Button';
import { Box, IconButton, Tooltip} from '@mui/material';
import { MaterialReactTable, useMaterialReactTable} from 'material-react-table';


/**
 * @module ProductList/ProductList
 */
const ProductList = () => {
    const data = [
        {id: 1, category: "PC", name: "Example Product 1", quantity: 10, price: 100},
        {id: 2, category: "Clothes", name: "Example Product 2", quantity: 20, price: 200},
        {id: 3, category: "Grocery", name: "Example Product 3", quantity: 30, price: 300},
    ];

    const columns = useMemo(
        () => [
            {accessorKey: 'id', header: 'ID', size: 50},
            {accessorKey: 'category', header: 'Category', size: 100},
            {accessorKey: 'name', header: 'Name', size: 200},
            {accessorKey: 'quantity', header: 'Quantity', size: 100},
            {accessorKey: 'price', header: 'Price', size: 100},
        ],
        []
    );

    const table = useMaterialReactTable({
        columns,
        data,
        enableEditing: true,
        positionActionsColumn: "last",
        enableFullScreenToggle: false,
        getRowId: (row) => row.id,
        renderRowActions: ({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
                <Tooltip title="Edit">
                    <IconButton onClick={() => table.setEditingRow(row)}>
                        <BsPencilFill />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton
                        color="error"
                        onClick={() => openDeleteConfirmModal(row)}
                    >
                        <MdDeleteForever className='text-secondary' />
                    </IconButton>
                </Tooltip>
            </Box>
        ),
        muiTableBodyProps: {
            sx: {
                '& tr:nth-of-type(odd) > td': {
                    backgroundColor: 'rgba(25, 135, 84, 0.8)',
                },
                '& tr:nth-of-type(even) > td': {
                    backgroundColor: 'rgb(217, 217, 217)',
                }
            }
        },
        muiTablePaperProps: {
            sx: {
                backgroundColor: 'rgb(217, 217, 217)',
            }
        },
        enableBottomToolbar: false,
    });

    const openDeleteConfirmModal = (row) => {
        // TODO: Implement delete confirm modal
        console.log(row);
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                    <div className="col-6 col-sm-auto">
                        <Button 
                            className="border-0 rounded-0"
                            text='Preview'
                            size='lg'
                            color='light'
                            icon={<IoPersonOutline className='pe-2' />}
                        />
                    </div>
                    <div className="col-6 col-sm-auto">
                        <Button 
                            className="border-0 rounded-0"
                            text='Add Product'
                            size='lg'
                            color='light'
                            icon={<LiaPlusSolid className='pe-2' />}
                        />
                    </div>
                </div>
                <h1 className='display-1 py-5 text-white fw-bolder text-center'>Products</h1>
                <div className='container'>
                    <MaterialReactTable table={table} />
                </div>
            </div>
        </div>
    );
}

export default ProductList;
