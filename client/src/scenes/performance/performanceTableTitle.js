export const rowTitles = (isDashboard) => {
  return isDashboard
    ? [
        {
          headerName: 'id',
        },

        {
          headerName: 'name',
        },
        {
          headerName: 'createdAt',
        },
        {
          headerName: 'products',
        },
        {
          headerName: 'cost',
        },
      ]
    : [
        {
          headerName: 'id',
        },
        {
          headerName: 'userId',
        },
        {
          headerName: 'name',
        },
        {
          headerName: 'createdAt',
        },
        {
          headerName: 'products',
        },
        {
          headerName: 'cost',
        },
      ]
}
