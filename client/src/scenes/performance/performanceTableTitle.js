export const rowTitles = (isDashboard) => {
  return isDashboard
    ? [
        {
          headerName: 'ID',
        },

        {
          headerName: 'Name',
        },
        {
          headerName: 'Created At',
        },
        {
          headerName: 'Products',
        },
        {
          headerName: 'Cost',
        },
      ]
    : [
        {
          headerName: 'ID',
        },
        {
          headerName: 'userId',
        },
        {
          headerName: 'Name',
        },
        {
          headerName: 'Created At',
        },
        {
          headerName: 'Products',
        },
        {
          headerName: 'Cost',
        },
      ]
}
