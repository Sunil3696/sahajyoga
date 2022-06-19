import Swal from "sweetalert2";

export function ActionButton(props) {
    const onDelete = (event) => {
        event.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              props.onDelete(props.dataId)
            }
          })
    }


    const onEdit = (event) => {
        event.preventDefault();
       props.onEdit(props.dataId)
    }
    return (
        <>
            <button onClick={onDelete} className="item-center bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>

            <button onClick={onEdit} className="item-center bg-green-600 hover:bg-green-700 ml-2 text-white text-sm font-medium rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
            </button>
        </>
    )
}