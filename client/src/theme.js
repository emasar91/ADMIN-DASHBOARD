const fontFamily = `"Inter","Helvetica Neue",Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === 'dark'
        ? {
            primary: {
              main: '#3b7ddd',
            },
            secondary: {
              main: '#0000',
            },
            searchBar: {
              background: { main: '#066178' },
            },
            paper: { main: '#1E1E1E' },
            text: {
              primary: '#ffff',
            },
            appBar: {
              background: { main: '#02293d' },
            },
            success: {
              main: '#066178',
            },
            background: {
              default: '#19222c',
            },
            selectedItem: '#FFFFFF',
            noneSelected: '#676D7C',
            app: {
              background: '#19222C',
            },
            navBar: {
              background: '#19222C',
              searchBar: {
                background: '#222e3c',
                iconColor: '#A7ABB1',
              },
            },
            sideBar: {
              background: '#222E3C',
              item: {
                itemTitle: '#6d757f',
                itemTitleHover: '#e9ecef',
                itemTitleActive: '#518be1',
                borderLeftActive: '#3b7ddd',
                background:
                  'linear-gradient(90deg,rgba(59,125,221,.1),rgba(59,125,221,.088) 50%,hsla(0,0%,100%,0))',
              },
            },
            scenes: {
              title: '#f1ffff',
            },
            productScene: {
              product: {
                background: '#222e3c',
                title: '#f1ffff',
                category: '#aaaeb4',
                price: '#aaaeb4',
                actionButtons: {
                  moreData: '#aaaeb4',
                },
              },
            },
            costumersScene: {
              background: '#222e3c',
              table: {
                cellStyle1: '#222e3c',
                cellStyle2: '#2d3846',
                header: 'transparent',
                text: '#bdc0c5',
                role: {
                  admin: '#1cbb8c',
                  superadmin: '#dc3545',
                  user: '#3b7ddd',
                  text: '#ffffff',
                },
              },
            },
            transactionScene: {
              background: '#222e3c',
            },
            overviewScene: {
              background: '#222e3c',
              chart: {
                values: '#bdc0c5',
                line1: '#3b7ddd',
                line2: '#1cbb8c',
              },
            },
            dailyScene: {
              background: '#222e3c',
              chart: {
                values: '#bdc0c5',
                line1: '#3b7ddd',
                line2: '#1cbb8c',
              },
            },
            breakdownScene: {
              background: '#222e3c',
              chart: {
                tooltip: {
                  background: '#222e3c',
                  text: '#bdc0c5',
                },
                values: '#bdc0c5',
                color1: '#3b7ddd',
                color2: '#dc3545',
                color3: '#fcb92c',
                color4: '#1cbb8c',
              },
            },
            adminScene: {
              background: '#222e3c',
              table: {
                cellStyle1: '#222e3c',
                cellStyle2: '#2d3846',
                header: 'transparent',
                text: '#bdc0c5',
                role: {
                  admin: '#1cbb8c',
                  text: '#ffffff',
                },
              },
            },
            performanceScene: {
              background: '#222e3c',
              table: {
                header: 'transparent',
                cellStyle1: '#222e3c',
                cellStyle2: '#2d3846',
                text: '#bdc0c5',
                cost: {
                  low: '#dc3545',
                  mid: '#3b7ddd',
                  hight: '#1cbb8c',
                  text: '#ffffff',
                },
              },
            },
            dashboardScene: {
              background: '#222e3c',
              statBox: {
                title: '#d3d5d8',
                icon: '#3b7ddd',
                value: '#ffffff',
                since: '#bdc0c5',
                increase: {
                  hight: {
                    background: '#214348',
                    color: '#1cb086',
                  },
                  mid: {
                    background: '#263a54',
                    color: '#3b7ddd',
                  },
                  low: {
                    background: '#3e2f3d',
                    color: '#da3545',
                  },
                },
              },
            },
          }
        : {
            primary: {
              main: '#3b7ddd',
            },
            secondary: {
              main: '#0000',
            },
            searchBar: {
              background: { main: '#066178' },
            },
            paper: { main: '#1E1E1E' },
            text: {
              primary: '#495057',
            },
            success: {
              main: '#066178',
            },
            background: {
              default: '#f5f7fb',
            },
            selectedItem: '#1E1E1E',
            noneSelected: '#676D7C',
            app: {
              background: '#19222C',
            },
            navBar: {
              background: '#ffffff',
              searchBar: {
                background: '#f3f6fa',
                iconColor: '#6c757d',
              },
            },
            sideBar: {
              background: '#ffffff',
              item: {
                itemTitle: '#6d757f',
                itemTitleHover: '#518be1',
                itemTitleActive: '#518be1',
                borderLeftActive: '#3b7ddd',
                background:
                  'linear-gradient(90deg,rgba(59,125,221,.1),rgba(59,125,221,.088) 50%,hsla(0,0%,100%,0))',
              },
            },
            scenes: {
              title: '#000000',
            },
            productScene: {
              product: {
                background: '#ffffff',
                title: '#000000',
                category: '#939ba2',
                price: '#3b7ddd',
                actionButtons: {
                  moreData: '#939ba2',
                },
              },
            },
            costumersScene: {
              background: '#ffffff',
              table: {
                cellStyle1: '#ffffff',
                cellStyle2: '#f8f9fa',
                header: 'transparent',
                text: '#495057',
                role: {
                  admin: '#1cbb8c',
                  superadmin: '#dc3545',
                  user: '#3b7ddd',
                  text: '#ffffff',
                },
              },
            },
            transactionScene: {
              background: '#ffffff',
            },
            overviewScene: {
              background: '#ffffff',
              chart: {
                values: '#000000',
                line1: '#3b7ddd',
                line2: '#1cbb8c',
              },
            },
            dailyScene: {
              background: '#ffffff',
              chart: {
                values: '#000000',
                line1: '#3b7ddd',
                line2: '#1cbb8c',
              },
            },
            breakdownScene: {
              background: '#ffffff',
              chart: {
                tooltip: {
                  background: '#ffffff',
                  text: '#000000',
                },
                values: '#000000',
                color1: '#3b7ddd',
                color2: '#dc3545',
                color3: '#fcb92c',
                color4: '#1cbb8c',
              },
            },
            adminScene: {
              background: '#ffffff',
              table: {
                cellStyle1: '#ffffff',
                cellStyle2: '#f8f9fa',
                header: 'transparent',
                text: '#000000',
                role: {
                  admin: '#1cbb8c',
                  text: '#ffffff',
                },
              },
            },
            performanceScene: {
              background: '#ffffff',
              table: {
                header: 'transparent',
                cellStyle1: '#ffffff',
                cellStyle2: '#f8f9fa',
                text: '#000000',
                cost: {
                  low: '#dc3545',
                  mid: '#3b7ddd',
                  hight: '#1cbb8c',
                  text: '#ffffff',
                },
              },
            },
            dashboardScene: {
              background: '#ffffff',
              statBox: {
                title: '#939ba2',
                icon: '#3b7ddd',
                value: '#000000',
                since: 'rgba(73, 80, 87, 0.75)',
                increase: {
                  hight: {
                    background: '#ddf5ee',
                    color: '#1cb086',
                  },
                  mid: {
                    background: '#e2ecfa',
                    color: '#3b7ddd',
                  },
                  low: {
                    background: '#fae1e3',
                    color: '#da3545',
                  },
                },
              },
            },
          }),
    },
    typography: {
      fontFamily: [fontFamily].join(','),
      fontSize: 12,
      h1: {
        fontFamily: [fontFamily].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: [fontFamily].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: [fontFamily].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: [fontFamily].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: [fontFamily].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: [fontFamily].join(','),
        fontSize: 14,
      },
    },
  }
}
